 import { NavLink } from "react-router-dom";

const Footer = () => {

  // const year = new Date().getFullYear();

  return (

     <footer id="contact" className="bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            <div>
              <h2 className="text-4xl font-black">
                ZIKAS
              </h2>
              <p className="text-gray-400 mt-5 leading-7">
                Wear your identity. Express your style.
                Make every moment a statement.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-orange-500 mb-5">QUICK LINKS</h3>
              <div className="flex flex-col gap-4 text-gray-400 text-sm">
                <a href="#" className="hover:text-white">Home</a>
                <NavLink to={"/collections"}>
                  <p className=" cursor-pointer">Collections</p>
                </NavLink>
                {/* <a href="#collections" className="hover:text-white">Collections</a> */}
                {/* <a href="#arrivals" className="hover:text-white">New Arrivals</a> */}
                <NavLink to={"/about"}>
                  <p className=" cursor-pointer">About</p>
                </NavLink>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-orange-500 mb-5">CUSTOMER CARE</h3>
              <div className="flex flex-col gap-4 text-gray-400 text-sm">
                <a href="#contact" className="hover:text-white">Contact Us</a>
                <a href="#" className="hover:text-white">Shipping Policy</a>
                <a href="#" className="hover:text-white">Returns & Exchanges</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-orange-500 mb-5">FOLLOW US</h3>
              <div className="flex gap-5 text-xl">
                <a href="#" aria-label="Instagram" className="hover:text-orange-500">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-orange-500">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" aria-label="TikTok" className="hover:text-orange-500">
                  <i className="fa-brands fa-tiktok"></i>
                </a>

                  <a href="https://wa.me/2349075137529" aria-label="Whatsapp" className="hover:text-orange-500">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} ZIKAS. All rights reserved.</p>
            <p>DESIGNED FOR INDIVIDUALITY.</p>
          </div>

        </div>
      </footer>
  );
};

export default Footer;




















 {/* FOOTER */}
      // <footer id="contact" className="bg-black text-white border-t border-gray-800">
      //   <div className="max-w-7xl mx-auto px-6 py-16">

      //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      //       <div>
      //         <h2 className="text-4xl font-black">
      //           ZIKAS<span className="text-orange-500">.</span>
      //         </h2>
      //         <p className="text-gray-400 mt-5 leading-7">
      //           Wear your identity. Express your style.
      //           Make every moment a statement.
      //         </p>
      //       </div>

      //       <div>
      //         <h3 className="font-bold text-orange-500 mb-5">QUICK LINKS</h3>
      //         <div className="flex flex-col gap-4 text-gray-400 text-sm">
      //           <a href="#" className="hover:text-white">Home</a>
      //           <a href="#collections" className="hover:text-white">Collections</a>

      //           <a href="#arrivals" className="hover:text-white">New Arrivals</a>
      //           <a href="#about" className="hover:text-white">About Us</a>
      //         </div>
      //       </div>

      //       <div>
      //         <h3 className="font-bold text-orange-500 mb-5">CUSTOMER CARE</h3>
      //         <div className="flex flex-col gap-4 text-gray-400 text-sm">
      //           <a href="#contact" className="hover:text-white">Contact Us</a>
      //           <a href="#" className="hover:text-white">Shipping Policy</a>
      //           <a href="#" className="hover:text-white">Returns & Exchanges</a>
      //           <a href="#" className="hover:text-white">Privacy Policy</a>
      //         </div>
      //       </div>

      //       <div>
      //         <h3 className="font-bold text-orange-500 mb-5">FOLLOW US</h3>
      //         <div className="flex gap-5 text-xl">
      //           <a href="#" aria-label="Instagram" className="hover:text-orange-500">
      //             <i className="fa-brands fa-instagram"></i>
      //           </a>
      //           <a href="#" aria-label="Facebook" className="hover:text-orange-500">
      //             <i className="fa-brands fa-facebook"></i>
      //           </a>
      //           <a href="#" aria-label="TikTok" className="hover:text-orange-500">
      //             <i className="fa-brands fa-tiktok"></i>
      //           </a>
      //         </div>
      //       </div>

      //     </div>

      //     <div className="border-t border-gray-800 mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-4 text-gray-500 text-sm">
      //       <p>© {new Date().getFullYear()} ZIKAS. All rights reserved.</p>
      //       <p>DESIGNED FOR INDIVIDUALITY.</p>
      //     </div>

      //   </div>
      // </footer>