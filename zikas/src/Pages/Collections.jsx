
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"
import Reveal from "../Components/Reveal"
import Loader from "../Components/Loader"

const Collections = () => {
  const [products, setproducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const URL = "https://zikas.onrender.com/product/products"

        const response = await axios.get(URL)

        console.log(Array.isArray(response.data))
        console.log(response.data.data)
        console.log(response.data.data)

        setproducts(response.data.data)
      } catch (error) {
        console.log("error", error)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <section id="products" className="w-full bg-white py-16 md:py-24">

      <Reveal>
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* COLLECTION HEADER */}
          <div className="flex flex-col items-center text-center mb-14">

            <span className="text-orange-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Zikas Fashion Store
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight">
              OUR COLLECTION<span className="text-orange-500">.</span>
            </h1>

            <p className="text-gray-500 text-sm md:text-base mt-5 max-w-xl leading-7">
              Discover pieces that define your style. Explore our latest
              collection and find the perfect fit for every moment.
            </p>

            <div className="w-16 h-1 bg-orange-500 mt-7 rounded-full"></div>

          </div>

          {/* COLLECTION INFORMATION */}
          <div className="flex items-center justify-center border-b border-gray-200 pb-5 mb-8">

            <div>
              <h2 className="text-xl text-center md:text-2xl font-bold text-black">
                All Products
              </h2>

              <p className="text-gray-400 text-center text-xs md:text-sm mt-1">
                Explore our fashion collection
              </p>
            </div>

            {/* <p className="text-sm font-semibold text-gray-500">
              {products.length} Products
            </p> */}

          </div>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-9 md:gap-x-7 md:gap-y-12">

            {products.map((product) => (

              <div
                key={product._id}
                className="group flex flex-col bg-gray-100 py-1 rounded-b-2xl"
              >

                {/* PRODUCT IMAGE */}
                <div className="relative w-full aspect-3/4 bg-gray-100 overflow-hidden rounded-xl">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>

                  {/* FEATURE LABEL */}
                  <div className="absolute top-3 left-3 bg-white text-black text-[9px] md:text-[10px] font-bold tracking-wider uppercase px-3 py-2 rounded-full shadow-sm">
                    Featured
                  </div>

                  {/* VIEW PRODUCT */}
                  <NavLink
                    to={`/productdetails/${product._id}`}
                    className="absolute bottom-3 left-3 right-3 bg-white text-black text-center py-3 text-xs md:text-sm font-bold rounded-lg translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                  >
                    VIEW PRODUCT
                  </NavLink>

                </div>

                {/* PRODUCT INFORMATION */}
                <div className="pt-4 flex flex-col flex-1 px-3">

                  <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-xs md:text-sm leading-6 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* PRICE AND ACTION */}
                  <div className="flex items-center justify-between gap-2 mt-auto pt-4">

                    <p className="text-sm md:text-lg font-extrabold text-black">
                      ₦{product.amount.toLocaleString()}
                    </p>

                    <NavLink
                      to={`/productdetails/${product._id}`}
                      className="text-orange-500 text-xs md:text-sm font-bold hover:text-black transition-colors whitespace-nowrap"
                    >
                      Shop Now →
                    </NavLink>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* EMPTY SPACE / COLLECTION FOOTER */}
          {products.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold text-black">
                No Products Available
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Our collection will be updated soon.
              </p>
            </div>
          )}

        </div>
      </Reveal>

    </section>
  )
}

export default Collections
