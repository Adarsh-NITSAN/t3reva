'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { Container } from 'react-bootstrap'
const ProcessStepsLine = dynamic(() => import('./ProcessStepsLine'), {
  ssr: false,
})
const MinimalProcessSteps = dynamic(() => import('./MinimalProcessSteps'), {
  ssr: false,
})
const ProcessSteps = ({ data, spaceBefore, spaceAfter }) => {
  return (
    <section
      className={`${spaceBefore && `frame-space-before-${spaceBefore}`} ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      } process-staps-section`}
    >
      <Container>
        {data.processVariation === '0' ? (
          <ProcessStepsLine data={data} />
        ) : (
          <MinimalProcessSteps data={data} />
        )}
      </Container>
    </section>
  )
}

export default ProcessSteps
