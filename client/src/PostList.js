import React from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

export default function PostList() {

  const [posts, setPosts] = React.useState({})

  async function fetchPosts() {
    const res = await axios.get('http://posts.com/posts')

    console.log(res.data)
    setPosts(res.data)
  }

  React.useEffect(() => {
    fetchPosts()
  }, [])

  const renderedPosts = Object.values(posts).map(post => {
    return <div className='card'
                style={{width:'30%', marginBottom:'20px'}}
                key={post.id}
                >
                <div className="card-body">
                  <h3>{post.title}</h3>
                  <CommentList comments={post.comments}/>
                  <CommentCreate postId={post.id} />
                </div>

    </div>
  })



  return <div className='d-flex flex-row flex-wrap justify-content-between'>
    {renderedPosts}
  </div>
}
