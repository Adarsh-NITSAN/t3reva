'use client'

import Heading from '../Heading'

const Table = ({ data, spaceAfter, spaceBefore }) => {
  const { bodytext, tableClass, tableCaption } = data
  return (
    <section
      className={`tabledata ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      } ${spaceBefore && `frame-space-after-${spaceBefore}`}`}
    >
      <Heading data={data}>
        <div className="table-responsive">
          {tableCaption && <caption>{tableCaption}</caption>}
          <table
            className={`table ${
              tableClass
                ? tableClass !== 'borderless'
                  ? `table-bordered table-${tableClass}`
                  : `table-${tableClass}`
                : ''
            }`}
          >
            <thead>
              <tr>
                {bodytext[0].map((heading, index) => {
                  return <th key={heading + index}>{heading}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {bodytext
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      {item.map((data, index) => {
                        return <td key={index}>{data}</td>
                      })}
                    </tr>
                  )
                })
                .slice(1)}
            </tbody>
          </table>
        </div>
      </Heading>
    </section>
  )
}
export default Table
