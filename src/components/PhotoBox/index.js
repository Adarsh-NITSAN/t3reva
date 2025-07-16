'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DOMPurify from 'dompurify'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const PhotoBox = ({ data, spaceBefore, spaceAfter, id }) => {
  const settings = {
    loop: true,
    slidesPerView: 1,
    navigation: true,
    spaceBetween: 25,
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView:
          data.selectColumn === '0' ? 2 : data.selectColumn === '1' ? 3 : 4,
      },
    },
  }

  const textEnter = () => {
    if (typeof window !== 'undefined') {
      document.getElementsByClassName(
        'custom-cursor-text'
      )[0].style.backgroundImage = `url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNTQgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNjc1IDQuMzAyYS41LjUgMCAwMS4wMjMuNzA2TDcuMDE4IDEwbDQuNjggNC45OTFhLjUuNSAwIDAxLS43My42ODRsLTUtNS4zMzNhLjUuNSAwIDAxMC0uNjg0bDUtNS4zMzNhLjUuNSAwIDAxLjcwNy0uMDIzem0zMC42NSAwYS41LjUgMCAwMS43MDcuMDIybDUgNS4zMzRhLjUuNSAwIDAxMCAuNjg0bC01IDUuMzMzYS41LjUgMCAwMS0uNzMtLjY4NEw0Ni45ODIgMTBsLTQuNjgtNC45OTJhLjUuNSAwIDAxLjAyMy0uNzA2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)`
    }
  }

  const textLeave = () => {
    if (typeof window !== 'undefined') {
      document.getElementsByClassName(
        'custom-cursor-text'
      )[0].style.backgroundImage = 'none'
    }
  }

  return (
    <section
      id={id}
      className={`photo-box ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      {data.selectVariation === '1' ? (
        <Row className="g-4">
          {data.photoBoxBlock.map((item, index) => {
            return (
              <Col
                lg={
                  data.selectColumn === '0'
                    ? 6
                    : data.selectColumn === '1'
                    ? 4
                    : 3
                }
                md={
                  data.selectColumn === '0'
                    ? 12
                    : data.selectColumn === '1'
                    ? 12
                    : 6
                }
                sm={12}
                key={index}
                data-aos={data.selectAnimation && data.selectAnimation}
              >
                <div className="photo-box-container">
                  {item.photoBoxImage && item.photoBoxImage.length > 0 && (
                    <div className="photo-box-container__image">
                      <Image
                        src={item.photoBoxImage[0].publicUrl}
                        alt={
                          item.photoBoxImage[0].properties.alternative
                            ? item.photoBoxImage[0].properties.alternative
                            : 'image'
                        }
                        title={item.photoBoxImage[0].properties.title}
                        height={0}
                        width={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  )}

                  <div className="photo-box-container__text">
                    {item.photoBoxTitle &&
                      (item.link ? (
                        <Link
                          href={`${item.link.href ? item.link.href : ''}`}
                          target={item.link.target}
                          title={item.link.title}
                        >
                          <h4
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(item.photoBoxTitle),
                            }}
                          />
                        </Link>
                      ) : ( 
                        <h4
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(item.photoBoxTitle),
                          }}
                        />
                      ))}
                    {item.photoBoxText && <p>{item.photoBoxText}</p>}
                    {item.linkText && item.link && (
                      <Link
                        href={item.link.href}
                        title=""
                        target="_self"
                        className="container-text__link"
                      >
                        {item.linkText} {`  `}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      ) : (
        <Swiper
          className="swiper-slider testimonial-cards-item"
          {...settings}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {data.photoBoxBlock.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <div
                  className="photo-box-container"
                  data-aos={data.selectAnimation && data.selectAnimation}
                >
                  {item.photoBoxImage && item.photoBoxImage.length > 0 && (
                    <div className="photo-box-container__image">
                      <Image
                        src={item.photoBoxImage[0].publicUrl}
                        alt={
                          item.photoBoxImage[0].properties.alternative
                            ? item.photoBoxImage[0].properties.alternative
                            : 'image'
                        }
                        title={item.photoBoxImage[0].properties.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  )}

                  <div className="photo-box-container__text">
                    {item.photoBoxTitle &&
                      (item.link ? (
                        <Link
                          href={`${item.link.href ? item.link.href : ''}`}
                          target={item.link.target}
                          title={item.link.title}
                        >
                          <h4
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(item.photoBoxTitle),
                            }}
                          />
                        </Link>
                      ) : (
                        <h4
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(item.photoBoxTitle),
                          }}
                        />
                      ))}

                    {item.photoBoxText && <p>{item.photoBoxText}</p>}
                    {item.linkText && item.link && (
                      <Link
                        href={item.link.href}
                        title=""
                        target="_self"
                        className="container-text__link"
                      >
                        {item.linkText} {`  `}
                        {/* <AiOutlineArrowRight /> */}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </section>
  )
}

export default PhotoBox
