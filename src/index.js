// require('dotenv').config({path: './env '})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from '../src/db/index.js'
import { app } from "./app.js";



dotenv.config({
  path: '/env'
})




connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`0 server is running at port : ${process.env.PORT} `);
  })
})
.catch((err) => {
  console.log("mongo db connection failed !!! ", err)
})




// import express from "express";
// const App = express()


// (async () => {
// try {
//   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//   App.("error" )
// } catch (error) {
//   console.error("ERROR:", error)
//   throw error
// }

// }) ()
