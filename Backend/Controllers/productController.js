import cloudinary from "../config/cloudinary.js";
import product from "../Models/productModel.js";
// import cloudinary from "../config/clou?dinary";

const CreateProduct = async(req, res) =>{

   try {
     const {
       name,
       amount,
       oldPrice,
       description,
        category,
       subcategory
    } = req.body

    const result = await new Promise((resolve, reject) =>{
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "Zikas_collection"
                  
            },
            (error, result) =>{
                if (error) {
                    reject(error)
                }else{
                    resolve(result)
                }
            }
        )
        stream.end( req.file.buffer)
    })

    const image = result.secure_url


    const createdProduct = await product.create({
        image,
        name,
        oldPrice,
        amount,
        description,
        category,
        subcategory
    })
    res.status(200).json({
        message: "Product uploaded Succesfully",
        status: true,
        createdProduct
    })

    console.log(createdProduct.name)
     console.log(createdProduct. subcategory)

   } catch (error) {
     console.log("UPDATE ERROR:", error);
    //   console.log("BODY:", req.body);
    // console.log("FILE:", req.file);

    res.status(500).json({
        message: "Failed to upload Product",
        error: error.message
    })
   }
}


const UpdateProduct = async(req, res) =>{
  try {
    const updateData = {
        name: req.body.name,
        newPrice: req.body.newPrice,
        description: req.body.description
    }


    if (req.file) {
         const result = await new Promise((resolve, reject) =>{
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "Zikas_collection"
                  
            },
            (error, result) =>{
                if (error) {
                    reject(error)
                }else{
                    resolve(result)
                }
            }
        )
        stream.end( req.file.buffer)
    })

    updateData.image = result.secure_url

    }

    const updatedProduct = await product.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
        new: true,
        runValidators: true
        }
    )

   res.status(200).json({
        message: "Product updated Succesfully",
        status: true,
        updatedProduct
    })

  } catch (error) {
      res.status(500).json({
        message: "Failed to update Product",
        error: error.message
    })
  }
}


const DeleteProduct = async(req, res) =>{
    try {
        const DeletedProduct = await product.findByIdAndDelete(req.params.id)

        if (!DeletedProduct) {
            return res.status(400).json({
                message: "Product not found"
            })
        }

        res.status(200).json({
            message: "Product Deleted Successfully",
            status: true
        })
        console.log(DeletedProduct)
        
    } catch (error) {
         res.status(500).json({
        message: "Failed to delete Product",
        error: error.message
    })
    }
}

const GetProductById = async(req, res) =>{
    try {
        const Products = await product.findById(req.params.id)

        if (!Products) {
            return  res.status(400).json({
               message: "Product not found"
            })

            
        }
      

        res.status(200).json({
             message: "Product fetch successfully",
             status: true,
             Products
        })
    } catch (error) {
         res.status(500).json({
        message: "Failed to get Product",
        error: error.message
    })
    }
}


 const FilteredProduct = async(req, res) =>{
  try {
      const {category, subcategory} = req.quer
   const getproduct = await product.find(category, subcategory)

   res.status(200).json({
     status: true,
     getproduct
   })
  } catch (error) {
      res.status(500).json({
         message: "Failed to get Product",
         error: error.message
     })
  }
 }
 

const Getallproducts = async(req, res) =>{
try {

   
    const getproduct = await product.find({})

    res.status(200).json({
        message: "product fetch successfully",
        data: getproduct
    })

    console.log(getproduct)
} catch (error) {
        console.log(error)
       res.status(500).json({
       message: "Failed to get Product",
       error: error.message
       })
}
}









export {CreateProduct, UpdateProduct, DeleteProduct, GetProductById, Getallproducts, FilteredProduct}