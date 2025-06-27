'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContentBox = ({ data, spaceBefore, spaceAfter, id }) => {
  const textEnter = () => {
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('custom-cursor-text')[0].innerHTML =
        'View'
    }
  }

  const textLeave = () => {
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('custom-cursor-text')[0].innerHTML = ''
    }
  }
  return (
    <section
      id={id}
      className={`content-box ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <div
        className={`content-box-teaser ${
          data.textAlignmnet === '0'
            ? 'text-start align-items-start'
            : data.textAlignmnet === '1'
            ? 'text-center align-items-center'
            : 'text-end align-items-end'
        }`}
        data-aos={data.selectAnimation && data.selectAnimation}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        {data.icon && data.icon.length > 0 ? (
          <div className="content-box-teaser__icon">
            <Image
              src={data.icon[0].publicUrl}
              alt={
                data.icon[0].properties.alternative
                  ? data.icon[0].properties.alternative
                  : 'image'
              }
              title={data.icon[0].properties.title}
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ) : null}

        <div className="content-box-teaser__text">
          {data.headline && <h4>{data.headline}</h4>}
          {data.subheader && <p>{data.subheader}</p>}
        </div>
        {data.contentLinkText && data.contentLink.href && (
          <div className="content-box-teaser__link">
            <Link
              href={data.contentLink.href}
              title={data.contentLink.title}
              target={data.contentLink.target}
            >
              {data.contentLinkText}
            </Link>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            </svg>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContentBox
