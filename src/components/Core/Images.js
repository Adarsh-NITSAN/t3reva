'use client'

import Link from 'next/link'
import React from 'react'
import FancyBox from './FanyBox'
import Heading from '../Heading'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

const Images = ({ data, spaceAfter, spaceBefore, elementType, id }) => {
  const { enlargeImageOnClick, gallery } = data
  const images = ({ properties, publicUrl }, border) => {
    if (!publicUrl) {
      return <>No Data Found!</>
    }

    return (
      <>
        <FancyBox
          options={{
            Carousel: {
              infinite: false,
            },
            hideScrollbar: false,
          }}
        >
          {properties.link
            ? publicUrl && (
                <Link
                  href={`${properties.link}`}
                  target={`${properties.linkData.target}`}
                >
                  <Image
                    alt={
                      properties.alternative ? properties.alternative : 'image'
                    }
                    src={publicUrl}
                    title={properties.title}
                    sizes="100vw"
                    height={properties.height ? properties.height : 0}
                    width={properties.width ? properties.width : 0}
                    className={` ${
                      border.enabled ? 'img-fluid rounded mb-4' : 'mb-0'
                    }`}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Link>
              )
            : publicUrl &&
              (enlargeImageOnClick ? (
                <Link href={publicUrl} data-fancybox="gallery">
                  <Image
                    alt={
                      properties.alternative ? properties.alternative : 'image'
                    }
                    src={publicUrl}
                    title={properties.title}
                    sizes="100vw"
                    height={properties.height ? properties.height : 0}
                    width={properties.width ? properties.width : 0}
                    className={` ${
                      border.enabled ? 'img-fluid rounded mb-4' : 'mb-0'
                    }`}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Link>
              ) : (
                <Image
                  alt={
                    properties.alternative ? properties.alternative : 'image'
                  }
                  src={publicUrl}
                  title={properties.title}
                  height={properties.height ? properties.height : 0}
                  width={properties.width ? properties.width : 0}
                  sizes="100vw"
                  priority={true}
                  className={` ${
                    border.enabled ? 'img-fluid rounded mb-4' : 'mb-0'
                  }`}
                  style={{ width: '100%', height: 'auto' }}
                />
              ))}
        </FancyBox>
        {properties.description && (
          <figcaption>{properties.description}</figcaption>
        )}
      </>
    )
  }

  const renderImage = ({ position, rows, border }) => {
    return (
      <>
        <Heading data={data}>
          <div
            className={`ce-${elementType} ce-${
              position.horizontal && position.horizontal
            } ce-${position.vertical && position.vertical}`}
          >
            <div className="ce-gallery" data-ce-columns="1" data-ce-images="1">
              <div className="ce-row">
                <div className="ce-column">
                  {rows &&
                    Object.values(rows).length &&
                    Object.values(rows).map(({ columns }, index) => {
                      return (
                        <Row key={index}>
                          {columns &&
                            Object.values(columns) &&
                            Object.values(columns).map((column, index) => {
                              return (
                                <Col key={index}>{images(column, border)}</Col>
                              )
                            })}
                        </Row>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </Heading>
      </>
    )
  }

  return (
    <section
      className={`image ${spaceAfter && `frame-space-after-${spaceAfter}`} ${
        spaceBefore && `frame-space-after-${spaceBefore}`
      }`}
      id={id}
    >
      {renderImage(gallery)}
    </section>
  )
}
export default Images
