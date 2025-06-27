import React, { useEffect, useState } from 'react'

const ProgressBar = ({ data, spaceBefore, spaceAfter, id }) => {
  const [progress, setProgress] = useState(
    Array(data.progressBar.length).fill(0)
  )

  useEffect(() => {
    const targetWidths = data.progressBar.map(
      (item) => parseFloat(item.percentageNumbereg15) / 100
    )
    const fillTimes = data.progressBar.map((item) => parseInt(item.time, 10))

    const intervals = targetWidths.map((targetWidth, index) => {
      return setInterval(() => {
        if (progress[index] < targetWidth) {
          setProgress((prevProgress) => {
            const newProgress = [...prevProgress]
            newProgress[index] = Math.min(
              newProgress[index] + 0.01,
              targetWidth
            )
            return newProgress
          })
        } else {
          clearInterval(intervals[index])
        }
      }, 20)
    })
    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [data.progressBar, progress])

  return (
    <section
      id={id}
      className={`${spaceBefore && `frame-space-before-${spaceBefore}`} ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      }`}
    >
      {data.header && <h2 className="mb-5">{data.header}</h2>}
      {data.progressBar.map((item, index) => {
        return (
          <div
            className="progressBar"
            key={index}
            data-aos={data.selectAnimation && data.selectAnimation}
          >
            <div
              className="progressBar__head"
              style={{ width: `${progress[index] * 100}%` }}
            >
              <div className="progressBar-static">
                <div className="progressBar-static__title">
                  <h4>{item.title}</h4>
                </div>
                <h4 className="progressBar-static__marker">
                  {Number(progress[index] * 100).toFixed(0)}%
                </h4>
              </div>
            </div>
            <div className="progressBar-full thick-solid">
              <div
                className="progressBar-full__fill"
                style={{ width: `${progress[index] * 100}%` }}
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProgressBar
