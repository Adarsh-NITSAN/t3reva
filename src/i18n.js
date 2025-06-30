import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  // For next-intl v3.1.2, we need to handle the case where locale might not be passed
  // We'll use a try-catch approach to handle different locales
  try {
    if (locale === 'en' || !locale) {
      return {
        locale: 'en',
        messages: (await import('./assets/localization/en.json')).default,
      }
    } else if (locale === 'de') {
      return {
        locale: 'de',
        messages: (await import('./assets/localization/de.json')).default,
      }
    } else {
      // Fallback to English for unknown locales
      return {
        locale: 'en',
        messages: (await import('./assets/localization/en.json')).default,
      }
    }
  } catch (error) {
    // If there's any error, fallback to English
    return {
      locale: 'en',
      messages: (await import('./assets/localization/en.json')).default,
    }
  }
})
