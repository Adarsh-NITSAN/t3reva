'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const categories = [{ title: 'All' }]

const MasonryBlog = ({ content }) => {
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

  return (
    <section className="portfolio__masonry">
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
          <div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 300: 1, 768: 2, 1200: 3 }}
            >
              {blogItems.length > 0 ? (
                <Masonry columnsCount={3} gutter="10px">
                  {blogItems.map((item, index) => {
                    const image =
                      item?.featuredImage[0]?.images?.defaultImage?.publicUrl
                    listCategories(item.categories.listCategories)
                    return (
                      <Link
                        href={item.detail}
                        title=""
                        target="_self"
                        key={index}
                      >
                        <div className="portfolio-card">
                          {item.featuredImage[0].images !== undefined ? (
                            <div className="portfolio-transparent__image">
                              <Image
                                src={image}
                                alt="image"
                                height={0}
                                width={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: 'auto' }}
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
                    )
                  })}
                </Masonry>
              ) : (
                <h1>No Data Found!</h1>
              )}
            </ResponsiveMasonry>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MasonryBlog
