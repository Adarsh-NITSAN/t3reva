'use client'

import DOMPurify from 'dompurify'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'
import Link from 'next/link'

const ProcessStepsLine = ({ data }) => {
  const router = useRouter()
  let aosDuration = 800
  let m = 50
  return (
    <Row>
      {data.processBlock.map((item, index) => {
        aosDuration += 400
        return (
          <Col
            className={`process-steps__col ${
              data.selectColumn === '0'
                ? 'process-steps__col-three'
                : 'process-steps__col-four'
            }`}
            lg={data.selectColumn === '0' ? 4 : 3}
            key={index}
            style={{ marginTop: `${m * (index + 1)}px` }}
            data-aos={data.selectAnimation && data.selectAnimation}
            data-aos-duration={`${aosDuration}`}
          >
            <div className="process-steps-content">
              <div className="process-steps-content__teaser">
                <span className="teaser__number">{item.processNumber}</span>
              </div>
              <div
                className="process-steps-content__text"
                onClick={(e) => {
                  e.preventDefault(), sanitizeLink(e, router)
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.processText),
                }}
              />
              {item.processTextLink && (
                <Link
                  href={item.processLink.href}
                  className="process-steps-content__link"
                >
                  {item.processTextLink}
                </Link>
              )}
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default ProcessStepsLine
