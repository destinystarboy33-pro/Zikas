import { NavLink } from "react-router-dom";
import {HashLink} from "react-router-hash-link"
import Reveal from "../Components/Reveal";

const Hero = () => {
  return (
    <>
    <Reveal>
    <section className="bg-white font-inter">

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
                to="/#products"
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
    </Reveal>
    </>
  );
};

export default Hero;
