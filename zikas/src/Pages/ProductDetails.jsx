import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import {FaHeart} from "react-icons/fa"
import BackButton from "../Components/BackButton"

const ProductDetails = () => {

    const [product, setproducts] = useState([])
    
    const {id} = useParams()
    useEffect(() =>{

  const getProducts = async() =>{

   try {
      const URL = `https://zikas.onrender.com/product/${id}`

    const response = await axios.get(URL)

    console.log(response)
    console.log(Array.isArray(response.data))
    console.log(response.data.Products.name)
   
    setproducts(response.data.Products)
   } catch (error) {
    console.log("error", error)
   }
  }

  getProducts()
},[id])



   if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <p className="text-xl font-semibold text-red-500">
          Property not found.
        </p>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-10">

   
            <BackButton />
            
            <div  className="max-w-md md:max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden mt-10">

             <div className="relative">

                <img src={product.image} alt={product.name} className="w-full h-64 md:h-80 object-cover"/>

                  <div className="absolute top-4 left-4">

            <span className="bg-white px-3 py-2 rounded-full text-blue-600 font-semibold shadow">

              Featured

            </span>

          </div>


          <button
            className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
          >
              <FaHeart className="text-red-700" />
            {/* <i className="fa-regular fa-heart text-xl text-gray-700"></i> */}

          </button>
                
             </div>

              <div className="p-5">

                 <div className="flex gap-2 flex-wrap mb-4">

            <span className="bg-gray-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">

              New{" "}

              <i className="fa-solid fa-fire text-orange-500"></i>

            </span>


            <span className="bg-gray-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">

              Special Offer{" "}

              <i className="fa-solid fa-fire text-orange-500"></i>

            </span>

          </div>

           <h1 className="text-3xl md:text-4xl font-bold text-gray-900">

            {product.name}

          </h1>

           <div className="mt-6">

            <div className="flex items-center gap-3">


              {/* CURRENT PRICE */}

              <p className="text-2xl font-extrabold text-green-600">

                ₦{Number(product.amount).toLocaleString()}

              </p>



              {/* {product.oldPrice && (

                <del className="text-red-600 text-lg">

                  ${product.oldPrice.toLocaleString()}

                </del>

              )} */}

            </div>


            {/* OFFER MESSAGE */}

            {product.amount && (

              <p className="text-sm text-blue-600 font-medium mt-1">

                Special offer available

              </p>

            )}

          </div>


          {/* DESCRIPTION */}

          <p className="text-gray-600 mt-6 leading-relaxed">

            {product.description}

          </p>


         
          <div className="flex mt-7 w-full justify-center items-center">
           

        <NavLink to={`/form/${product._id}`} className={"w-full block"}> 
          
            <button className=" bg-orange-500 text-white text-center mx-3 py-1.5 w-full rounded-lg font-semibold hover:bg-orange-700 transition cursor-pointer">Order Now</button>

        </NavLink>
          </div>

              </div>
              
         </div>

           <div className="mt-16 bg-white text-black text-center py-12 px-6">

          <p className="text-orange-500 text-xs font-bold tracking-[4px] mb-4">
            THE ZIKAS STANDARD
          </p>

          <h3 className="text-3xl md:text-4xl font-black">
            YOUR STYLE. YOUR IDENTITY.
          </h3>

          <p className="text-gray-400 mt-4 text-sm">
            Wear it with confidence. Wear it your way.
          </p>

        </div>


      

    </div>
  )
}

export default ProductDetails
