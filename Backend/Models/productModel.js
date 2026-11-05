import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    image:{
        type: String,
       required: true
    },

    name:{
        type: String,
        required: true
    },

    amount:{
        type: Number,
        required: true
    },

    discountPrice:{
          type: String,  
    },

    description:{
        type: String,
        required: true
    },


    category:{
        type: String,
        enum: ["Men", "Women", "Children"],
        required: true
    },

    subcategory:{
        type: String,
        required: true
    }


    
}, {timestamps: true})

const product = mongoose.model("Products", productSchema)

export default product