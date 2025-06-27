'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import Countdown from 'react-countdown'

const CountDown = ({ data, spaceBefore, spaceAfter, id }) => {
  const t = useTranslations()
  const renderCountDown = ({ formatted, completed }) => {
    if (completed) {
      return <h1>{t('completeCountdown')}</h1>
    } else {
      return (
        <React.Fragment>
          {formatted.days && (
            <span
              className="countdown__content"
              data-aos={data.selectAnimation && data.selectAnimation}
            >
              {formatted.days}
              <span className="countdown-content__label">{t('dayLabel')}</span>
            </span>
          )}

          <span className="countdown__separator">:</span>

          {formatted.hours && (
            <span
              className="countdown__content"
              data-aos={data.selectAnimation && data.selectAnimation}
            >
              {formatted.hours}
              <span className="countdown-content__label">{t('hourLabel')}</span>
            </span>
          )}

          <span className="countdown__separator">:</span>

          {formatted.minutes && (
            <span
              className="countdown__content"
              data-aos={data.selectAnimation && data.selectAnimation}
            >
              {formatted.minutes}
              <span className="countdown-content__label">
                {t('minuteLabel')}
              </span>
            </span>
          )}

          <span className="countdown__separator">:</span>

          {formatted.seconds && (
            <span
              className="countdown__content"
              data-aos={data.selectAnimation && data.selectAnimation}
            >
              {formatted.seconds}
              <span className="countdown-content__label">
                {t('secondLabel')}
              </span>
            </span>
          )}
        </React.Fragment>
      )
    }
  }
  return (
    <section
      id={id}
      className={`countdown kd-countdown ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      {data.countdown && (
        <Countdown date={data.countdown} renderer={renderCountDown} />
      )}
    </section>
  )
}
export default CountDown
