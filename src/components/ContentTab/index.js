'use client'

import React, { useEffect, useState } from 'react'
import { sanitizeLink } from '@/utils/sanitizeLink'
import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import { Tabs, Tab, Row, Col, Accordion } from 'react-bootstrap'
import ParallaxPhotoGroup from '../PhotoGroup/ParallaxPhotoGroup'
import Image from 'next/image'

const ContentTab = ({ data, spaceAfter, spaceBefore, id }) => {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false),
        setWidth(window.innerWidth)
    })
  }, [width])
  useEffect(() => {
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false),
      setWidth(window.innerWidth)
  }, [])
  return (
    <React.Fragment>
      {isMobile ? (
        <section
          className={`accordiondata ${
            spaceBefore && `frame-space-before-${spaceBefore}`
          } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
        >
          <Accordion>
            {data &&
              data.contentTabBlock &&
              data.contentTabBlock.length > 0 &&
              data.contentTabBlock.map((contentItem, index) => {
                return (
                  <Accordion.Item
                    eventKey={index}
                    key={index}
                    className="accordiondata-item"
                  >
                    <Accordion.Header className="accordiondata-header">
                      {contentItem.tabIcon &&
                      contentItem.tabIcon.length > 0 &&
                      contentItem.tabIcon[0].publicUrl ? (
                        <>
                          <Image
                            src={contentItem.tabIcon[0].publicUrl}
                            alt={
                              contentItem.tabIcon[0].properties.alternative
                                ? contentItem.tabIcon[0].properties.alternative
                                : 'image'
                            }
                            title={contentItem.tabIcon[0].properties.title}
                            height={25}
                            width={25}
                            sizes="100vw"
                          />
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                contentItem.contentTabText
                              ),
                            }}
                          />
                        </>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              contentItem.contentTabText
                            ),
                          }}
                        />
                        // DOMPurify.sanitize(contentItem.contentTabText)
                      )}
                    </Accordion.Header>
                    <Accordion.Body>
                      {contentItem.contentBlock &&
                      contentItem.contentBlock.length > 0
                        ? contentItem.contentBlock.map((item, index) => {
                            return item &&
                              item.contentImage &&
                              item.contentImage.length > 0 ? (
                              <Row key={index}>
                                <Col md={6} className="my-auto">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: DOMPurify.sanitize(
                                        item.contentText
                                      ),
                                    }}
                                    onClick={(e) => sanitizeLink(e, router)}
                                    data-aos={
                                      data.selectAnimation &&
                                      data.selectAnimation
                                    }
                                  />
                                </Col>
                                <Col md={6} className="my-5">
                                  <ParallaxPhotoGroup
                                    image1={item.contentImage[0]}
                                    image2={item.contentImage[1]}
                                    animation={data.selectAnimation}
                                  />
                                </Col>
                              </Row>
                            ) : (
                              <Row>
                                <Col>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: DOMPurify.sanitize(
                                        item.contentText
                                      ),
                                    }}
                                    onClick={(e) => sanitizeLink(e, router)}
                                    data-aos={
                                      data.selectAnimation &&
                                      data.selectAnimation
                                    }
                                  />
                                </Col>
                              </Row>
                            )
                          })
                        : ''}
                    </Accordion.Body>
                  </Accordion.Item>
                )
              })}
          </Accordion>
        </section>
      ) : (
        <section
          id={id}
          className={`contenttab ${
            spaceBefore && `frame-space-before-${spaceBefore}`
          } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
        >
          {data && data.contentTabBlock && data.contentTabBlock.length > 0 && (
            <Tabs
              className="tablayout"
              defaultActiveKey={data.contentTabBlock[0]?.contentTabText}
              id="fill-tab-example"
              justify
            >
              {data.contentTabBlock.map((contentItem, index) => {
                return (
                  <Tab
                    eventKey={contentItem.contentTabText}
                    title={
                      contentItem.tabIcon &&
                      contentItem.tabIcon.length > 0 &&
                      contentItem.tabIcon[0].publicUrl ? (
                        <>
                          <Image
                            src={contentItem.tabIcon[0].publicUrl}
                            alt={
                              contentItem.tabIcon[0].properties.alternative
                                ? contentItem.tabIcon[0].properties.alternative
                                : 'image'
                            }
                            title={contentItem.tabIcon[0].properties.title}
                            height={25}
                            width={25}
                            sizes="100vw"
                          />
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                contentItem.contentTabText
                              ),
                            }}
                          />
                        </>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              contentItem.contentTabText
                            ),
                          }}
                        />
                      )
                    }
                    key={index}
                    className={`tab-item`}
                  >
                    {contentItem.contentBlock &&
                    contentItem.contentBlock.length > 0
                      ? contentItem.contentBlock.map((item, index) => {
                          return item &&
                            item.contentImage &&
                            item.contentImage.length > 0 ? (
                            <Row key={index}>
                              <Col md={6} className="my-auto">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                      item.contentText
                                    ),
                                  }}
                                  onClick={(e) => sanitizeLink(e, router)}
                                  data-aos={
                                    data.selectAnimation && data.selectAnimation
                                  }
                                />
                              </Col>
                              <Col md={6} className="my-5">
                                <ParallaxPhotoGroup
                                  image1={item.contentImage[0]}
                                  image2={item.contentImage[1]}
                                  animation={data.selectAnimation}
                                />
                              </Col>
                            </Row>
                          ) : (
                            <Row>
                              <Col>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                      item.contentText
                                    ),
                                  }}
                                  onClick={(e) => sanitizeLink(e, router)}
                                  data-aos={
                                    data.selectAnimation && data.selectAnimation
                                  }
                                />
                              </Col>
                            </Row>
                          )
                        })
                      : ''}
                  </Tab>
                )
              })}
            </Tabs>
          )}
        </section>
      )}
    </React.Fragment>
  )
}
export default ContentTab
