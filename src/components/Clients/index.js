'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const Clients = ({ data, spaceBefore, spaceAfter, id }) => {
  let aosDuration = 800
  const settings = {
    loop: true,
    navigation: true,
    slidesPerView: 2,
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
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

  const CustomComponent = `${
    data.headerLayout === 0 ? 'p' : `h${data.headerLayout}`
  }`
  return (
    <section
      id={id}
      className={`clients ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      {/* {data.headline && <p className="clients__headline">{data.headline}</p>} */}
      {data.headline && (
        <CustomComponent
          className={`clients__headline ${
            data.headerPosition ? `text-${data.headerPosition}` : ''
          } `}
        >
          {data.header}
        </CustomComponent>
      )}
      <Swiper
        className="clients-items swiper-slider"
        modules={[Navigation, Autoplay, Pagination]}
        {...settings}
      >
        {data.clientImage.map((item, index) => {
          aosDuration += 400
          return (
            <SwiperSlide
              key={index}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <div className="clients__icon">
                <Image
                  src={item.publicUrl}
                  alt={
                    item.properties.alternative
                      ? item.properties.alternative
                      : 'image'
                  }
                  title={item.properties.title}
                  data-aos={data.selectAnimation && data.selectAnimation}
                  data-aos-duration={`${aosDuration}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 'auto', height: 'auto' }} // optional
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
export default Clients
