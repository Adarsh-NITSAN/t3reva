'use client'

import { Col, Container, Row } from 'react-bootstrap'
import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'
import ParallaxPhotoGroup from './ParallaxPhotoGroup'

const PhotoGroup = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()
  return (
    <section
      id={id}
      className={` ${spaceBefore && `frame-space-before-${spaceBefore}`} ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      }`}
    >
      <div
        className="photo-group-section"
        data-aos={data.selectAnimation && data.selectAnimation}
      >
        <Container>
          <Row className="gy-5">
            {data.text !== '' && (
              <Col
                lg={6}
                sm={12}
                className={`order-${data.rightsideImage === '1' ? '0' : '1'}`}
              >
                <div
                  className="photo-group-section__text"
                  onClick={(e) => {
                    e.preventDefault(), sanitizeLink(e, router)
                  }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.text),
                  }}
                />
              </Col>
            )}
            <Col
              lg={data.text === '' ? 12 : 6}
              sm={12}
              className={`order-${data.rightsideImage === '1' ? '1' : '0'}`}
            >
              <ParallaxPhotoGroup
                image1={data?.image[0]}
                image2={data?.image[1]}
                imageOverlap={data.imageOverlap}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default PhotoGroup
