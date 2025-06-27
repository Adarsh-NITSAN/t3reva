'use client'

import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'
import { Background, Parallax } from 'react-parallax'

const Separator = ({ data, spaceAfter, spaceBefore }) => {
  const router = useRouter()

  const renderSeparatorImage = () => {
    return (
      <div
        className="separator-image"
        style={{
          backgroundImage: `url(${
            data.selectVariation === '0'
              ? `data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwIDAgMzUuMjggMi4xNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIlMjNmZmZmZmYiIGQ9Ik0zNS4yOCAxLjE2Yy0zLjE3LS44LTcuMy40LTEwLjA0LjU2LTIuNzYuMTctOS4yNS0xLjQ3LTEyLjY4LTEuMy0zLjQyLjE2LTQuNjQuODQtNy4wNC44NkMzLjEyIDEuMzEgMCAuNCAwIC40djEuNzdoMzUuMjh6Ii8+PC9zdmc+`
              : 'none'
          })`,
          backgroundPositionY: `${
            data.selectVariation === '0' ? 'bottom' : ''
          }`,
          backgroundSize: `${
            data.selectVariation === '0' ? '100% 25%' : 'auto'
          }`,
        }}
      >
        <div
          onClick={(e) => {
            e.preventDefault(), sanitizeLink(e, router)
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.separatorsText),
          }}
          className="separator-content"
        />
      </div>
    )
  }
  return (
    <>
      {data.selectVariation === '0' ? (
        <section
          className={`separator ${
            spaceBefore && `frame-space-before-${spaceBefore}`
          } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
          style={{
            backgroundImage: `${
              data.separatorsBackgroundImage.length &&
              data.separatorsBackgroundImage[0].publicUrl
                ? `url(${data.separatorsBackgroundImage[0].publicUrl})`
                : `linear-gradient(to right, ${`var(--primary-color)`}, ${`var(--tertiary-color)`})`
            }`,
          }}
        >
          {renderSeparatorImage()}
        </section>
      ) : (
        <Parallax strength={300} className="separator">
          <Background>
            <div
              style={{
                height: 1000,
                width: 2000,
                backgroundImage: `${
                  data.separatorsBackgroundImage.length &&
                  data.separatorsBackgroundImage[0].publicUrl
                    ? `url(${data.separatorsBackgroundImage[0].publicUrl})`
                    : `linear-gradient(to right, ${`var(--primary-color)`}, ${`var(--tertiary-color)`})`
                }`,
              }}
            />
          </Background>
          {renderSeparatorImage()}
        </Parallax>
      )}
    </>
  )
}
export default Separator
