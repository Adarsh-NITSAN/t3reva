'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'
import Image from 'next/image'

const Link = dynamic(() => import('react-scroll').then((re) => re.Link), {
  ssr: false,
})

const StickyNavbar = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()
  const widthRef = useRef()
  const childRef = useRef(null)
  const [elementWidth, setElementWidth] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  let client = document.getElementsByClassName('container')[0]
  useEffect(() => {
    const handleResize = () => {
      if (widthRef.current || client.clientWidth) {
        const width = widthRef.current.offsetWidth
        setElementWidth(width)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth, client.clientWidth])

  const handleSetActive = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section
      id={id}
      className={`sticky-navbar ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}
  `}
    >
      <div className="navbar-sections-tabs">
        <nav>
          <ul>
            {data.stickyNavbar &&
              data.stickyNavbar.length > 0 &&
              data.stickyNavbar.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      index === activeIndex ? 'active-section' : ''
                    }`}
                    ref={widthRef}
                  >
                    <Link
                      to={`${item.stickyNavbarHeaderTitle}${id}${index}`}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      ref={childRef}
                      delay={0}
                      duration={0}
                      offset={-100}
                      onSetActive={() => {
                        handleSetActive(index)
                      }}
                    >
                      {data.stickyNavbarVariation === '0' ? (
                        <span className="nav-number">{index + 1}</span>
                      ) : (
                        <Image
                          src={item?.stickyNavbarIcon[0]?.publicUrl}
                          alt={
                            item?.stickyNavbarIcon[0]?.properties.alternative
                              ? item.stickyNavbarIcon[0]?.properties.alternative
                              : 'image'
                          }
                          title={item?.stickyNavbarIcon[0]?.properties.title}
                          height={0}
                          width={0}
                          sizes="100vw"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      )}
                      {item.stickyNavbarHeaderTitle && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              item.stickyNavbarHeaderTitle
                            ),
                          }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            <span
              className="nav-indicator"
              style={{ width: `${elementWidth}px` }}
            />
          </ul>
        </nav>
      </div>
      {data.stickyNavbar &&
        data.stickyNavbar.length > 0 &&
        data.stickyNavbar.map((item, index) => {
          return (
            <section
              id={`${item.stickyNavbarHeaderTitle}${id}${index}`}
              key={index}
            >
              <div className="navbar-sections">
                <Container>
                  <Row className="mx-auto">
                    <Col
                      className={`order-lg-${
                        item.rightImage === '0' ? '1 ' : '0'
                      } order-sm-0 ${
                        item.rightImage === '0' ? 'offset-lg-1' : ''
                      }`}
                      lg={item.rightImage === '0' ? 5 : 6}
                      sm={12}
                      data-aos={
                        item.rightImage === '0' ? 'fade-left' : 'fade-right'
                      }
                    >
                      <div
                        onClick={(e) => {
                          e.preventDefault(), sanitizeLink(e, router)
                        }}
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item.content),
                        }}
                        className="navbar-section__content"
                      />
                    </Col>
                    <Col
                      className={`order-lg-${
                        item.rightImage === '0' ? '0' : '1'
                      } order-sm-1 text-start  order-sm-0 ${
                        item.rightImage === '0' ? '' : 'offset-lg-1'
                      }`}
                      lg={item.rightImage === '0' ? 6 : 5}
                      sm={12}
                      data-aos={
                        item.rightImage === '0' ? 'fade-right' : 'fade-left'
                      }
                    >
                      {item.image && item.image.length > 0 ? (
                        <div className="navbar-section__image">
                          <Image
                            src={item.image[0].publicUrl}
                            alt={
                              item.image[0].properties.alternative
                                ? item.image[0].properties.alternative
                                : 'image'
                            }
                            title={item.image[0].properties.title}
                            height={0}
                            width={0}
                            sizes="100vw"
                            style={{ width: 'auto', height: 'auto' }}
                          />
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                </Container>
              </div>
            </section>
          )
        })}
    </section>
  )
}

export default StickyNavbar
