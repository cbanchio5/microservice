import React from 'react'
import axios from 'axios'

export default function PostCreate() {

  const [title, setTitle] = React.useState("")


  function handleChange(event) {
    setTitle(event.target.value)
  }

  async function onSubmit(event) {
    event.preventDefault()
    await axios.post('http://posts.com/posts/create', { title })

    setTitle('')


  }

   return <div>
    <form onSubmit={onSubmit}>
    <div className="form-group">
      <label>Title</label>
      <input
             className="form-control"
             value={title}
             onChange={handleChange}>

             </input>
    </div>
    <button className="btn btn-primary">Submit</button>
    </form>
   </div>

}
