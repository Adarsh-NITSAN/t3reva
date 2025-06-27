'use client'

import moment from 'moment'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pagination from './Pagination'
import getAPIData from '@/utils/GetData'
import { useState, useEffect } from 'react'
import GlobalContext from '@/context/GlobalContext'

const GridBlog = ({ content, spaceAfter, spaceBefore }) => {
  const { showPagination } = useContext(GlobalContext)
  const [paginationLink, setPaginationLink] = useState()
  const [nsData, setNewsData] = useState(content || [])

  useEffect(() => {
    async function getnews() {
      if (paginationLink) {
        const newsData = await getAPIData(paginationLink)

        const reCall = (content) => {
          if (content.items && content.items.length > 0) {
            content.items.map(({ contentElements }) => {
              contentElements.map(({ content, type }) => {
                if (type === 'blog_posts') {
                  setNewsData(content.data)
                } else {
                  reCall(content)
                }
              })
            })
          }
        }

        newsData.data.content.colPos0.map(({ content, type }) => {
          if (type === 'blog_posts') {
            setNewsData(content.data)
          } else {
            if (content.items && content.items.length > 0) {
              content.items.map(({ contentElements }) => {
                contentElements.map(({ content, type }) => {
                  if (type === 'blog_posts') {
                    setNewsData(content.data)
                  } else {
                    reCall(content)
                  }
                })
              })
            }
          }
        })
      }
    }
    getnews()
  }, [paginationLink])

  return (
    <section
      className={`gridblog  ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Row className="mx-auto">
        {nsData &&
          nsData.list &&
          nsData.list.length > 0 &&
          nsData.list.map((item, index) => {
            const image =
              item?.featuredImage[0]?.images?.listViewFeaturedImage?.publicUrl
            return (
              <Col key={index} lg={4} md={6} sm={12}>
                <div className="news-detail">
                  <Card className="news">
                    {item.featuredImage[0].images !== undefined && (
                      <div className="news-image">
                        <Link href={item.detail} title="blog">
                          <Card.Img src={image} alt="blog-image" />
                        </Link>
                      </div>
                    )}
                    <div className="news-category">
                      <ul>
                        {item.categories?.listCategories?.map(
                          (categories, index) => {
                            return (
                              <li key={categories.id}>
                                <Link
                                  href={categories.slug}
                                  title=""
                                  target="_self"
                                >
                                  {categories.title}
                                </Link>
                              </li>
                            )
                          }
                        )}
                      </ul>
                    </div>
                    <div className="news-body">
                      <Card.Title>
                        <Link href={item.detail} title="" target="_self">
                          {item.title}
                        </Link>
                      </Card.Title>
                      <div className="news-meta">
                        <span className="published">
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
                          <Link href={item.detail} title="" target="_self">
                            {moment(item.publishDate, 'YY-MM-DD').format(
                              'MMMM Do YYYY'
                            )}
                          </Link>
                        </span>
                        {item.authors?.listAuthors?.map((auth, index) => {
                          return (
                            <span className="author" key={index}>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="Keyboard">
                                  <g>
                                    <path d="M19.437,18.5H4.562a2.5,2.5,0,0,1-2.5-2.5V8a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v8A2.5,2.5,0,0,1,19.437,18.5ZM4.562,6.5A1.5,1.5,0,0,0,3.062,8v8a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8a1.5,1.5,0,0,0-1.5-1.5Z"></path>
                                    <path d="M5.548,16.5h12.9a.5.5,0,0,0,0-1H5.548a.5.5,0,0,0,0,1Z"></path>
                                    <g>
                                      <circle
                                        cx="5.82"
                                        cy="9.248"
                                        r="0.75"
                                      ></circle>
                                      <circle
                                        cx="9.94"
                                        cy="9.248"
                                        r="0.75"
                                      ></circle>
                                      <circle
                                        cx="14.06"
                                        cy="9.248"
                                        r="0.75"
                                      ></circle>
                                      <circle
                                        cx="18.18"
                                        cy="9.248"
                                        r="0.75"
                                      ></circle>
                                    </g>
                                    <g>
                                      <circle
                                        cx="5.82"
                                        cy="12.998"
                                        r="0.75"
                                      ></circle>
                                      <circle
                                        cx="9.94"
                                        cy="12.998"
                                        r="0.75"
                                      ></circle>
                                      <circle
                                        cx="14.06"
                                        cy="12.998"
                                        r="0.75"
                                      ></circle>
                                      <circle
                                        cx="18.18"
                                        cy="12.998"
                                        r="0.75"
                                      ></circle>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                              {auth.name}
                            </span>
                          )
                        })}
                        <span className="commet">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
                          </svg>
                          {item.listComments?.length === undefined
                            ? 0
                            : item.listComments.length}
                        </span>
                      </div>
                      <div className="news-content">
                        <p>{item.description}</p>
                      </div>
                      <div className="read-more-btn">
                        <Link href={item.detail} title="" target="_self">
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
      {showPagination ? (
        <Pagination
          data={nsData.paginationBelow}
          setPaginationLink={setPaginationLink}
        />
      ) : null}
    </section>
  )
}

export default GridBlog
