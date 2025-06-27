'use client'

import Link from 'next/link'
import Heading from '@/components/Heading'

const MenuSubPages = ({
  data,
  spaceAfter,
  spaceBefore,
  layoutType,
  elementType,
}) => {
  const { menu } = data
  return (
    <section
      className={`menu_sub_pages ${
        spaceBefore && `frame-space-before-${spaceBefore}`
      } ${spaceAfter && `frame-space-after-${spaceAfter}`}`}
    >
      <Heading data={data} layoutType={layoutType} elementType={elementType}>
        <ul>
          {menu &&
            menu.length > 0 &&
            menu.map(({ title, link, children }, index) => {
              return (
                <li key={title + index}>
                  <Link href={link} title={title}>
                    <span>{title}</span>
                  </Link>
                  {children && (
                    <ul>
                      {children.length &&
                        children.map(({ title, link, active }, index) => {
                          return (
                            <li key={title + index}>
                              <Link href={link} title={title}>
                                <span>{title}</span>
                              </Link>
                            </li>
                          )
                        })}
                    </ul>
                  )}
                </li>
              )
            })}
        </ul>
      </Heading>
    </section>
  )
}
export default MenuSubPages
