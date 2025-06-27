"use client";

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
const Testimonials = ({ data, spaceBefore, spaceAfter, id }) => {
  let aosDuration = 800
  const settings = {
    autoplay:
      data.autoPlay === '1'
        ? {
            delay: 2000,
            disableOnInteraction: false,
          }
        : false,
    navigation: data.navigation === '1' ? true : false,
    pagination: data.dots === '1' ?  {
      clickable: true,
    } : false,
    loop: data.loop === '1' ? true : false,
    slidesPerView: 1,
    breakpoints: {
      1000: {
        slidesPerView:
          data.testimonialVariation === '0' || data.testimonialVariation === '1'
            ? 1
            : 3,
        spaceBetween:
          data.testimonialVariation === '0' || data.testimonialVariation === '1'
            ? 0
            : 10,
      },
    },
  };

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
  return (
    <section
      id={id}
      className={`testimonials ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      {data.testimonialVariation === '0' ? (
        <Swiper
          className="testimonial-items swiper-slider"
          {...settings}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {data &&
            data.testimonials.length &&
            data.testimonials.length > 0 &&
            data.testimonials.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div
                    className="testimonial__slider"
                    data-aos={data.selectAnimation && data.selectAnimation}
                  >
                    <div className="testimonial-slider__content">
                      {item && item.image && item.image.length > 0 && (
                        <Image
                          src={item.image[0].publicUrl}
                          alt="image"
                          className="testimonial-slider__content-image rounded-circle"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      )}

                      <h5>{item.content}</h5>
                      <p>
                        {item.name} <span>{item.designation}</span>
                      </p>
                      <h5>{item.title}</h5>
                      {item.location && <p>{item.location}</p>}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      ) : data.testimonialVariation === '1' ? (
        <Swiper
          className="testimonial-img-items swiper-slider"
          {...settings}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {data &&
            data.testimonials.length &&
            data.testimonials.length > 0 &&
            data.testimonials.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div
                    className="testimonial-img__slider"
                    data-aos={data.selectAnimation && data.selectAnimation}
                  >
                    {item && item.image && item.image.length > 0 && (
                      <div className="testimonial-img__image">
                        <Image
                          src={item.image[0].publicUrl}
                          alt="Image"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    )}

                    <div
                      className={`testimonial-img__content ${
                        item.grayBackground === '0'
                          ? 'bg-light-color'
                          : 'bg-gray-color'
                      }`}
                    >
                      {item.title && <h5>{item.title}</h5>}
                      {item.content && <p>{item.content}</p>}
                      {item.name && <p>{item.name}</p>}
                      {item.location && <p>{item.location}</p>}
                      {item.designation && <p>{item.designation}</p>}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      ) : data.testimonialVariation === '2' ? (
        <Swiper
          className="swiper-slider testimonial-cards-item"
          {...settings}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {data &&
            data.testimonials.length &&
            data.testimonials.length > 0 &&
            data.testimonials.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div
                    className={`testimonial-items__grid ${
                      item.grayBackground === '0'
                        ? 'bg-light-color'
                        : 'bg-gray-color'
                    }`}
                    data-aos={data.selectAnimation && data.selectAnimation}
                  >
                    {item && item.image && item.image.length > 0 && (
                      <div className="testimonial-items-grid__img">
                        <Image
                          src={item.image[0].publicUrl}
                          alt="Image"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-circle"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                    )}

                    <div className="testimonial-items-grid__content">
                      <div className="testimonial-items-grid__header">
                        <h5>{item.name}</h5>
                        <p>{item.designation}</p>
                      </div>
                      <div className="testimonial-items-grid__message">
                        <p>{item.content}</p>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      ) : (
        <Row className="gy-4" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          {data &&
            data.testimonials.length &&
            data.testimonials.length > 0 &&
            data.testimonials.map((item, index) => {
              aosDuration += 400;
              return (
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  key={index}
                  data-aos={data.selectAnimation && data.selectAnimation}
                  data-aos-duration={`${aosDuration}`}
                >
                  <div
                    className={`testimonial-items__grid ${
                      item.grayBackground === "0"
                        ? "bg-light-color"
                        : "bg-gray-color"
                    }`}
                  >
                    {item && item.image && item.image.length > 0 && (
                      <div className="testimonial-items-grid__img">
                        <Image
                          src={item.image[0].publicUrl}
                          alt={
                            item.image[0].properties.alternative
                              ? item.image[0].properties.alternative
                              : "image"
                          }
                          title={item.image[0].properties.alternative}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-circle"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    )}

                    <div className="testimonial-items-grid__content">
                      <div className="testimonial-items-grid__header">
                        <h5>{item.name}</h5>
                        <p>
                          {item.designation}{" "}
                          {item.location && "," + " " + item.location}
                        </p>
                      </div>
                      <div className="testimonial-items-grid__message">
                        <p>{item.content}</p>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      )}
    </section>
  );
};

export default Testimonials;
