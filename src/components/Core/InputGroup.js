'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

const InputGroup = ({
  type,
  label,
  name,
  data,
  defaultValue,
  register,
  errors,
  identifier,
  validation,
  setError,
  setValue,
  clearErrors,
  getValues,
  fieldAdditionalValue,
}) => {
  const {
    fluidAdditionalAttributes,
    elementDescription,
    confirmationLabel,
    text,
    options,
    allowedMimeTypes,
    onlyCountries,
  } = data
  const { required, placeholder, min, max } = fluidAdditionalAttributes || ''

  const { tx_form_formframework } = errors
  const t = useTranslations()

  const availableData = tx_form_formframework
    ? Object.values(tx_form_formframework)[0]
    : errors

  const [showDescription, setShowDescription] = useState(false)

  const checkValidation = (name) => {
    validation.map((item) => {
      var fileData = document.getElementById(`${name}`)
      if (fileData.files[0].type !== allowedMimeTypes[0]) {
        setError(name, {
          message: `${t('accept_only')} ${allowedMimeTypes[0]}`,
        })
      } else if (item.identifier === 'NotEmpty') {
        if (!fileData) {
          setError(name, {
            message: `required`,
          })
        }
      } else if (item.identifier === 'FileSize') {
        if (
          fileData.files[0].size / 1048576 >
          Number(
            String(item?.options?.maximum)
              .replace(/B/g, '')
              .replace(/K/g, '')
              .replace(/M/g, '')
              .replace(/G/g, '')
          )
        ) {
          setError(name, {
            message: `${t('file_size_is_more_than')} ${item.options.maximum}`,
          })
        } else if (
          fileData.files[0].size / 1048576 <
          Number(
            String(item?.options?.minimum)
              .replace(/B/g, '')
              .replace(/K/g, '')
              .replace(/M/g, '')
              .replace(/G/g, '')
          )
        ) {
          setError(name, {
            message: `${t('file_size_is_less_than')} ${item.options.minimum}`,
          })
        } else {
          clearErrors(`${name}`)
          setValue(name, fileData.files[0])
        }
      } else {
        clearErrors(`${name}`)
        setValue(name, fileData.files[0])
      }
    })
  }
  return (
    <>
      {elementDescription ? (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          version="1"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setShowDescription(!showDescription)}
        >
          <circle fill="#2196F3" cx="24" cy="24" r="21"></circle>
          <rect x="22" y="22" fill="#fff" width="4" height="11"></rect>
          <circle fill="#fff" cx="24" cy="16.5" r="2.5"></circle>
        </svg>
      ) : null}
      {type !== 'checkbox' && label && (
        <label className={`control-label`} htmlFor={`${name}`}>
          {label}
          {required ? <span className="required"> *</span> : null}
        </label>
      )}

      {type === 'text' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              className={`form-control type-text ${
                required ? 'validates-as-required not-valid' : ''
              }`}
              type={`${type}`}
              id={`${name}`}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                }))}
            />

            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}

      {type === 'textarea' && (
        <>
          <span className="custom-form-control-wrap">
            <textarea
              id={`${name}`}
              name={name}
              className="form-control type-text"
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                }))}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}

      {type === 'password' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              type={type}
              id={`${name}`}
              name={name}
              className="form-control type-text"
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                    message: t('validate_password'),
                  },
                }))}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}
      {type === 'statictext' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              className="form-control type-text"
              type="text"
              id={`${name}`}
              name={name}
              defaultValue={text}
              readOnly
            />
          </span>
        </>
      )}
      {type === 'advancedpassword' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              className="form-control type-text"
              type="password"
              id="password_1"
              name="password_1"
              placeholder="Enter Your Password"
              required={true}
              {...(register &&
                register('password_1', {
                  required: t('this_field_is_required'),
                }))}
            />

            {errors && errors.password_1 && errors.password_1.message && (
              <span className="form-not-valid-tip">
                {t('password_required')}
              </span>
            )}
          </span>
          <span className="custom-form-control-wrap">
            <input
              className="form-control type-text"
              type="text"
              id={`${name}`}
              name={name}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? `${t('confirm_same_password')}` : null,
                  validate: (match) => {
                    const password = getValues('password_1')
                    return match === password || t('same_pasword_message')
                  },
                }))}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}

            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}
      {type === 'telephone' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              className="form-control type-text"
              type="tel"
              id={`${name}`}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                  pattern: {
                    value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                    message: t('phone_number_is_not_valid'),
                  },
                }))}
              onKeyDown={(e) => {
                let reg = /^[0-9 ]/i
                if (
                  !reg.test(e.key) &&
                  e.key !== 'Backspace' &&
                  e.key !== 'Tab'
                ) {
                  e.preventDefault()
                }
              }}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}

      {type === 'email' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              className="form-control type-text"
              type={`${type}`}
              id={`${name}`}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      'Email address must be a valid address',
                  },
                }))}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}

      {(type === 'imageupload' || type === 'fileupload') && (
        <>
          <span className="custom-form-control-wrap">
            <input
              type="file"
              className={`form-control type-text `}
              id={`${name}`}
              name={name}
              required={required}
              accept={allowedMimeTypes[0]}
              onChange={() => checkValidation(name)}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}
      {type === 'url' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              className="form-control type-text"
              type={`${type}`}
              id={`${name}`}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                  pattern: {
                    value:
                      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                    message: t('please_enter_valid_url'),
                  },
                }))}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}

      {type === 'number' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              className="form-control type-text"
              type={`${type}`}
              id={`${name}`}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                  min: {
                    value: min,
                    message: `${t('minimum_value')} ${min}`,
                  },
                  max: {
                    value: max,
                    message: `${t('maximum_value')} ${max}`,
                  },
                }))}
              onKeyDown={(e) => {
                let reg = /^[0-9 ]/i
                if (
                  !reg.test(e.key) &&
                  e.key !== 'Backspace' &&
                  e.key !== 'Tab'
                ) {
                  e.preventDefault()
                }
              }}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}

      {type === 'date' && (
        <>
          <span className="custom-form-control-wrap">
            <input
              className="form-control type-text"
              type={`${type}`}
              id={`${name}`}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                  min: {
                    value: min,
                    message: `${t('minimum_value')} ${min}`,
                  },
                  max: {
                    value: max,
                    message: `${t('maximum_value')} ${max}`,
                  },
                }))}
            />
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}

      {(type === 'checkbox' || type === 'multicheckbox') &&
        (options ? (
          <>
            <span className="custom-form-control-wrap type-radioButton">
              {Object.values(options).map((item, index) => {
                return (
                  <span className="type-checkbox" key={index}>
                    <input
                      type={'checkbox'}
                      required={required}
                      id={`${name + '-' + index}`}
                      name={name}
                      defaultChecked={defaultValue.includes(item.toLowerCase())}
                      {...(register &&
                        register(name, {
                          required: required
                            ? t('agree_condition_error')
                            : null,
                        }))}
                      value={item}
                    />
                    <label htmlFor={`${name + '-' + index}`}>{item}</label>
                  </span>
                )
              })}
              {elementDescription && (
                <figcaption className={showDescription ? '' : 'd-none'}>
                  {elementDescription}
                </figcaption>
              )}

              {availableData && availableData[identifier] && (
                <span className="form-not-valid-tip">
                  {availableData[identifier]?.message}
                </span>
              )}
            </span>
          </>
        ) : (
          <span className="custom-form-control-wrap type-radioButton">
            <span className="type-checkbox">
              <input
                type={`${type}`}
                required={required}
                id={`${name}`}
                name={name}
                {...(register &&
                  register(name, {
                    required: required ? t('agree_condition_error') : null,
                  }))}
                value="1"
              />
              <label htmlFor={`${name}`}>{label}</label>
            </span>
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        ))}

      {type === 'radiobutton' && (
        <span className="custom-form-control-wrap type-radioButton">
          {options &&
            Object.values(options).map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    id={`${name}`}
                    name={name}
                    value={item}
                    defaultChecked={
                      item.toLowerCase() === defaultValue.toLowerCase()
                        ? true
                        : false
                    }
                    {...(register &&
                      register(name, {
                        required: required ? t('this_field_is_required') : null,
                      }))}
                  />
                  <label htmlFor={`${name}`}>{item}</label>
                </React.Fragment>
              )
            })}
          {elementDescription && (
            <figcaption className={showDescription ? '' : 'd-none'}>
              {elementDescription}
            </figcaption>
          )}
          {availableData && availableData[identifier] && (
            <span className="form-not-valid-tip">
              {availableData[identifier]?.message}
            </span>
          )}
        </span>
      )}

      {(type === 'singleselect' || type === 'multiselect') && (
        <>
          <span className="custom-form-control-wrap">
            <select
              className="type-text form-control"
              id={`${name}`}
              {...(register &&
                register(name, {
                  required: required ? t('this_field_is_required') : null,
                }))}
              name={name}
              multiple={type === 'multiselect' ? true : false}
              onChange={() => clearErrors(`${identifier}`)}
            >
              {options &&
                Object.values(options).map((option, index) => {
                  return (
                    <option
                      key={index}
                      value={option}
                      selected={
                        type === 'singleselect'
                          ? String(option) === String(defaultValue)
                          : defaultValue.includes(Number(option))
                      }
                    >
                      {option}
                    </option>
                  )
                })}
            </select>
            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}

      {type === 'countryselect' && (
        <>
          <span className="custom-form-control-wrap">
            {fieldAdditionalValue.renderables &&
              fieldAdditionalValue.renderables.length > 0 &&
              fieldAdditionalValue.renderables.map((page) => (
                <>
                  {page.renderables.length > 0 &&
                    page.renderables.map((filed) => (
                      <>
                        {filed.type.toLowerCase() === 'countryselect' && (
                          <select
                            className="type-text form-control"
                            id={`${name}`}
                            {...(register &&
                              register(name, {
                                required: required
                                  ? t('this_field_is_required')
                                  : null,
                              }))}
                            name={name}
                            multiple={type === 'multiselect' ? true : false}
                            onChange={() => clearErrors(`${identifier}`)}
                          >
                            {filed.country_codes &&
                              filed.country_codes.map((option, index) => {
                                return (
                                  <>
                                    {onlyCountries ? (
                                      onlyCountries.includes(option.alpha2) && (
                                        <option
                                          key={index}
                                          value={option.alpha2}
                                        >
                                          {option.name}
                                        </option>
                                      )
                                    ) : (
                                      <option key={index} value={option.alpha2}>
                                        {option.name}
                                      </option>
                                    )}
                                  </>
                                )
                              })}
                          </select>
                        )}
                      </>
                    ))}
                </>
              ))}

            {elementDescription && (
              <figcaption className={showDescription ? '' : 'd-none'}>
                {elementDescription}
              </figcaption>
            )}
            {availableData && availableData[identifier] && (
              <span className="form-not-valid-tip">
                {availableData[identifier]?.message}
              </span>
            )}
          </span>
        </>
      )}
    </>
  )
}
export default InputGroup
