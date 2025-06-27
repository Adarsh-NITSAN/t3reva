'use client'

import React, { useContext } from 'react'
import GlobalContext from '@/context/GlobalContext'
import Link from 'next/link'
import Image from 'next/image'

const FooterLogo = () => {
  const gcontext = useContext(GlobalContext)
  const { themeSwitcher, baseThemeData } = gcontext
  const footerData = gcontext.footerData?.content?.pi_flexform_content
  const { bg_dark } = themeSwitcher

  const footerLogo =
    baseThemeData.footerLogo && baseThemeData.footerLogo.value
      ? process.env.NEXT_PUBLIC_API_URL + baseThemeData.footerLogo.value
      : ''
  const footerLogoLight =
    baseThemeData.footerLightLogo && baseThemeData.footerLightLogo.value
      ? process.env.NEXT_PUBLIC_API_URL + baseThemeData.footerLightLogo.value
      : ''

  return (
    <div className="logo">
      <Link href="#">
        <span>
          {bg_dark ? (
            <>
              {footerLogoLight && (
                <Image
                  src={footerLogoLight}
                  height={
                    baseThemeData.logo_height && baseThemeData.logo_height.value
                      ? baseThemeData.logo_height.value
                      : '50'
                  }
                  width={
                    baseThemeData.logo_width && baseThemeData.logo_width.value
                      ? baseThemeData.logo_width.value
                      : '150'
                  }
                  alt={'logo'}
                  sizes="100vw"
                  style={{ width: 'auto', height: 'auto' }}
                />
              )}
            </>
          ) : (
            <>
              {footerLogo && (
                <Image
                  src={footerLogo}
                  height={
                    baseThemeData.logo_height && baseThemeData.logo_height.value
                      ? baseThemeData.logo_height.value
                      : '50'
                  }
                  width={
                    baseThemeData.logo_width && baseThemeData.logo_width.value
                      ? baseThemeData.logo_width.value
                      : '150'
                  }
                  alt={'logo'}
                  style={{ width: 'auto', height: 'auto' }}
                />
              )}
            </>
          )}
          <div
            dangerouslySetInnerHTML={{ __html: footerData?.brandname }}
            className="navbar-brand"
          ></div>
        </span>
      </Link>
    </div>
  )
}

export default FooterLogo
