import { posts } from "./MongoConnect.js"

export const addPost = async (req, res) => {
   await posts.insertOne(req.body)
   res.send('item was added successfully')
}