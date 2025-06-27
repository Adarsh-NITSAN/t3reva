'use client'

import DOMPurify from 'dompurify'
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import { sanitizeLink } from '@/utils/sanitizeLink'

const PricingComparison = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()
  return (
    <section
      id={id}
      className={`${spaceBefore && `frame-space-before-${spaceBefore}`} ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      } pricing-comparison`}
    >
      <Container>
        {data.header && <h2 className="pricing-header">{data.header}</h2>}
        {data.text && <h6 className="pricing-subheader">{data.text}</h6>}
        {data.pricingComparison && (
          <div
            onClick={(e) => {
              e.preventDefault(), sanitizeLink(e, router)
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.pricingComparison),
            }}
            className="table-responsive"
          />
        )}
      </Container>
    </section>
  )
}
export default PricingComparison
