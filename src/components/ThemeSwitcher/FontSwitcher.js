'use client'
import GlobalContext from '@/context/GlobalContext'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'

const FontSwitcher = () => {
  const { themeSwitcher, setThemeSwitcher } = useContext(GlobalContext)

  const [showGoogleFonts, setShowGoogleFonts] = useState(false)

  useEffect(() => {
    if (themeSwitcher.fontFamilyName) {
      const fontName = themeSwitcher.fontFamilyName
      if (fontName === 'Sofia Pro') {
        document.body.style.setProperty('font-family', 'var(--font-sofia)')
      } else if (fontName === 'Brandon') {
        document.body.style.setProperty('font-family', 'var(--font-brandon)')
      } else if (fontName === 'Playfair') {
        document.body.style.setProperty('font-family', 'var(--font-playfair)')
      } else {
        setShowGoogleFonts(true)
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = `https://fonts.googleapis.com/css?family=${fontName}`

        document.head.appendChild(link)
        document.body.style.fontFamily = `${themeSwitcher.fontFamilyName.replace(
          ';',
          ''
        )}`
      }
    }
  }, [themeSwitcher.fontFamilyName])

  const getselected = (option) => {
    if (option === 'Sofia Pro') {
      return 'Sofia Pro'
    } else if (option === 'Brandon') {
      return 'Brandon'
    } else if (option === 'Playfair') {
      return 'Playfair'
    } else if (option === 'Custom Font' || option !== '') {
      return 'Custom Font'
    } else {
      return 'Sofia Pro'
    }
  }

  return (
    <>
      <div className="category">
        <h5>Main Font Family</h5>
        <div className="input-group input-group-2 custom-select-1 font-selector">
          <select
            className="form-select form-control main-font-family-select h-auto"
            value={getselected(themeSwitcher.fontFamilyName)}
            aria-label={'Main Font Family'}
            onChange={(e) => {
              if (e.target.value === 'Custom Font') {
                setShowGoogleFonts(true)
              } else {
                setShowGoogleFonts(false)
                setThemeSwitcher({
                  ...themeSwitcher,
                  fontFamilyName: e.target.value,
                  fontFamilyLink: '',
                })
              }
            }}
          >
            <option value="Sofia Pro">Sofia Pro</option>
            <option value="Brandon">Brandon</option>
            <option value="Playfair">Playfair</option>
            <option value="Custom Font">Custom Font</option>
          </select>
        </div>
      </div>
      {showGoogleFonts && (
        <div className="category font-customised">
          <div className="category-headline">
            <h5>Google Font( Without https://fonts.googleapis.com/css2 )</h5>
          </div>
          <div className="input-group input-group-2 font-switcher font-element">
            <textarea
              name="tx_style[font-face]"
              className="font-family-wrapper"
              rows="6"
              cols="50"
              value={themeSwitcher.fontFamilyLink}
              placeholder="?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
              onChange={(e) =>
                setThemeSwitcher({
                  ...themeSwitcher,
                  fontFamilyLink: e.target.value,
                })
              }
            />
            <h5>
              <strong>
                CSS rules to specifying families (Without “font-family:”)
              </strong>
            </h5>
            <input
              type="text"
              className="font-family__input"
              name="tx_style[font-family-name]"
              value={themeSwitcher.fontFamilyName}
              placeholder="Poppins"
              onChange={(e) =>
                setThemeSwitcher({
                  ...themeSwitcher,
                  fontFamilyName: e.target.value
                    ? e.target.value.replace(';', '')
                    : e.target.value,
                })
              }
            />
          </div>
          <Link href="https://fonts.google.com/" target="_blank" title="">
            Select From Google Fonts {` `}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </Link>
        </div>
      )}
    </>
  )
}
export default FontSwitcher
