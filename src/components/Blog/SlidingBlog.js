'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const SlidingBlog = ({ content, spaceAfter, spaceBefore }) => {
  const settings = {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      1000: {
        slidesPerView: 3,
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
      className={`sliding-blog ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Swiper
        className="sliding-blog-item swiper-slider"
        {...settings}
        modules={[Navigation, Autoplay, Pagination]}
      >
        {content?.list?.map((item, index) => {
          const image =
            item?.featuredImage[0]?.images?.listViewVerticalImage?.publicUrl
          return (
            <SwiperSlide
              key={index}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <Link href={item.detail} title="" target="_self">
                <div className="portfolio-card">
                  {item.featuredImage[0].images !== undefined ? (
                    <div className="portfolio-transparent__image">
                      <Image
                        src={image}
                        alt="image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        // style={{ width: 'auto', height: 'auto' }} // optional
                      />
                      <div className="portfolio-transparent__title">
                        <h5>{item.title}</h5>
                      </div>
                    </div>
                  ) : (
                    <div className="portfolio-gradient-text">
                      <h5 className="portfolio-gradient-text__title">
                        {item.title}
                      </h5>
                    </div>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default SlidingBlog
