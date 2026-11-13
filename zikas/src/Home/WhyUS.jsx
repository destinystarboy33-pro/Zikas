import Reveal from "../Components/Reveal";
const WhyZikas = () => {
  const reasons = [
    {
      icon: "fa-gem",
      title: "Quality First",
      description:
        "We prioritize quality materials and thoughtful details to deliver clothing you can appreciate."
    },
    {
      icon: "fa-shirt",
      title: "Unique Designs",
      description:
        "Discover distinctive styles that help you express your personality with confidence."
    },
    {
      icon: "fa-star",
      title: "Everyday Comfort",
      description:
        "Fashion should look good and feel comfortable. Find pieces designed for everyday wear."
    },
    {
      icon: "fa-fire",
      title: "Style Without Limits",
      description:
        "From everyday essentials to statement pieces, express your style without limitations."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <Reveal>


      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-bold mb-4">
            The ZIKAS Difference
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-black">
            WHY CHOOSE <span className="text-orange-500">ZIKAS?</span>
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            More than just clothing. It's about expressing
            who you are through style, comfort and confidence.
          </p>

        </div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 hover:bg-black hover:text-white transition duration-300 group"
            >

              <div className="w-14 h-14 bg-orange-500 flex items-center justify-center mb-7">

                <i className={`fa-solid ${reason.icon} text-white text-xl`}></i>

              </div>

              <h3 className="text-xl font-bold mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed text-sm">
                {reason.description}
              </p>

              <div className="w-10 h-1 bg-orange-500 mt-7"></div>

            </div>
          ))}

        </div>

      </div>
      </Reveal>

    </section>
  );
};

export default WhyZikas;
