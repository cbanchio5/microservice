import React from 'react'
import axios from 'axios'

export default function CommentList(props) {

  const [comments, setComments] = React.useState([])

  async function fetchData() {

   const res =  await axios.get(`http://localhost:4001/posts/${props.postId}/comments`)
   setComments(res.data)
  }

  React.useEffect(() => {
    fetchData()

  }, [])

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  })

  return <ul>
    {renderedComments}
  </ul>
}
