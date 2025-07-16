  'use client'

  import { useContext, useEffect, useRef, useState } from 'react'
  import Link from 'next/link'
  import GlobalContext from '@/context/GlobalContext'
  import ModalVideo from './ModalVideo'
  import Image from 'next/image'

  const Video = ({ data, id, spaceAfter, spaceBefore }) => {
    const { setVideoModalURL } = useContext(GlobalContext)

    const [videoModal, setVideoModal] = useState(false)
    const [enterMouse, setEnterMouse] = useState(false)

    const playBtnRef = useRef(null)
    const coords = useRef({ x: 0, y: 0 })
    const rafRef = useRef(null)

    // Animation loop that updates every frame (but no easing)
    const updatePosition = () => {
      if (playBtnRef.current) {
        playBtnRef.current.style.left = `${coords.current.x}px`
        playBtnRef.current.style.top = `${coords.current.y}px`
      }
      rafRef.current = requestAnimationFrame(updatePosition)
    }

    useEffect(() => {
      const imageElement = document.querySelector(`#video-thumbnail-${id}`)
      if (!imageElement) return

      const handleMouseMove = (e) => {
        coords.current.x = e.offsetX
        coords.current.y = e.offsetY
      }

      if (enterMouse) {
        imageElement.addEventListener('mousemove', handleMouseMove)
        rafRef.current = requestAnimationFrame(updatePosition)
      }

      return () => {
        imageElement.removeEventListener('mousemove', handleMouseMove)
        cancelAnimationFrame(rafRef.current)
      }
    }, [enterMouse])

    const renderVideo = (data) => {
      return (
        <div className="video-section" data-aos={data.selectAnimation || undefined}>
          <div
            className={`video-container play-button-center ${
              data.image.length === 0 ? 'big-video-btn' : 'small-video-btn'
            }`}
          >
            <div
              className={data.image.length === 0 ? '' : 'play-btn-range'}
              onMouseEnter={() => setEnterMouse(true)}
              onMouseLeave={() => {
                setEnterMouse(false)
                if (playBtnRef.current) {
                  playBtnRef.current.style.left = '50%'
                  playBtnRef.current.style.top = '50%'
                  playBtnRef.current.style.transform = 'translate(-50%, -50%)'
                }
              }}
              style={{ position: 'relative' }}
            >
              {data.image[0]?.publicUrl && (
                <Image
                  id={`video-thumbnail-${id}`}
                  src={data.image[0].publicUrl}
                  alt={data.image[0].properties?.alternative || 'video thumbnail'}
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  onClick={(e) => {
                    e.preventDefault()
                    setVideoModal(true)
                    setVideoModalURL({
                      url: `${data.video[0].publicUrl}`,
                      autoplay: data.video[0].properties.autoplay,
                    })
                  }}
                />
              )}

              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setVideoModal(true)
                  setVideoModalURL({
                    url: `${data.video[0].publicUrl}`,
                    autoplay: data.video[0].properties.autoplay,
                  })
                }}
                className={`${
                  data.playButtonColor === '1'
                    ? ''
                    : data.playButtonColor === '0'
                    ? 'play-btn-gray-color'
                    : 'play-btn-secondary-color play-btn-hover-primary-color'
                }`}
              >
                <span
                  className="play-video"
                  ref={playBtnRef}                
                >
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
          spaceBefore ? `frame-space-before-${spaceBefore}` : ''
        } ${spaceAfter ? `frame-space-after-${spaceAfter}` : ''}`}
      >
        {data?.video?.length > 0 && renderVideo(data)}
        {videoModal && (
          <ModalVideo videoModal={videoModal} setVideoModal={setVideoModal} />
        )}
      </section>
    )
  }

  export default Video
