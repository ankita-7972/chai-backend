//require('dotenv').config({path: "./env"})

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({

    path:"./.env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is runneg at port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB Connected succesfully",err)
})




/*
( async ()=>{
 
    try {
        mongoose.connect(`${process.env.MONGODB_PORT}/${DB_NAME}`)
    } catch (error) {
        console.error("error:", error)
        throw err
    }
})()
    */