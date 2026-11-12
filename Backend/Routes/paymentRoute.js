import {Router} from "express"
import { InitailizePayment, VerifyPayment } from "../Controllers/paymentController.js"

const paymentRoute = Router()

paymentRoute.post("/initailize/:id", InitailizePayment)
paymentRoute.get("/verify/:reference/:id", VerifyPayment)

export default paymentRoute 