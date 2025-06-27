'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

const CountUp = dynamic(() => import('react-countup'), {
  ssr: false,
})

const Counter = ({ data, id, spaceAfter, spaceBefore }) => {
  return (
    <section
      id={id}
      className={`counter ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <div className="counter__content">
        {data.countersVariation === '0' ? null : data.icon &&
          data.icon.length > 0 ? (
          <div className="content__icon">
            <Image
              src={data.icon[0].publicUrl}
              height={40}
              width={40}
              alt={
                data?.icon[0]?.alternative
                  ? data?.icon[0]?.alternative
                  : 'image'
              }
              sizes="100vw"
            />
          </div>
        ) : null}
        {data.counterData && (
          <h4 className="content__number">
            <span className="content__number-title">
              <CountUp
                end={data.counterData}
                duration={data.counterTimeeg10s ? data.counterTimeeg10s : 20}
                enableScrollSpy={true}
              />
            </span>
            {data.counterAppendeg && (
              <span className="content__number-units">
                {data.counterAppendeg}
              </span>
            )}
          </h4>
        )}
        {data.header ? (
          <h5 className="content__text">{data.header}</h5>
        ) : (
          <h5 className="content__text">{data.headline}</h5>
        )}
      </div>
    </section>
  )
}
export default Counter
