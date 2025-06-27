import GlobalContext from '@/context/GlobalContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const PageStripeSwitcher = () => {
  const { themeSwitcher, setThemeSwitcher } = useContext(GlobalContext)

  const handleSetStripe = (e) => {
    e.preventDefault()
    setThemeSwitcher({ ...themeSwitcher, pageStripeOption: '1' })
  }
  const handleNotSetStripe = (e) => {
    e.preventDefault()
    setThemeSwitcher({ ...themeSwitcher, pageStripeOption: '0' })
  }
  return (
    <div className="category">
      <div className="category-headline">
        <h5>Page Stripe</h5>
      </div>
      <div className="options-links">
        <Link
          href={'#'}
          className={`${
            themeSwitcher.pageStripeOption === '1'
              ? 'active bg-color-light'
              : 'bg-color-dark'
          }`}
          onClick={(e) => handleSetStripe(e)}
        >
          Show
        </Link>
        <Link
          href={'#'}
          className={`${
            themeSwitcher.pageStripeOption === '0'
              ? 'active bg-color-light'
              : 'bg-color-dark'
          }`}
          onClick={(e) => handleNotSetStripe(e)}
        >
          Hide
        </Link>
      </div>
    </div>
  )
}

export default PageStripeSwitcher
