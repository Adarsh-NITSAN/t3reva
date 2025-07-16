'use client'
import GlobalContext from '@/context/GlobalContext'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'

const ContentType = dynamic(() => import('@/utils/contentType'), {
  ssr: false,
})

const RenderComponents = dynamic(() => import('@/utils/RenderComponents'), {
  ssr: false,
})

const Footer = ({ pageData }) => {
  const { footerData, baseThemeData, socialLinks, footerMenus, themeSwitcher } =
    useContext(GlobalContext)

  const [activeSubMenus, setActiveSubMenus] = useState(false)

  let footerLayout =
    pageData &&
    pageData.data &&
    pageData.data.page &&
    pageData.data.page.constants &&
    pageData.data.page.constants.ns_style &&
    pageData.data.page.constants.ns_style.footerLayout &&
    pageData.data.page.constants.ns_style.footerLayout.value

  let footerBgLayout =
    pageData &&
    pageData.data &&
    pageData.data.page &&
    pageData.data.page.constants &&
    pageData.data.page.constants.ns_style &&
    pageData.data.page.constants.ns_style.footerBgLayout &&
    pageData.data.page.constants.ns_style.footerBgLayout.value

  let page_stripe =
    pageData &&
    pageData.data &&
    pageData.data.page &&
    pageData.data.page.constants &&
    pageData.data.page.constants.ns_style &&
    pageData.data.page.constants.ns_style.page_stripe_option &&
    pageData.data.page.constants.ns_style.page_stripe_option.value

  let showStripe =
    themeSwitcher && themeSwitcher.pageStripeOption
      ? themeSwitcher.pageStripeOption
      : page_stripe

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        let medium_footer_height = 0
        let medfooter = document.getElementsByClassName('upper-footer')
        if (medfooter && medfooter.length > 0) {
          medium_footer_height = medfooter[0].offsetHeight
        }

        let small_footer_height = 0
        let lowfooter = document.getElementsByClassName('lower-footer')
        if (lowfooter && lowfooter.length > 0) {
          small_footer_height = lowfooter[0].offsetHeight
        }
        let total_height = medium_footer_height + small_footer_height

        const wrapper = document.getElementsByClassName('wrapper')[0];
        if (wrapper) {
          wrapper.style.marginBottom = `${total_height}px`;
        }
      } else {
        const wrapper = document.getElementsByClassName('wrapper')[0];
        if (wrapper) {
          wrapper.style.marginBottom = `0px`;
        }
      }
    })

    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth > 992) {
          let medium_footer_height = 0
          let medfooter = document.getElementsByClassName('upper-footer')
          if (medfooter && medfooter.length > 0) {
            medium_footer_height = medfooter[0].offsetHeight
          }

          let small_footer_height = 0
          let lowfooter = document.getElementsByClassName('lower-footer')
          if (lowfooter && lowfooter.length > 0) {
            small_footer_height = lowfooter[0].offsetHeight
          }
          let total_height = medium_footer_height + small_footer_height

          const wrapper = document.getElementsByClassName('wrapper')[0];
          if (wrapper) {
            wrapper.style.marginBottom = `${total_height}px`;
          }
        } else {
          const wrapper = document.getElementsByClassName('wrapper')[0];
          if (wrapper) {
            wrapper.style.marginBottom = `0px`;
          }
        }
      })
    }
  }, [
    footerData,
    baseThemeData,
    socialLinks,
    footerMenus,
    themeSwitcher,
    footerBgLayout,
    footerLayout,
  ])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerWidth > 992) {
        let medium_footer_height = 0
        let medfooter = document.getElementsByClassName('upper-footer')
        if (medfooter && medfooter.length > 0) {
          medium_footer_height = medfooter[0].offsetHeight
        }

        let small_footer_height = 0
        let lowfooter = document.getElementsByClassName('lower-footer')
        if (lowfooter && lowfooter.length > 0) {
          small_footer_height = lowfooter[0].offsetHeight
        }
        let total_height = medium_footer_height + small_footer_height

        const wrapper = document.getElementsByClassName('wrapper')[0];
        if (wrapper) {
          wrapper.style.marginBottom = `${total_height}px`;
        }
      } else {
        const wrapper = document.getElementsByClassName('wrapper')[0];
        if (wrapper) {
          wrapper.style.marginBottom = `0px`;
        }
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {
        if (window.innerWidth > 992) {
          let medium_footer_height = 0
          let medfooter = document.getElementsByClassName('upper-footer')
          if (medfooter && medfooter.length > 0) {
            medium_footer_height = medfooter[0].offsetHeight
          }

          let small_footer_height = 0
          let lowfooter = document.getElementsByClassName('lower-footer')
          if (lowfooter && lowfooter.length > 0) {
            small_footer_height = lowfooter[0].offsetHeight
          }
          let total_height = medium_footer_height + small_footer_height

          const wrapper = document.getElementsByClassName('wrapper')[0];
          if (wrapper) {
            wrapper.style.marginBottom = `${total_height}px`;
          }
        } else {
          const wrapper = document.getElementsByClassName('wrapper')[0];
          if (wrapper) {
            wrapper.style.marginBottom = `0px`;
          }
        }
      })
    }
  }, [footerData, socialLinks, footerMenus, themeSwitcher, footerLayout])

  useEffect(() => {
    if (window.innerWidth > 992) {
      let medium_footer_height = 0
      let medfooter = document.getElementsByClassName('upper-footer')
      if (medfooter && medfooter.length > 0) {
        medium_footer_height = medfooter[0].offsetHeight
      }

      let small_footer_height = 0
      let lowfooter = document.getElementsByClassName('lower-footer')
      if (lowfooter && lowfooter.length > 0) {
        small_footer_height = lowfooter[0].offsetHeight
      }

      let total_height = medium_footer_height + small_footer_height

      const wrapper = document.getElementsByClassName('wrapper')[0];
      if (wrapper) {
        wrapper.style.marginBottom = `${total_height}px`;
      }
    } else {
      const wrapper = document.getElementsByClassName('wrapper')[0];
      if (wrapper) {
        wrapper.style.marginBottom = `0px`;
      }
    }
  }, [footerData, socialLinks, footerMenus, themeSwitcher, footerLayout])

  const renderCopyRight = () => {
    return (
      <>
        {baseThemeData.copyright && baseThemeData.copyright.value && (
          <div className="lower-footer copyright-justify">
            <div className="lower-footer-container">
              <p>{baseThemeData.copyright.value}</p>
            </div>
          </div>
        )}
      </>
    )
  }

  const renderMediumFooter = () => {
    return (
      <footer
        className={`footer fixed underline-effect ${
          footerBgLayout === 'transparent'
            ? showStripe === '1'
              ? 'section--bg-transparent-color vertical-lines'
              : 'section--bg-transparent-color'
            : footerBgLayout === 'light_color'
            ? 'bg-light-color'
            : footerBgLayout === 'dark_color'
            ? 'bg-dark-color'
            : footerBgLayout === 'gray_color'
            ? 'bg-gray-color'
            : footerBgLayout === 'primary_color'
            ? 'bg-primary-color'
            : 'section--bg-transparent-color'
        }`}
      >
        <Container>
          <div className="upper-footer">
            <div className="upper-footer-container">
              <div className="footer-bar">
                {footerMenus && footerMenus.length > 0 && (
                  <div className="footer-nav">
                    <ul>
                      {footerMenus.map(
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
                                  <Link href={link}>{title}</Link>
                                  <ul
                                    className={`${
                                      data.megaMenu ? 'dropdown-menu' : ''
                                    }`}
                                  >
                                    {data.megaMenu ? (
                                      <li>
                                        <div className="dropdown-mega-content">
                                          <Container>
                                            <Row>
                                              {children && children.length
                                                ? children.map(
                                                    (
                                                      { children, title },
                                                      dropMenuIndex
                                                    ) => {
                                                      return (
                                                        <Col
                                                          key={
                                                            title +
                                                            dropMenuIndex
                                                          }
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
                                                                  },
                                                                  index
                                                                ) => {
                                                                  return (
                                                                    <li
                                                                      key={
                                                                        title +
                                                                        index
                                                                      }
                                                                    >
                                                                      <Link
                                                                        href={
                                                                          link
                                                                        }
                                                                        className="dropdown-item"
                                                                      >
                                                                        {title}
                                                                      </Link>
                                                                    </li>
                                                                  )
                                                                }
                                                              )}
                                                          </ul>
                                                        </Col>
                                                      )
                                                    }
                                                  )
                                                : ''}
                                            </Row>
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
                                          },
                                          subIndex
                                        ) => {
                                          return (
                                            <React.Fragment
                                              key={title + subIndex}
                                            >
                                              {children && children.length ? (
                                                <li
                                                  className={`${
                                                    hasSubpages
                                                      ? `has-sub ${
                                                          activeInnerMenus ===
                                                          title
                                                            ? 'active slide--up'
                                                            : ''
                                                        }`
                                                      : ''
                                                  }`}
                                                >
                                                  <Link href={link}>
                                                    {title}
                                                  </Link>
                                                  <ul>
                                                    {children.map(
                                                      (
                                                        { title, link, data },
                                                        innerIndex
                                                      ) => {
                                                        return (
                                                          <li
                                                            key={
                                                              title + innerIndex
                                                            }
                                                          >
                                                            <Link href={link}>
                                                              {title}
                                                            </Link>
                                                          </li>
                                                        )
                                                      }
                                                    )}
                                                  </ul>
                                                  <div
                                                    className="nav-arrow"
                                                    onClick={() => {
                                                      activeInnerMenus !== title
                                                        ? setActiveInnerMenus(
                                                            title
                                                          )
                                                        : setActiveInnerMenus(
                                                            ''
                                                          )
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
                                                <li>
                                                  <Link href={link}>
                                                    {title}
                                                  </Link>
                                                </li>
                                              )}
                                            </React.Fragment>
                                          )
                                        }
                                      )
                                    )}
                                  </ul>
                                  <div
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
                                  className={`has-sub ${
                                    activeSubMenus === title
                                      ? 'active slide--up'
                                      : ''
                                  } ${data.megaMenu ? 'dropdown-mega' : ''} ${
                                    active ? 'active' : ''
                                  }`}
                                >
                                  <Link href={link}>{title}</Link>
                                </li>
                              )}
                            </React.Fragment>
                          )
                        }
                      )}
                    </ul>
                  </div>
                )}
                <div className="footer-socials-bar">
                  <ul className="redux-social-media-list clearfix">
                    {socialLinks.seo_twitter_link && (
                      <li>
                        <Link
                          href={socialLinks.seo_twitter_link.value}
                          title={socialLinks.seo_twitter_link.label}
                          target="_blank"
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
              <div className="footer-widget-area">
                {footerData &&
                  footerData.map((singleCol, index) => {
                    return (
                      <React.Fragment key={index}>
                        {singleCol.type === 'ns_base_2Cols' ||
                        singleCol.type === 'ns_base_3Cols' ||
                        singleCol.type === 'ns_base_4Cols' ||
                        singleCol.type === 'ns_base_6Cols' ? (
                          <Row>
                            <RenderComponents
                              pageData={singleCol.content.items}
                              settings={singleCol.content?.settings}
                              type={singleCol.type}
                            />
                          </Row>
                        ) : singleCol.type === 'ns_base_container' ? (
                          <RenderComponents
                            pageData={singleCol.content.items}
                            settings={singleCol.content?.settings}
                            type={singleCol.type}
                          />
                        ) : (
                          <ContentType pageData={singleCol} />
                        )}
                      </React.Fragment>
                    )
                  })}
              </div>
            </div>
          </div>
        </Container>
      </footer>
    )
  }
  const renderSmallFooter = () => {
    return (
      <>
        {baseThemeData.copyright && baseThemeData.copyright.value && (
          <footer
            className={`footer fixed underline-effect ${
              footerBgLayout === 'transparent'
                ? showStripe === '1'
                  ? 'section--bg-transparent-color vertical-lines'
                  : 'section--bg-transparent-color'
                : footerBgLayout === 'light_color'
                ? 'bg-light-color'
                : footerBgLayout === 'dark_color'
                ? 'bg-dark-color'
                : footerBgLayout === 'gray_color'
                ? 'bg-gray-color'
                : footerBgLayout === 'primary_color'
                ? 'bg-primary-color'
                : 'section--bg-transparent-color'
            }`}
          >
            <Container>
              <div className="lower-footer copyright-justify">
                <div className="lower-footer-container">
                  <p>{baseThemeData.copyright.value}</p>
                </div>
              </div>
            </Container>
          </footer>
        )}
      </>
    )
  }

  const renderLargeFooter = () => {
    return (
      <footer
        className={`footer fixed underline-effect ${
          footerBgLayout === 'transparent'
            ? showStripe === '1'
              ? 'section--bg-transparent-color vertical-lines'
              : 'section--bg-transparent-color'
            : footerBgLayout === 'light_color'
            ? 'bg-light-color'
            : footerBgLayout === 'dark_color'
            ? 'bg-dark-color'
            : footerBgLayout === 'gray_color'
            ? 'bg-gray-color'
            : footerBgLayout === 'primary_color'
            ? 'bg-primary-color'
            : 'section--bg-transparent-color'
        }`}
      >
        <Container>
          <div className="upper-footer">
            <div className="upper-footer-container">
              <div className="footer-bar">
                {footerMenus && footerMenus.length > 0 && (
                  <div className="footer-nav">
                    <ul>
                      {footerMenus.map(
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
                                  <Link href={link}>{title}</Link>
                                  <ul
                                    className={`${
                                      data.megaMenu ? 'dropdown-menu' : ''
                                    }`}
                                  >
                                    {data.megaMenu ? (
                                      <li>
                                        <div className="dropdown-mega-content">
                                          <Container>
                                            <Row>
                                              {children && children.length
                                                ? children.map(
                                                    (
                                                      { children, title },
                                                      dropMenuIndex
                                                    ) => {
                                                      return (
                                                        <Col
                                                          key={
                                                            title +
                                                            dropMenuIndex
                                                          }
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
                                                                  },
                                                                  index
                                                                ) => {
                                                                  return (
                                                                    <li
                                                                      key={
                                                                        title +
                                                                        index
                                                                      }
                                                                    >
                                                                      <Link
                                                                        href={
                                                                          link
                                                                        }
                                                                        className="dropdown-item"
                                                                      >
                                                                        {title}
                                                                      </Link>
                                                                    </li>
                                                                  )
                                                                }
                                                              )}
                                                          </ul>
                                                        </Col>
                                                      )
                                                    }
                                                  )
                                                : ''}
                                            </Row>
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
                                          },
                                          subIndex
                                        ) => {
                                          return (
                                            <React.Fragment
                                              key={title + subIndex}
                                            >
                                              {children && children.length ? (
                                                <li
                                                  className={`${
                                                    hasSubpages
                                                      ? `has-sub ${
                                                          activeInnerMenus ===
                                                          title
                                                            ? 'active slide--up'
                                                            : ''
                                                        }`
                                                      : ''
                                                  }`}
                                                >
                                                  <Link href={link}>
                                                    {title}
                                                  </Link>
                                                  <ul>
                                                    {children.map(
                                                      (
                                                        { title, link, data },
                                                        innerIndex
                                                      ) => {
                                                        return (
                                                          <li
                                                            key={
                                                              title + innerIndex
                                                            }
                                                          >
                                                            <Link href={link}>
                                                              {title}
                                                            </Link>
                                                          </li>
                                                        )
                                                      }
                                                    )}
                                                  </ul>
                                                  <div
                                                    className="nav-arrow"
                                                    onClick={() => {
                                                      activeInnerMenus !== title
                                                        ? setActiveInnerMenus(
                                                            title
                                                          )
                                                        : setActiveInnerMenus(
                                                            ''
                                                          )
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
                                                <li>
                                                  <Link href={link}>
                                                    {title}
                                                  </Link>
                                                </li>
                                              )}
                                            </React.Fragment>
                                          )
                                        }
                                      )
                                    )}
                                  </ul>
                                  <div
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
                                  className={`has-sub ${
                                    activeSubMenus === title
                                      ? 'active slide--up'
                                      : ''
                                  } ${data.megaMenu ? 'dropdown-mega' : ''} ${
                                    active ? 'active' : ''
                                  }`}
                                >
                                  <Link href={link}>{title}</Link>
                                </li>
                              )}
                            </React.Fragment>
                          )
                        }
                      )}
                    </ul>
                  </div>
                )}
                <div className="footer-socials-bar">
                  <ul className="redux-social-media-list clearfix">
                    {socialLinks.seo_twitter_link && (
                      <li>
                        <Link
                          href={socialLinks.seo_twitter_link.value}
                          title={socialLinks.seo_twitter_link.label}
                          target="_blank"
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
              <div className="footer-widget-area">
                {footerData &&
                  footerData.map((singleCol, index) => {
                    return (
                      <React.Fragment key={index}>
                        {singleCol.type === 'ns_base_2Cols' ||
                        singleCol.type === 'ns_base_3Cols' ||
                        singleCol.type === 'ns_base_4Cols' ||
                        singleCol.type === 'ns_base_6Cols' ? (
                          <Row>
                            <RenderComponents
                              pageData={singleCol.content.items}
                              settings={singleCol.content?.settings}
                              type={singleCol.type}
                            />
                          </Row>
                        ) : singleCol.type === 'ns_base_container' ? (
                          <RenderComponents
                            pageData={singleCol.content.items}
                            settings={singleCol.content?.settings}
                            type={singleCol.type}
                          />
                        ) : (
                          <ContentType pageData={singleCol} />
                        )}
                      </React.Fragment>
                    )
                  })}
              </div>
            </div>
          </div>
          {renderCopyRight()}
        </Container>
      </footer>
    )
  }

  return (
    <>
      {footerLayout ? (
        footerLayout === 'Large Footer' ? (
          <>{renderLargeFooter()}</>
        ) : footerLayout === 'Medium Footer' ? (
          <>{renderMediumFooter()} </>
        ) : footerLayout === 'Small Footer' ? (
          <>{renderSmallFooter()}</>
        ) : null
      ) : themeSwitcher.footerLayout === 'Large Footer' ? (
        <>{renderLargeFooter()}</>
      ) : themeSwitcher.footerLayout === 'Medium Footer' ? (
        <>{renderMediumFooter()}</>
      ) : themeSwitcher.footerLayout === 'Small Footer' ? (
        <>{renderSmallFooter()}</>
      ) : null}
    </>
  )
}
export default Footer
