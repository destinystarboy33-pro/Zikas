
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import BackButton from "../Components/BackButton"

const ProductDetails = () => {

  const [product, setproducts] = useState([])

  const { id } = useParams()

  useEffect(() => {

    const getProducts = async () => {

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

  }, [id])


  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <p className="text-xl font-semibold text-red-500">
          Property not found.
        </p>

      </div>
    )
  }


  return (

    <div className="min-h-screen bg-white pt-7 pb-16 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* BACK BUTTON */}
        <div className="mb-8">
          <BackButton />
        </div>


        {/* PRODUCT DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* PRODUCT IMAGE SECTION */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-2xl bg-gray-100">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-105 md:h-150 object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* FEATURE LABEL */}
              <div className="absolute top-5 left-5">

                <span className="bg-white text-black text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full shadow-md">
                  Featured Collection
                </span>

              </div>

              {/* HEART ICON */}
              <button
                className="absolute top-5 right-5 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 transition-colors duration-300 group"
              >
                <FaHeart className="text-gray-500 group-hover:text-white transition-colors" />
              </button>

            </div>

            {/* IMAGE FOOTER */}
            <div className="flex items-center justify-between mt-5 px-1">

              <p className="text-xs font-semibold tracking-[2px] text-gray-400 uppercase">
                Zikas Exclusive
              </p>

              <p className="text-xs text-gray-400">
                Style that speaks.
              </p>

            </div>

          </div>


          {/* PRODUCT INFORMATION */}
          <div className="flex flex-col pt-2 lg:pt-8">

            {/* BRAND */}
            <p className="text-orange-500 text-xs font-bold tracking-[4px] uppercase mb-5">
              ZIKAS / COLLECTION
            </p>


            {/* PRODUCT NAME */}
            <h1 className="text-3xl md:text-5xl font-black text-black uppercase leading-tight tracking-tight">
              {product.name}
            </h1>


            {/* PRODUCT LABELS */}
            <div className="flex gap-3 flex-wrap mt-6">

              <span className="bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                New Arrival
              </span>

              <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                Premium Quality
              </span>

            </div>


            {/* PRICE SECTION */}
            <div className="mt-9 pb-7 border-b border-gray-200">

              <p className="text-xs text-gray-400 uppercase font-bold tracking-[2px] mb-3">
                Product Price
              </p>

              <div className="flex items-center gap-2">

                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ₦{Number(product.oldPrice).toLocaleString()}
                      </span>
                    )}

                    <span className="text-black font-bold">
                      ₦{Number(product.amount).toLocaleString()}
                    </span>

              </div>

              {product.amount && (

                <p className="text-sm text-orange-600 font-medium mt-3">
                  Special offer available
                </p>

              )}

            </div>


            {/* DESCRIPTION */}
            <div className="mt-8">

              <h3 className="text-sm font-bold uppercase tracking-[2px] text-black mb-4">
                Product Description
              </h3>

              <p className="text-gray-500 text-sm md:text-base leading-8">
                {product.description}
              </p>

            </div>


            {/* PRODUCT FEATURES */}
            <div className="grid grid-cols-2 gap-4 mt-9 py-7 border-y border-gray-200">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-shirt text-orange-500"></i>
                </div>

                <div>
                  <p className="text-xs font-bold text-black">
                    Premium Style
                  </p>

                  <p className="text-[11px] text-gray-400 mt-1">
                    Quality fashion
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-star text-orange-500"></i>
                </div>

                <div>
                  <p className="text-xs font-bold text-black">
                    Zikas Quality
                  </p>

                  <p className="text-[11px] text-gray-400 mt-1">
                    Made for your style
                  </p>
                </div>

              </div>

            </div>


            {/* ORDER BUTTON */}
            <div className="mt-9">

              <NavLink
                to={`/form/${product._id}`}
                className="w-full bg-orange-500 hover:bg-black text-white flex items-center justify-center gap-3 py-5 rounded-xl font-bold text-sm uppercase tracking-[2px] transition-all duration-300 shadow-lg shadow-orange-500/20"
              >

                Order Now

                <i className="fa-solid fa-arrow-right"></i>

              </NavLink>

              <p className="text-center text-xs text-gray-400 mt-4">
                Experience fashion the Zikas way.
              </p>

            </div>

          </div>

        </div>


        {/* ZIKAS BRAND SECTION */}
        <div className="mt-24 bg-black text-white rounded-2xl py-16 md:py-24 px-6 text-center relative overflow-hidden">

          <div className="absolute w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -top-20 -left-20"></div>

          <div className="absolute w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

          <div className="relative z-10">

            <p className="text-orange-500 text-xs font-bold tracking-[5px] mb-6">
              THE ZIKAS STANDARD
            </p>

            <h3 className="text-3xl md:text-5xl font-black tracking-tight">
              YOUR STYLE.
              <span className="text-orange-500"> YOUR IDENTITY.</span>
            </h3>

            <p className="text-gray-400 mt-6 text-sm md:text-base max-w-lg mx-auto leading-7">
              Fashion is more than what you wear. It's how you express
              yourself. Discover your style and wear it with confidence.
            </p>

            <div className="w-16 h-1 bg-orange-500 mx-auto mt-9 rounded-full"></div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default ProductDetails
