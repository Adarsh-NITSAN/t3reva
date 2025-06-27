'use client'

import React from 'react'

const Divider = ({
  data,
  spaceAfter,
  spaceBefore,
  layoutType,
  elementType,
}) => {
  return (
    <div
      className={`frame-${layoutType} ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`} divider`}
    >
      <div
        className={`${
          data.dividerSize === '2'
            ? 'spacer-small'
            : data.dividerSize === '1'
            ? 'spacer-medium'
            : 'spacer-default'
        }`}
      >
        {data.withoutBorder !== '0' && (
          <hr
            className={`${
              data.color === '2'
                ? 'bg-dark-color'
                : data.color === '1'
                ? 'bg-gray-color'
                : ''
            }${data.dividerType === '2' ? 'divider__border-dashed' : ''}`}
          />
        )}
      </div>
    </div>
  )
}

export default Divider
