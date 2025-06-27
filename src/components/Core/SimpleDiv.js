'use client'

const Div = ({ data, spaceAfter, spaceBefore, layoutType, elementType }) => {
  return (
    <div
      className={`${spaceBefore && `frame-space-before-${spaceBefore}`} ${
        spaceAfter && `frame-space-after-${spaceAfter}`
      }`}
    >
      {data.header && <h2>{data.header}</h2>}
      <hr className={`ce-${elementType}`} />
    </div>
  )
}
export default Div
