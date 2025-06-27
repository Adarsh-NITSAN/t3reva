import { useContext } from 'react'
import GlobalContext from '@/context/GlobalContext'
import Link from 'next/link'
import baseTheme from '@/utils/Theme'

const LayoutSwithcer = () => {
  const { themeSwitcher, setThemeSwitcher } = useContext(GlobalContext)
  // const wideContainerVariant =
  //   themeSwitcher.boxedLayout !== '1' ? 'primary' : 'dark'
  // const boxedContainerVariant =
  //   themeSwitcher.boxedLayout === '1' ? 'primary' : 'dark'

  const handleLayout = (e, type) => {
    e.preventDefault()
    setThemeSwitcher({
      ...themeSwitcher,
      boxedLayout: type === baseTheme.layouts.boxed ? '1' : '0',
      bgPattern:
        type === baseTheme.layouts.boxed ? themeSwitcher.bgPattern : 'none',
    })
  }

  return (
    <div className="category">
      <div className="category-headline">
        <h5>Layouts Switcher</h5>
      </div>
      <div className="options-links layout">
        <Link
          href="#"
          title=""
          target="_self"
          // variant={wideContainerVariant}
          onClick={(e) => handleLayout(e, baseTheme.layouts.wide)}
          className={`${
            themeSwitcher.boxedLayout !== '1' ? 'active' : ''
          } layout--wide`}
        >
          Wide
        </Link>
        <Link
          href="#"
          title=""
          target="_self"
          // variant={boxedContainerVariant}
          onClick={(e) => handleLayout(e, baseTheme.layouts.boxed)}
          className={`${
            themeSwitcher.boxedLayout === '1' ? 'active' : ''
          } layout--boxed`}
        >
          Boxed
        </Link>
      </div>
    </div>
  )
}
export default LayoutSwithcer
