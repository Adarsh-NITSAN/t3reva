'use client'

import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'

const ModernPricingPlan = ({ toggleSwitch, plans, animation }) => {
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
            height="35"
            width="35"
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
            height="35"
            width="35"
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
            height="35"
            width="35"
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
            height="35"
            width="35"
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
            height="35"
            width="35"
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
            height="35"
            width="35"
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
  let aosDuration = 800
  return (
    <div className="pricing-heading">
      {plans.header && <h2 className="h1">{plans.header}</h2>}
      {plans.text && <p>{plans.text}</p>}

      <Row className="justify-content-center">
        {plans.pricingPlans &&
          plans.pricingPlans.length > 0 &&
          plans.pricingPlans.map(
            (
              {
                discount,
                currencySymbol,
                price,
                discountPrice,
                period,
                title,
                description,
                buttonLabel,
                buttonLink,
                heighlightColor,
                addItem,
              },
              index
            ) => {
              aosDuration += 400
              return (
                <Col
                  lg={`${12 / plans.pricingPlans.length}`}
                  md={4}
                  key={index}
                  className="px-lg-3 px-md-0"
                  data-aos={animation && animation}
                  data-aos-duration={`${aosDuration}`}
                >
                  <div className="pricing-wrapper">
                    <div
                      className={`pricing-wrapper__table minimal-style kd-animated fadeInUp kd-animate ${
                        heighlightColor === '1' ? 'has-bg-color active' : ''
                      }`}
                    >
                      <Row className={`table__pricing`}>
                        <div className="pricing-plans">
                          <div className="price">
                            <span
                              className={`pricing-price default-plan sale-${
                                discount === '0' ? 'no' : 'yes'
                              }`}
                            >
                              <span className="pt-normal-price">
                                {currencySymbol && (
                                  <span className="currency">
                                    {renderPriceIcon(currencySymbol)}
                                  </span>
                                )}
                                {price && (
                                  <span
                                    className={`${
                                      discount === '1'
                                        ? 'old-price-number'
                                        : 'price-number'
                                    }`}
                                  >
                                    {price}
                                  </span>
                                )}
                              </span>
                              {discount === '1' ? (
                                <span className="pt-sale-price">
                                  {currencySymbol && (
                                    <span className="currency">
                                      {renderPriceIcon(currencySymbol)}
                                    </span>
                                  )}
                                  {discountPrice && (
                                    <span className="price-number">
                                      {discountPrice}
                                    </span>
                                  )}
                                </span>
                              ) : null}
                            </span>
                            <div className="pricing-meta">
                              {period && (
                                <span className="pricing-time default-plan">
                                  <sub>
                                    {period.startsWith('/')
                                      ? period
                                      : `/${period}`}
                                  </sub>
                                </span>
                              )}
                            </div>
                          </div>
                          {title && (
                            <div className="pricing-title">
                              <h5 className="pricing-title-content">{title}</h5>
                            </div>
                          )}
                          {description && (
                            <span className="pricing-subtitle">
                              {description}
                            </span>
                          )}
                        </div>
                        <div className="pricing-options-container minimal-style">
                          {addItem &&
                            addItem.length > 0 &&
                            addItem.map((item, index) => {
                              return (
                                <div className="pricing-row" key={index}>
                                  <div className="pricing-value">
                                    <div className="pricing-option pricing-opt-check-icon">
                                      {item.icon === '0' ? null : item.icon ===
                                        '1' ? (
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          strokeWidth="0"
                                          viewBox="0 0 1024 1024"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                                        </svg>
                                      ) : (
                                        <svg
                                          stroke="currentColor"
                                          fill="none"
                                          strokeWidth="0"
                                          viewBox="0 0 15 15"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{ color: 'red' }}
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      )}
                                      {item.title && (
                                        <span
                                          className={`pricing-option-text ${
                                            item.tooltipText === ''
                                              ? ''
                                              : 'with-tooltip'
                                          } `}
                                        >
                                          {item.title}
                                        </span>
                                      )}
                                      {item.tooltipText && (
                                        <div className="pricing-tooltip-content">
                                          <p className="pricing-option-tooltip">
                                            {item.tooltipText}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                        </div>
                      </Row>
                    </div>
                    {buttonLabel && (
                      <Link
                        className="pricing-btn-minimal"
                        href={buttonLink}
                        target="_self"
                        title=""
                      >
                        {buttonLabel}{' '}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="26"
                          width="26"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          ></path>
                        </svg>
                      </Link>
                    )}
                  </div>
                </Col>
              )
            }
          )}
      </Row>
    </div>
  )
}
export default ModernPricingPlan
