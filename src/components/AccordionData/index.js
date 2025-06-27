'use client'

import { Accordion } from 'react-bootstrap'
const AccordionData = ({ data, spaceBefore, spaceAfter }) => {
  let aosDuration = 800
  return (
    <section
      className={`accordiondata ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Accordion>
        {data.accordionItem.map((item, index) => {
          aosDuration += 400
          return (
            <Accordion.Item
              eventKey={index}
              key={index}
              className="accordiondata-item"
              data-aos={data.selectAnimation && data.selectAnimation}
              data-aos-duration={`${aosDuration}`}
            >
              <Accordion.Header className="accordiondata-header">
                {item.title}
              </Accordion.Header>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </section>
  )
}

export default AccordionData
