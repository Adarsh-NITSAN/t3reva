'use client'

import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const RelatedBlog = ({ data }) => {
  return (
    <div className="related-blog">
      <Row className="mx-auto">
        {data?.data?.relatedPosts?.map((item, index) => {
          const image =
            item?.featuredImage[0]?.images?.listViewVerticalImage?.publicUrl
          return (
            <Col key={index} lg={4} md={12} sm={12}>
              <div className="news-detail">
                <Card className="news">
                  {item.featuredImage[0].images !== undefined && (
                    <div className="news-image">
                      <Link href={item?.detail} title="News-1" target="_self">
                        <Card.Img src={image} />
                      </Link>
                    </div>
                  )}
                  <div className="news-category">
                    <ul>
                      {item.tags?.listTags?.map((tag) => {
                        return (
                          <li key={tag.id}>
                            <Link href={tag.tagLink} title="" target="_self">
                              {tag.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="news-body">
                    <Card.Title>
                      <Link href={item?.detail} title="" target="_self">
                        {item.title}
                      </Link>
                    </Card.Title>
                    <div className="news-content">
                      <p>{item.content}</p>
                    </div>
                    <div className="read-more-btn">
                      <Link href={item?.detail} title="" target="_self">
                        Read more
                      </Link>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                      </svg>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default RelatedBlog
