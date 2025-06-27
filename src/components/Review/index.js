'use client'

import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const Review = ({ data, spaceBefore, spaceAfter, id }) => {
  let aosDuration = 800

  const settings = {
    loop: true,
    navigation: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 25,
    centeredSlidesBounds: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 3.5,
      },
      1600: {
        slidesPerView: 4.2,
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
      className={`reviews ${spaceBefore && `frame-space-before-${spaceBefore}`
        } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      {data.selectVariation === '0' ? (
        <div
          className="review-carousel"
        >
          <Swiper
            className="review-item swiper-slider"
            {...settings}
            modules={[Navigation, Autoplay, Pagination]}
          >
            {data.reviewBlock.map((item, index) => {
              aosDuration += 400
              let totalStars = Number(item.reviewStar)
              let emptyStar = 5 - totalStars
              let stars = new Array(5)
                .fill(emptyStar)
                .map((value, index) =>
                  index < Math.floor(totalStars)
                    ? 1
                    : totalStars % index === 0.5
                      ? 0.5
                      : 0
                )
              return (
                <SwiperSlide key={index}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}>
                  <div
                    className="reviews-box"
                    data-aos={data.selectAnimation && data.selectAnimation}
                    data-aos-duration={`${aosDuration}`}
                  >
                    <div className="reviews-box__author">
                      {item.reviewImage &&
                        item.reviewImage.length > 0 &&
                        item.reviewImage[0].publicUrl ? (
                        <div className="author__image-wrapper">
                          <div className="author-image-wrapper__image">
                            <Image
                              src={item.reviewImage[0].publicUrl}
                              alt={
                                item.reviewImage[0].properties.alternative
                                  ? item.reviewImage[0].properties.alternative
                                  : 'image'
                              }
                              title={item.reviewImage[0].properties.alternative}
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                          </div>
                        </div>
                      ) : null}
                      <div className="author-details">
                        {item.reviewName && <h5>{item.reviewName}</h5>}
                        {item.reviewDesignation && (
                          <p>{item.reviewDesignation}</p>
                        )}
                      </div>
                    </div>
                    {item.reviewTitle && (
                      <h4 className="reviews-box__title">{item.reviewTitle}</h4>
                    )}
                    {item.reviewText && (
                      <p className="reviews-box__message">{item.reviewText}</p>
                    )}
                    {item.reviewStar && (
                      <div
                        className={`${data.selectStarColor === '0'
                            ? 'rating-yellow'
                            : 'rating-primary'
                          } reviews-box__rating`}
                      >
                        <span className="reviews-box-rating__number">
                          {item.reviewStar}
                        </span>
                        {stars.map((stars, ids) => {
                          return stars === 1 ? (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              key={ids}
                            >
                              <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                            </svg>
                          ) : stars === 0.5 ? (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3zM274.63 347.82L256 334.49v-200.1l26 78.91 7.24 22h105.39l-67.32 47.2-19.69 13.81 7.78 22.75 26.26 76.75z"></path>
                            </svg>
                          ) : (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              key={ids}
                            >
                              <path
                                fill="none"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                              ></path>
                            </svg>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      ) : (
        <Container>
          <Row className="g-3">
            {data.reviewBlock.map((item, index) => {
              let totalStars = Number(item.reviewStar)
              let emptyStar = 5 - totalStars
              let stars = new Array(5)
                .fill(emptyStar)
                .map((value, index) => (index < totalStars ? 1 : 0))
              return (
                <Col lg={4} md={6} sm={12} key={index}>
                  <div
                    className="reviews-box single-review-box"
                    key={index}
                    data-aos-duration={`${aosDuration}`}
                    data-aos={data.selectAnimation && data.selectAnimation}
                  >
                    <div className="reviews-box__author">
                      {item.reviewImage &&
                        item.reviewImage.length > 0 &&
                        item.reviewImage[0].publicUrl && (
                          <div className="author__image-wrapper">
                            <div className="author-image-wrapper__image">
                              <Image
                                src={item.reviewImage[0].publicUrl}
                                alt={
                                  item.reviewImage[0].properties.alternative
                                    ? item.reviewImage[0].properties.alternative
                                    : 'image'
                                }
                                title={
                                  item.reviewImage[0].properties.alternative
                                }
                                height={0}
                                width={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: 'auto' }}
                              />
                            </div>
                          </div>
                        )}
                      <div className="author-details">
                        {item.reviewName && <h5>{item.reviewName}</h5>}
                        {item.reviewDesignation && (
                          <p>{item.reviewDesignation}</p>
                        )}
                      </div>
                    </div>
                    {item.reviewTitle && (
                      <h4 className="reviews-box__title">{item.reviewTitle}</h4>
                    )}
                    {item.reviewText && (
                      <p className="reviews-box__message">{item.reviewText}</p>
                    )}
                    {item.reviewStar && (
                      <div
                        className={`${data.selectStarColor === '0'
                            ? 'rating-yellow'
                            : 'rating-primary'
                          } reviews-box__rating`}
                      >
                        <span className="reviews-box-rating__number">
                          {item.reviewStar}
                        </span>
                        {stars.map((stars, ids) => {
                          return stars === 1 ? (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              key={ids}
                            >
                              <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                            </svg>
                          ) : stars === 0.5 ? (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              key={ids}
                            >
                              <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3zM274.63 347.82L256 334.49v-200.1l26 78.91 7.24 22h105.39l-67.32 47.2-19.69 13.81 7.78 22.75 26.26 76.75z"></path>
                            </svg>
                          ) : (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              key={ids}
                            >
                              <path
                                fill="none"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                              ></path>
                            </svg>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      )}
    </section>
  )
}
export default Review
