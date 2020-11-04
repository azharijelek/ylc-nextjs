import React, { useState } from 'react'
import useSWR from 'swr'

export default function Comments(props) {
  const post_id = props.postId
  const [more, setMore] = useState([])
  const [paged, setpaged] = useState(1)
  /**
   * Handle More Comments
   */
  const fetchMoreComments = async (paged) => {
    const page_to_load = parseInt(paged + 1)
    try {
      const response = await fetch(
        `http://localhost:8080/wp-json/ylc/v1/comments?post_id=533645&paged=${page_to_load}`
      )
      const data = await response.json()

      // get items
      let comments_loaded = data.items

      // Setup array push
      let items = [...more]
      if (comments_loaded.length > 0) {
        comments_loaded.forEach((el) => {
          items.push(el)
        })
        setMore(items)
      }

      const current_page = data.pagination.current_page
      setpaged(current_page)
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  }

  const { data, error } = useSWR(
    `http://localhost:8080/wp-json/ylc/v1/comments?post_id=${post_id}&paged=1`
  )

  if (error) return <div className="px-4">failed to load</div>
  if (!data)
    return (
      <>
        <div>Loading</div>
      </>
    )

  return (
    <>
      <pre>{JSON.stringify(data.items, null, 2)}</pre>

      <h4>More:</h4>
      <pre>{JSON.stringify(more, null, 2)}</pre>

      {/* {more.map((comment) => (
        <div key={comment}>{comment.user_info.name}</div>
      ))} */}

      <button
        onClick={() => {
          fetchMoreComments(paged)
        }}>
        Load More Comments
      </button>
    </>
  )
}
