
import { useState } from "react";
import axios from "axios";


const API_URL = "https://zikas.onrender.com/product/create";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    name: "",
    amount: "",
    discountPrice: "",
    description: "",
    category: "",
    subcategory: "",
  });

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE IMAGE SELECTION
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // SUBMIT PRODUCT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setErrorMessage(false);
      setShowMessage(false);

      const formData = new FormData();

      formData.append("image", image);
      formData.append("name", data.name);
      formData.append("amount", data.amount);
      formData.append("discountPrice", data.discountPrice);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("subcategory", data.subcategory);

      // const token = localStorage.getItem("adminToken");
      const token = localStorage.getItem("token");

      const response = await axios.post(
        API_URL,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      setData({
        name: "",
        amount: "",
        discountPrice: "",
        description: "",
        category: "",
        subcategory: "",
      });

      setImage(null);

      // RESET FILE INPUT
      e.target.reset();

      setShowMessage(true);

    } catch (error) {
      console.log(error.response.message);
      setErrorMessage(true);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <AdminSidebar /> */}

      <main className="px-5 pb-10 pt-24 lg:ml-72 lg:px-10 lg:pt-10">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Product
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add a new product to your ZIKAS store.
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {showMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

            <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">

              <button
                onClick={() => setShowMessage(false)}
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
                Product added successfully.
              </p>

            </div>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {errorMessage && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-center text-sm font-medium text-red-600">
            Failed to upload product. Please try again.
          </div>
        )}

        {/* FORM */}
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
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none file:mr-4 file:rounded-md file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:font-semibold file:text-white"
              />

              {image && (
                <div className="mt-4">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Product preview"
                    className="h-48 w-40 rounded-lg object-cover"
                  />

                  <p className="mt-2 text-sm text-gray-500">
                    {image.name}
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
              {loading ? "Adding Product..." : "Add Product"}
            </button>

          </form>

        </div>
      </main>
    </div>
  );
};

export default CreateProduct;
