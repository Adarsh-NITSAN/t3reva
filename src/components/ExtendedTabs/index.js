'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const ExtendedTabs = ({ data, spaceBefore, spaceAfter, id }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? index : index)
  }

  return (
    <section
      id={id}
      className={`extended-tab ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Row className="ext-tab fadeIn gy-5">
        <Col
          lg={{ span: 8, order: data.rightsideImage === '1' ? 2 : 1 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 12, order: 2 }}
          data-aos={data.selectAnimation && data.selectAnimation}
        >
          {data.selectVariation.map((item, index) => {
            return (
              <div
                key={index}
                className={`ext-tab-image ${
                  activeIndex === index ? 'show' : ''
                }`}
              >
                {item.extendedImage[0]?.publicUrl !== undefined ? (
                  <Image
                    src={item.extendedImage[0]?.publicUrl}
                    alt={
                      item.extendedImage[0]?.properties.alternative
                        ? item.extendedImage[0]?.properties.alternative
                        : 'image'
                    }
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                ) : null}
              </div>
            )
          })}
        </Col>
        <Col
          lg={{ span: 4, order: 1 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 12, order: 2 }}
        >
          <ul className="ext-tab__controller">
            {data.selectVariation.map((item, index) => {
              return (
                <li
                  className={`${activeIndex === index ? 'active' : ''}`}
                  onClick={() => {
                    onItemClick(index)
                  }}
                  key={index}
                >
                  <Link
                    href="#"
                    scroll={false}
                    className={`${activeIndex === index ? 'active' : ''}`}
                  >
                    <div
                      className={`ext-tab__controller-text ${
                        item.extendedStep === '' && 'ext-tab__controller-dots'
                      } `}
                    >
                      {item.extendedStep !== '' && (
                        <span className="controller-text__overline">
                          {item.extendedStep}
                        </span>
                      )}
                      {item.extendedTitle && <h5>{item.extendedTitle}</h5>}
                      {item.extendedText && <p>{item.extendedText}</p>}
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>
    </section>
  )
}

export default ExtendedTabs
