'use client'

import { sanitizeLink } from '@/utils/sanitizeLink'
import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const LandingSlider = ({ data, spaceBefore, spaceAfter }) => {
  const router = useRouter()
  const getNextIcon = (navigationStyle) => {
    switch (navigationStyle) {
      case 'Chevron-icon':
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
          </svg>
        )
      case 'Arrow-Icon':
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
          </svg>
        )
      case 'Angle-Icon':
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
          </svg>
        )
      case 'Rounded-Bg':
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
          </svg>
        )
      default:
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"></path>
          </svg>
        )
    }
  }
  const getPrevIcon = (navigationStyle) => {
    switch (navigationStyle) {
      case 'Chevron-icon':
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
          </svg>
        )
      case 'Arrow-Icon':
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
          </svg>
        )
      case 'Angle-Icon':
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
          </svg>
        )
      case 'Rounded-Bg':
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
          </svg>
        )
      default:
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"></path>
          </svg>
        )
    }
  }
  const nextIconComponent = getNextIcon(data.navigationstyle)
  const prevIconComponent = getPrevIcon(data.navigationstyle)

  function youTubeVideoId(url) {
    let regExp = /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/
    let match = url?.match(regExp)
    if (match && match[1].length === 11) {
      return match[1]
    } else {
      // Handle invalid YouTube URL
      return null
    }
  }

  return (
    <section
      className={`landing-section ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Carousel
        data-bs-theme="dark"
        className={`landingslider slider-overlay ${
          data.navigationcolor === 'light' ? 'light-icon' : 'dark-icon'
        }`}
        nextIcon={<div className="next-button">{nextIconComponent}</div>}
        prevIcon={<div className="prev-button">{prevIconComponent}</div>}
        controls={
          data.navigation === '0' || data.sliderItem.length === 1 ? false : true
        }
        interval={data.sliderAutoplay === '0' ? null : 3000}
        indicators={
          data.dots === '0' || data.sliderItem.length === 1 ? false : true
        }
      >
        {data.sliderItem.map((item, index) => {
          let backgroundType = item?.backgroundImageVideo[0]?.properties?.type
          let videoType = item?.backgroundImageVideo[0]?.properties?.extension
          let videoId = youTubeVideoId(item.backgroundImageVideo[0]?.publicUrl)
          return (
            <Carousel.Item
              className={`${
                data.selectOverlay === 'light'
                  ? 'slider-overlay__light'
                  : data.selectOverlay === 'dark'
                  ? 'slider-overlay__dark'
                  : data.selectOverlay === 'gradient'
                  ? 'slider-overlay__gradient'
                  : ''
              }`}
              key={index}
              style={{
                backgroundImage:
                  item &&
                  item.backgroundImageVideo &&
                  item.backgroundImageVideo.length > 0
                    ? `url(${item.backgroundImageVideo[0].publicUrl})`
                    : '',
              }}
            >
              {backgroundType === 'video' ? (
                <>
                  {videoType === 'youtube' ? (
                    <iframe
                      allow="autoplay"
                      className="w-100 h-100 position-absolute top-0"
                      allowfullscreen
                      frameborder="0"
                      src={`${item.backgroundImageVideo[0]?.publicUrl}&autoplay=1&mute=1&showinfo=0&loop=1&playlist=${videoId}&vq=hd720`}
                    />
                  ) : (
                    <video autoPlay muted loop playsInline>
                      <source
                        src={item.backgroundImageVideo[0]?.publicUrl}
                        type="video/mp4"
                      />
                    </video>
                  )}
                </>
              ) : (
                ''
              )}
              <Carousel.Caption className="carousel-slide-content ">
                <Container>
                  <Row
                    className={`${
                      data.contentAlignment === 'bottom'
                        ? 'align-items-end'
                        : data.contentAlignment === 'top'
                        ? 'align-items-start'
                        : 'align-items-center'
                    } ${
                      data.contentPosition === 'left'
                        ? 'justify-content-start'
                        : data.contentPosition === 'right'
                        ? 'justify-content-end'
                        : 'justify-content-center'
                    }`}
                  >
                    <Col lg={6} md={12} sm={12}>
                      <div
                        onClick={(e) => {
                          e.preventDefault(), sanitizeLink(e, router)
                        }}
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item.textContent),
                        }}
                      />
                    </Col>
                    {item.rightImage.length !== 0 ? (
                      <Col lg={6} md={12} sm={12}>
                        {item.rightImage.length !== 0 && (
                          <Image
                            src={item.rightImage[0].publicUrl}
                            alt="right image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            priority={true}
                          />
                        )}
                      </Col>
                    ) : null}
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </section>
  )
}

export default LandingSlider
