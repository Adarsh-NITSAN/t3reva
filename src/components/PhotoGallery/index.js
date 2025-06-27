'use client'

import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import FancyBox from '../Core/FanyBox'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const PhotoGallery = ({ data, spaceBefore, spaceAfter, id }) => {
  let numberOfItems = Number(data.galleryItem)

  const settings = {
    loop: data.loop === '1' ? true : false,
    autoplay:
      data.autoPlay === '1'
        ? {
            delay: 2000,
            disableOnInteraction: false,
          }
        : false,
    navigation: data.navigation === '1' ? true : false,
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: Number(data.galleryItem),
        spaceBetween: 150,
      },
    },
  }

  const textEnter = () => {
    if (typeof window !== 'undefined') {
      document.getElementsByClassName(
        'custom-cursor-text'
      )[0].style.backgroundImage = `url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiBzdHJva2U9IiNGRkYiIHZpZXdCb3g9IjAgMCA1NyA1NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIiB4PSItNTAlIiB5PSItNTAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMTAiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48L2RlZnM+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzQuMjQzIDMzLjI0M2E5IDkgMCAwMS0xMi43MjggMCA5IDkgMCAwMTAtMTIuNzI4IDkgOSAwIDAxMTIuNzI4IDAgOSA5IDAgMDEwIDEyLjcyOHptLTEuNDE0LTEuNDE0YTYuOTk5IDYuOTk5IDAgMDAwLTkuODk5IDYuOTk5IDYuOTk5IDAgMDAtOS44OTkgMCA2Ljk5OSA2Ljk5OSAwIDAwMCA5Ljg5OSA2Ljk5OSA2Ljk5OSAwIDAwOS44OTkgMHptMi4xMjEgMy41MzZsMS40MTQtMS40MTQgMi4xMTUgMi4xMTVjLjM5NC4zOTQuNCAxLjAyOC4wMDcgMS40MjFhLjk5OC45OTggMCAwMS0xLjQyMS0uMDA3bC0yLjExNS0yLjExNXoiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==)`
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
      className={`photo-gallery ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
      data-aos={data.selectAnimation && data.selectAnimation}
    >
      {data.galleryImageVariation === '2' ||
      data.galleryImageVariation === '3' ? (
        <div className="gallery-grid__container">
          {data.headline && (
            <div className="gallery-grid__title">
              <h2>{data.headline}</h2>
              <h6>{data.text}</h6>
            </div>
          )}
          <FancyBox
            options={{
              Carousel: {
                infinite: false,
              },
              hideScrollbar: false,
            }}
          >
            {data.galleryImageVariation === '2' ? (
              <Row
                className="g-3"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {data.image.map((item, index) => {
                  return (
                    <Col key={index} md={4}>
                      <div className="gallery-grid">
                        <Link
                          href={item.publicUrl}
                          data-fancybox="gallery"
                          title=""
                          target="_self"
                        >
                          <Image
                            src={item.publicUrl}
                            alt={
                              item.properties.alternative
                                ? item.properties.alternative
                                : 'image'
                            }
                            title={item.properties.title}
                            width={1200}
                            height={1200}
                            sizes="100vw"
                          />
                        </Link>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            ) : (
              <div
                className="gallery-grid__row"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {data.image.map((item, index) => {
                  return (
                    <div key={index} className="gallery-grid__col">
                      <div className="gallery-grid">
                        <Link
                          href={item.publicUrl}
                          data-fancybox="gallery"
                          title=""
                          target="_self"
                          data-aos="zoom-in"
                        >
                          <Image
                            src={item.publicUrl}
                            alt={
                              item.properties.alternative
                                ? item.properties.alternative
                                : 'image'
                            }
                            title={item.properties.title}
                            width={1200}
                            height={1200}
                            sizes="100vw"
                          />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </FancyBox>
        </div>
      ) : (
        <FancyBox
          options={{
            Carousel: {
              infinite: false,
            },
            hideScrollbar: false,
          }}
        >
          {data.headline && (
            <div className="gallery-carousel__title">
              <h2>{data.headline}</h2>
              <h6>{data.text}</h6>
            </div>
          )}
          <Swiper
            className={`gallery-items swiper-slider ${
              Number.isInteger(numberOfItems) ? 'gallery-items-senter' : ''
            }`}
            modules={[Navigation, Autoplay, Pagination]}
            {...settings}
          >
            {data.image.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div
                    className={`${
                      data.galleryImageVariation === '1'
                        ? 'slider-card__over-layer'
                        : 'slider-card'
                    }`}
                  >
                    <Link
                      href={item.publicUrl}
                      data-fancybox="gallery"
                      title=""
                      target="_self"
                      data-aos="zoom-in"
                    >
                      <Image
                        src={item.publicUrl}
                        alt={
                          item.properties.alternative
                            ? item.properties.alternative
                            : 'image'
                        }
                        title={item.properties.title}
                        width={0}
                        height={0}
                        // sizes="100vw"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </FancyBox>
      )}
    </section>
  )
}

export default PhotoGallery
