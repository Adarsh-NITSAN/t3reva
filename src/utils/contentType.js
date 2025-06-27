'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const TextPic = dynamic(() => import('@/components/Core/TextPic'), {
  ssr: false,
})

const Images = dynamic(() => import('@/components/Core/Images'), {
  ssr: false,
})

const Table = dynamic(() => import('@/components/Core/Table'), {
  ssr: false,
})

const BulletList = dynamic(() => import('@/components/Core/Bullets'), {
  ssr: false,
})
const Uploads = dynamic(() => import('@/components/Core/Uploads'), {
  ssr: false,
})

const AlertBox = dynamic(() => import('@/components/AlertBox'), {
  ssr: false,
})

const Text = dynamic(() => import('@/sections/Text'), {
  ssr: false,
})

const AppGallery = dynamic(() => import('@/components/AppGallery'), {
  ssr: false,
})

const BlockQuotes = dynamic(() => import('@/components/Blockquotes'), {
  ssr: false,
})

const CTA = dynamic(() => import('@/components/CTA/index'), {
  ssr: false,
})

const Clients = dynamic(() => import('@/components/Clients'), {
  ssr: false,
})

const ContentBox = dynamic(() => import('@/components/ContentBox'), {
  ssr: false,
})

const CountDown = dynamic(() => import('@/components/CountDown'), {
  ssr: false,
})

const Counter = dynamic(() => import('@/components/Counter'), {
  ssr: false,
})

const ExtendedTabs = dynamic(() => import('@/components/ExtendedTabs'), {
  ssr: false,
})

const Heading = dynamic(() => import('@/components/Heading'), {
  ssr: false,
})

const Hotspot = dynamic(() => import('@/components/Hotspot'), {
  ssr: false,
})

const IconBox = dynamic(() => import('@/components/IconBox'), {
  ssr: false,
})

const ImageComparison = dynamic(() => import('@/components/ImageComparison'), {
  ssr: false,
})

const List = dynamic(() => import('@/components/List'), {
  ssr: false,
})

const PhotoGallery = dynamic(() => import('@/components/PhotoGallery'), {
  ssr: false,
})

const PhotoGroup = dynamic(() => import('@/components/PhotoGroup'), {
  ssr: false,
})

const PieChart = dynamic(() => import('@/components/PieChart'), {
  ssr: false,
})

const PricingList = dynamic(() => import('@/components/PricingList'), {
  ssr: false,
})

const PricingPlans = dynamic(() => import('@/components/PricingPlans'), {
  ssr: false,
})

const ProgressBar = dynamic(() => import('@/components/ProgressBar'), {
  ssr: false,
})

const Review = dynamic(() => import('@/components/Review'), {
  ssr: false,
})

const ContentTab = dynamic(() => import('@/components/ContentTab'), {
  ssr: false,
})

const ProcessSteps = dynamic(() => import('@/components/ProcessSteps'), {
  ssr: false,
})

const TeamMembers = dynamic(() => import('@/components/TeamMembers'), {
  ssr: false,
})

const SlidingBox = dynamic(() => import('@/components/SlidingBox'), {
  ssr: false,
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false,
})

const Video = dynamic(() => import('@/components/Video'), {
  ssr: false,
})

const TextRotator = dynamic(() => import('@/components/TextRotator'), {
  ssr: false,
})

const StickyNavbar = dynamic(() => import('@/components/StickyNavbar'), {
  ssr: false,
})

const PhotoBox = dynamic(() => import('@/components/PhotoBox'), {
  ssr: false,
})

const FeaturesBox = dynamic(() => import('@/components/FeaturesBox'), {
  ssr: false,
})

const PricingComparison = dynamic(
  () => import('@/components/PricingComparison'),
  {
    ssr: false,
  }
)

const EvenetSchedule = dynamic(() => import('@/components/EventSchedule'), {
  ssr: false,
})

const Map = dynamic(() => import('@/components/Core/Map'), {
  ssr: false,
})

const CustomForm = dynamic(() => import('@/components/CustomForm'), {
  ssr: false,
})

const LandingSlider = dynamic(() => import('@/components/LandingSlider'), {
  ssr: false,
})

const AccordionData = dynamic(() => import('@/components/AccordionData'), {
  ssr: false,
})

const IndexedSearch = dynamic(() => import('@/sections/IndexedSearch'), {
  ssr: false,
})

const Blog = dynamic(() => import('@/components/Blog'), {
  ssr: false,
})

const Shortcut = dynamic(() => import('@/components/Core/Shortcut'), {
  ssr: false,
})

const SimpleHTML = dynamic(() => import('@/components/Core/SimpleHTML'), {
  ssr: false,
})

const Div = dynamic(() => import('@/components/Core/SimpleDiv'), {
  ssr: false,
})

const Textmedia = dynamic(() => import('@/components/Core/Textmedia'), {
  ssr: false,
})

const RelatedBlog = dynamic(() => import('@/components/Blog/RelatedBlog'), {
  ssr: false,
})

const BookPreview = dynamic(() => import('@/components/BookPreview'), {
  ssr: false,
})

const MenuSubPages = dynamic(
  () => import('@/components/Core/MenuList/menuSubpages'),
  {
    ssr: false,
  }
)

const MenuPages = dynamic(
  () => import('@/components/Core/MenuList/menuPages'),
  {
    ssr: false,
  }
)

const Divider = dynamic(() => import('@/components/Divider'), {
  ssr: false,
})

const Separator = dynamic(() => import('@/components/Separator'), {
  ssr: false,
})

export const componentMapping = {
  uploads: Uploads,
  text: Text,
  header: Heading,
  textpic: TextPic,
  image: Images,
  table: Table,
  bullets: BulletList,
  mask_ns_content_box: ContentBox,
  mask_ns_blockquote: BlockQuotes,
  mask_ns_alert: AlertBox,
  mask_ns_book_preview: BookPreview,
  mask_ns_content_tabs: ContentTab,
  mask_ns_extended_tabs: ExtendedTabs,
  mask_ns_cta: CTA,
  mask_ns_pricing_plans: PricingPlans,
  mask_ns_event_countdown: CountDown,
  mask_ns_featured_boxes: FeaturesBox,
  mask_ns_list: List,
  mask_ns_photo_box: PhotoBox,
  mask_ns_photo_group: PhotoGroup,
  mask_ns_process_steps: ProcessSteps,
  mask_ns_progress_bars: ProgressBar,
  mask_ns_team: TeamMembers,
  mask_ns_gallery_image: PhotoGallery,
  mask_ns_pie_charts: PieChart,
  mask_ns_sliding_box: SlidingBox,
  mask_ns_testimonials: Testimonials,
  mask_ns_video: Video,
  mask_ns_counters: Counter,
  mask_ns_app_gallery: AppGallery,
  mask_ns_hotspots: Hotspot,
  mask_ns_pricing_list: PricingList,
  mask_ns_image_comparison: ImageComparison,
  mask_ns_event_schedule: EvenetSchedule,
  mask_ns_pricing_comparison: PricingComparison,
  mask_ns_map: Map,
  mask_ns_client: Clients,
  mask_ns_text_rotator: TextRotator,
  mask_ns_reviews: Review,
  mask_ns_sticky_navbar: StickyNavbar,
  mask_ns_icon_box: IconBox,
  form_formframework: CustomForm,
  mask_ns_header_slider: LandingSlider,
  mask_ns_accordion: AccordionData,
  mask_ns_divider: Divider,
  ke_search_pi2: IndexedSearch,
  blog_posts: Blog,
  shortcut: Shortcut,
  html: SimpleHTML,
  div: Div,
  textmedia: Textmedia,
  blog_relatedposts: RelatedBlog,
  menu_subpages: MenuSubPages,
  menu_pages: MenuPages,
  mask_ns_separators: Separator,
}

const ContentType = ({ pageData }) => {
  if (!pageData) {
    return false
  }

  const renderContent = (pageData, index) => {
    let contentType = pageData.type
    let contentData
    if (pageData.content?.items) {
      contentData = findValuesObject(pageData.content.items, 'items')
    } else {
      contentData = findValuesObject(pageData?.content, 'pi_flexform_content')
    }

    const marBottom = pageData?.appearance?.spaceAfter
    const marTop = pageData?.appearance?.spaceBefore
    const layout = pageData?.appearance?.layout
    const Component = componentMapping[contentType]

    if (Component) {
      return (
        <Component
          data={
            contentData && contentData.length
              ? contentData[0]
              : pageData?.content
          }
          id={pageData.id}
          spaceAfter={marBottom}
          spaceBefore={marTop}
          layoutType={layout}
          elementType={contentType}
          key={index && index}
        />
      )
    }
    return null
  }

  return (
    <>
      {pageData && pageData.length
        ? pageData.map((items, index) => {
            if (items) {
              return renderContent(items, index)
            }
          })
        : renderContent(pageData)}
    </>
  )
}
export default ContentType

export function findValuesObject(obj, key) {
  return findValuesObjectHelper(obj, key, [])
}

export function findValuesObjectHelper(obj, key, list) {
  if (!obj) return list
  if (obj instanceof Array) {
    for (var i in obj) {
      list = list.concat(findValuesObjectHelper(obj[i], key, []))
    }
    return list
  }
  if (obj[key]) list.push(obj[key])

  if (typeof obj == 'object' && obj !== null) {
    var children = Object.keys(obj)
    if (children.length > 0) {
      for (i = 0; i < children.length; i++) {
        list = list.concat(findValuesObjectHelper(obj[children[i]], key, []))
      }
    }
  }
  return list
}
