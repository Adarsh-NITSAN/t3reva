'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Hotspot = ({ data, spaceBefore, spaceAfter, id }) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handelHover = (index) => {
    setActiveIndex(index === activeIndex ? index : index)
  }

  useEffect(() => {
    let hotspotMedia = window.matchMedia('(min-width: 992px)')
    const handleWidthChange = (e) => {
      if (e.matches) {
        // Media query matches
        setActiveIndex(-1)
      }
    }
    hotspotMedia.addListener(handleWidthChange)
    return () => hotspotMedia.removeListener(handleWidthChange)
  }, [])
  return (
    <section
      id={id}
      className={`hotspot ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <div className="hotspot-overlay">
        {data.image.length > 0 && data.image[0] && data.image[0].publicUrl && (
          <Image
            src={data.image[0].publicUrl}
            data-aos={data.selectAnimation && data.selectAnimation}
            alt={'icon'}
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
        {data?.image.length !== 0 && (
          <>
            {data.hotspotTooltip.map((item, index) => {
              return (
                <div
                  className={`hotspot-item enable-pulse ${
                    item.selectTooltipPosition === '0'
                      ? 'fadeInLeft tooltip-left'
                      : item.selectTooltipPosition === '1'
                      ? 'fadeInRight tooltip-right'
                      : item.selectTooltipPosition === '2'
                      ? 'fadeInUp tooltip-top'
                      : 'fadeInDown tooltip-bottom '
                  }`}
                  style={{
                    left: `${item.hotspotTooltipXPositioneg5}%`,
                    top: `${item.hotspotTooltipYPositioneg10}%`,
                  }}
                  onClick={() => {
                    handelHover(index)
                  }}
                  key={index}
                >
                  <div className="hotspot-item__tooltip">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="tooltip__icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                  </div>
                  <div className="hotspot-item__tooltip-content">
                    {item.hotspotTooltipTitle && (
                      <h4>{item.hotspotTooltipTitle}</h4>
                    )}
                    {item.hotspotTooltipText && (
                      <p>{item.hotspotTooltipText}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>
      <div className="hotspot__mobile d-lg-none">
        {data.hotspotTooltip.map((tooltips, index) => {
          return (
            <div
              className={`hotspot-mobile__tooltip ${
                activeIndex === index ? 'active-tooltip' : ''
              }`}
              key={index}
            >
              <div className="tooltip__content">
                {tooltips.hotspotTooltipTitle && (
                  <h4>{tooltips.hotspotTooltipTitle}</h4>
                )}
                {tooltips.hotspotTooltipText && (
                  <p>{tooltips.hotspotTooltipText}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hotspot
