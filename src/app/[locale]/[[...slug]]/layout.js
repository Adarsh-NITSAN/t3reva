import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { GlobalProvider } from '@/context/GlobalContext'
import { i18n } from '../../../../i18n-config'
import Layout from '@/components/Layout'
import getAPIData from '@/utils/GetData'
import Routes from '@/utils/Routes'
import { NextIntlClientProvider } from 'next-intl'
import '../../../../node_modules/swiper/swiper.css'
import '../../../../node_modules/swiper/modules/pagination.css'
import '../../../../node_modules/swiper/modules/navigation.css'
import 'aos/dist/aos.css'
import '@/scss/main.scss'

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic'

const sofia_pro_font = localFont({
  src: [
    {
      path: '../../../assets/fonts/sofia-pro/SofiaProRegular.woff2',
      weight: '400',
      style: 'normal',
      display: 'swap',
      preload: false,
    },
    {
      path: '../../../assets/fonts/sofia-pro/SofiaProMedium.woff2',
      weight: '500',
      style: 'normal',
      display: 'swap',
      preload: false,
    },
  ],
  fallback: ['sans-serif'],
  variable: '--font-sofia',
  display: 'swap',
  preload: false,
})

const brandon_fonts = localFont({
  src: [
    {
      path: '../../../assets/fonts/brandon/AnyConv.com__Brandon_reg.woff2',
      weight: '400',
      style: 'normal',
      display: 'swap',
    },

    {
      path: '../../../assets/fonts/brandon/AnyConv.com__Brandon_bld.woff2',
      weight: '700',
      style: 'normal',
      display: 'swap',
    },
  ],
  fallback: ['sans-serif'],
  variable: '--font-brandon',
  display: 'swap',
  preload: false,
})

const playfair_display_fonts = localFont({
  src: [
    {
      path: '../../../assets/fonts/playfair-display/PlayfairDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
      display: 'swap',
    },

    {
      path: '../../../assets/fonts/playfair-display/PlayfairDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
      display: 'swap',
    },
  ],
  fallback: ['sans-serif'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
})

const { locales, defaultLocale } = i18n

export async function generateMetadata({ params }) {
  const { pageData } = await getAllData(params)
  let pageTitle,
    generalTitlePrefix,
    generalTitleSufix,
    generalMetaDescription,
    generalMetaKeywords,
    favicon

  if (pageData && pageData.data) {
    pageTitle = pageData?.data?.meta?.title
    generalTitlePrefix =
      pageData?.data?.page?.constants?.ns_seo?.seo_title_prefix?.value
    generalTitleSufix =
      pageData?.data?.page?.constants?.ns_seo?.seo_title_sufix?.value
    generalMetaDescription =
      pageData?.data?.page?.constants?.ns_seo?.seo_meta_description?.value
    generalMetaKeywords =
      pageData?.data?.page?.constants?.ns_seo?.seo_meta_keywords?.value
    favicon = pageData?.data?.page?.constants?.ns_basetheme?.favicon?.value
  }

  return {
    title: `${generalTitlePrefix && generalTitlePrefix} ${
      generalTitlePrefix
        ? pageTitle && ' - ' + pageTitle
        : generalTitleSufix
        ? pageTitle && pageTitle + ' - '
        : pageTitle
    } ${generalTitleSufix && generalTitleSufix}`,
    description: `${generalMetaDescription && generalMetaDescription}`,
    keywords: `${generalMetaKeywords && generalMetaKeywords}`,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_API_URL + favicon}`,
    },
  }
}

export async function generateStaticParams() {
  let pageRoutes = []

  await Promise.all(
    locales.map(async (locale) => {
      const localPaths = await Routes({
        locale,
        defaultLocale,
      })
      pageRoutes = [...pageRoutes, ...localPaths]
    })
  )
  locales.map((locale) => {
    pageRoutes = [
      ...pageRoutes,
      {
        params: { slug: [''] },
        locale,
      },
      {
        params: { slug: ['search'] },
        locale,
      },
    ]
  })

  const filteredPaths = pageRoutes.filter((path) => {
    if (path.params.slug[0] == '404') {
      return false
    } else if (path.params.slug[0] == 'sitemap') {
      return false
    } else {
      return true
    }
  })
  return filteredPaths
}

const getAllData = async (params) => {
  let pageData
  const { defaultLocale } = i18n
  const { locale, slug } = params

  var paramSlug
  if (slug && slug.length > 2) {
    paramSlug = slug.toString().replaceAll(',', '/')
  } else if (slug && slug.length > 1) {
    paramSlug = slug.toString().replaceAll(',', '/')
  } else if (slug) {
    if (slug[0] === 'page') {
      paramSlug = ''
    } else {
      paramSlug = slug[0]
    }
  }

  const apiPath = `${locale === defaultLocale ? '' : `${locale}/`}${
    paramSlug ? paramSlug : ''
  }`

  pageData = await getAPIData(apiPath || '/')

  return {
    pageData,
  }
}

export default async function LocaleLayout({ children, params }) {
  const { pageData } = await getAllData(params)
  let locale = params.locale
  let messages
  try {
    messages = (await import(`../../../assets/localization/${locale}.json`))
      .default
  } catch (error) {
    notFound()
  }
  if (!locales.includes(locale)) notFound()

  return (
    <html
      lang={locale}
      className={`${sofia_pro_font.variable} ${brandon_fonts.variable} ${playfair_display_fonts.variable}`}
    >
      <body>
        <GlobalProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Layout pageData={pageData}>{children}</Layout>
          </NextIntlClientProvider>
        </GlobalProvider>
      </body>
    </html>
  )
}
