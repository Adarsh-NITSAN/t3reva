import React from 'react'
import { i18n } from '../../../../i18n-config'
import Routes from '@/utils/Routes'
import getAPIData from '@/utils/GetData'
import { draftMode } from 'next/headers'
import ContentType from '@/utils/contentType'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumb from '@/components/Breadcrumb'
import dynamic from 'next/dynamic'
import DetailsBlog from '@/components/Blog/DetailsBlog'
import RenderComponents from '@/utils/RenderComponents'
const HolyLoader = dynamic(() => import('holy-loader'), { ssr: false })

export async function generateStaticParams() {
  let pageRoutes = []
  const { defaultLocale, locales } = i18n
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

const getAllData = async (params, searchParams) => {
  const { isEnabled } = draftMode()
  const { defaultLocale } = i18n
  const { locale, slug } = params
  let pageData
  var paramSlug

  let string = '?'
  for (let key in searchParams) {
    string += key + '=' + searchParams[key] + '&'
  }
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
  if (string.includes('?search_query')) {
    string = ''
  }
  pageData = await getAPIData(
    `${locale === defaultLocale ? '' : `${locale}/`}${
      paramSlug
        ? searchParams && Object.keys(searchParams).length
          ? paramSlug + string.slice(0, -1)
          : paramSlug
        : ''
    }`
  )
  if (isEnabled) {
    pageData = await getAPIData(
      `${locale === defaultLocale ? '' : `${locale}/`}${
        paramSlug
          ? searchParams && Object.keys(searchParams).length
            ? paramSlug + string.slice(0, -1)
            : paramSlug
          : ''
      }`
    )
  }
  if (!pageData.error && pageData.data === 404) {
    notFound()
  }
  return {
    pageData,
  }
}

export default async function Page({ params, searchParams }) {
  const { pageData } = await getAllData(params, searchParams)
  let holyLoaderColor =
    pageData?.data?.page?.constants?.ns_style.primary_color.value

  return (
    <>
      <HolyLoader showSpinner={false} color={holyLoaderColor} />
      <div className="wrapper hide-title-section no-mobile-animation btn-hover-1">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            {pageData?.data?.page?.doktype === '137' && (
              <DetailsBlog
                image={pageData?.data?.page?.featureImage}
                title={pageData?.data?.page?.title}
                authors={pageData?.data?.page?.authors}
                categories={pageData?.data?.page?.categories}
                tags={pageData?.data?.page?.tags}
                publishDate={pageData?.data?.page?.publishDate}
              />
            )}

            {pageData &&
              pageData.data &&
              pageData.data.content &&
              pageData.data.content.colPos1 &&
              pageData.data.content.colPos1.length && (
                <>
                  {pageData.data.content.colPos1.map((layout, index) => {
                    return (
                      <React.Fragment key={index}>
                        {layout.type === 'ns_base_2Cols' ||
                        layout.type === 'ns_base_3Cols' ||
                        layout.type === 'ns_base_4Cols' ||
                        layout.type === 'ns_base_6Cols' ? (
                          <div
                            className={`${
                              layout.appearance.spaceBefore &&
                              `frame-space-before-${layout.appearance.spaceBefore}`
                            } ${
                              layout.appearance.spaceAfter &&
                              `frame-space-after-${layout.appearance.spaceAfter}`
                            } ${
                              layout.content?.settings?.background_option ===
                              'gray'
                                ? 'section--bg-gray-color'
                                : layout.content?.settings
                                    ?.background_option === 'dark'
                                ? `section--bg-dark-color ${
                                    layout.content?.settings?.overlaytext ===
                                    true
                                      ? 'bg-dark-overlay'
                                      : ''
                                  }`
                                : layout.content?.settings
                                    ?.background_option === 'light'
                                ? 'section--bg-light-color'
                                : `section--bg-image ${
                                    layout.content?.settings?.overlaytext ===
                                    true
                                      ? 'bg-image-overlay'
                                      : ''
                                  }`
                            }`}
                            style={
                              layout.content?.settings?.background_option ===
                                'image' &&
                              layout.content &&
                              layout.content.settings &&
                              layout.content.settings.image &&
                              layout.content.settings.image.length
                                ? {
                                    backgroundImage: `url(${`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${layout.content.settings.image[0]}`})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                  }
                                : {}
                            }
                          >
                            {layout.content?.settings?.containerfluid ===
                              true ||
                            layout.content?.settings?.containerfluid === '1' ? (
                              <Container fluid>
                                <Row>
                                  <RenderComponents
                                    pageData={layout.content.items}
                                    settings={layout.content?.settings}
                                    type={layout.type}
                                  />
                                </Row>
                              </Container>
                            ) : (
                              <Container>
                                <Row>
                                  <RenderComponents
                                    pageData={layout.content.items}
                                    settings={layout.content?.settings}
                                    type={layout.type}
                                  />
                                </Row>
                              </Container>
                            )}
                          </div>
                        ) : layout.type === 'ns_base_container' ? (
                          <div
                            className={`${
                              layout.appearance.spaceBefore &&
                              `frame-space-before-${layout.appearance.spaceBefore}`
                            } ${
                              layout.appearance.spaceAfter &&
                              `frame-space-after-${layout.appearance.spaceAfter}`
                            } ${
                              layout.content?.settings?.background_option ===
                              'gray'
                                ? 'section--bg-gray-color'
                                : layout.content?.settings
                                    ?.background_option === 'dark'
                                ? `section--bg-dark-color ${
                                    layout.content?.settings?.overlaytext ===
                                    true
                                      ? 'bg-dark-overlay'
                                      : ''
                                  }`
                                : layout.content?.settings
                                    ?.background_option === 'light'
                                ? 'section--bg-light-color'
                                : `section--bg-image ${
                                    layout.content?.settings?.overlaytext ===
                                    true
                                      ? 'bg-image-overlay'
                                      : ''
                                  }`
                            }`}
                            style={
                              layout.content?.settings?.background_option ===
                                'image' &&
                              layout.content &&
                              layout.content.settings &&
                              layout.content.settings.image &&
                              layout.content.settings.image.length
                                ? {
                                    backgroundImage: `url(${`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${layout.content.settings.image[0]}`})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: '50%',
                                  }
                                : {}
                            }
                          >
                            {layout.content?.settings?.containerfluid ===
                              true ||
                            layout.content?.settings?.containerfluid === '1' ? (
                              <Container fluid>
                                <Row>
                                  <RenderComponents
                                    pageData={layout.content.items}
                                    settings={layout.content?.settings}
                                    type={layout.type}
                                  />
                                </Row>
                              </Container>
                            ) : (
                              <Container>
                                <Row>
                                  <RenderComponents
                                    pageData={layout.content.items}
                                    settings={layout.content?.settings}
                                    type={layout.type}
                                  />
                                </Row>
                              </Container>
                            )}
                          </div>
                        ) : (
                          <Container>
                            <ContentType pageData={layout} />
                          </Container>
                        )}
                      </React.Fragment>
                    )
                  })}
                  <Breadcrumb />
                </>
              )}
            {pageData &&
              pageData.data &&
              pageData.data.content &&
              pageData.data.content.colPos0 &&
              pageData.data.content.colPos0.length &&
              pageData.data.content.colPos0.map((layout, index) => {
                return (
                  <React.Fragment key={index}>
                    {layout.type === 'ns_base_2Cols' ||
                    layout.type === 'ns_base_3Cols' ||
                    layout.type === 'ns_base_4Cols' ||
                    layout.type === 'ns_base_6Cols' ? (
                      <div
                        className={`${
                          layout.appearance.spaceBefore &&
                          `frame-space-before-${layout.appearance.spaceBefore}`
                        } ${
                          layout.appearance.spaceAfter &&
                          `frame-space-after-${layout.appearance.spaceAfter}`
                        } ${
                          layout.content?.settings?.background_option === 'gray'
                            ? 'section--bg-gray-color'
                            : layout.content?.settings?.background_option ===
                              'dark'
                            ? `section--bg-dark-color ${
                                layout.content?.settings?.overlaytext === true
                                  ? 'bg-dark-overlay'
                                  : ''
                              }`
                            : layout.content?.settings?.background_option ===
                              'light'
                            ? 'section--bg-light-color'
                            : `section--bg-image ${
                                layout.content?.settings?.overlaytext === true
                                  ? 'bg-image-overlay'
                                  : ''
                              }`
                        }`}
                        style={
                          layout.content?.settings?.background_option ===
                            'image' &&
                          layout.content &&
                          layout.content.settings &&
                          layout.content.settings.image &&
                          layout.content.settings.image.length
                            ? {
                                backgroundImage: `url(${`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${layout.content.settings.image[0]}`})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: '50%',
                              }
                            : {}
                        }
                      >
                        {layout.content?.settings?.containerfluid === true ||
                        layout.content?.settings?.containerfluid === '1' ? (
                          <Container
                            fluid
                            className={`${
                              layout.content?.settings?.nogoutter === true
                                ? 'g-0'
                                : 'gy-4'
                            }`}
                          >
                            <Row
                              className={`${
                                layout.content?.settings?.nogoutter === true
                                  ? 'g-0'
                                  : 'gy-4'
                              }`}
                            >
                              <RenderComponents
                                pageData={layout.content.items}
                                settings={layout.content?.settings}
                                type={layout.type}
                              />
                            </Row>
                          </Container>
                        ) : (
                          <Container
                            className={`${
                              layout.content?.settings?.nogoutter === true
                                ? 'g-0'
                                : 'gy-4'
                            }`}
                          >
                            <Row
                              className={`${
                                layout.content?.settings?.nogoutter === true
                                  ? 'g-0'
                                  : 'gy-4'
                              }`}
                            >
                              <RenderComponents
                                pageData={layout.content.items}
                                settings={layout.content?.settings}
                                type={layout.type}
                              />
                            </Row>
                          </Container>
                        )}
                      </div>
                    ) : layout.type === 'ns_base_container' ? (
                      <div
                        className={`${
                          layout.appearance.spaceBefore &&
                          `frame-space-before-${layout.appearance.spaceBefore}`
                        } ${
                          layout.appearance.spaceAfter &&
                          `frame-space-after-${layout.appearance.spaceAfter}`
                        } ${
                          layout.content?.settings?.background_option === 'gray'
                            ? 'section--bg-gray-color'
                            : layout.content?.settings?.background_option ===
                              'dark'
                            ? `section--bg-dark-color ${
                                layout.content?.settings?.overlaytext === true
                                  ? 'bg-dark-overlay'
                                  : ''
                              }`
                            : layout.content?.settings?.background_option ===
                              'light'
                            ? 'section--bg-light-color'
                            : `section--bg-image ${
                                layout.content?.settings?.overlaytext === true
                                  ? 'bg-image-overlay'
                                  : ''
                              }`
                        }`}
                        style={
                          layout.content?.settings?.background_option ===
                            'image' &&
                          layout.content &&
                          layout.content.settings &&
                          layout.content.settings.image &&
                          layout.content.settings.image.length
                            ? {
                                backgroundImage: `url(${`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${layout.content.settings.image[0]}`})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: '50%',
                              }
                            : {}
                        }
                      >
                        {layout.content?.settings?.containerfluid === true ||
                        layout.content?.settings?.containerfluid === '1' ? (
                          <Container
                            fluid
                            className={`${
                              layout.content?.settings?.nogoutter === true
                                ? 'g-0'
                                : 'gy-4'
                            }`}
                          >
                            <RenderComponents
                              pageData={layout.content.items}
                              settings={layout.content?.settings}
                              type={layout.type}
                            />
                          </Container>
                        ) : (
                          <Container
                            className={`${
                              layout.content?.settings?.nogoutter === true
                                ? 'g-0'
                                : 'gy-4'
                            }`}
                          >
                            <RenderComponents
                              pageData={layout.content.items}
                              settings={layout.content?.settings}
                              type={layout.type}
                            />
                          </Container>
                        )}
                      </div>
                    ) : (
                      <Container>
                        <ContentType pageData={layout} />
                      </Container>
                    )}
                  </React.Fragment>
                )
              })}
          </main>
        </div>
      </div>
    </>
  )
}
