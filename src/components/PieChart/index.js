'use client'

import { useEffect, useState } from 'react'

const PieChart = ({ data, id, spaceBefore, spaceAfter }) => {
  const [progress, setProgress] = useState(0)

  const percentValue = Number(data.pieChartNumber)
  const size = 200
  const strokeWidth = 20

  useEffect(() => {
    const piechartTimer = setTimeout(() => {
      if (progress < percentValue) {
        setProgress(progress + 1)
      }
    }, 50)
    return () => {
      clearInterval(piechartTimer)
    }
  }, [progress, percentValue])

  const viewBox = `0 0 ${size} ${size}`
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI * 2
  const dash = (progress * circumference) / 100

  return (
    <section
      id={id}
      className={`${spaceBefore && `frame-space-before-${spaceBefore}`} ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      } circular-progressbar`}
      data-aos={data.selectAnimation && data.selectAnimation}
    >
      <div className="circular-progressbar__circle ">
        <svg
          width={size}
          height={size}
          viewBox={viewBox}
          className="circular-progressbar__circle-stroke"
        >
          <circle
            fill="none"
            stroke="#ccc"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeDasharray={[dash, circumference - dash]}
            strokeLinecap=""
            className="circular-progressbar__circle-stroke-main"
          />
        </svg>
        <div className="circular-progressbar__circle-title">
          <h2>{`${progress}%`}</h2>
        </div>
      </div>
      <div className="circular-progressbar__text">
        {data.pieChartTitle && <h4>{data.pieChartTitle}</h4>}
        {data.pieChartText && <p>{data.pieChartText}</p>}
      </div>
    </section>
  )
}
export default PieChart
