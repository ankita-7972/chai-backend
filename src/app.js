import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express()

app.use(cors({
    origin: Process.env.CORS_ORIGIN ,
    credentials:true
}))
// Three major configuration 
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
// store the image and pdf file in "public folder"
app.use(express.static("public"))
// it use access the user cookie and set the cookie
app.use(cookieParser())
export {app}
