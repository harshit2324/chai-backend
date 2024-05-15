// require('dotenv').config({path: './env '})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from '../src/db/index.js'



dotenv.config({
  path: '/env'
})




connectDB()




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
