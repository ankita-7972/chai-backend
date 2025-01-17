import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async ()=>{

    try {
       const connectionInstance = await mongoose.connect
       (`${process.env.MongoDB_URL}/${DB_NAME}`)
       console.log(`\n mongodb connected !!! DB HOST :
         ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("mongoDB connection ERROR:", error);
        process.exit(1)
    }
}

export default connectDB;