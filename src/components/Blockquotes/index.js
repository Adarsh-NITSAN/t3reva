'use client'
import DOMPurify from 'dompurify'
import React from 'react'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'

const BlockQuotes = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()
  return (
    <section
      id={id}
      className={`blockquote ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`} 
  `}
      data-aos={data.selectAnimation && data.selectAnimation}
    >
      {data.blockquoteBlock.map((item, index) => {
        return (
          <div
            onClick={(e) => {
              e.preventDefault(), sanitizeLink(e, router)
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.blockquoteText),
            }}
            className="blockquote-text"
            key={index}
          />
        )
      })}
    </section>
  )
}
export default BlockQuotes
