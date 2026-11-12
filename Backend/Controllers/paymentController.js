import axios from "axios"
import product from "../Models/productModel.js"
import payment from "../Models/paymentModel.js"
import StatusCodes from "http-status-codes"
import crypto from "crypto"




const InitailizePayment = async(req, res) =>{
try {
    const {name, phonenumber, email} = req.body
    const {id} = req.params

    const productId = await product.findById(id)
    
    // console.log(productId)
    console.log("amount", productId.amount)
    // console.log(req.params)
    // console.log(name)

    if (!productId) {
     return res.status(StatusCodes.BAD_REQUEST).json({
        message: "product not found",
        status: false
      })
    }
  
    const reference = crypto.randomUUID()

       const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",

      {
        email: email,
        amount: productId.amount * 100,
        reference,
        callback_url: `https://zikas.vercel.app/verify/payment`,
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );


       res.status(StatusCodes.CREATED).json({
        message: response.data.message,
        data:{
           authorization_url: response.data.data.authorization_url,
            reference: response.data.data.reference

        }
    })
console.log(response.data)

     const Payment = await payment.create({
      name,
      email,
      phonenumber,
      productId: productId._id,
      productName: productId.name,
      amount: productId.amount,
      reference,
      status: "pending"
    })

    
    // console.log(Payment)
    

 

} catch (error) {
   console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "opps! something went wrong",
      status: false,
      error: error.message
    })  
}
}



const VerifyPayment = async(req, res) =>{
  try{
    console.log(req.params)

    const {reference} = req.params
    const response = await axios.get(` https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: { Authorization: ` Bearer ${process.env.PAYSTACK_SECRET_KEY}`}
      }
    )

    console.log(response)
      if (response.data.data.status === "success") {
        
        await payment.findOneAndUpdate({reference},{status: "success"})
       
           res.status(StatusCodes.OK).json({
             message: response.data.data.message,
             status: true,
             data: {
              reference:response.data.data.reference,
              status: response.data.data.status
           }
           })
      } else if(response.data.data.status === "failed"){
            
         await payment.findOneAndUpdate({reference},{status: "failed"}
        )
       
           res.status(StatusCodes.BAD_REQUEST).json({
             message: response.data.data.message,
             status: true,
             data: {
              reference:response.data.data.reference,
              status: response.data.data.status
           }
           })
      }
    

    console.log(response.data)
  }catch(error){
    console.log(error)

      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "opps! something went wrong",
      status: false,
      error: message.error
    })
  }
}

export {InitailizePayment, VerifyPayment}