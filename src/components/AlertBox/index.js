'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const AlertBox = ({ data, id, spaceAfter, spaceBefore }) => {
  const [alerts, setAlerts] = useState(data)

  const AlertType = [
    {
      type: '1',
      alertType: 'warning',
      className: 'alert-box-warning',
    },
    {
      type: '2',
      alertType: 'error',
      className: 'alert-box-error',
    },
    {
      type: '3',
      alertType: 'info',
      className: 'alert-box-info',
    },
    {
      type: '4',
      alertType: 'success',
      className: 'alert-box-success',
    },
  ]

  const removeAlert = (index) => {
    // let newData = alerts.alertBlock.splice(index, 1)
    setAlerts(alerts)
  }

  const rerenderAlert = () => {
    return (
      <>
        {alerts.alertBlock &&
          alerts.alertBlock.map(
            ({
              alertText,
              alertType,
              selectAlertMessage,
              alertIcon,
              alertCloseIcon,
            }) => {
              return AlertType.map(({ type, className }, index) => {
                return (
                  <React.Fragment key={id + index}>
                    {selectAlertMessage === type ? (
                      <div
                        className={`alert-box ${
                          selectAlertMessage === type ? className : ''
                        }`}
                        data-aos={data.selectAnimation && data.selectAnimation}
                      >
                        {alertIcon && alertIcon.length > 0 && (
                          <div className="alert-box__icon">
                            <Image
                              src={alertIcon[0].publicUrl}
                              alt={'icon'}
                              sizes="100vw"
                              height={30}
                              width={30}
                              className={`${className}`}
                            />
                          </div>
                        )}
                        {alertText && (
                          <div className="alert-box__icon-message">
                            {alertText}
                          </div>
                        )}
                        {alertCloseIcon && alertCloseIcon.length > 0 && (
                          <button
                            className="alert-box__close-icon"
                            onClick={() => removeAlert(index)}
                          >
                            <Image
                              src={alertCloseIcon[0].publicUrl}
                              alt={'icon'}
                              sizes="100vw"
                              height={18}
                              width={18}
                              className={`${className}`}
                            />
                          </button>
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                )
              })
            }
          )}
      </>
    )
  }

  // useEffect(() => {
  //   rerenderAlert()
  // }, [alerts.alertBlock.length])

  return (
    <section
      id={id}
      className={`alert-box-section ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      {rerenderAlert()}
    </section>
  )
}
export default AlertBox
