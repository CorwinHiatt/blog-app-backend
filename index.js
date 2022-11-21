import express from 'express';
import cors from 'cors';
// import { MongoClient } from 'mongodb'
import 'dotenv/config'

import { posts } from './mongoConnect.js'
import { addPost } from './posts.js'

const app = express();
app.use(cors());
app.use(express.json())

// const client = new MongoClient(process.env.MONGO_URI)
// const database = client.db('blogs')
// const posts = database.collection('posts')

// client.connect()
// console.log('connected to Mongo')

app.listen(process.env.PORT, () =>  console.log(`listening on port ${process.env.PORT}`))

// app.post('/', async (req, res) => {
//  await posts.insertOne(newPost)
//  res.send('item was added successfully')
// })

app.post('/', addPost)

app.get('/', async (req, res) => {
 const allPosts = await posts.find().toArray()
  res.send(allPosts) 
})