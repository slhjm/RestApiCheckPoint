const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require("dotenv").config({ path: "./config/.env" })
const user = require('./models/user.js')


app.use(express.json())

// @routes

// get 


app.get('/api/users',(req,res)=>{
  user.find()
  .then(users=>res.status(200).json(users))
  .catch(err=> res.send(err))
})


//post 


app.post("/api/users", (req, res) => {
  const newUser = new User({ ...req.body })
  newUser.save()
      .then(user => res.status(200).json(user))
      .catch(err => console.log(err))
})

//PUT 
app.put("/api/users/:id", (req, res) => {
  let { id } = req.params
  User.findByIdAndUpdate({ id }, { $set: { ...req.body } })
      .then(() => res.send("User has been updated"))
      .catch(err => res.send(err))
})

//DELETE 
app.delete("/api/users/:id", (req, res) => {
  let { id } = req.params
  User.findByIdAndDelete({ id })
      .then(() => res.send("User has been deleted"))
      .catch(err => res.send(err))
})




























app.get("/",(req,res)=>{
  res.send('Hello world')
})


app.listen(port,()=>{
  console.log(`server running on http://localhost:${port}`)
})



//Connect to the DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })  
    console.log("Data base connected");
  } catch (error) {
    console.log("Data base connection failed")
  }
}

connectDB()



