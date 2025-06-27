'use client'

import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Accordion } from 'react-bootstrap'
import DOMPurify from 'dompurify'
import { sanitizeLink } from '@/utils/sanitizeLink'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const EvenetSchedule = ({ data, spaceAfter, spaceBefore, id }) => {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(0)

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
          className={`event-schedule accordiondata ${
            spaceBefore && `frame-space-before-${spaceBefore}`
          } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
          data-aos={data.selectAnimation && data.selectAnimation}
        >
          <Accordion>
            {data &&
              data.scheduleBlock &&
              data.scheduleBlock.length > 0 &&
              data.scheduleBlock.map(
                ({ scheduleDay, scheduleContent }, index) => {
                  return (
                    <Accordion.Item eventKey={index} key={index}>
                      <Accordion.Header>{scheduleDay}</Accordion.Header>
                      <Accordion.Body>
                        <Accordion>
                          {scheduleContent.length > 0 &&
                            scheduleContent.map((item, index) => {
                              return (
                                <Accordion.Item
                                  eventKey={`${index}`}
                                  key={index}
                                >
                                  <Accordion.Header>
                                    {item.timeSchedule && (
                                      <span className="event-time">
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          strokeWidth="0"
                                          viewBox="0 0 1024 1024"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                          <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                        </svg>
                                        {moment(`${item.timeSchedule}`).format(
                                          'HH:mm'
                                        )}
                                      </span>
                                    )}
                                    {item.scheduleHeader && (
                                      <h4
                                        onClick={(e) => {
                                          e.preventDefault(),
                                            sanitizeLink(e, router)
                                        }}
                                        dangerouslySetInnerHTML={{
                                          __html: DOMPurify.sanitize(
                                            item.scheduleHeader
                                          ),
                                        }}
                                      />
                                    )}
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div className="event-handler">
                                      {item.image &&
                                        item.image.length > 0 &&
                                        item.image[0].publicUrl && (
                                          <div className="event-speaker">
                                            <Image
                                              src={item.image[0].publicUrl}
                                              alt={
                                                item.image[0].properties
                                                  .alternative
                                                  ? item.image[0].properties
                                                      .alternative
                                                  : 'image'
                                              }
                                              height={0}
                                              width={0}
                                              sizes="100vw"
                                              style={{
                                                width: 'auto',
                                                height: 'auto',
                                              }}
                                            />
                                          </div>
                                        )}

                                      {item.schedulerName && (
                                        <p className="event-speaker-name">
                                          {item.schedulerName}
                                        </p>
                                      )}

                                      {item.designationOfScheduler && (
                                        <p className="event-speaker-post">
                                          {item.designationOfScheduler}
                                        </p>
                                      )}
                                    </div>
                                    {item.schedulerText && (
                                      <div className="event-description">
                                        <p>{item.schedulerText}</p>
                                      </div>
                                    )}
                                  </Accordion.Body>
                                </Accordion.Item>
                              )
                            })}
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                }
              )}
          </Accordion>
        </section>
      ) : (
        <section
          id={id}
          className={`event-schedule tab-layout ${
            spaceBefore && `frame-space-before-${spaceBefore}`
          } ${spaceAfter && `frame-space-after-${spaceAfter}`} `}
          data-aos={data.selectAnimation && data.selectAnimation}
        >
          <Tabs
            defaultActiveKey={data?.scheduleBlock[0]?.scheduleDay}
            id="fill-tab-example"
            justify
          >
            {data.scheduleBlock &&
              data.scheduleBlock.length > 0 &&
              data.scheduleBlock.map(
                ({ scheduleDay, scheduleContent }, index) => {
                  return (
                    <Tab eventKey={scheduleDay} title={scheduleDay} key={index}>
                      <Accordion>
                        {scheduleContent.length > 0 &&
                          scheduleContent.map((item, index) => {
                            return (
                              <Accordion.Item eventKey={`${index}`} key={index}>
                                <Accordion.Header>
                                  {item.timeSchedule && (
                                    <span className="event-time">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                                      </svg>
                                      {moment(`${item.timeSchedule}`).format(
                                        'HH:mm'
                                      )}
                                    </span>
                                  )}
                                  {item.scheduleHeader && (
                                    <h4
                                      onClick={(e) => {
                                        e.preventDefault(),
                                          sanitizeLink(e, router)
                                      }}
                                      dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(
                                          item.scheduleHeader
                                        ),
                                      }}
                                    />
                                  )}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div className="event-handler">
                                    {item.image &&
                                      item.image.length > 0 &&
                                      item.image[0].publicUrl && (
                                        <div className="event-speaker">
                                          <Image
                                            src={item.image[0].publicUrl}
                                            alt={
                                              item.image[0].properties
                                                .alternative
                                                ? item.image[0].properties
                                                    .alternative
                                                : 'image'
                                            }
                                            height={0}
                                            width={0}
                                            sizes="100vw"
                                          />
                                        </div>
                                      )}

                                    {item.schedulerName && (
                                      <p className="event-speaker-name">
                                        {item.schedulerName}
                                      </p>
                                    )}

                                    {item.designationOfScheduler && (
                                      <p className="event-speaker-post">
                                        {item.designationOfScheduler}
                                      </p>
                                    )}
                                  </div>
                                  {item.schedulerText && (
                                    <div className="event-description">
                                      <p>{item.schedulerText}</p>
                                    </div>
                                  )}
                                </Accordion.Body>
                              </Accordion.Item>
                            )
                          })}
                      </Accordion>
                    </Tab>
                  )
                }
              )}
          </Tabs>
        </section>
      )}
    </React.Fragment>
  )
}
export default EvenetSchedule
