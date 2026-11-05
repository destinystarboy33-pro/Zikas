import { CreateProduct, UpdateProduct, DeleteProduct, GetProductById, Getallproducts, FilteredProduct } from "../Controllers/productController.js";
import {Router} from "express"
import upload from "../config/multer.js";
import {authenticate, authorize} from "../Middleware/authmiddleware.js"

const productRouter = Router()

productRouter.get("/products", Getallproducts)
productRouter.get("/filter", FilteredProduct)
productRouter.post("/create", authenticate, authorize, upload.single('image'), CreateProduct)
productRouter.patch("/:id", authenticate, authorize, upload.single('image'), UpdateProduct)
productRouter.delete("/products/:id", authenticate, authorize, DeleteProduct)
productRouter.get("/:id", GetProductById)


export default productRouter