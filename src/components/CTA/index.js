'use client'

import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import DOMPurify from 'dompurify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { sanitizeLink } from '@/utils/sanitizeLink'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Parallax = dynamic(
  () => import('react-parallax').then((re) => re.Parallax),
  { ssr: false }
)

const CTA = ({ data, spaceBefore, spaceAfter, id }) => {
  const router = useRouter()
  let backgroundImage = data.backgroundImage[0]?.publicUrl
  return (
    <section id={id}>
      {data.checkParallaxScroll === '1' ? (
        <Parallax
          bgImage={backgroundImage}
          strength={150}
          className={`cta ${
            spaceBefore && `frame-space-before-${spaceBefore}`
          } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
        >
          <Container
            className={`cta-parallax ${
              data.selectVariation === '2'
                ? 'center-content'
                : data.selectVariation === '1'
                ? 'right-content'
                : data.selectVariation === '3'
                ? 'left-content'
                : ''
            }`}
          >
            {data.selectVariation === '0' ? (
              <Row className="mx-auto">
                <Col className="cta-default__content">
                  <div
                    onClick={(e) => {
                      e.preventDefault(), sanitizeLink(e, router)
                    }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.text),
                    }}
                    data-aos={data.selectAnimation && data.selectAnimation}
                  />
                  {data.buttonText !== '' && (
                    <Link
                      href={data.buttonLink.href}
                      className={`btn ${
                        data.buttonVariation === '3'
                          ? 'btn__gradient'
                          : data.buttonVariation === '2'
                          ? 'btn__outline'
                          : data.buttonVariation === '1'
                          ? 'btn--secondary'
                          : ''
                      }`}
                    >
                      {data.buttonText}
                    </Link>
                  )}
                  {data &&
                    data.playstoreImage &&
                    data.playstoreImage.length > 0 && (
                      <div className="cta-parallax__content-image">
                        {data.playstoreImage.map((image, index) => {
                          return (
                            <Link
                              href={
                                image.properties.link
                                  ? image.properties.link
                                  : '#'
                              }
                              key={index}
                            >
                              <Image
                                src={image.publicUrl}
                                alt={
                                  image.properties.alternative
                                    ? image.properties.alternative
                                    : 'image'
                                }
                                title={image.properties.title}
                                height={0}
                                width={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: 'auto' }}
                              />
                            </Link>
                          )
                        })}
                      </div>
                    )}
                </Col>
              </Row>
            ) : (
              <div className="cta-parallax__content">
                <div
                  onClick={(e) => {
                    e.preventDefault(), sanitizeLink(e, router)
                  }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.text),
                  }}
                  data-aos={data.selectAnimation && data.selectAnimation}
                />

                {data &&
                  data.playstoreImage &&
                  data.playstoreImage.length > 0 && (
                    <div className="cta-parallax__content-image">
                      {data.playstoreImage.map((image, index) => {
                        return (
                          <Link
                            href={
                              image.properties.link
                                ? image.properties.link
                                : '#'
                            }
                            key={index}
                          >
                            <Image
                              src={image.publicUrl}
                              alt={
                                image.properties.alternative
                                  ? image.properties.alternative
                                  : 'image'
                              }
                              title={image.properties.title}
                              height={0}
                              width={0}
                              sizes="100vw"
                              style={{ width: 'auto', height: 'auto' }}
                            />
                          </Link>
                        )
                      })}
                    </div>
                  )}
                {data.buttonText !== '' && (
                  <Link
                    href={data.buttonLink.href}
                    className={`btn ${
                      data.buttonVariation === '3'
                        ? 'btn__gradient'
                        : data.buttonVariation === '2'
                        ? 'btn__outline'
                        : data.buttonVariation === '1'
                        ? 'btn__icon'
                        : ''
                    }`}
                  >
                    {data.buttonText}
                  </Link>
                )}
              </div>
            )}
          </Container>
        </Parallax>
      ) : (
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className={`cta ${
            spaceBefore && `frame-space-before-${spaceBefore}`
          } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
        >
          <Container
            className={`cta-container ${
              data.selectVariation === '2'
                ? 'center-content'
                : data.selectVariation === '1'
                ? 'right-content'
                : data.selectVariation === '3'
                ? 'left-content'
                : ''
            } `}
          >
            {data.selectVariation === '0' ? (
              <Row className="mx-auto">
                <Col className="cta-default__content">
                  <div
                    onClick={(e) => {
                      e.preventDefault(), sanitizeLink(e, router)
                    }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.text),
                    }}
                    data-aos={data.selectAnimation && data.selectAnimation}
                  />
                  {data.buttonText !== '' && (
                    <Link
                      href={data.buttonLink.href}
                      className={`btn ${
                        data.buttonVariation === '3'
                          ? 'btn__gradient'
                          : data.buttonVariation === '2'
                          ? 'btn__outline'
                          : data.buttonVariation === '1'
                          ? 'btn--secondary'
                          : ''
                      }`}
                    >
                      {data.buttonText}
                    </Link>
                  )}
                  {data &&
                    data.playstoreImage &&
                    data.playstoreImage.length > 0 && (
                      <div className="cta-parallax__content-image">
                        {data.playstoreImage.map((image, index) => {
                          return (
                            <Link
                              href={
                                image.properties.link
                                  ? image.properties.link
                                  : '#'
                              }
                              key={index}
                            >
                              <Image
                                src={image.publicUrl}
                                alt={
                                  image.properties.alternative
                                    ? image.properties.alternative
                                    : 'image'
                                }
                                title={image.properties.title}
                                height={0}
                                width={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: 'auto' }}
                              />
                            </Link>
                          )
                        })}
                      </div>
                    )}
                </Col>
              </Row>
            ) : (
              <div className="cta-container__content">
                <div
                  onClick={(e) => {
                    e.preventDefault(), sanitizeLink(e, router)
                  }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.text),
                  }}
                  data-aos={data.selectAnimation && data.selectAnimation}
                />
                {data &&
                  data.playstoreImage &&
                  data.playstoreImage.length > 0 && (
                    <div className="cta-parallax__content-image">
                      {data.playstoreImage.map((image, index) => {
                        return (
                          <Link
                            href={
                              image.properties.link
                                ? image.properties.link
                                : '#'
                            }
                            key={index}
                          >
                            <Image
                              src={image.publicUrl}
                              alt={
                                image.properties.alternative
                                  ? image.properties.alternative
                                  : 'image'
                              }
                              title={image.properties.title}
                              height={0}
                              width={0}
                              sizes="100vw"
                              style={{ width: 'auto', height: 'auto' }}
                            />
                          </Link>
                        )
                      })}
                    </div>
                  )}
                {data.buttonText !== '' && (
                  <Link
                    href={data.buttonLink.href}
                    className={`btn ${
                      data.buttonVariation === '3'
                        ? 'btn__gradient'
                        : data.buttonVariation === '2'
                        ? 'btn__outline'
                        : data.buttonVariation === '1'
                        ? 'btn__icon'
                        : ''
                    }`}
                  >
                    {data.buttonText}
                  </Link>
                )}
              </div>
            )}
          </Container>
        </div>
      )}
    </section>
  )
}

export default CTA
