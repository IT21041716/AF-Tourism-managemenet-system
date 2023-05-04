import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'


const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()
app.use(cors())
app.use(bodyParser.json())

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

app.listen(PORT,() => {
    console.log("***************************************");
    console.log(`Server Running on port number : ${PORT}`)
})

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("MONGO_DB Connection successfull......!!");
    console.log("***************************************");
})

// sithanga
import seller from './Routes/Seller-routes.js'
app.use("/Seller" , seller)



//sajindu
import userAccount from "./Routes/User-Account-Routes.js"
app.use("/user",userAccount);

import userPost from "./Routes/User-Post-Routes.js"
app.use("/userPost",userPost);