'use client'

import React, { useContext, useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import GlobalContext from '@/context/GlobalContext'
import Link from 'next/link'
import languages from '@/utils/languageConstant'
import { i18n } from '../../../i18n-config'
import { useRouter } from 'next/navigation'
// import Logo from '../Logo'
// import { EmailText, MobileText } from '@/utils/util'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Logo = dynamic(() => import('../Logo'), {
  ssr: false,
})

const EmailText = dynamic(
  () => import('@/utils/util').then((re) => re.EmailText),
  {
    ssr: false,
  }
)

const MobileText = dynamic(
  () => import('@/utils/util').then((re) => re.MobileText),
  {
    ssr: false,
  }
)

const Header = ({ pageData }) => {
  const { themeSwitcher, baseThemeData } = useContext(GlobalContext)

  const [openCanvasMenu, setOpenCanvasMenu] = useState(false)
  const [activeSubMenus, setActiveSubMenus] = useState(false)
  const [activeInnerMenus, setActiveInnerMenus] = useState('')
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false)
  let totalLanguages = []
  const [toggleSearchForm, setToggleSearchForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [hState, sethState] = useState('top')
  const [topbar, setTopbar] = useState(false)
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(0)

  let headerMenus =
    pageData &&
    pageData.data &&
    pageData.data.page &&
    pageData.data.page.mainNavigation.length &&
    pageData.data.page.mainNavigation

  let headerLayout =
    pageData &&
    pageData.data &&
    pageData.data.page &&
    pageData.data.page.constants &&
    pageData.data.page.constants.ns_style &&
    pageData.data.page.constants.ns_style.headerLayout &&
    pageData.data.page.constants.ns_style.headerLayout.value

  let socialLinks =
    pageData &&
    pageData.data &&
    pageData.data.page &&
    pageData.data.page.constants &&
    pageData.data.page.constants.ns_seo

  let baseTheme =
    pageData &&
    pageData.data &&
    pageData.data.page &&
    pageData.data.page.constants &&
    pageData.data.page.constants.ns_basetheme

  let availbaleLanguage = pageData && pageData.data && pageData.data.i18n
  useEffect(() => {
    var lastVal = 0
    let hotsportmedia = window.matchMedia('(max-width: 992px)')
    window.onscroll = function () {
      let y = window.scrollY
      if (hotsportmedia.matches) {
        sethState('top')
      } else {
        if (y > lastVal) {
          sethState('down')
        }

        if (y === 0) {
          sethState('top')
        }
      }

      lastVal = y
    }
  })

  if (typeof window !== 'undefined') {
    if (width && width > 991) {
      const megamenu = document.getElementsByClassName('has-sub dropdown-mega')
      for (let i = 0; i < megamenu.length; i++) {
        megamenu[i].addEventListener('mouseover', function () {
          if (
            (themeSwitcher.headerLayout === 'Transparent' ||
              themeSwitcher.headerLayout === '1' ||
              themeSwitcher.headerLayout === '4' ||
              themeSwitcher.headerLayout === 'Full_width_transparent') &&
            !isMobile
          ) {
            document
              .getElementsByClassName('header-main')[0]
              .classList.remove('header-main-transparent')
            document
              .getElementsByClassName('header-main')[0]
              .classList.add('header-transparent-dark-text')
          }
        })
        megamenu[i].addEventListener('mouseout', function () {
          if (
            (themeSwitcher.headerLayout === 'Transparent' ||
              themeSwitcher.headerLayout === '1' ||
              themeSwitcher.headerLayout === '4' ||
              themeSwitcher.headerLayout === 'Full_width_transparent') &&
            !isMobile &&
            window.scrollY === 0
          ) {
            document
              .getElementsByClassName('header-main')[0]
              .classList.add('header-main-transparent')
            document
              .getElementsByClassName('header-main')[0]
              .classList.remove('header-transparent-dark-text')
          }
        })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setActiveSubMenus(''),
        window.innerWidth <= 991
          ? (setIsMobile(true), setOpenCanvasMenu(false))
          : setIsMobile(false),
        setWidth(window.innerWidth)
    })
  }, [width])
  useEffect(() => {
    setActiveSubMenus(''),
      window.innerWidth <= 991
        ? (setIsMobile(true), setOpenCanvasMenu(false))
        : setIsMobile(false),
      setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (
      themeSwitcher.headerLayout === 'Without_topbar' ||
      themeSwitcher.headerLayout === '2' ||
      themeSwitcher.headerLayout === 'Full_width_without_topbar' ||
      themeSwitcher.headerLayout === '5'
    ) {
      setTopbar(false)
    } else {
      setTopbar(true)
    }
  }, [themeSwitcher.headerLayout])

  const checkLang = (language, availbaleLanguages) => {
    if (language.flag === availbaleLanguages.flag) {
      totalLanguages.push({
        path: language.path,
        lang: language.lang,
        active: availbaleLanguages.active,
      })
    }
  }

  if (availbaleLanguage) {
    availbaleLanguage.map((availbaleLanguages) => {
      languages.filter((language) => checkLang(language, availbaleLanguages))
    })
  }
  const updateDropdownMenu = (e) => {
    setOpenDropDownMenu(!openDropDownMenu)
    e.preventDefault()
  }

  const handleChange = (lang) => {
    localStorage.setItem('language', lang)
    router.refresh()
    router.push('/', { locale: lang !== `${i18n.defaultLocale}` ? lang : '/' })
  }
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchTerm && !searchTerm.trim()) return
    setToggleSearchForm(false)
    router.push(`/search?search_query=${searchTerm}`)
  }

  const renderSearchForm = () => {
    return (
      <li className={`header-search ${toggleSearchForm ? 'search--open' : ''}`}>
        <Link
          href={'#'}
          className="dropdown-toggle search-trigger"
          onClick={(e) => {
            e.preventDefault(), setToggleSearchForm(!toggleSearchForm)
          }}
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
          aria-label={`Search`}
        >
          {toggleSearchForm ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          )}
        </Link>
        <div className="search-form">
          <form className="search-box" onSubmit={handleSubmit}>
            <div className="input-group align-items-center">
              <input
                className="text search-input"
                type="text"
                placeholder="Search ..."
                onChange={handleSearchTerm}
                value={searchTerm}
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  className="tx-indexedsearch-searchbox-button"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </button>
              </span>
            </div>
          </form>
        </div>
      </li>
    )
  }

  const renderLanguageSwitcher = () => {
    return (
      <li className="languange-bar">
        <div className="dropdown">
          <Link
            className="dropdown-toggle"
            href={'#'}
            as={Button}
            id="dropdownLanguage"
            data-bs-toggle="dropdown"
            onClick={(e) => {
              updateDropdownMenu(e)
            }}
            aria-label={`Language`}
          >
            {totalLanguages.map(({ active, path }, index) => {
              if (active) {
                return (
                  <Image
                    key={index}
                    src={path}
                    height={19}
                    width={19}
                    alt={'lang'}
                    // loading="eager"
                  />
                )
              }
            })}
          </Link>
          <div
            className={`dropdown-menu language-ddr ${
              openDropDownMenu ? 'show' : ''
            }`}
            aria-labelledby="dropdownLanguage"
          >
            {totalLanguages.map(({ path, lang, active }, index) => {
              return (
                <Link
                  href={`/${lang === i18n.defaultLanguage ? '' : lang}`}
                  key={index}
                  aria-label={`Language`}
                >
                  <div
                    className={`lang-flag-wrapper ${
                      active ? 'active-languge' : ''
                    }`}
                  >
                    <Image
                      src={path}
                      alt="image"
                      height={19}
                      width={19}
                      // loading="eager"
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </li>
    )
  }

  const renderNavigator = () => {
    return (
      <>
        <div
          className={`topbar tb-default-design visible-on-mobile ${hState}
          ${
            themeSwitcher.headerLayout
              ? themeSwitcher.headerLayout === 'Without_topbar' ||
                themeSwitcher.headerLayout === '2' ||
                themeSwitcher.headerLayout === 'Full_width_without_topbar' ||
                themeSwitcher.headerLayout === '5'
                ? 'topbar--hide'
                : ''
              : headerLayout === 'Without_topbar' ||
                headerLayout === '2' ||
                headerLayout === 'Full_width_without_topbar' ||
                headerLayout === '5'
              ? 'topbar--hide'
              : ''
          }
          `}
        >
          <div className="topbar-container">
            <div className="topbar-left-content">
              <div className="topbar-socials">
                <ul className="redux-social-media-list clearfix">
                  {socialLinks.seo_twitter_link && (
                    <li>
                      <Link
                        href={socialLinks.seo_twitter_link.value}
                        title={socialLinks.seo_twitter_link.label}
                        target="_blank"
                        aria-label={`Twitter`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                      </Link>
                    </li>
                  )}
                  {socialLinks.seo_facebook_link && (
                    <li>
                      <Link
                        href={socialLinks.seo_facebook_link.value}
                        title={socialLinks.seo_facebook_link.label}
                        target="_blank"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 320 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                      </Link>
                    </li>
                  )}
                  {socialLinks.seo_linkedin_link && (
                    <li>
                      <Link
                        href={socialLinks.seo_linkedin_link.value}
                        title={socialLinks.seo_linkedin_link.label}
                        target="_blank"
                        aria-label={`LinkedIn`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      </Link>
                    </li>
                  )}
                  {socialLinks.seo_instagram_link && (
                    <li>
                      <Link
                        href={socialLinks.seo_instagram_link.value}
                        title={socialLinks.seo_instagram_link.label}
                        target="_blank"
                        aria-label={`Instagram`}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="topbar-right-content">
              <div className="topbar-contact">
                <span className="topbar-phone">
                  {baseTheme.mobile_number.value && (
                    <MobileText phoneValue={baseTheme.mobile_number.value} />
                  )}
                </span>
                <span className="topbar-email">
                  {baseTheme.email.value && (
                    <EmailText emailValue={baseTheme.email.value} />
                  )}
                </span>
                {baseTheme.office_opningday &&
                  baseTheme.office_opningday.value && (
                    <span className="topbar-opening-hours">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Clock_2">
                          <g>
                            <path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"></path>
                            <path d="M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"></path>
                          </g>
                        </g>
                      </svg>
                      <span>
                        {baseTheme.office_opningday.value}
                        {baseTheme.office_weekend &&
                        baseTheme.office_weekend.value
                          ? `- ${baseTheme.office_weekend.value} `
                          : ''}
                        :
                        {baseTheme.office_start_hours &&
                        baseTheme.office_start_hours.value
                          ? `: ${baseTheme.office_start_hours.value}`
                          : ''}
                        {baseTheme.office_close_hours &&
                        baseTheme.office_close_hours.value
                          ? `- ${baseTheme.office_close_hours.value}`
                          : ''}
                      </span>
                    </span>
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="header-main-content">
          <Logo data={baseTheme} />
          <div className="header-main-content__nav-bar">
            {themeSwitcher?.showSearch === '1' && (
              <div
                className={`header-search d-lg-none ${
                  toggleSearchForm ? 'search--open' : ''
                }`}
              >
                <Link
                  href={'#'}
                  className="dropdown-toggle search-trigger"
                  onClick={(e) => {
                    e.preventDefault(),
                      setToggleSearchForm(!toggleSearchForm),
                      setOpenCanvasMenu(false)
                  }}
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  aria-label="close-search"
                >
                  {toggleSearchForm ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  )}
                </Link>
                <div className={`search-form ${topbar ? 'search-topbar' : ''}`}>
                  <form className="search-box" onSubmit={handleSubmit}>
                    <div className="input-group align-items-center">
                      <input
                        className="text search-input"
                        type="text"
                        placeholder="Search ..."
                        onChange={handleSearchTerm}
                        value={searchTerm}
                        aria-label="Search"
                      />
                      <span className="input-group-btn">
                        <button
                          type="submit"
                          className="tx-indexedsearch-searchbox-button"
                          aria-label="close-search"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </svg>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div
              className="menu-trigger"
              onClick={() => setOpenCanvasMenu(!openCanvasMenu)}
            >
              <div className="bars"></div>
              <div className="bars"></div>
              <div className="bars"></div>
            </div>
          </div>

          <div className="navigation">
            <nav>
              <ul>
                {headerMenus &&
                  headerMenus.length > 0 &&
                  headerMenus.map(
                    (
                      { title, link, children, data, hasSubpages, active },
                      index
                    ) => {
                      return (
                        <React.Fragment key={title + index}>
                          {children && children.length ? (
                            <li
                              className={`has-sub ${
                                activeSubMenus === title
                                  ? 'active slide--up'
                                  : ''
                              } ${data.megaMenu ? 'dropdown-mega' : ''} ${
                                active ? 'active' : ''
                              }`}
                            >
                              <Link href={link} aria-label={title}>
                                {title}
                              </Link>
                              <ul
                                className={`  ${
                                  data.megaMenu ? 'dropdown-menu' : ''
                                }`}
                              >
                                {data.megaMenu ? (
                                  <li className={`${active ? 'active' : ''}`}>
                                    <div className="dropdown-mega-content">
                                      <Container className="dropdown-mega-content-grid">
                                        {children && children.length
                                          ? children.map(
                                              (
                                                { children, title },
                                                dropMenuIndex
                                              ) => {
                                                return (
                                                  <div
                                                    key={title + dropMenuIndex}
                                                  >
                                                    {data?.megaMenuTitle ? (
                                                      <span className="dropdown-mega-sub-title">
                                                        {title}
                                                      </span>
                                                    ) : (
                                                      ''
                                                    )}

                                                    <ul className="dropdown-mega-sub-nav">
                                                      {children &&
                                                        children.length &&
                                                        children.map(
                                                          (
                                                            {
                                                              title,
                                                              link,
                                                              active,
                                                            },
                                                            index
                                                          ) => {
                                                            return (
                                                              <li
                                                                key={
                                                                  title + index
                                                                }
                                                                className={`${
                                                                  active
                                                                    ? 'active-child'
                                                                    : ''
                                                                }`}
                                                              >
                                                                <Link
                                                                  href={link}
                                                                  className="dropdown-item"
                                                                  aria-label={
                                                                    title
                                                                  }
                                                                >
                                                                  {title}
                                                                </Link>
                                                              </li>
                                                            )
                                                          }
                                                        )}
                                                    </ul>
                                                  </div>
                                                )
                                              }
                                            )
                                          : ''}
                                      </Container>
                                    </div>
                                  </li>
                                ) : (
                                  children.map(
                                    (
                                      {
                                        title,
                                        children,
                                        link,
                                        hasSubpages,
                                        active,
                                      },
                                      subIndex
                                    ) => {
                                      return (
                                        <React.Fragment key={title + subIndex}>
                                          {children && children.length ? (
                                            <li
                                              className={`${
                                                hasSubpages
                                                  ? `has-sub ${
                                                      activeInnerMenus === title
                                                        ? 'active slide--up'
                                                        : ''
                                                    }`
                                                  : ''
                                              }`}
                                            >
                                              <Link
                                                href={link}
                                                aria-label={title}
                                              >
                                                {title}
                                              </Link>
                                              <ul className=" ">
                                                {children.map(
                                                  (
                                                    { title, link, data },
                                                    innerIndex
                                                  ) => {
                                                    return (
                                                      <li
                                                        key={title + innerIndex}
                                                      >
                                                        <div>
                                                          <Link
                                                            href={link}
                                                            aria-label={title}
                                                          >
                                                            {title}
                                                          </Link>
                                                        </div>
                                                      </li>
                                                    )
                                                  }
                                                )}
                                              </ul>
                                              <div
                                                className="nav-arrow"
                                                onClick={() => {
                                                  activeInnerMenus !== title
                                                    ? setActiveInnerMenus(title)
                                                    : setActiveInnerMenus('')
                                                }}
                                              >
                                                <svg
                                                  stroke="currentColor"
                                                  fill="currentColor"
                                                  strokeWidth="0"
                                                  viewBox="0 0 24 24"
                                                  height="1em"
                                                  width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    fill="none"
                                                    d="M0 0h24v24H0V0z"
                                                  ></path>
                                                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                                </svg>
                                              </div>
                                            </li>
                                          ) : (
                                            <li
                                              className={`${
                                                active ? 'active-child' : ''
                                              }`}
                                            >
                                              <div>
                                                <Link
                                                  href={link}
                                                  aria-label={title}
                                                >
                                                  {title}
                                                </Link>
                                              </div>
                                            </li>
                                          )}
                                        </React.Fragment>
                                      )
                                    }
                                  )
                                )}
                              </ul>
                              <span
                                className="nav-arrow"
                                onClick={() => {
                                  activeSubMenus !== title
                                    ? setActiveSubMenus(title)
                                    : setActiveSubMenus('')
                                }}
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                </svg>
                              </span>
                            </li>
                          ) : (
                            <li
                              className={`has-sub ${
                                activeSubMenus === title
                                  ? 'active slide--up'
                                  : ''
                              } ${data.megaMenu ? 'dropdown-mega' : ''} ${
                                active ? 'active' : ''
                              }`}
                            >
                              <Link href={link} aria-label={title}>
                                {title}
                              </Link>
                            </li>
                          )}
                        </React.Fragment>
                      )
                      // }
                    }
                  )}

                {themeSwitcher.showSearch
                  ? themeSwitcher.showSearch === '1' && renderSearchForm()
                  : pageData.data.page.constants.ns_style.enable_search
                      .value === '1' && renderSearchForm()}

                {themeSwitcher.showLanguage
                  ? themeSwitcher.showLanguage === '1' &&
                    renderLanguageSwitcher()
                  : pageData.data.page.constants.ns_style.enable_language
                      .value === '1' && renderLanguageSwitcher()}
              </ul>
            </nav>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <header
        className={`header-main ${openCanvasMenu ? 'menu--open' : ''}
         ${
           pageData.data.page.constants.ns_style.headerTextColor?.value ===
             'header_text_dark' ||
           pageData.data.page.constants.ns_style.headerTextColor?.value ===
             'Dark'
             ? `dark-text`
             : `light-text`
         }
        ${
          ((themeSwitcher.headerLayout
            ? themeSwitcher.headerLayout === 'Transparent' ||
              themeSwitcher.headerLayout === '1'
            : headerLayout === 'Transparent' || headerLayout === '1') &&
            hState === 'top' &&
            !isMobile) ||
          ((themeSwitcher.headerLayout
            ? themeSwitcher.headerLayout === 'Full_width_transparent' ||
              themeSwitcher.headerLayout === '4'
            : headerLayout === 'Full_width_transparent' ||
              headerLayout === '4') &&
            hState === 'top' &&
            !isMobile)
            ? `header-main-transparent`
            : 'header-transparent-dark-text'
        }`}
      >
        {(themeSwitcher.headerLayout &&
          (themeSwitcher.headerLayout === 'Full_width' ||
            themeSwitcher.headerLayout === '3')) ||
        themeSwitcher.headerLayout === 'Full_width_transparent' ||
        (themeSwitcher.headerLayout === '4' && !isMobile) ||
        themeSwitcher.headerLayout === 'Full_width_without_topbar' ||
        themeSwitcher.headerLayout === '5' ? (
          <Container fluid>{renderNavigator()}</Container>
        ) : (
          <div className="container-fluid g-0 container-xl">
            {renderNavigator()}
          </div>
        )}
      </header>
    </>
  )
}
export default Header
