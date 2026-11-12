 import axios from "axios"
 import { useSearchParams, NavLink } from "react-router-dom"
 import { useEffect, useState } from "react"

// const VerifyPayment = () => {
//     const [searchParams] = useSearchParams()
//     const [status, setStatus] = useState("loading")

//     const reference = searchParams.get("reference")
     
//     console.log(reference)

//     useEffect(() =>{
//           const confirmPayment = async() =>{
//         try {
//           const payment = await  axios.get(`https://zikas.onrender.com/payment/verify/${reference}`,
//            {
//           headers: {
//             "Content-Type": "application/json",
//             // Authorization: `Bearer ${token}`,
//           },
//         },
//           )

//           console.log(payment)
//           console.log(payment.data.data.status)
//           setStatus(payment.data.data.status)
//         } catch (error) {
//             console.log(error.response.data || "Something went wrong")
//         }
//     }

//     confirmPayment()

//     },[reference])

  
//   return (
//     <div className="flex items-center justify-center flex-col gap-5 min-h-[80vh]">
//      {status === "loading" &&( <div>
//         <button className="animate-spin"></button>
//         Loading...</div>) }

//      {status === "success" && (<div>
//         <h1 className="text-green-600 text-xl">Your payment is successful</h1>
//           <NavLink to={"/"}>
//         <button className="py-2 px-4 text-black border-gray-900 rounded-md text-xl">Go back to home page</button>
//         </NavLink>
//      </div>) }

    
//      {status === "failed" && (<div>
//         <h1 className="text-red-500 text-xl">Your payment is successful</h1>
//         <NavLink to={"/"}>
//         <button className="py-2 px-4 text-black border-gray-900 rounded-md text-xl">Go back to home page</button>
//         </NavLink>
//      </div>) }
//     </div>
//   )
// }

// export default VerifyPayment








import { Link } from "react-router-dom";

const VerifyPayment = () => {



   const [searchParams] = useSearchParams()
     const [status, setStatus] = useState("loading")

     const reference = searchParams.get("reference")
     
     console.log(reference)

     useEffect(() =>{
           const confirmPayment = async() =>{
         try {
           const payment = await  axios.get(`https://zikas.onrender.com/payment/verify/${reference}`,
            {
           headers: {
             "Content-Type": "application/json",
             // Authorization: `Bearer ${token}`,
           },
         },
           )

           console.log(payment)
           console.log(payment.data.data.status)
          setStatus(payment.data.data.status)
         } catch (error) {
             console.log(error.response.data || "Something went wrong")
         }
     }

     confirmPayment()

    },[reference])

  return (
    <main className="min-h-screen bg-[#f8f8f8] px-4 py-10 md:py-16">

      {status === "loading" &&( <div>
       <button className="animate-spin"></button>
        Loading...</div>) }

      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="mb-10">
          <p className="text-orange-500 text-xs font-bold tracking-[4px] mb-3">
            ZIKAS OFFICIAL STORE
          </p>

          <h1 className="text-3xl md:text-5xl font-black text-gray-950">
            Order <span className="text-orange-500">Verification</span>
          </h1>

          <p className="text-gray-500 mt-3">
            Thank you for shopping with us. Here are your order details.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

          {/* SUCCESS MESSAGE */}
          <div className="text-center px-5 pt-10 pb-8">

            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl">
              <i className="fa-solid fa-check" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-gray-950">
              Payment Successful!
            </h2>

            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              Your payment has been received successfully. 
              Thank you for choosing Zikas. Your order is being processed.
            </p>

            <span className="inline-block mt-5 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold">
              <i className="fa-solid fa-circle-check mr-2" />
              Payment Confirmed
            </span>

          </div>

          {/* ORDER SUMMARY */}
          <div className="px-5 md:px-8 pb-8">

            <div className="border border-gray-200 rounded-xl overflow-hidden">

              <div className="bg-orange-500 text-white px-5 py-4 font-bold flex items-center gap-3">
                <i className="fa-solid fa-cart-shopping" />
                Order Summary
              </div>

              <div className="p-5 md:p-7">

                <div className="grid md:grid-cols-2 gap-8">

                  {/* PRODUCT */}
                  <div className="flex gap-5 items-center">

                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
                      alt="Classic T-shirt"
                      className="w-28 h-32 object-cover rounded-lg bg-gray-100"
                    />

                    <div>
                      <h3 className="font-bold text-lg">
                        Classic Zikas T-Shirt
                      </h3>

                      <p className="text-gray-500 mt-2 text-sm">
                        Size: L
                      </p>

                      <p className="text-gray-500 mt-1 text-sm">
                        Quantity: 1
                      </p>

                      <p className="font-black text-xl mt-3">
                        ₦25,000
                      </p>
                    </div>

                  </div>

                  {/* PAYMENT DETAILS */}
                  <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">

                    <div className="flex justify-between items-center mb-5">
                      <span className="font-semibold">
                        Payment Status
                      </span>

                      <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold">
                        Paid
                      </span>
                    </div>

                    <div className="mb-5">
                      <p className="text-gray-500 text-sm mb-1">
                        Transaction Reference
                      </p>

                      <p className="font-semibold text-sm break-all">
                        ZKS-20261112-001
                      </p>
                    </div>

                    <div className="mb-5">
                      <p className="text-gray-500 text-sm mb-1">
                        Order Date
                      </p>

                      <p className="font-semibold text-sm">
                        November 12, 2026
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 flex justify-between items-center">
                      <span className="font-bold">
                        Total Paid
                      </span>

                      <span className="text-orange-600 text-xl md:text-2xl font-black">
                        ₦25,000
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col items-center gap-5 mt-8">

              <Link
                to="/shop"
                className="w-full md:w-80 bg-orange-500 hover:bg-orange-600 text-white text-center py-4 rounded-xl font-bold transition"
              >
                <i className="fa-solid fa-cart-shopping mr-2" />
                Continue Shopping
              </Link>

              <Link
                to="/"
                className="font-semibold text-gray-700 hover:text-orange-500 transition"
              >
                <i className="fa-solid fa-arrow-left mr-2" />
                Back to Home
              </Link>

            </div>

          </div>

        </div>

        {/* TRUST FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          {[
            {
              icon: "fa-truck-fast",
              title: "Fast Delivery",
              desc: "Reliable delivery",
            },
            {
              icon: "fa-shield-halved",
              title: "Secure Payments",
              desc: "Powered by Paystack",
            },
            {
              icon: "fa-headset",
              title: "Customer Support",
              desc: "We're here to help",
            },
            {
              icon: "fa-shirt",
              title: "Premium Quality",
              desc: "Fashion that stands out",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <i className={`fa-solid ${feature.icon} text-2xl text-orange-500`} />

              <h4 className="font-bold mt-3 text-sm">
                {feature.title}
              </h4>

              <p className="text-gray-500 text-xs mt-1">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
};

export default VerifyPayment;

