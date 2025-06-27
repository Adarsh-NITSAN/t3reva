'use client'

import Heading from '../Heading'
import Link from 'next/link'
import PDF from '@/assets/images/icons/pdf.webp'
import JPG from '@/assets/images/icons/jpg.webp'
import MP3 from '@/assets/images/icons/mp3.webp'
import Image from 'next/image'

const Uploads = ({
  data,
  spaceAfter,
  spaceBefore,
  layoutType,
  elementType,
}) => {
  const {
    media,
    displayFileSizeInformation,
    displayDescription,
    displayInformation,
  } = data
  return (
    <section
      className={`uploads ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Heading data={data} layoutType={layoutType} elementType={elementType}>
        <ul className={`ce-${elementType}`}>
          {media.map(({ publicUrl, properties }, index) => {
            return (
              <li key={index}>
                {displayInformation === '2' && (
                  <Link href={publicUrl} target="_blank">
                    {properties.extension === 'svg' && (
                      <Image
                        alt={
                          properties.alternative
                            ? properties.alternative
                            : 'image'
                        }
                        src={publicUrl}
                        width={64}
                        height={64}
                        sizes="100vw"
                      />
                    )}
                    {properties.extension === 'mp4' && (
                      <video width={150} controls>
                        <source src={publicUrl} type="video/mp4" />
                      </video>
                    )}
                    {properties.extension === 'mp3' && (
                      <audio controls>
                        <source src={publicUrl} type="audio/mpeg" />
                      </audio>
                    )}
                    {properties.extension === 'jpg' && (
                      <Image
                        alt={
                          properties.alternative
                            ? properties.alternative
                            : 'image'
                        }
                        src={publicUrl}
                        width={150}
                        height={120}
                        sizes="100vw"
                      />
                    )}
                    {properties.extension === 'pdf' && (
                      <Image
                        alt={
                          properties.alternative
                            ? properties.alternative
                            : 'image'
                        }
                        src={publicUrl}
                        width={150}
                        height={85}
                        sizes="100vw"
                      />
                    )}
                  </Link>
                )}
                {displayInformation === '1' &&
                  ((properties.extension === 'pdf' && (
                    <Image src={PDF.src} alt={'pdf'} height={15} width={35} />
                  )) ||
                    (properties.extension === 'jpg' && (
                      <Image src={JPG.src} alt={'jpg'} height={15} width={35} />
                    )) ||
                    (properties.extension === 'mp3' && (
                      <Image src={MP3.src} alt={'mp3'} height={15} width={35} />
                    )) ||
                    (properties.extension === 'mp4' && (
                      <Image src={''} alt={'mp4'} height={15} width={35} />
                    )) ||
                    (properties.extension === 'svg' && (
                      <Image src={''} alt={'svg'} height={15} width={35} />
                    )))}
                <>
                  <Link href={publicUrl} target="_blank">
                    <span className="ce-uploads-fileName">
                      {properties.filename}
                    </span>
                  </Link>
                  {displayDescription === '1' && properties.description && (
                    <span className="ce-uploads-description">
                      {properties.description}
                    </span>
                  )}
                  {displayFileSizeInformation === '1' && properties.size && (
                    <span className="ce-uploads-filesize">
                      {properties.size}
                    </span>
                  )}
                </>
              </li>
            )
          })}
        </ul>
      </Heading>
    </section>
  )
}
export default Uploads
