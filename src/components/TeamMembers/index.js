'use client'

import React from 'react'
import Link from 'next/link'
import DOMPurify from 'dompurify'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const TeamMembers = ({ data, spaceBefore, spaceAfter, id }) => {
  let aosDuration = 800;

  const settings = {
    loop: true,
    navigation: true,
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      992: {
        slidesPerView: data.selectColumn === '0' ? 3 : 4,
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

  return (
    <section
      id={id}
      className={`testimonial-cards teams ${data.selectVariation === '0' && 'arrow-center'} ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Swiper
        className="testimonial-cards-item swiper-slider"
        modules={[Navigation, Autoplay, Pagination]}
        {...settings}
      >
        {data.teamBlock &&
          data.teamBlock.length > 0 &&
          data.teamBlock.map((item, index) => {
            aosDuration += 400
            return (
              <SwiperSlide
                key={index}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {data.selectVariation === '0' ? (
                  <div
                    className="team-minimal"
                    data-aos={data.selectAnimation && data.selectAnimation}
                    data-aos-duration={`${aosDuration}`}
                  >
                    <div className="team-content__image">
                      {item.image && item.image.length > 0 ? (
                        <Image
                          src={item.image[0].publicUrl}
                          alt={
                            item.image[0].properties.alternative
                              ? item.image[0].properties.alternative
                              : "image"
                          }
                          title={item.image[0].properties.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      ) : null}

                      <div className="team-minimal__socials">
                        <div className="team-minimal__socials-icon">
                          {item.facebookLink && (
                            <Link href={item.facebookLink.href}>
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
                          )}
                          {item.twitterLink && (
                            <Link href={item.twitterLink.href}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
                              </svg>
                            </Link>
                          )}
                          {item.linkedInLink && (
                            <Link href={item.linkedInLink.href}>
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
                          )}
                        </div>
                      </div>
                    </div>
                    {item.teamMemberName && (
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item.teamMemberName),
                        }}
                      />
                    )}
                    {item.teamMemberDesignation && (
                      <p>{item.teamMemberDesignation}</p>
                    )}
                    {item.text && <p>{item.text}</p>}
                  </div>
                ) : (
                  <div
                    className="team-detailed"
                    data-aos={data.selectAnimation && data.selectAnimation}
                    data-aos-duration={`${aosDuration}`}
                  >
                    <div className="team-detailed__image">
                      {item.image && item.image.length > 0 ? (
                        <Image
                          src={item.image[0].publicUrl}
                          alt={
                            item.image[0].properties.alternative
                              ? item.image[0].properties.alternative
                              : "image"
                          }
                          title={item.image[0].properties.title}
                          height={0}
                          width={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      ) : null}
                    </div>
                    <div className="team-detailed__content">
                      {item.teamMemberName && (
                        <h4
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(item.teamMemberName),
                          }}
                        />
                      )}
                      {item.teamMemberDesignation && (
                        <p>{item.teamMemberDesignation}</p>
                      )}
                      {item.text && <p>{item.text}</p>}
                    </div>
                    <div className="team-detailed__socials-icon">
                      {item.facebookLink && (
                        <Link href={item.facebookLink.href}>
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
                      )}
                      {item.twitterLink && (
                        <Link href={item.twitterLink.href}>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
                          </svg>
                        </Link>
                      )}
                      {item.linkedInLink && (
                        <Link href={item.linkedInLink.href}>
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
                      )}
                    </div>
                  </div>
                )}
              </SwiperSlide>
            )
          })}
      </Swiper>
    </section>
  );
};

export default TeamMembers;
