'use client'

import { Row, Col, Tabs, Tab, Accordion } from 'react-bootstrap'
import Link from 'next/link'
import DOMPurify from 'dompurify'
import { sanitizeLink } from '@/utils/sanitizeLink'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const PricingList = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(0)

  const renderPriceIcon = (priceIcon) => {
    return (
      <>
        {priceIcon === '0' ? (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        ) : priceIcon === '1' ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29 16.63 3H19z"></path>
          </svg>
        ) : priceIcon === '2' ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M15 18.5A6.48 6.48 0 019.24 15H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24A6.491 6.491 0 0115 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0015 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06a8.262 8.262 0 000 2H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path>
          </svg>
        ) : priceIcon === '3' ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M14 21c1.93 0 3.62-1.17 4-3l-1.75-.88C16 18.21 15.33 19 14 19H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H14v-2H9.82C9 10.42 8 9.6 8 8a3.5 3.5 0 016.78-1.22L16.63 6c-.8-2.05-2.79-3.5-5.13-3.5C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H6v2h2.47c.08.31.13.64.13 1 0 2.7-2.6 4-2.6 4v2h8z"></path>
          </svg>
        ) : priceIcon === '4' ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7h7.66z"></path>
          </svg>
        ) : priceIcon === '5' ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.758 5H19.68l-.844 3h-4.893l-.899-3h-2.088l-.899 3H5.164L4.32 5H2.242l.844 3H2v2h1.648l.563 2H2v2h2.773l1.688 6h2.083l1.8-6h3.313l1.8 6h2.083l1.688-6H22v-2h-2.211l.563-2H22V8h-1.086l.844-3zM5.727 10h3.729l-.6 2H6.289l-.562-2zm1.804 6.417L6.852 14h1.404l-.725 2.417zM10.944 12l.6-2h.912l.6 2h-2.112zm5.525 4.417L15.744 14h1.404l-.679 2.417zM17.711 12h-2.567l-.6-2h3.729l-.562 2z"></path>
          </svg>
        ) : (
          ''
        )}
      </>
    )
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 992 ? setIsMobile(true) : setIsMobile(false),
        setWidth(window.innerWidth)
    })
  }, [width])
  useEffect(() => {
    window.innerWidth <= 992 ? setIsMobile(true) : setIsMobile(false),
      setWidth(window.innerWidth)
  }, [])

  return (
    <React.Fragment>
      {isMobile ? (
        <section
          id={id}
          className={`pricing-list accordiondata ${
            spaceBefore && `frame-space-before-${spaceBefore}`
          } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
        >
          <Accordion>
            {data.pricingList &&
              data.pricingList.length > 0 &&
              data.pricingList.map(({ tabsTitle, addItem }, index) => {
                return (
                  <>
                    {tabsTitle && (
                      <Accordion.Item
                        eventKey={index}
                        key={index}
                        className="accordiondata-item"
                      >
                        <Accordion.Header className="accordiondata-header">
                          {tabsTitle}
                        </Accordion.Header>
                        <Accordion.Body>
                          <Row className="g-0">
                            {addItem &&
                              addItem.length > 0 &&
                              addItem.map((item, index) => {
                                return (
                                  <Col md={6} key={index}>
                                    <div className={`price-block`}>
                                      {data.pricingListVariation === '1' && (
                                        <div className="price-block__image">
                                          {item.image.length > 0 &&
                                            item.image[0].publicUrl && (
                                              <Image
                                                src={item.image[0].publicUrl}
                                                alt={
                                                  item.image[0].properties &&
                                                  item.image[0].properties
                                                    .alternative
                                                }
                                                title={
                                                  item.image[0].properties &&
                                                  item.image[0].properties.title
                                                }
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                style={{
                                                  width: 'auto',
                                                  height: 'auto',
                                                }}
                                              />
                                            )}
                                        </div>
                                      )}
                                      <div className="price-block__content">
                                        {item.title && (
                                          <h4>
                                            {data.pricingListVariation ===
                                            '1' ? (
                                              <Link
                                                href={'/'}
                                                target="_self"
                                                title=""
                                                dangerouslySetInnerHTML={{
                                                  __html: DOMPurify.sanitize(
                                                    item.title
                                                  ),
                                                }}
                                                onClick={(e) => {
                                                  e.preventDefault(),
                                                    sanitizeLink(e, router)
                                                }}
                                              />
                                            ) : (
                                              <span
                                                dangerouslySetInnerHTML={{
                                                  __html: DOMPurify.sanitize(
                                                    item.title
                                                  ),
                                                }}
                                                onClick={(e) => {
                                                  e.preventDefault(),
                                                    sanitizeLink(e, router)
                                                }}
                                              />
                                            )}
                                          </h4>
                                        )}
                                        <div className="price-block-content__dots"></div>
                                        <div className="price-block-content__pricing-content">
                                          {item.price && (
                                            <h4 className="pricing-content__price">
                                              <span className="pricing-content-price__currency">
                                                {renderPriceIcon(
                                                  item.chooseCurrency
                                                )}
                                              </span>
                                              {item.price}
                                            </h4>
                                          )}
                                        </div>
                                      </div>

                                      {item.content && (
                                        <p className="price-block__description">
                                          {item.content}
                                        </p>
                                      )}
                                    </div>
                                  </Col>
                                )
                              })}
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                    )}
                  </>
                )
              })}
          </Accordion>
        </section>
      ) : (
        <section
          id={id}
          className={`${spaceBefore && `frame-space-before-${spaceBefore}`} ${
            spaceAfter && `frame-space-after-${spaceAfter}`
          } tab-layout pricing-list`}
        >
          <Tabs
            defaultActiveKey={`${data.pricingList[0].tabsTitle}`}
            id="fill-tab-example"
            justify
          >
            {data.pricingList &&
              data.pricingList.length > 0 &&
              data.pricingList.map(({ tabsTitle, addItem }, index) => {
                return (
                  <Tab title={tabsTitle} eventKey={tabsTitle} key={index}>
                    <Row className="g-0">
                      {addItem &&
                        addItem.length > 0 &&
                        addItem.map((item, index) => {
                          return (
                            <Col md={6} key={index}>
                              <div className={`price-block`}>
                                {data.pricingListVariation === '1' && (
                                  <div
                                    className={`price-block__image ${
                                      item.rightImage === '1'
                                        ? 'right-side__image'
                                        : 'left-side__image'
                                    }`}
                                  >
                                    {item.image.length > 0 &&
                                      item.image[0].publicUrl && (
                                        <Image
                                          src={item.image[0].publicUrl}
                                          alt={
                                            item.image[0].properties &&
                                            item.image[0].properties.alternative
                                              ? item.image[0].properties
                                                  .alternative
                                              : 'image'
                                          }
                                          title={
                                            item.image[0].properties &&
                                            item.image[0].properties.title
                                          }
                                          height={0}
                                          width={0}
                                          sizes="100vw"
                                          style={{
                                            width: 'auto',
                                            height: 'auto',
                                          }}
                                        />
                                      )}
                                  </div>
                                )}
                                <div className="price-block__content">
                                  {item.title && (
                                    <h4>
                                      {data.pricingListVariation === '1' ? (
                                        <Link
                                          href={'/'}
                                          target="_self"
                                          title=""
                                          dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                              item.title
                                            ),
                                          }}
                                          onClick={(e) => {
                                            e.preventDefault(),
                                              sanitizeLink(e, router)
                                          }}
                                        />
                                      ) : (
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                              item.title
                                            ),
                                          }}
                                          onClick={(e) => {
                                            e.preventDefault(),
                                              sanitizeLink(e, router)
                                          }}
                                        />
                                      )}
                                    </h4>
                                  )}
                                  <div className="price-block-content__dots"></div>
                                  <div className="price-block-content__pricing-content">
                                    {item.price && (
                                      <h4 className="pricing-content__price">
                                        <span className="pricing-content-price__currency">
                                          {renderPriceIcon(item.chooseCurrency)}
                                        </span>
                                        {item.price}
                                      </h4>
                                    )}
                                  </div>
                                </div>

                                {item.content && (
                                  <p className="price-block__description">
                                    {item.content}
                                  </p>
                                )}
                              </div>
                            </Col>
                          )
                        })}
                    </Row>
                  </Tab>
                )
              })}
          </Tabs>
        </section>
      )}
    </React.Fragment>
  )
}
export default PricingList
