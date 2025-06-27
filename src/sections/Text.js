'use client'
import { HeadingType } from '@/components/Heading'
import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'

const Text = ({ data, spaceAfter, spaceBefore, id }) => {
  const router = useRouter()
  return (
    <div
      className={`ce-text ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
      id={id}
    >
      {data.header && (
        <HeadingType
          level={data.headerLayout}
          data={data.header}
          position={data.headerPosition}
          subheader={data.subheader}
          headerLink={data.headerLink}
        />
      )}

      {data.bodytext && (
        <div
          onClick={(e) => {
            e.preventDefault(), sanitizeLink(e, router)
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.bodytext),
          }}
        />
      )}
    </div>
  )
}
export default Text
