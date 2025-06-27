'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const AppGallery = ({ data, spaceBefore, spaceAfter, id }) => {
  const appGalleryRef = useRef(null);
  const [height, setHeight] = useState(null);

  const settings = {
    pagination: {
      clickable: true,
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      991: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 4.5,
        centeredSlides: true,
        spaceBetween: 20,
      },
    },
  }

  const textEnter = () => {
    if (typeof window !== "undefined") {
      document.getElementsByClassName(
        "custom-cursor-text"
      )[0].style.backgroundImage =
        `url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNTQgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNjc1IDQuMzAyYS41LjUgMCAwMS4wMjMuNzA2TDcuMDE4IDEwbDQuNjggNC45OTFhLjUuNSAwIDAxLS43My42ODRsLTUtNS4zMzNhLjUuNSAwIDAxMC0uNjg0bDUtNS4zMzNhLjUuNSAwIDAxLjcwNy0uMDIzem0zMC42NSAwYS41LjUgMCAwMS43MDcuMDIybDUgNS4zMzRhLjUuNSAwIDAxMCAuNjg0bC01IDUuMzMzYS41LjUgMCAwMS0uNzMtLjY4NEw0Ni45ODIgMTBsLTQuNjgtNC45OTJhLjUuNSAwIDAxLjAyMy0uNzA2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)`;
    }
  };

  const textLeave = () => {
    if (typeof window !== "undefined") {
      document.getElementsByClassName(
        "custom-cursor-text"
      )[0].style.backgroundImage = "none";
    }
  };

  useEffect(() => {
    if (appGalleryRef.current) {
      const height = appGalleryRef.current.offsetHeight;
      setHeight(height);
    }
  }, []);

  return (
    <section
      id={id}
      className={`app-gallery ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
      style={{ height: `${height}px` }}
    >
      {data.mockupImage &&
        data.mockupImage.length > 0 &&
        data.mockupImage[0] &&
        data.mockupImage[0].publicUrl && (
          <div className="app-gallery__frame">
            <Image
              src={data.mockupImage[0].publicUrl}
              alt={
                data.mockupImage[0].properties.alternative
                  ? data.mockupImage[0].properties.alternative
                  : "image"
              }
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }} // optional
            />
          </div>
        )}

      {data.appGalleryVariation === "1" && (
        <div className="app-gallery-content__content">
          <div className="app-gallery__text" ref={appGalleryRef}>
            {data.headline && (
              <h2>
                <span className=".h1">{data.headline}</span>
              </h2>
            )}
            {data.content && <p>{data.content}</p>}
          </div>
        </div>
      )}
      <Swiper
        className={`app-gallery-items swiper-slider ${
          data.appGalleryVariation === '1' ? 'app-gallery__left-content' : ''
        }`}
        modules={[Pagination, Scrollbar]}
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
                  data.appGalleryVariation === '0'
                    ? 'app-gallery__card-opacity'
                    : 'app-gallery__card'
                }`}
              >
                <Image
                  src={item.publicUrl}
                  alt={
                    item.properties.alternative
                      ? item.properties.alternative
                      : 'image'
                  }
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
  );
};

export default AppGallery;
