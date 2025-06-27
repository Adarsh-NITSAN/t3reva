'use client'

import DOMPurify from 'dompurify'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'
import Link from 'next/link'

const MinimalProcessSteps = ({ data }) => {
  const router = useRouter()
  let aosDuration = 800
  return (
    <Row>
      {data.processBlock.map((item, index) => {
        aosDuration += 400
        return (
          <Col
            key={index}
            lg={data.selectColumn === '0' ? 4 : 3}
            className="minimal-pss__col"
            data-aos={data.selectAnimation && data.selectAnimation}
            data-aos-duration={`${aosDuration}`}
          >
            <div className="minimal-pss">
              <div className="minimal-pss__number">
                <span>{item.processNumber}</span>
              </div>
              <div
                className="pss-step__content"
                onClick={(e) => {
                  e.preventDefault(), sanitizeLink(e, router)
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.processText),
                }}
              ></div>
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

export default MinimalProcessSteps
