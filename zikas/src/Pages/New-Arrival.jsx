
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const API_URL = "https://zikas.onrender.com/product/featured";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const GetProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    GetProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-5 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold mb-5">
            Freshly Added
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            The Latest <span className="text-orange-500">Arrivals.</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Discover the latest additions to the Zikas collection.
            Fresh styles, carefully selected to keep your wardrobe
            looking its best.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-center text-center justify-center gap-5 mb-12">
            <div>
              <p className="text-orange-500 uppercase tracking-widest text-sm font-bold mb-3">
                Just Dropped
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                New Arrivals
              </h2>

              <p className="text-gray-500 mt-3">
                Explore our latest collection.
              </p>
            </div>
{/* 
            <p className="text-gray-500 font-medium">
              {products.length} {products.length === 1 ? "Product" : "Products"}
            </p> */}
          </div>

          {products.length === 0 ? (
            <div className="py-24 text-center border border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No New Arrivals Yet
              </h3>

              <p className="text-gray-500">
                Check back soon for our latest styles.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {products.map((product) => (
                <div
                  key={product._id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  {/* Product Image */}
                  <div className="relative w-full h-64 md:h-72 overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-white text-orange-600 text-xs font-bold px-4 py-2 rounded-full shadow-md">
                      Featured
                    </div>

                    {/* New Arrival Badge */}
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                      New Arrival
                    </div>

                  </div>

                  {/* Product Details */}
                  <div className="p-5 md:p-6">

                    <p className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-1 uppercase">
                      {product.name}
                    </p>

                    <p className="text-base text-gray-600 line-clamp-3 mt-2">
                      {product.description}
                    </p>

                    <div className="border-t border-gray-200 my-5"></div>

                    <div className="flex items-center justify-between gap-3">

                      <p className="text-lg md:text-xl font-extrabold text-gray-900">
                        ₦{Number(product.amount).toLocaleString()}
                      </p>

                      <NavLink to={`/productdetails/${product._id}`}>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-3 py-2.5 rounded-lg transition duration-300 whitespace-nowrap">
                          View Product
                        </button>
                      </NavLink>

                    </div>
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* Bottom Brand Section */}
      <section className="bg-black text-white py-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">

          <p className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold mb-5">
            The Zikas Experience
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Style That Speaks For Itself.
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Find pieces that reflect your personality and make
            every outfit count. Discover your next favourite look
            with Zikas.
          </p>

        </div>
      </section>

    </div>
  );
};

export default NewArrival;
