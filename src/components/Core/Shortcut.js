'use client'

import ContentType from '@/utils/contentType'
import React from 'react'

const Shortcut = ({ data }) => {
  return (
    <section className="shortcut">
      <ContentType pageData={data.shortcut} />
    </section>
  )
}

export default Shortcut
