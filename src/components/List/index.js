'use client'

const List = ({ data, spaceBefore, spaceAfter, id }) => {
  return (
    <section
      id={id}
      className={`list ${spaceBefore && `frame-space-before-${spaceBefore}`} ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      }`}
    >
      <ul
        className="icon-list"
        data-aos={data.selectAnimation && data.selectAnimation}
      >
        {data.listBlock.map((item, index) => {
          return (
            <li className="icon-list__item" key={index}>
              <div
                className={`icon-list__item-list ${
                  data.selectVariation === '0'
                    ? 'item-list-simple'
                    : data.selectVariation === '1'
                    ? 'item-list-circle'
                    : data.selectVariation === '2'
                    ? 'item-list-simple'
                    : 'item-list-square'
                } `}
              >
                {data.selectVariation === '0' ||
                data.selectVariation === '1' ? (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      color: `${
                        data.selectVariation === '1' ||
                        data.selectVariation === '3'
                          ? 'white'
                          : ''
                      }`,
                    }}
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      color: `${
                        data.selectVariation === '1' ||
                        data.selectVariation === '3'
                          ? 'white'
                          : ''
                      }`,
                    }}
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                  </svg>
                )}
              </div>
              <span className="icon-list__item-text">{item.listText}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default List
