import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect} from "react"
import Loader from "../Components/Loader"

const Form = () => {

  
  const {id} = useParams()

const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: ""
})

const [products, setproducts] = useState([])
const [loading, setLoading] = useState(false)


useEffect (() =>{
const resetLooading = () =>{
setLoading(false)
}

window.addEventListener("pageshow", resetLooading)

return () =>{
  window.removeEventListener("pageshow", resetLooading)
}
},[])


const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  
// console.log(id)
  useEffect(() =>{

  const getProducts = async() =>{


   try {
      const URL = `https://zikas.onrender.com/product/${id}`

    const response = await axios.get(URL)

    console.log(response)
    console.log(response.data.Products.amount)
   
    setproducts(response)
    setLoading(false)
   } catch (error) {
    console.log("error", error)
   }
  }

  getProducts()
},[id])

    const handleOrder = async(e) =>{
         e.preventDefault();
         setLoading(true)
try {
  const pay = await axios.post(`https://zikas.onrender.com/payment/initailize/${id}`,
     {
          productId: id,
          ...formData
        },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${token}`,
        //   },
        // },
  )

  window.location.assign(pay.data.data.authorization_url);

 
} catch (error) {
  console.log(error)
 
   console.log(error.message)
}
}
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5">

       <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md md:p-8">

      <form action="" onSubmit={handleOrder}  className="flex flex-col gap-5">

      <div>

         <label className="mb-2 block font-semibold text-gray-700">
              Full Name
            </label>


        <input type="text"
        name="name"
        onChange={handlechange}
        placeholder="Enter Your FullName"
        required
        className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-2 focus:border-blue-600" />

        </div>


          <div>

         <label className="mb-2 block font-semibold text-gray-700">
              Email
            </label>

        <input type="email"
        name="email"
        onChange={handlechange}
        placeholder="Enter Your Email"
        required
        className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-2 focus:border-blue-600"/>

        </div>


      <div>

         <label className="mb-2 block font-semibold text-gray-700">
              Mobile Number
            </label>


        <input type="tel" name="phonenumber"
        onChange={handlechange}
        id="" placeholder="Enter Your Mobile Number"
        required
        className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-2 focus:border-blue-600" />

        </div>

        <button  onSubmit={() => handleOrder(products._id)} disabled ={loading}  className={`mt-2 w-full rounded-lg  py-3 font-semibold flex items-center justify-center text-white hover:bg-orange-600 ${loading ? "bg-orange-800 ": "bg-orange-500"}`}>{loading?<Loader/>  : "Order Now"}</button>
      </form>
      </div>
    </div>
  )
}

export default Form
