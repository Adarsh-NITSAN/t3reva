import Link from 'next/link'
import baseTheme from '@/utils/Theme'
import { useContext } from 'react'
import GlobalContext from '@/context/GlobalContext'

const BackgroundSwitcher = () => {
  const { themeSwitcher, setThemeSwitcher } = useContext(GlobalContext)

  // const lightThemeVariant = themeSwitcher.bg_dark !== "1" ? "Primary" : "Dark";
  // const darkThemeVariant = themeSwitcher.bg_dark == "1" ? "Primary" : "Dark";

  const handleBackground = (e, type) => {
    e.preventDefault()
    setThemeSwitcher({
      ...themeSwitcher,
      bg_dark: type === baseTheme.background.dark ? '1' : '0',
    })
  }

  return (
    <div className="category">
      <div className="category-headline">
        <h5>Background Color</h5>
      </div>
      <div className="options-links site-bg">
        <Link
          href="#"
          title=""
          target="_self"
          onClick={(e) => handleBackground(e, baseTheme.background.light)}
          className={`${
            themeSwitcher.bg_dark !== '1' ? 'active' : ''
          } bg-color-light`}
        >
          Light
        </Link>
        <Link
          href="#"
          title=""
          target="_self"
          onClick={(e) => handleBackground(e, baseTheme.background.dark)}
          className={`${
            themeSwitcher.bg_dark === '1' ? 'active' : ''
          } bg-color-dark`}
        >
          Dark
        </Link>
      </div>
    </div>
  )
}
export default BackgroundSwitcher
