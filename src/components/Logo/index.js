'use client'

import React, { useContext } from 'react'
import GlobalContext from '@/context/GlobalContext'
import Link from 'next/link'
import Image from 'next/image'

const Logo = ({ data }) => {
  const gcontext = useContext(GlobalContext)
  const { themeSwitcher, baseThemeData } = gcontext
  const { bg_dark } = themeSwitcher

  const headerLogo = baseThemeData.logo
    ? baseThemeData.logo.value
      ? process.env.NEXT_PUBLIC_API_URL + baseThemeData.logo.value
      : ''
    : data.logo.value
    ? process.env.NEXT_PUBLIC_API_URL + data.logo.value
    : ''
  const headerLogoLight = baseThemeData.lightLogo
    ? baseThemeData.lightLogo.value
      ? process.env.NEXT_PUBLIC_API_URL + baseThemeData.lightLogo.value
      : ''
    : data.lightLogo.value
    ? process.env.NEXT_PUBLIC_API_URL + data.lightLogo.value
    : ''

  let logoHeight = baseThemeData.logo_height
    ? baseThemeData.logo_height.value
    : data?.logo_height?.value

  let logoWidth = baseThemeData.logo_width
    ? baseThemeData.logo_width.value
    : data?.logo_width?.value
  return (
    <React.Fragment>
      <Link className="logo" href={'/'}>
        <span>
          {bg_dark === '1' ? (
            <>
              {headerLogoLight && (
                <Image
                  src={headerLogoLight}
                  height={logoHeight ? logoHeight : '50'}
                  width={logoWidth ? logoWidth : '150'}
                  alt={'logo'}
                  sizes="100vw"
                />
              )}
            </>
          ) : (
            <>
              {headerLogo && (
                <Image
                  src={headerLogo}
                  height={logoHeight ? logoHeight : '50'}
                  width={logoWidth ? logoWidth : '150'}
                  alt={'logo'}
                  sizes="100vw"
                />
              )}
            </>
          )}

          {baseThemeData &&
          baseThemeData.brandName &&
          baseThemeData.brandName.value
            ? baseThemeData.brandName.value
            : ''}
        </span>
      </Link>
    </React.Fragment>
  )
}

export default Logo
