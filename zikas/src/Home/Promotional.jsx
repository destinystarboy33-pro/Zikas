
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <section className="px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto bg-white relative overflow-hidden">

        <div className="grid md:grid-cols-2 items-center">

          {/* Content */}
          <div className="p-8 md:p-16 text-orange-500 relative z-10">

            <p className="uppercase tracking-[4px] text-black text-sm font-semibold mb-5">
              The ZIKAS Experience
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              STYLE THAT
              <br />
              SPEAKS.
              <br />
              <span className="text-black">CONFIDENCE THAT LASTS.</span>
            </h2>

            <p className="mt-6 text-black max-w-md leading-relaxed">
              Step into a world of bold expression and effortless
              style. Find pieces that reflect your personality
              and make every moment count.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-8 bg-black text-white rounded-lg px-8 py-4 font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Explore Collection
              <i className="fa-solid fa-arrow-right ml-3"></i>
            </Link>

          </div>

          {/* Image */}
          <div className="h-87.5 md:h-125 relative rounded-2xl">

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85"
              alt="ZIKAS fashion collection"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
