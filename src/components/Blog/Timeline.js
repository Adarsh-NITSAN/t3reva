'use client'

import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const Timeline = ({ content }) => {
  return (
    <section className="timeline timeline-align-zigzag">
      <div className="timeline-line"></div>
      {content.list.map((item, index) => {
        return (
          <div className="timeline-line__item" key={index}>
            <div className="timeline-line__card">
              <Link href={item.detail} className="timeline-line__card-link">
                <div className="timeline-item-date">
                  {moment(item.publishDate, 'YY-MM-DD').format('MMMM Do YYYY')}
                </div>
                <div className="timeline-item-description">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Link>
            </div>
            <div className="timeline-line__arrow"></div>
            <div className="timeline-line__icon">{item.icon}</div>
          </div>
        )
      })}
    </section>
  )
}

export default Timeline
