'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
const categories = [{ title: 'All' }]

const IsotopeBlog = ({ content, spaceAfter, spaceBefore }) => {
  const [blogItems, setBlogItems] = useState(content.list)
  const [activeIndex, setActiveIndex] = useState(0)

  const getItem = (value, index) => {
    const filteredItems = content.list.filter((item) => {
      if (item.categories.listCategories.length === 0) {
        return null
      } else {
        return item.categories.listCategories.every((category) => {
          return category.title === value
        })
      }
    })

    if (value === 'All') {
      setBlogItems(content.list)
    } else {
      setBlogItems(filteredItems)
    }
    setActiveIndex(index)
  }

  function listCategories(data) {
    data.forEach((element) => {
      if (!categories.some((obj) => obj.title === element.title)) {
        let newObj = { title: element.title }
        categories.push(newObj)
      }
    })
  }

  const textEnter = () => {
    if (typeof window !== 'undefined') {
      document.getElementsByClassName(
        'custom-cursor-text'
      )[0].style.backgroundImage = `url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiBzdHJva2U9IiNGRkYiIHZpZXdCb3g9IjAgMCA1NyA1NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIiB4PSItNTAlIiB5PSItNTAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMTAiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48L2RlZnM+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzQuMjQzIDMzLjI0M2E5IDkgMCAwMS0xMi43MjggMCA5IDkgMCAwMTAtMTIuNzI4IDkgOSAwIDAxMTIuNzI4IDAgOSA5IDAgMDEwIDEyLjcyOHptLTEuNDE0LTEuNDE0YTYuOTk5IDYuOTk5IDAgMDAwLTkuODk5IDYuOTk5IDYuOTk5IDAgMDAtOS44OTkgMCA2Ljk5OSA2Ljk5OSAwIDAwMCA5Ljg5OSA2Ljk5OSA2Ljk5OSAwIDAwOS44OTkgMHptMi4xMjEgMy41MzZsMS40MTQtMS40MTQgMi4xMTUgMi4xMTVjLjM5NC4zOTQuNCAxLjAyOC4wMDcgMS40MjFhLjk5OC45OTggMCAwMS0xLjQyMS0uMDA3bC0yLjExNS0yLjExNXoiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==)`
    }
  }

  const textLeave = () => {
    if (typeof window !== 'undefined') {
      document.getElementsByClassName(
        'custom-cursor-text'
      )[0].style.backgroundImage = 'none'
    }
  }
  return (
    <section
      className={`portfolio__isotope ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`} `}
    >
      <Container>
        <div className="portfolio">
          <div className="portfolio-category">
            <ul className="portfolio-category-list">
              {categories &&
                categories.length > 0 &&
                categories.map((category, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li
                        className={`portfolio-category-item ${
                          index === activeIndex ? 'active' : ''
                        }`}
                        onClick={() => getItem(category.title, index)}
                      >
                        <Link href={'#'} scroll={false} title="" target="_self">
                          {' '}
                          {category.title}
                        </Link>
                      </li>
                    </React.Fragment>
                  )
                })}
            </ul>
          </div>

          <Row className="gy-4">
            {blogItems.map((item, index) => {
              const image =
                item?.featuredImage[0]?.images?.listViewVerticalImage?.publicUrl
              listCategories(item?.categories?.listCategories)
              return (
                <Col
                  lg={4}
                  md={6}
                  key={index}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <Link href={item.detail} title="" target="_self">
                    <div className="portfolio-card" key={index}>
                      {item.featuredImage[0].images !== undefined ? (
                        <div className="portfolio-transparent__image">
                          <Image
                            src={image}
                            alt="image"
                            height={0}
                            width={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                          />
                          <div className="portfolio-transparent__title">
                            <h5>{item.title}</h5>
                          </div>
                        </div>
                      ) : (
                        <div className="portfolio-gradient-text">
                          <h5 className="portfolio-gradient-text__title">
                            {item.title}
                          </h5>
                        </div>
                      )}
                    </div>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default IsotopeBlog
