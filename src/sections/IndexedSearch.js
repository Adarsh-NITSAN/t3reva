'use client'

import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import getAPIData from '@/utils/GetData'
import moment from 'moment/moment'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import DOMPurify from 'dompurify'

const IndexedSearch = () => {
  const params = useSearchParams()

  const router = useRouter()

  const t = useTranslations()

  let initialSearchTerm = params.get('search_query')

  const [searchData, setSearchData] = useState([])
  const [resultSearchTerm, setResultSearchTerm] = useState(null)

  const [searchTerm, setSearchTerm] = useState()

  useEffect(() => {
    const searchResults = async () => {
      try {
        const { data } = await getAPIData(
          `search/score/desc/0/1/${initialSearchTerm}`
        )

        if (
          data &&
          data.content &&
          data.content.colPos0 &&
          data.content.colPos0.length &&
          data.content.colPos0[1].content &&
          data.content.colPos0[1].content.data
        ) {
          setResultSearchTerm(initialSearchTerm)
          setSearchData(data.content.colPos0[1].content.data.resultrows)
        }
      } catch (e) {
        console.log(e)
      }
    }
    setSearchTerm(initialSearchTerm)
    searchResults()
  }, [initialSearchTerm])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchTerm && !searchTerm.trim()) {
      setResultSearchTerm(searchTerm)
      return
    }
    router.push(`/search?search_query=${searchTerm}`)
  }

  return (
    <div className="tx-indexedsearch">
      <Row>
        <Col md={8} className="order-1 order-md-0">
          {searchData && searchData.length > 0 ? (
            searchData.map(({ date, title_text, url, teaser }, index) => {
              return (
                <article className="tx-indexedsearch-res" key={index}>
                  <div className="meta-info">
                    {date && (
                      <span className="published">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                          <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                        </svg>
                        <Link href={'/'}>
                          {moment(`${date}`, 'MM-DD-YY').format('MMMM D, YYYY')}
                        </Link>
                      </span>
                    )}
                    {title_text && (
                      <h2 className="tx-indexedsearch-title">
                        <Link href={url}>{title_text}</Link>
                      </h2>
                    )}

                    {teaser && (
                      <p
                        className="tx-indexedsearch-description"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(teaser),
                        }}
                      />
                    )}
                    <div className="tx-indexedsearch-read-btn">
                      <Link className="btn btn__icon" href={url}>
                        {t('readBtn')}
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })
          ) : (
            <>
              <h2>Nothing Found</h2>
              <p>
                {`Sorry, but nothing matched your search terms. Please try again
                using different keywords.`}
              </p>
            </>
          )}
        </Col>
        <Col md={4} className="order-0 order-md-1">
          <div className="right-sidebar">
            <div className="tx-indexedsearch-searchbox">
              <form className="tx-indexedsearch-form" onSubmit={handleSubmit}>
                <label>
                  <span>Search For :</span>
                </label>
                <div className="tx-indexedsearch-searchbox-wrap">
                  <input
                    type="text"
                    className="tx-indexedsearch-searchbox-sword"
                    placeholder="Search ..."
                    defaultValue={resultSearchTerm}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="tx-indexedsearch-searchbox-button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default IndexedSearch
