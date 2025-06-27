'use client'

import React, { useEffect, useState } from 'react'

const GoToTop = () => {
  const [strokeDashoffset, setStrokeDashoffset] = useState(100)
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      let pos = document.documentElement.scrollTop
      let scrollValue = Math.round((pos * 100) / calcHeight)
      let x = 1000 - scrollValue * 2

      if (x >= 400) {
        setStrokeDashoffset(x)
      } else {
        setStrokeDashoffset(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const goTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`back-to-top left ${showTopBtn === true ? 'active' : ''}`}
      onClick={goTo}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        className="goto-top-btn"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"></path>
      </svg>
      <svg
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', left: '0' }}
      >
        <circle
          id="shape"
          cx="25"
          cy="25"
          r="24"
          strokeDasharray="1000"
          strokeDashoffset={strokeDashoffset}
          strokeWidth="2"
          fill="none"
          className="circle"
        />
      </svg>
    </div>
  )
}

export default GoToTop
