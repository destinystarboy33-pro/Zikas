import mongoose, { model, Schema } from "mongoose";

const paymentSchema = new mongoose.Schema({
name:{
    type: String,
    required:true
},

phonenumber:{
    type: Number,
    required: true
},

 productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
      required: true
    },

    productName:{
        type: String,
          required: true
    },

    amount:{
        type: Number,
          required: true
    },

    reference:{
        type: String,
          required: true,
          unique: true
    },

     email:{
        type: String,
          required: true
    },

    status:{
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending"
    }

},{timestamps: true})

const payment = mongoose.model("Payment", paymentSchema)

export default payment