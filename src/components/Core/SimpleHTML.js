'use client'

import DOMPurify from 'dompurify'

const SimpleHTML = ({
  data,
  elementType,
  layoutType,
  spaceAfter,
  spaceBefore,
}) => {
  const { bodytext, header } = data
  return (
    <section
      className={`frame frame-${layoutType} frame-type-${elementType} frame-layout-0 ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      } ${spaceBefore && `frame-space-before-${spaceBefore}`}`}
    >
      {header && <h2>{header}</h2>}
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bodytext) }} />
    </section>
  )
}

export default SimpleHTML
