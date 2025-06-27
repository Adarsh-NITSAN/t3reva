'use client'

import React from 'react'
import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'
import Image from 'next/image'

const FeaturesBox = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()
  return (
    <section
      id={id}
      className={`features-box ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <div
        className="features-box-container"
        data-aos={data.selectAnimation && data.selectAnimation}
      >
        {data.image && data.image.length > 0 && data.image[0] ? (
          <div className="features-box-container__image">
            <Image
              src={data.image[0].publicUrl}
              alt={
                data.image[0].properties.alternative
                  ? data.image[0].properties.alternative
                  : 'image'
              }
              title={data.image[0].properties.alternative}
              sizes="100vw"
              height={
                data.image[0].properties.height
                  ? data.image[0].properties.height
                  : 0
              }
              width={
                data.image[0].properties.width
                  ? data.image[0].properties.width
                  : 0
              }
              className={`${!data.image[0].properties.height ? 'h-100' : ''} ${
                !data.image[0].properties.width ? 'w-100' : ''
              }`}
            />
          </div>
        ) : null}

        <div
          className="features-box-container__text"
          onClick={(e) => {
            e.preventDefault(), sanitizeLink(e, router)
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.featuredText),
          }}
        />
      </div>
    </section>
  )
}

export default FeaturesBox
