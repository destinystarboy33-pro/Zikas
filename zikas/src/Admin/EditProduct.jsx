
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    const [product, setProduct] = useState({
        name: "",
        amount: "",
        discountPrice: "",
        description: "",
        category: "",
        subcategory: ""
    });

    // Fetch previous product details
    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await axios.get(
                    `https://zikas.onrender.com/api/products/${id}`
                );

                const data = response.data.product;

                setProduct({
                    name: data.name,
                    amount: data.amount,
                    discountPrice: data.discountPrice || "",
                    description: data.description,
                    category: data.category,
                    subcategory: data.subcategory
                });

                setPreview(data.image);

            } catch (error) {
                console.log(error);
                alert("Unable to fetch product details");
            }

        };

        fetchProduct();

    }, [id]);


    // Handle text inputs
    const handleChange = (e) => {

        const { name, value } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]: value
        }));

    };


    // Handle image selection
    const handleImage = (e) => {

        const file = e.target.files[0];

        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }

    };


    // Update product
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("name", product.name);
            formData.append("amount", product.amount);
            formData.append("discountPrice", product.discountPrice);
            formData.append("description", product.description);
            formData.append("category", product.category);
            formData.append("subcategory", product.subcategory);

            // Only send image if a new one was selected
            if (image) {
                formData.append("image", image);
            }

            await axios.patch(
                `http://localhost:5000/products/products/${id}`,
                formData
            );

            alert("Product updated successfully!");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);
            alert("Failed to update product");

        } finally {
            setLoading(false);
        }

    };


    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

                <h1 className="text-2xl font-bold mb-6">
                    Edit Product
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Product Image */}
                    <div>
                        <label className="block font-medium mb-2">
                            Product Image
                        </label>

                        {preview && (
                            <img
                                src={preview}
                                alt="Product preview"
                                className="w-40 h-40 object-cover rounded-lg mb-3"
                            />
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>


                    {/* Product Name */}
                    <div>
                        <label className="block font-medium mb-2">
                            Product Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>


                    {/* Amount */}
                    <div>
                        <label className="block font-medium mb-2">
                            Amount
                        </label>

                        <input
                            type="number"
                            name="amount"
                            value={product.amount}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>


                    {/* Discount Price */}
                    <div>
                        <label className="block font-medium mb-2">
                            Discount Price
                        </label>

                        <input
                            type="text"
                            name="discountPrice"
                            value={product.discountPrice}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>


                    {/* Description */}
                    <div>
                        <label className="block font-medium mb-2">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>


                    {/* Category */}
                    <div>
                        <label className="block font-medium mb-2">
                            Category
                        </label>

                        <select
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"
                        >
                            <option value="">Select Category</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Children">Children</option>
                        </select>
                    </div>


                    {/* Subcategory */}
                    <div>
                        <label className="block font-medium mb-2">
                            Subcategory
                        </label>

                        <input
                            type="text"
                            name="subcategory"
                            value={product.subcategory}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>


                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
                    >
                        {loading ? "Updating..." : "Update Product"}
                    </button>

                </form>

            </div>

        </div>

    );

};

export default EditProduct;
