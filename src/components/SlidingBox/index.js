'use client'

import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const SlidingBox = ({ data, spaceBefore, spaceAfter, id }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 1200 ? setIsMobile(true) : setIsMobile(false),
        setWidth(window.innerWidth)
    })
  }, [width])

  useEffect(() => {
    window.innerWidth <= 1200 ? setIsMobile(true) : setIsMobile(false),
      setWidth(window.innerWidth)
  }, [])

  const addActive = (index) => {
    if (!isMobile) {
      let list = document.getElementById(id)
      const nodes = list.querySelectorAll('.sliding-box__child')
      nodes.forEach((node) => {
        if (node.classList.contains(`sliding-box__child-${id}-${index}`)) {
          node.classList.add('active')
        } else {
          node.classList.remove('active')
        }
      })
    }
  }

  return (
    <section
      id={id}
      className={`s-box ${spaceBefore && `frame-space-before-${spaceBefore}`} ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      }`}
    >
      <Row>
        <Col>
          <div
            className="sliding-box"
            data-aos={data.selectAnimation && data.selectAnimation}
          >
            {data.slidingBox &&
              data.slidingBox.length > 0 &&
              data.slidingBox.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {item.image && item.image.length > 0 ? (
                      <div
                        className={`sliding-box__child sliding-box__child-${id}-${index}`}
                        onMouseOver={(e) => addActive(index)}
                      >
                        <div className="sliding-box-child__image">
                          <Image
                            src={item.image[0].publicUrl}
                            height={200}
                            width={200}
                            alt={
                              item.image[0].properties.alternative
                                ? item.image[0].properties.alternative
                                : 'image'
                            }
                            title={item.image[0].properties.title}
                            sizes="100vw"
                          />
                        </div>

                        <div className="sliding-box-child__wrapper">
                          {item.title && <h4>{item.title}</h4>}
                          {item.content && <p>{item.content}</p>}
                          {item.buttonLabel && (
                            <div className="wrapper__btn">
                              <Link
                                href={item.buttonLink}
                                target="_self"
                                title=""
                              >
                                {item.buttonLabel}
                                <span>
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
                                </span>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : null}
                  </React.Fragment>
                )
              })}
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default SlidingBox
