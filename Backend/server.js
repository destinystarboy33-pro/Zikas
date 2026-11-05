import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./Routes/authRoutes.js"

import productRouter from "./Routes/productRoutes.js"
import paymentRoute from "./Routes/paymentRoute.js"
import cors from "cors"

dotenv.config()
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT


const app = express()
app.use(
  cors({
    origin: ["http://localhost:5173", "https://fastbuy-frontend-neon.vercel.app"],
  }),
);
app.use(express.json())
app.use("/auth", router)
app.use("/product", productRouter)
app.use("/payment",paymentRoute)

const start = async() =>{

    try{
    await mongoose.connect(MONGO_URI)
    console.log('DataBase Connected')

    app.listen(PORT, ()=>{
        console.log(`Server running on PORT  ${PORT}`)
    })

} catch(error){
    console.log(error)
}
}

start()

