
import { useState } from "react";
import Reveal from "../Components/Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting ZIKAS. We will get back to you soon!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-white">
      <Reveal>


      {/* HERO SECTION */}
      <section className="bg-black text-white px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <p className="text-orange-500 uppercase tracking-[5px] text-sm font-bold mb-6">
            Get In Touch
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            LET'S
            <br />
            <span className="text-orange-500">TALK.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">

            <p className="text-gray-400 max-w-lg text-base md:text-lg leading-relaxed">
              Have a question, need assistance or want to know more
              about ZIKAS? We'd love to hear from you.
            </p>

            <p className="text-gray-500 uppercase tracking-[3px] text-xs">
              We are just a message away.
            </p>

          </div>

        </div>
      </section>
      </Reveal>


      {/* CONTACT CONTENT */}
      <Reveal>
      <section className="py-24 px-6 md:px-12">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* CONTACT INFORMATION */}
          <div>

            <p className="text-orange-500 uppercase tracking-[4px] text-sm font-bold mb-5">
              Contact Information
            </p>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              WE'D LOVE TO
              <br />
              <span className="text-orange-500">HEAR FROM YOU.</span>
            </h2>

            <p className="text-gray-500 leading-relaxed max-w-md mb-12">
              Whether you have questions about our collections,
              your orders or anything else, our team is ready to help.
            </p>

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-start gap-5">

                <div className="w-14 h-14 bg-orange-500 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-xl text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-black mb-2">Email Us</h3>
                  <p className="text-gray-500 text-sm">
                    For general enquiries and support.
                  </p>
                  <a
                    href="mailto:hello@zikas.com"
                    className="text-black font-semibold hover:text-orange-500 transition"
                    >
                    hello@zikas.com
                  </a>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-5">

                <div className="w-14 h-14 bg-orange-500 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-xl text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-black mb-2">Call Us</h3>
                  <p className="text-gray-500 text-sm">
                    Speak with our customer support team.
                  </p>
                  <p className="text-black font-semibold">
                    Add your business phone number
                  </p>
                </div>

              </div>

              {/* SOCIAL MEDIA */}
              <div className="flex items-start gap-5">

                <div className="w-14 h-14 bg-orange-500 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-share-nodes text-xl text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-black mb-3">Follow ZIKAS</h3>

                  <div className="flex gap-5 text-xl">

                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="text-gray-600 hover:text-orange-500 transition"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>

                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="text-gray-600 hover:text-orange-500 transition"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>

                    <a
                      href="https://tiktok.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TikTok"
                      className="text-gray-600 hover:text-orange-500 transition"
                    >
                      <i className="fa-brands fa-tiktok" />
                    </a>

                  </div>
                </div>

              </div>

            </div>
          </div>


          {/* CONTACT FORM */}
          <div className="bg-gray-50 p-7 md:p-12">

            <p className="text-orange-500 uppercase tracking-[4px] text-xs font-bold mb-4">
              Send Us A Message
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
              HOW CAN WE HELP?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-white rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  className="w-full bg-white rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  className="w-full bg-white rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-orange-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black rounded-lg text-white py-5 font-bold hover:bg-orange-500 transition duration-300"
              >
                SEND MESSAGE
                <i className="fa-solid fa-arrow-right ml-3" />
              </button>

            </form>

          </div>

        </div>
      </section>
                </Reveal>


      {/* BOTTOM BRAND SECTION */}
      <Reveal>

      <section className="bg-orange-500 py-20 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <p className="text-black uppercase tracking-[5px] text-sm font-bold mb-5">
            The ZIKAS Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            STYLE STARTS
            <br />
            WITH YOU.
          </h2>

          <p className="text-black/70 mt-6 max-w-lg mx-auto">
            Thank you for being part of the ZIKAS journey.
            We look forward to connecting with you.
          </p>

        </div>

      </section>

      </Reveal>
    </main>
  );
};

export default Contact;
