'use client'

import { useState } from 'react'
import ModernPricingPlan from './ModernPricingPlans'
import ClassicPricingPlans from './ClassicPricingPlans'
import { Container } from 'react-bootstrap'

const PricingPlans = ({ data, id, spaceBefore, spaceAfter }) => {
  const [toggleSwitch, setToggleSwitch] = useState(false)

  return (
    <section
      id={id}
      className={`pricing-plans__variation ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Container>
        {data.pricingPlansVariation && data.pricingPlansVariation === '0' ? (
          <ModernPricingPlan
            toggleSwitch={toggleSwitch}
            plans={data}
            animation={data.selectAnimation}
          />
        ) : (
          <ClassicPricingPlans
            toggleSwitch={toggleSwitch}
            plans={data}
            animation={data.selectAnimation}
          />
        )}
      </Container>
    </section>
  )
}
export default PricingPlans
