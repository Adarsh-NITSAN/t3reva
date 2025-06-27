'use client'

import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'
import Link from 'next/link'

function TextRotator({ data, spaceAfter, spaceBefore, id }) {
  let value = data.rotatorBlock
  const [currentIndex, setCurrentIndex] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % value.length)
    }, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [value.length])

  const renderRotator = () => {
    const CustomComponent = `${
      data.headerLayout === 0 ? 'p' : `h${data.headerLayout}`
    }`
    return (
      <CustomComponent
        className={`${
          data.headerPosition ? `text-${data.headerPosition}` : ''
        } text-rotator__container ${
          data.rotatorAnimation === '0'
            ? 'slider'
            : data.rotatorAnimation === '1'
            ? 'zoom'
            : 'push'
        }`}
        data-aos={data.selectAnimation && data.selectAnimation}
      >
        {data.preText && data.preText}{' '}
        <span className="text-rotator__wrapper">
          {value.map((text, index) => {
            return (
              <span
                key={index}
                className={`text-rotator__single ${
                  currentIndex === index ? 'is-visible' : 'is-hidden'
                }`}
              >
                {text.rotatorText}
              </span>
            )
          })}
        </span>{' '}
        {data.postText && data.postText}
      </CustomComponent>
    )
  }

  return (
    <section
      className={`rotator-text ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      {data.subheadline && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.subheadline),
          }}
        />
      )}
      <div className={'text-rotator'}>{renderRotator()}</div>
      {data.buttonText && (
        <div className="text-rotator__button" data-aos="zoom-in">
          <Link
            href={data.buttonLink.href}
            className="btn btn__gradient"
            target={data.buttonLink.target}
          >
            {data.buttonText}
          </Link>
        </div>
      )}
    </section>
  )
}

export default TextRotator
