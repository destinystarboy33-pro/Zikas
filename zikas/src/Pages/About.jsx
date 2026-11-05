
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[650px] flex items-end bg-black">

        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=90"
          alt="Fashion editorial"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20">

          <p className="text-orange-500 uppercase tracking-[5px] font-bold text-sm mb-6">
            The World of ZIKAS
          </p>

          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
            BEYOND
            <br />
            <span className="text-orange-500">FASHION.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">

            <p className="text-gray-300 max-w-lg text-lg leading-relaxed">
              More than a clothing brand. A statement of individuality,
              confidence and personal expression.
            </p>

            <Link
              to="/shop"
              className="border border-white text-white px-8 py-4 w-fit hover:bg-orange-500 hover:border-orange-500 transition"
            >
              Explore Collection
              <i className="fa-solid fa-arrow-up-right-from-square ml-3" />
            </Link>

          </div>
        </div>
      </section>


      {/* BRAND STORY */}
      <section className="py-24 px-6 md:px-12">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85"
              alt="Fashion collection"
              className="w-full h-[450px] md:h-[600px] object-cover"
            />

            <div className="absolute -bottom-6 -right-5 bg-orange-500 p-7 hidden md:block">
              <h3 className="text-5xl font-black text-black">Z.</h3>
              <p className="text-xs uppercase tracking-widest text-black">
                Define Your Style
              </p>
            </div>

          </div>

          <div className="md:pl-8">

            <p className="text-orange-500 uppercase tracking-[4px] font-bold text-sm mb-6">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-black leading-[1.05] tracking-tight">
              WEAR YOUR
              <br />
              <span className="text-orange-500">IDENTITY.</span>
            </h2>

            <div className="w-16 h-1 bg-black my-8" />

            <p className="text-gray-600 leading-relaxed mb-6">
              ZIKAS represents a modern approach to fashion,
              built around individuality, self-expression and
              the freedom to define your own style.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              We believe clothing should be more than something
              you put on. It should reflect your personality,
              complement your lifestyle and give you the confidence
              to express yourself.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through distinctive designs and carefully considered
              collections, we aim to make every style choice meaningful.
            </p>

          </div>
        </div>
      </section>


      {/* BRAND STATEMENT */}
      <section className="bg-black text-white py-28 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          <p className="text-orange-500 uppercase tracking-[5px] text-sm font-bold mb-8">
            Our Perspective
          </p>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]">
            NOT MADE
            <br />
            TO BLEND IN.
            <br />
            <span className="text-orange-500">
              MADE TO STAND OUT.
            </span>
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-8 mt-12 border-t border-gray-700 pt-8">

            <p className="text-gray-400 max-w-lg leading-relaxed">
              We celebrate individuality and believe personal
              style has no boundaries. Be original. Be confident.
              Be unapologetically yourself.
            </p>

            <p className="text-6xl md:text-8xl font-black text-white/10">
              ZIKAS.
            </p>

          </div>
        </div>
      </section>


      {/* VISUAL IDENTITY */}
      <section className="bg-white py-24 px-6 md:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mb-12">

            <div>
              <p className="text-orange-500 uppercase tracking-[4px] text-sm font-bold mb-4">
                Our Visual Identity
              </p>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                THE ZIKAS <span className="text-orange-500">AESTHETIC.</span>
              </h2>
            </div>

            <p className="text-gray-500 max-w-sm leading-relaxed">
              A visual expression of individuality, creativity
              and contemporary fashion.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {[
              {
                image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
                title: "THE DETAILS",
                subtitle: "Fashion in every detail"
              },
              {
                image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
                title: "THE EXPRESSION",
                subtitle: "Style without boundaries"
              },
              {
                image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
                title: "THE IDENTITY",
                subtitle: "Make your own statement"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-7 text-white">

                  <h3 className="text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 mt-2">
                    {item.subtitle}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* CLOSING SECTION */}
      <section className="bg-orange-500 py-24 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <p className="text-black uppercase tracking-[5px] font-bold text-sm mb-6">
            This Is ZIKAS
          </p>

          <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter">
            OWN YOUR
            <br />
            STYLE.
            <br />
            OWN YOUR
            <br />
            IDENTITY.
          </h2>

          <Link
            to="/shop"
            className="inline-block mt-10 bg-black text-white px-10 py-5 font-bold hover:bg-white hover:text-black transition"
          >
            SHOP THE COLLECTION
            <i className="fa-solid fa-arrow-right ml-3" />
          </Link>

        </div>
      </section>

    </main>
  );
};

export default About;
