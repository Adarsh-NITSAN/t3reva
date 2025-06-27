'use client'

import Heading from '../Heading'

const BulletList = ({ data, spaceAfter, spaceBefore, id }) => {
  const { bodytext, bulletsType } = data

  const renderList = () => {
    return (
      <>
        {bodytext &&
          bodytext.length > 0 &&
          bodytext.map((label, index) => {
            return (
              <>
                {bulletsType === 2 ? (
                  <dt key={index}>{label}</dt>
                ) : (
                  <li key={index}>{label}</li>
                )}
              </>
            )
          })}
      </>
    )
  }
  return (
    <section
      id={id}
      className={`bulletlist ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Heading data={data} key={id}>
        <div div className="bullet-list">
          {bulletsType === 0 ? (
            <ul>{renderList()}</ul>
          ) : bulletsType === 1 ? (
            <ol>{renderList()}</ol>
          ) : (
            <dl>{renderList()}</dl>
          )}
        </div>
      </Heading>
    </section>
  )
}
export default BulletList
