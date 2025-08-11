"use client";

import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="max-w-7xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-blue-700 leading-tight mb-6">
            Fresh Hospital
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Your health and well-being are our top priorities. Explore our
            services, learn about our team, or get in touch.
          </p>
          <a
            href="/services"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-800 transition"
          >
            View Our Services
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/check.jpg"
            alt="Hospital"
            className="rounded-xl shadow-lg w-full object-cover h-72 border border-blue-100"
          />
        </div>
      </motion.section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: "👨‍⚕️",
            title: "Expert Doctors",
            desc: "Highly qualified and experienced specialists.",
          },
          {
            icon: "🏥",
            title: "Modern Facilities",
            desc: "State-of-the-art equipment and cozy patient rooms.",
          },
          {
            icon: "⏰",
            title: "24/7 Support",
            desc: "Always available for emergencies and urgent care.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-blue-100 rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

        {/* Emergency Contact */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-red-50 border-l-4 border-red-500 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between shadow-md"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span className="text-4xl text-red-600">🚨</span>
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-1">
              Emergency Contact
            </h2>
            <p className="text-gray-700">
              For urgent medical attention, call us immediately:
            </p>
          </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
          <a
            href="tel:+2348012345678"
            className="text-xl font-semibold text-red-700 bg-white border border-red-200 px-6 py-3 rounded-lg shadow hover:bg-red-100 transition mb-2"
          >
            +234 801 234 5678
          </a>
          <span className="text-sm text-gray-500">24/7 Emergency Line</span>
            </div>
          </motion.div>
        </section>

      {/* Core Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Core Values
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            "Focus on Health",
            "Reliability",
            "Empathy",
            "Service Excellence",
            "Holistic Care",
            "Core Values",
          ].map((value, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-green-800 text-sm font-semibold px-5 py-2 rounded-full shadow"
            >
              {value}
            </span>
          ))}
        </div>
            {/* About Section */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        {[
          {
            title: "Our Vision",
            desc: "To deliver the highest quality of medical care in Lagos and beyond.",
          },
          {
            title: "Our Mission",
            desc: "To provide the best individualized healthcare. The patient’s best interest is our priority.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-blue-100 rounded-xl p-6 shadow text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </section>

                  {/* Strength Section */}

                  <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
                    Strength
                  </h2>
                  <ul className="grid md:grid-cols-4 gap-4 mx-auto text-gray-700">
                    {[
                      "Qualified staff",
                      "Advanced technology",
                      "Specialized services",
                      "Comprehensive care",
                      "Strong management",
                      "Accreditation and certifications",
                      "Patient-centric approach",
                      "Emergency readiness",
                      "Research and innovation",
                      "Community engagement",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-blue-100 p-3 rounded-lg shadow-md"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  </section>

                  {/* Testimonials */}
                  <section className="mb-20">
                    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                      What Our Patients Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          name: "Chinedu Okafor",
                          text: "The doctors and nurses were caring and professional. I felt safe throughout my stay.",
                          city: "Lagos, Nigeria",
                          img: "https://i.pinimg.com/736x/89/a3/a5/89a3a5bf8d29d9f0ec398e56993bc53a.jpg", // Nigerian man
                        },
                        {
                          name: "Ngozi Eze",
                          text: "Excellent maternity care. I felt comfortable and supported at every step.",
                          city: "Abuja, Nigeria",
                          img: "https://i.pinimg.com/1200x/0e/72/62/0e72623081f5f6ae77cbbe912894a1ea.jpg", // Nigerian woman
                        },
                        {
                          name: "Babatunde Adebayo",
                          text: "Modern and clean facilities. Highly recommended for quality healthcare.",
                          city: "Banana Island, Nigeria",
                          img: "https://i.pinimg.com/1200x/64/ea/f2/64eaf234a6b0ef43eece36de24c3eace.jpg", // Nigerian man
                        },
                      ].map((testi, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.2 }}
                          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
                        >
                          <img
                            src={testi.img}
                            alt={testi.name}
                            className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100"
                          />
                          <p className="text-gray-700 italic mb-2">“{testi.text}”</p>
                          <span className="font-semibold text-blue-700">{testi.name}</span>
                          <span className="text-sm text-gray-500">{testi.city}</span>
                        </motion.div>
                      ))}
                    </div>
                  </section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-3">
          Ready to book an appointment?
        </h2>
        <p className="text-gray-700 mb-5">
          Contact us today and take the first step towards better health.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </main>
  );
};

export default page;
