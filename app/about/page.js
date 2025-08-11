'use client'

import { motion } from "framer-motion";

export default function About() {
  // Gallery images from public directory
  const galleryImages = [
    { src: "/check.jpg", alt: "Medical Checkup" },
    { src: "/rib.jpg", alt: "Rib Examination" },
    { src: "/sub.jpg", alt: "Medical Subspecialty" },
    { src: "/surgery.jpg", alt: "Surgery Procedure" }
  ];

  return (
    <div className="px-4 py-16 max-w-7xl mx-auto">
        {/* Photo Gallery Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Our Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Core Values</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  "Focus on Health", "Reliability", "Empathy",
                  "Service Excellence", "Holistic Care", "Core Values"
                ].map((value, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-800 text-sm font-semibold px-5 py-2 rounded-full shadow"
                  >
                    {value}
                  </span>
                ))}
              </div>
      
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center"> Strength </h2>
              <ul className="grid md:grid-cols-4 gap-4 mx-auto text-gray-700">
                {[
                  "Qualified staff", "Advanced technology", "Specialized services", "Comprehensive care",
                  "Strong management", "Accreditation and certifications", "Patient-centric approach",
                  "Emergency readiness", "Research and innovation", "Community engagement"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-blue-50 p-3 rounded-lg shadow-md"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </section>

      {/* Our Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Our Team</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <img
            src="/Team.jpeg"
            alt="Team"
            className="rounded-xl w-full md:w-[40%] h-[100%] object-cover shadow-lg border border-blue-100"
          />
          <p className="w-full md:w-[60%] text-gray-700 leading-relaxed text-justify">
            Our dedicated team of professionals uses state-of-the-art technology and personalized care
            to deliver exceptional medical services. We empower our patients with knowledge and a
            preventive approach to stay healthy while avoiding complications. At Fresh Hospital,
            we are passionate about providing compassionate, personalized care in a warm, welcoming
            environment.
          </p> 
        </motion.div>
      </section>

      {/* Lead Doctor Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Meet Our Lead Doctor</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <img
            src="/Doctor.jpeg"
            alt="Lead Doctor"
            className="rounded-xl w-[50%] md:w-[40%] h-[50%] object-cover shadow-lg border border-blue-100"
          />
          <p className="w-full md:w-[60%] text-gray-700 leading-relaxed text-justify">
            <strong className="text-blue-700">Dr. Tope Olugboyo, M.B.B.S</strong> is a skilled doctor with nearly a decade of experience,
            serving patients in Lagos with a passion for personalized healthcare. A graduate from the
            University of Jos, he blends preventive, diagnostic, and restorative medicine with empathy
            and professionalism. Dr. Tope leads Fresh Hospital with a strong commitment to
            patient-centered care, ensuring everyone feels heard, safe, and supported.
          </p>
        </motion.div>
      </section>

      
      
              {/* About Section */}
            <section className="grid md:grid-cols-2 gap-10 mb-20">
              {[
                { title: 'Our Vision', desc: 'To deliver the highest quality of medical care in Lagos and beyond.' },
                { title: 'Our Mission', desc: "To provide the best individualized healthcare. The patient’s best interest is our priority." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-blue-50 rounded-xl p-6 shadow text-center md:text-left"
                >
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </section>
    </div>
  );
}
