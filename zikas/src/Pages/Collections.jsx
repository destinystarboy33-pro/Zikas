// import Navlink from "react-router-dom"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"
import Reveal from "../Components/Reveal"

const Collections = () => {
  const [products, setproducts] = useState([])
useEffect(() =>{

  const getProducts = async() =>{


   try {
      const URL = "https://zikas.onrender.com/product/products"

    const response = await axios.get(URL)

      console.log(Array.isArray(response.data))
    console.log(response.data.data)
    console.log(response.data.data)
    setproducts(response.data.data)
   } catch (error) {
    console.log("error", error)
   
   }
  }

  getProducts()
},[])


   
  return (

    <section id="products"  className="w-full py-16 md:py-20">
      <Reveal>


   
    <div  className=" flex flex-col justify-center items-center mx-auto px-5">
      <h1  className="inline-block bg-black text-white text-center text-sm font-semibold px-5 py-2 rounded-full"> Featured Listings</h1>

         <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

      {products.map((product) =>(

        <div key={product._id}   className=" group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

          <div className="relative w-full h-64 md:h-72 overflow-hidden">

              <img src={product.image} alt={product.name} className=" w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

              <div className=" absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

              <div className=" absolute top-4 left-4 bg-white text-orange-600 text-xs font-bold px-4 py-2 rounded-full shadow-m ">Feature</div>
          </div>

            <div className="p-6">

                <p className=" text-xl md:text-2xl font-bold text-gray-900 line-clamp-1 uppercase items-start">{product.name}</p>
                <p className=" text-base md:text-lg text-gray-700 line-clamp-3 items-start">{product.description}</p>

                <div className="border-t border-gray-200 my-5"></div>

                <div className=" flex items-center justify-between gap-4">

                    <p className=" text-xl md:text-2xl font-extrabold text-gray-900"> ₦{product.amount}</p>

                    <NavLink to={`/productdetails/${product._id}`}>
                        <button  className=" bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition duration-300">View Product</button>
                  </NavLink>
                </div>

            </div>




        </div>
        
      ))}
      </div>
  
     
    </div>

        </Reveal>
     </section>
  )
}

export default Collections
