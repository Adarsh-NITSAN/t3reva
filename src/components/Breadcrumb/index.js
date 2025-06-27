'use client'

import React, { useContext } from 'react'
import GlobalContext from '@/context/GlobalContext'
import Link from 'next/link'

const Breadcrumb = () => {
  const { breadcrumbs } = useContext(GlobalContext)

  return (
    <section className="breadcrumbs frame-space-after-extra-large section--bg-gray-color">
      {breadcrumbs &&
        breadcrumbs.map(({ active, current, link, target, title }, index) => {
          return (
            <React.Fragment key={index}>
              <span>
                {current !== 1 ? (
                  <Link href={link}>{title}</Link>
                ) : (
                  <span>{title}</span>
                )}
              </span>
              {current !== 1 && (
                <span className="breadcrumbs-separator">/</span>
              )}
            </React.Fragment>
          )
        })}
    </section>
  )
}
export default Breadcrumb
