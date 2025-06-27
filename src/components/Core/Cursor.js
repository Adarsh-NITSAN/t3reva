'use client'

import React, { useEffect, useRef, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'

const Cursor = () => {
  const [cursorVariant, setCursorVariant] = useState('default')
  const [mousePointer, setMousePointer] = useState({
    x: 0,
    y: 0,
  })
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return
    const mouseMove = (e) => {
      const element = ref.current
      const x = e.clientX - element.offsetLeft - element.offsetWidth / 2
      const y = e.clientY - element.offsetTop - element.offsetHeight / 2
      setMousePointer({ x, y })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePointer.x,
      y: mousePointer.y,
      width: 24,
      height: 24,
      background: '#0000001a',
    },
    text: {
      opacity: 1,
      color: '#fff',
      height: 80,
      width: 80,
      background: '#00234B80',
      fontSize: '25px',
      x: mousePointer.x,
      y: mousePointer.y,
    },
    video: {
      opacity: 1,
      color: '#fff',
      height: 80,
      width: 80,
      fontSize: '20px',
      x: mousePointer.x,
      y: mousePointer.y,
    },
  }

  const springProps = useSpring({
    ...variants[cursorVariant],
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (
        document.getElementsByClassName('custom-cursor-text')[0].style
          .backgroundImage !== '' &&
        document.getElementsByClassName('custom-cursor-text')[0].style
          .backgroundImage !== 'none'
      ) {
        setCursorVariant('text')
      } else {
        if (
          document.getElementsByClassName('custom-cursor-text')[0].innerHTML !==
          ''
        ) {
          setCursorVariant('video')
        } else {
          setCursorVariant('default')
        }
      }
    }
  }, [mousePointer])

  return (
    <>
      <animated.div
        ref={ref}
        className="circle"
        style={springProps}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <span
          className="custom-cursor-text"
          style={{
            height: 50,
            width: 50,
            borderRadius: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 55,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        ></span>
      </animated.div>
    </>
  )
}

export default Cursor
