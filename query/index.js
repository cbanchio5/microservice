const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express()


const posts = {}

const handleEvents = (type, data) => {
  if (type === 'PostCreated') {

    const { id, title } = data

    posts[id]= {
      id, title, comments : []
    }

  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data
    const post = posts[postId]

    post.comments.push({ content, id, status })
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data
    const post = posts[postId]

    const comment = post.comments.find(comment => comment.id === id)

    comment.status = status
    comment.content = content


  }

}

app.use(bodyParser.json())
app.use(cors())


app.get('/posts', (req, res) => {

  res.send(posts)

})

app.post('/events', (req, res) => {

  const { type, data } = req.body

  handleEvents(type, data)

  res.send({})

})

app.listen(4002, async()=> {
  console.log("listening on 4002")

  res = await axios.get('http://event-bus-srv:4005/events')


  for (let event of res.data.events) {
    console.log('pocessing event')

    handleEvents(event.type, event.data)
  }
})
