
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";



const EditProduct = () => {
    
    const { id } = useParams();
    const API_URL = `https://zikas.onrender.com/product/products/${id}`;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [data, setData] = useState({
    name: "",
    amount: "",
    discountPrice: "",
    description: "",
    category: "",
    subcategory: "",
  });


  // FETCH EXISTING PRODUCT
  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${API_URL}/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const product = response.data.product;

        setData({
          name: product.name,
          amount: product.amount,
          discountPrice: product.discountPrice || "",
          description: product.description,
          category: product.category,
          subcategory: product.subcategory,
        });

        setPreview(product.image);

      } catch (error) {

        console.log(error);
        setErrorMessage(true);

      } finally {
        setFetching(false);
      }

    };

    fetchProduct();

  }, [id, API_URL]);


  // HANDLE INPUT CHANGES
  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  };


  // HANDLE IMAGE SELECTION
  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }

  };


  // SUBMIT UPDATED PRODUCT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      setErrorMessage(false);
      setShowMessage(false);

      const formData = new FormData();

      // Only upload image if a new one is selected
      if (image) {
        formData.append("image", image);
      }

      formData.append("name", data.name);
      formData.append("amount", data.amount);
      formData.append("discountPrice", data.discountPrice);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("subcategory", data.subcategory);

      const token = localStorage.getItem("token");

      const response = await axios.patch(
        `${API_URL}/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      setShowMessage(true);

    } catch (error) {

      console.log(error.response?.data || error.message);
      setErrorMessage(true);

    } finally {
      setLoading(false);
    }

  };


  return (

    <div className="min-h-screen bg-gray-100">

      <main className="px-5 pb-10 pt-24 lg:ml-72 lg:px-10 lg:pt-10">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-900">
            Edit Product
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Update your existing product details in your ZIKAS store.
          </p>

        </div>


        {/* SUCCESS MESSAGE */}
        {showMessage && (

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

            <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">

              <button
                onClick={() => navigate(-1)}
                className="absolute right-4 top-3 text-2xl text-gray-500 hover:text-black"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

                <i className="fa-solid fa-check text-2xl text-green-600"></i>

              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                Success!
              </h2>

              <p className="mt-2 text-gray-500">
                Product updated successfully.
              </p>

              <button
                onClick={() => navigate(-1)}
                className="mt-6 rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-black"
              >
                Back to Products
              </button>

            </div>

          </div>

        )}


        {/* ERROR MESSAGE */}
        {errorMessage && (

          <div className="mb-6 rounded-lg bg-red-50 p-4 text-center text-sm font-medium text-red-600">

            {fetching
              ? "Unable to fetch product details. Please try again."
              : "Failed to update product. Please try again."}

          </div>

        )}


        {/* LOADING PRODUCT */}
        {fetching ? (

          <div className="mx-auto max-w-4xl rounded-xl bg-white p-10 text-center shadow-sm">

            <p className="font-medium text-gray-500">
              Loading product details...
            </p>

          </div>

        ) : (

          /* FORM */
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-sm md:p-10">

            <form onSubmit={handleSubmit} className="space-y-6">


              {/* IMAGE */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none file:mr-4 file:rounded-md file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:font-semibold file:text-white"
                />

                {preview && (

                  <div className="mt-4">

                    <img
                      src={preview}
                      alt="Product preview"
                      className="h-48 w-40 rounded-lg object-cover"
                    />

                    <p className="mt-2 text-sm text-gray-500">
                      {image ? image.name : "Current product image"}
                    </p>

                  </div>

                )}

              </div>


              {/* PRODUCT NAME */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                />

              </div>


              {/* PRICES */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Amount (₦)
                  </label>

                  <input
                    type="number"
                    name="amount"
                    value={data.amount}
                    onChange={handleChange}
                    placeholder="Enter product price"
                    min="0"
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Discount Price (Optional)
                  </label>

                  <input
                    type="text"
                    name="discountPrice"
                    value={data.discountPrice}
                    onChange={handleChange}
                    placeholder="Enter discount price"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                  />

                </div>

              </div>


              {/* CATEGORY AND SUBCATEGORY */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Category
                  </label>

                  <select
                    name="category"
                    value={data.category}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-orange-500"
                  >

                    <option value="">Select category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Children">Children</option>

                  </select>

                </div>


                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Subcategory
                  </label>

                  <input
                    type="text"
                    name="subcategory"
                    value={data.subcategory}
                    onChange={handleChange}
                    placeholder="e.g. T-Shirts, Hoodies, Shoes"
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                  />

                </div>

              </div>


              {/* DESCRIPTION */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Product Description
                </label>

                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                  rows="5"
                  required
                  className="w-full resize-none rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                />

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-orange-500 py-4 font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? "Updating Product..." : "Update Product"}

              </button>

            </form>

          </div>

        )}

      </main>

    </div>

  );

};

export default EditProduct;
