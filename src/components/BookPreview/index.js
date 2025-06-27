'use client'

import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { sanitizeLink } from '@/utils/sanitizeLink'

const BookPreview = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()
  const previewRef = useRef(null)

  useEffect(() => {
    const previewInterval = setInterval(() => {
      if (previewRef.current) {
        previewRef.current.scrollTop += 1
      }
    }, 20)
    return () => clearInterval(previewInterval)
  }, [])
  return (
    <section
      className={`book-preview ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
      id={id}
    >
      <div className="book-preview__frame">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          // width="875.000000pt"
          // height="1141.000000pt"
          viewBox="0 0 875.000000 1141.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1141.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path d="M7833 11383 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
            <path d="M7953 11383 c37 -2 96 -2 130 0 34 2 4 3 -68 3 -71 0 -99 -1 -62 -3z" />
            <path d="M1138 11373 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
            <path d="M1708 11373 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path d="M1848 11373 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z" />
            <path d="M1958 11373 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path d="M2288 11373 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z" />
            <path d="M2508 11373 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path d="M2578 11373 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path d="M3268 11373 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
            <path d="M3568 11373 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path d="M3688 11373 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
            <path d="M4258 11373 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path d="M4638 11373 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path
              d="M500 11349 c-145 -12 -255 -62 -335 -151 -51 -57 -73 -95 -101 -178
-19 -54 -19 -186 -19 -5325 l0 -5270 23 -59 c34 -89 65 -138 127 -194 66 -60
156 -106 239 -121 42 -8 1195 -11 3936 -11 3830 0 3878 0 3954 20 103 26 167
62 231 131 59 65 86 115 112 209 17 62 18 303 18 5305 0 4482 -2 5247 -14
5290 -13 47 -37 102 -75 170 -9 17 -16 27 -16 24 0 -3 -20 13 -44 37 -24 23
-73 56 -108 73 -132 65 151 61 -4037 59 -2093 -1 -3844 -5 -3891 -9z m7791
-332 c18 -12 44 -38 56 -56 l23 -34 0 -5232 0 -5232 -22 -33 c-13 -18 -36 -43
-51 -54 l-28 -21 -3895 -3 c-3865 -2 -3895 -2 -3933 18 -22 11 -50 34 -63 52
l-23 33 0 5241 0 5241 29 37 c16 21 43 44 60 52 26 11 666 13 3922 14 l3891 0
34 -23z"
            />
            <path d="M8734 9895 c0 -82 2 -115 3 -72 2 43 2 110 0 150 -1 40 -3 5 -3 -78z" />
          </g>
        </svg>
        <div
          className="book-preview__content"
          ref={previewRef}
          onClick={(e) => {
            e.preventDefault(), sanitizeLink(e, router)
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.text),
          }}
        />
      </div>
    </section>
  )
}

export default BookPreview
