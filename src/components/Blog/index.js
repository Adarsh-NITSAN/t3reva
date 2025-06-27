import React from 'react'
import dynamic from 'next/dynamic'

const GridBlog = dynamic(() => import('./GridBlog'), {
  ssr: false,
})

const MasonryBlog = dynamic(() => import('./MasonryBlog'), {
  ssr: false,
})

const Timeline = dynamic(() => import('./Timeline'), {
  ssr: false,
})

const IsotopeBlog = dynamic(() => import('./IsotopeBlog'), {
  ssr: false,
})

const SlidingBlog = dynamic(() => import('./SlidingBlog'), {
  ssr: false,
})

const Blog = ({ data, layoutType, spaceAfter, spaceBefore }) => {
  switch (layoutType) {
    case 'default': {
      return (
        <GridBlog
          content={data.data}
          spaceAfter={spaceAfter}
          spaceBefore={spaceBefore}
        />
      )
    }
    case 'layout-1': {
      return (
        <MasonryBlog
          content={data.data}
          spaceAfter={spaceAfter}
          spaceBefore={spaceBefore}
        />
      )
    }
    case 'layout-2': {
      return (
        <IsotopeBlog
          content={data.data}
          spaceAfter={spaceAfter}
          spaceBefore={spaceBefore}
        />
      )
    }
    case 'layout-3': {
      return (
        <Timeline
          content={data.data}
          spaceAfter={spaceAfter}
          spaceBefore={spaceBefore}
        />
      )
    }
    case 'layout-4': {
      return (
        <SlidingBlog
          content={data.data}
          spaceAfter={spaceAfter}
          spaceBefore={spaceBefore}
        />
      )
    }
    default: {
      return (
        <GridBlog
          content={data.data}
          spaceAfter={spaceAfter}
          spaceBefore={spaceBefore}
        />
      )
    }
  }
}

export default Blog
