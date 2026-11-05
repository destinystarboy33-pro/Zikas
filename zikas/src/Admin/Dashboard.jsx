
import { useEffect, useState } from "react";
import axios from "axios";
// import AdminSidebar from "../Components/SideBar";

const API_URL = "https://zikas.onrender.com/product/products";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // GET ALL PRODUCTS
 
  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`);

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (err) {
      console.log(err);
      alert("Failed to delete product.");
    }
  };

  // FETCH PRODUCTS WHEN PAGE LOADS
  useEffect(() => {

    const getProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(API_URL);
    //   console.log(response)

      const data = response.data.data;
      console.log(data)

      setProducts(
        Array.isArray(data) ? data : data.products || []
      );
    } catch (error) {
      console.log(error.response);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <AdminSidebar /> */}

      <main className="p-5 pt-24 lg:ml-72 lg:p-10 lg:pt-10">

        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Products Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage all your ZIKAS products.
            </p>
          </div>

          {/* <button
            onClick={getProducts}
            className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            <i className="fa-solid fa-rotate-right mr-2"></i>
            Refresh Products
          </button> */}
        </div>

        {/* PRODUCT COUNT */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total Products</p>

          <h2 className="mt-2 text-3xl font-bold text-orange-500">
            {products.length}
          </h2>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="py-20 text-center">
            <p className="text-gray-500">Loading products...</p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-lg bg-red-50 p-5 text-red-600">
            {error}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && products.length === 0 && (
          <div className="rounded-xl bg-white py-20 text-center shadow-sm">
            <i className="fa-solid fa-box-open text-4xl text-gray-300"></i>

            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              No products found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your products will appear here once they are added.
            </p>
          </div>
        )}

        {/* PRODUCTS */}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {products.map((item) => (
              <div
                key={item._id}
                className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >

                {/* PRODUCT IMAGE */}
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* PRODUCT DETAILS */}
                <div className="p-5">

                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                      {item.category}
                    </span>

                    <span className="text-xs text-gray-400">
                      {item.subcategory}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h2>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-lg font-bold text-orange-500">
                      ₦{Number(item.amount).toLocaleString()}
                    </span>

                    {item.discountPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₦{item.discountPrice}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                  {/* ACTION BUTTONS */}
                  <div className="mt-6 flex gap-3">

                    <button
                      onClick={() =>
                        window.location.href = `/admin/edit-product/${item._id}`
                      }
                      className="flex-1 rounded-lg bg-black py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
                    >
                      <i className="fa-solid fa-pen-to-square mr-2"></i>
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(item._id)}
                      className="flex-1 rounded-lg border border-red-500 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      <i className="fa-solid fa-trash mr-2"></i>
                      Delete
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </main>
    </div>
  );
};

export default Dashboard;
