'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const ParallaxPhotoGroup = ({ image1, image2, imageOverlap }) => {
  const ref = useRef(null)
  useEffect(() => {
    function handleScroll() {
      const elements = document.querySelectorAll(
        '.photo-group__second-image, .photo-group__first-image'
      )

      elements.forEach((element) => {
        const parallax = element.getBoundingClientRect()
        const inViewport =
          parallax.top <= window.innerHeight && parallax.bottom >= 0
        if (inViewport) {
          const firstTop = parallax.top + window.pageYOffset
          const winScrollTop = window.pageYOffset
          let parallaxValue = 0

          if (element.classList.contains('photo-group__second-image')) {
            parallaxValue = -0.08
          } else if (element.classList.contains('photo-group__first-image')) {
            parallaxValue = 0.08
          }
          const shiftDistance = (firstTop - winScrollTop) * parallaxValue
          const media = window.matchMedia('(max-width: 700px)')
          if (media.matches) {
            element.style.transform = `translateY(${0}px)`
          } else {
            element.style.transform = `translateY(${shiftDistance}px)`
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`photo-group ${
        imageOverlap === '1' || image2 === undefined
          ? 'photo-group-overlap'
          : 'left-right-image'
      }`}
      ref={ref}
    >
      {image1 && (
        <div className="photo-group__first-image">
          <Image
            src={image1.publicUrl}
            alt={
              image1.properties.alternative
                ? image1.properties.alternative
                : 'image'
            }
            title={image1.properties.title}
            data-aos="fade-up"
            sizes="100vw"
            height={0}
            width={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      )}
      {image2 && (
        <div className="photo-group__second-image">
          <Image
            src={image2.publicUrl}
            alt={
              image2.properties.alternative
                ? image2.properties.alternative
                : 'image'
            }
            title={image2.properties.title}
            data-aos="fade-down"
            sizes="100vw"
            height={0}
            width={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      )}
    </div>
  )
}

export default ParallaxPhotoGroup
