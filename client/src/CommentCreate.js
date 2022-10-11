import React from 'react'
import axios from 'axios'


export default function CommentCreate(props) {

  const [content, setContent] = React.useState('')

  function handleChange(event) {
    setContent(event.target.value)
  }

  async function onSubmit(event) {
    event.preventDefault()

    await axios.post(`http://posts.com/posts/${props.postId}/comments`, {content})

    setContent('')

  }

  return <div>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>New Comment</label>
        <input className='form-control'
               value={content}
               onChange={handleChange}
        ></input>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  </div>
}
