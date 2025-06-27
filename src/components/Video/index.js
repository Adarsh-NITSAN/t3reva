'use client'

import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import GlobalContext from '@/context/GlobalContext'
import ModalVideo from './ModalVideo'
import Image from 'next/image'

const Video = ({ data, id, spaceAfter, spaceBefore }) => {
  const { setVideoModalURL } = useContext(GlobalContext)

  const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 })
  const [enterMouse, setEnterMouse] = useState(false)
  const [videoModal, setVideoModal] = useState(false)

  const playBtnRef = useRef(null)

  useEffect(() => {
    if (enterMouse) {
      if (localCoords.y < 35) {
        playBtnRef &&
          playBtnRef.current &&
          playBtnRef.current.setAttribute(
            'style',
            'top : ' +
              (localCoords.y + 35) +
              'px; left: ' +
              localCoords.x +
              'px;'
          )
      } else if (
        localCoords.y >
        data?.image[0]?.properties?.dimensions?.height - 35
      ) {
        playBtnRef &&
          playBtnRef.current &&
          playBtnRef.current.setAttribute(
            'style',
            'top : ' +
              (localCoords.y - 35) +
              'px; left: ' +
              localCoords.x +
              'px;'
          )
      } else {
        playBtnRef &&
          playBtnRef.current &&
          playBtnRef.current.setAttribute(
            'style',
            'top : ' + localCoords.y + 'px; left: ' + localCoords.x + 'px;'
          )
      }
    } else {
      playBtnRef &&
        playBtnRef.current &&
        playBtnRef.current.setAttribute('style', 'top : 50%; left: 50%')
    }
  }, [localCoords, enterMouse, data?.image])

  useEffect(() => {
    const imageElement1 = document.querySelector(`#video-thumbnail-${id}`)

    const handleGlobalMouseMove = (event) => {
      setLocalCoords({
        x: event.offsetX,
        y: event.offsetY,
      })
    }

    if (imageElement1) {
      imageElement1.addEventListener('mousemove', handleGlobalMouseMove)
    }
  })

  const renderTwoColumnVideo = (data) => {
    return (
      <div
        className={`video-section`}
        data-aos={data.selectAnimation && data.selectAnimation}
      >
        <div
          className={`video-container play-button-center ${
            data.image.length === 0 ? 'big-video-btn ' : 'small-video-btn '
          }`}
        >
          <div
            className={`${data.image.length === 0 ? '' : 'play-btn-range'}`}
            onMouseOver={() =>
              data.image.length === 0 ? '' : setEnterMouse(true)
            }
            onMouseLeave={() =>
              data.image.length === 0 ? '' : setEnterMouse(false)
            }
          >
            {data.image[0] && data.image[0].publicUrl && (
              <Image
                id={`video-thumbnail-${id}`}
                src={data.image[0].publicUrl}
                alt={
                  data.image[0].properties.alternative
                    ? data.image[0].properties.alternative
                    : 'image'
                }
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                onClick={(e) => {
                  e.preventDefault()
                  setVideoModal(!videoModal)
                  setVideoModalURL({
                    url: `${data.video[0].publicUrl}`,
                    autoplay: data.video[0].properties.autoplay,
                  })
                }}
              />
            )}

            <Link
              href={'#'}
              title=""
              target="_self"
              className={`${
                data.playButtonColor === '1'
                  ? ''
                  : data.playButtonColor === '0'
                  ? 'play-btn-gray-color'
                  : 'play-btn-secondary-color play-btn-hover-primary-color'
              }`}
              onClick={(e) => {
                e.preventDefault()
                setVideoModal(!videoModal)
                setVideoModalURL({
                  url: `${data.video[0].publicUrl}`,
                  autoplay: data.video[0].properties.autoplay,
                })
              }}
            >
              <span className="play-video" ref={playBtnRef}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="play-btn"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      id={id}
      className={`modal-video ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      {data &&
        data.video &&
        data.video.length > 0 &&
        renderTwoColumnVideo(data)}

      {videoModal && (
        <ModalVideo videoModal={videoModal} setVideoModal={setVideoModal} />
      )}
    </section>
  )
}
export default Video
