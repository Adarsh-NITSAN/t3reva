'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import DOMPurify from 'dompurify'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'

const ReactCompareSlider = dynamic(
  () => import('react-compare-slider').then((re) => re.ReactCompareSlider),
  { ssr: false }
)

const ReactCompareSliderImage = dynamic(
  () => import('react-compare-slider').then((re) => re.ReactCompareSliderImage),
  { ssr: false }
)

const ImageComparison = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()

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
      className={`image-comparison ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`} bg-gray-color`}
    >
      <Row>
        <Col xl={4} md={12}>
          <div
            onClick={(e) => {
              e.preventDefault(), sanitizeLink(e, router)
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.content),
            }}
            className="image-comparison__text"
          />
        </Col>
        <Col
          xl={8}
          md={12}
          data-aos={data.selectAnimation && data.selectAnimation}
        >
          {data.image && data.image.length > 0 ? (
            <ReactCompareSlider
              className="compareSlider"
              itemOne={
                data.image.length > 1 &&
                data.image[1] && (
                  <ReactCompareSliderImage
                    src={data.image[1].publicUrl}
                    alt={data.image[1].properties.alternative}
                  />
                )
              }
              itemTwo={
                data.image[0] && (
                  <ReactCompareSliderImage
                    src={data.image[0].publicUrl}
                    alt={data.image[0].properties.alternative}
                  />
                )
              }
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            />
          ) : null}
        </Col>
      </Row>
    </section>
  )
}

export default ImageComparison
