import GlobalContext from '@/context/GlobalContext'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'

const LoaderSwitch = ({ loaderType }) => {
  const { themeSwitcher, setThemeSwitcher } = useContext(GlobalContext)

  const t = useTranslations()

  const handleHeaderSwitcher = (e) => {
    setThemeSwitcher({ ...themeSwitcher, loader: e.target.value })
    document.body.classList.add('loading-overlay-showing')
    setTimeout(() => {
      document.body.classList.remove('loading-overlay-showing')
    }, 10000)
  }

  const renderLabel = (label) => {
    const spacedString = label.replace(/([A-Z])/g, ' $1')
    const words = spacedString.split(' ')
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    return capitalizedWords.join(' ')
  }

  return (
    <>
      <div className="category">
        <h5>{t('pre_loaders')}</h5>
        <div className="custom-select-1 pre-loader">
          <select
            className="form-select form-control loading-overlay-select h-auto"
            onChange={handleHeaderSwitcher}
            value={themeSwitcher.loader}
            defaultValue={loaderType.value}
          >
            {loaderType.labelValueArray.map(({ label, value }, index) => {
              return (
                <option value={value} key={index}>
                  {renderLabel(label)}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}
export default LoaderSwitch
