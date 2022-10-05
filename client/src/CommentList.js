import React from 'react'

export default function CommentList(props) {


  const renderedComments = props.comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  })

  return <ul>
    {renderedComments}
  </ul>
}
