'use client'

import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import RelatedBlog from './RelatedBlog'
import Image from 'next/image'

const DetailsBlog = ({
  image,
  title,
  authors,
  categories,
  tags,
  publishDate,
}) => {
  const date = new Date(publishDate * 1000)
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return (
    <section className="news-details">
      <Container>
        <h1>{title}</h1>
        <div className="news-details__meta">
          <div className="news-details-published">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
            </svg>
            {publishDate && <span> {`Last updated on ${formattedDate}`} </span>}
          </div>
          {authors?.map((auth, index) => {
            return (
              <div className="news-details-author" key={index}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 320H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16z"></path>
                </svg>
                <Link
                  href={auth.location}
                  title=""
                  target="_self"
                  aria-label={auth.name}
                >
                  {auth.name}
                </Link>
              </div>
            )
          })}

          {categories?.map((item, index) => {
            return (
              <div className="news-details-blog-label" key={index}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"></path>
                </svg>

                <Link href={'#'} title="" target="_self" aria-label={item.name}>
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
        <div className="news-details__image">
          <Image
            src={image?.publicUrl}
            alt={
              image?.properties.alternative
                ? image.properties.alternative
                : 'image'
            }
            title={image?.properties.title}
            sizes="100vw"
            height={image?.properties.height ? image?.properties.height : 0}
            width={image?.properties.width ? image?.properties.width : 0}
            className={`${!image?.properties.height ? 'h-100' : ''} ${
              !image?.properties.width ? 'w-100' : ''
            }`}
          />
        </div>
        <div className="news-details__meta-content">
          <div className="meta-content__tags">
            {tags?.map((tag, index) => {
              return (
                <Link
                  href={'#'}
                  title=""
                  target="_self"
                  key={index}
                  aria-label={tag.name}
                >
                  {tag.title}
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
      <RelatedBlog />
    </section>
  )
}

export default DetailsBlog
