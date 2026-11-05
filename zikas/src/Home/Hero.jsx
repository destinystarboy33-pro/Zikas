
// import { useState } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Essential Black Tee",
//     category: "T-Shirts",
//     price: "$35",
//     image: "/images/black-tee.jpg",
//   },
//   {
//     id: 2,
//     name: "Oversized Streetwear",
//     category: "T-Shirts",
//     price: "$45",
//     image: "/images/oversized.jpg",
//   },
//   {
//     id: 3,
//     name: "Classic Urban Hoodie",
//     category: "Hoodies",
//     price: "$65",
//     image: "/images/hoodie.jpg",
//   },
//   {
//     id: 4,
//     name: "Premium Cargo Pants",
//     category: "Trousers",
//     price: "$55",
//     image: "/images/cargo.jpg",
//   },
// ];

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (!email.trim()) return;
//     alert("Thank you for subscribing to ZIKAS!");
//     setEmail("");
//   };

//   return (
//     <main className="bg-white text-black overflow-hidden">

//       {/* NAVBAR */}
//       <nav className="bg-black text-white">
//         <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

//           <a href="#" className="text-3xl font-black tracking-tighter">
//             ZIKAS<span className="text-orange-500">.</span>
//           </a>

//           <div className="hidden md:flex items-center gap-10 text-sm">
//             <a href="#" className="hover:text-orange-500">Home</a>
//             <a href="#collections" className="hover:text-orange-500">Collections</a>
//             <a href="#arrivals" className="hover:text-orange-500">New Arrivals</a>
//             <a href="#about" className="hover:text-orange-500">About Us</a>
//             <a href="#contact" className="hover:text-orange-500">Contact</a>
//           </div>

//           <div className="flex items-center gap-5">
//             <button aria-label="Shopping bag">
//               <i className="fa-solid fa-bag-shopping text-xl"></i>
//             </button>

//             <button
//               className="md:hidden text-xl"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle navigation"
//             >
//               <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
//             </button>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden flex flex-col px-6 pb-6 gap-5 text-sm">
//             <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
//             <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
//             <a href="#arrivals" onClick={() => setMenuOpen(false)}>New Arrivals</a>
//             <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
//             <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
//           </div>
//         )}
//       </nav>

//       {/* HERO */}
//       <section className="bg-black text-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center min-h-[600px]">

//           <div className="px-6 md:px-12 py-20">
//             <span className="text-orange-500 text-sm font-bold tracking-[4px]">
//               THE ZIKAS COLLECTION
//             </span>

//             <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mt-6">
//               WEAR YOUR
//               <span className="block text-orange-500">IDENTITY.</span>
//             </h1>

//             <p className="text-gray-400 mt-7 max-w-md leading-7">
//               Fashion is more than what you wear. It's how you express
//               yourself. Discover a new standard of everyday style with ZIKAS.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-9">
//               <a
//                 href="#collections"
//                 className="bg-orange-500 text-black px-8 py-4 font-bold hover:bg-white transition"
//               >
//                 SHOP COLLECTION
//                 <i className="fa-solid fa-arrow-right ml-3"></i>
//               </a>

//               <a
//                 href="#about"
//                 className="border border-white px-8 py-4 font-bold hover:bg-white hover:text-black transition"
//               >
//                 OUR STORY
//               </a>
//             </div>
//           </div>

//           <div className="h-[450px] md:h-[600px] relative">
//             <img
//               src="/images/hero.jpg"
//               alt="ZIKAS fashion collection"
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute bottom-8 right-8 bg-orange-500 text-black p-5">
//               <p className="text-xs font-bold tracking-widest">
//                 EST. 2026
//               </p>
//               <p className="text-2xl font-black">ZIKAS®</p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* BRAND STRIP */}
//       <section className="bg-orange-500 py-5 overflow-hidden">
//         <div className="flex justify-around gap-8 whitespace-nowrap font-black text-xl md:text-2xl">
//           <span>STYLE WITHOUT LIMITS</span>
//           <span>✦</span>
//           <span>BUILT DIFFERENT</span>
//           <span>✦</span>
//           <span>BE ORIGINAL</span>
//           <span>✦</span>
//         </div>
//       </section>

//       {/* COLLECTIONS */}
//       <section id="collections" className="py-24 px-6">
//         <div className="max-w-7xl mx-auto">

//           <div className="flex flex-wrap justify-between items-end mb-12 gap-5">
//             <div>
//               <span className="text-orange-500 font-bold text-sm tracking-widest">
//                 EXPLORE ZIKAS
//               </span>
//               <h2 className="text-4xl md:text-5xl font-black mt-3">
//                 OUR COLLECTIONS
//               </h2>
//             </div>

//             <a href="#arrivals" className="font-bold border-b-2 border-orange-500 pb-2">
//               VIEW ALL PRODUCTS →
//             </a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//             <div className="relative group overflow-hidden">
//               <img
//                 src="/images/men.jpg"
//                 alt="Men's collection"
//                 className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
//               />
//               <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
//                 <h3 className="text-4xl font-black">MEN'S WEAR</h3>
//                 <a href="#arrivals" className="text-orange-500 font-bold mt-3">
//                   EXPLORE COLLECTION →
//                 </a>
//               </div>
//             </div>

//             <div className="relative group overflow-hidden">
//               <img
//                 src="/images/women.jpg"
//                 alt="Women's collection"
//                 className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
//               />
//               <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
//                 <h3 className="text-4xl font-black">WOMEN'S WEAR</h3>
//                 <a href="#arrivals" className="text-orange-500 font-bold mt-3">
//                   EXPLORE COLLECTION →
//                 </a>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* NEW ARRIVALS */}
//       <section id="arrivals" className="bg-gray-100 py-24 px-6">
//         <div className="max-w-7xl mx-auto">

//           <div className="text-center mb-14">
//             <span className="text-orange-500 font-bold tracking-widest text-sm">
//               JUST DROPPED
//             </span>
//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               NEW ARRIVALS
//             </h2>
//             <p className="text-gray-500 mt-4">
//               Discover the latest additions to the ZIKAS collection.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
//             {products.map((product) => (
//               <div key={product.id} className="group">

//                 <div className="relative overflow-hidden bg-white">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-500"
//                   />

//                   <span className="absolute top-4 left-4 bg-orange-500 px-3 py-2 text-xs font-bold">
//                     NEW
//                   </span>
//                 </div>

//                 <div className="flex justify-between items-center mt-5">
//                   <div>
//                     <h3 className="font-bold">{product.name}</h3>
//                     <p className="text-gray-500 text-sm mt-1">
//                       {product.category}
//                     </p>
//                   </div>

//                   <p className="font-black">{product.price}</p>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* PROMO */}
//       <section className="bg-orange-500 py-24 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

//           <div>
//             <span className="font-bold tracking-widest text-sm">
//               THIS IS MORE THAN FASHION
//             </span>

//             <h2 className="text-5xl md:text-7xl font-black mt-5 leading-tight">
//               MAKE YOUR
//               <br />
//               STATEMENT.
//             </h2>

//             <p className="mt-5 max-w-md">
//               Be bold. Be confident. Be original. Let your style
//               speak before you do.
//             </p>
//           </div>

//           <a
//             href="#arrivals"
//             className="bg-black text-white px-10 py-5 font-bold hover:bg-white hover:text-black transition"
//           >
//             SHOP ZIKAS NOW →
//           </a>

//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="py-24 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

//           <div className="h-[450px]">
//             <img
//               src="/images/about.jpg"
//               alt="ZIKAS brand fashion"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div>
//             <span className="text-orange-500 font-bold tracking-widest text-sm">
//               WHO WE ARE
//             </span>

//             <h2 className="text-4xl md:text-6xl font-black mt-4 leading-tight">
//               MORE THAN
//               <span className="block text-orange-500">JUST CLOTHING.</span>
//             </h2>

//             <p className="text-gray-600 leading-8 mt-7">
//               ZIKAS is built around individuality, confidence and
//               self-expression. We believe clothing should do more
//               than cover you. It should reflect who you are.
//             </p>

//             <p className="text-gray-600 leading-8 mt-4">
//               Every collection is an opportunity to express your
//               personality, embrace your identity and make your
//               presence unforgettable.
//             </p>

//             <a
//               href="#contact"
//               className="inline-block mt-8 bg-black text-white px-8 py-4 font-bold hover:bg-orange-500 hover:text-black transition"
//             >
//               GET TO KNOW US →
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* NEWSLETTER */}
//       <section className="bg-black text-white py-20 px-6">
//         <div className="max-w-3xl mx-auto text-center">

//           <span className="text-orange-500 font-bold tracking-widest text-sm">
//             STAY IN THE LOOP
//           </span>

//           <h2 className="text-4xl md:text-5xl font-black mt-4">
//             NEVER MISS A DROP.
//           </h2>

//           <p className="text-gray-400 mt-5">
//             Subscribe to receive updates on new collections,
//             exclusive releases and special offers.
//           </p>

//           <form
//             onSubmit={handleSubscribe}
//             className="flex flex-col sm:flex-row gap-3 mt-9"
//           >
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email address"
//               required
//               className="flex-1 bg-white text-black px-5 py-4 outline-none"
//             />

//             <button
//               type="submit"
//               className="bg-orange-500 text-black px-8 py-4 font-bold hover:bg-white transition"
//             >
//               SUBSCRIBE
//             </button>
//           </form>

//         </div>
//       </section>

     

//     </main>
//   );
// };

// export default Home;
































import { NavLink } from "react-router-dom";
import {HashLink} from "react-router-hash-link"

const Hero = () => {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="py-10">

            <p className="text-orange-500 uppercase tracking-[4px] text-sm font-bold mb-6">
              Define Your Style
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-black">
              WEAR
              <br />
              YOUR
              <br />
              <span className="text-orange-500">IDENTITY.</span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg mt-8 max-w-md leading-relaxed">
              Discover a new expression of style with ZIKAS.
              Premium fashion, timeless designs and everyday
              essentials created for those who stand out.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9">

              <HashLink
                to="/products"
                className="bg-orange-500 text-white rounded-lg px-8 py-4 font-semibold hover:bg-black transition"
              >
                Explore Collection
              </HashLink>

              <NavLink
                to="/about"
                className="border border-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition"
              >
                Discover ZIKAS
              </NavLink>

            </div>

            {/* Small Stats */}
            <div className="flex gap-10 mt-14 border-t border-gray-200 pt-7">

              <div>
                <h3 className="text-3xl font-black">01</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  Unique Style
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black">02</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  Quality First
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black">03</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  Made To Stand Out
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="absolute top-5 right-5 w-full h-full bg-orange-500">
            </div>

            <div className="relative h-112.5 md:h-150 overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
                alt="ZIKAS fashion collection"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute bottom-0 left-0 w-full p-7 bg-linear-to-t from-black/70 to-transparent rounded-2xl">

                <p className="text-white text-xs uppercase tracking-[3px]">
                  ZIKAS Collection
                </p>

                <h2 className="text-white text-3xl font-bold mt-2">
                  BE DIFFERENT.
                </h2>

              </div>

            </div>

            {/* Floating Label */}
            <div className="absolute -left-5 top-12 bg-orange-500 text-white px-5 py-4">
              <p className="text-xs uppercase tracking-widest">
                The New
              </p>

              <p className="text-xl font-black">
                ERA OF STYLE
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
