'use client';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: "🩺",
      title: "General Medical Consultations",
      description: "Comprehensive medical consultations with experienced doctors for diagnosis, treatment, and management of various health conditions.",
    },
    {
      icon: "⚕️",
      title: "General Surgery",
      description: "Professional surgical procedures conducted by skilled surgeons in our state-of-the-art operating facilities.",
    },
    {
      icon: "🤰",
      title: "Obstetric And Gynecology",
      description: "Specialized care for women including pregnancy management, childbirth services, and treatment of reproductive system disorders.",
    },
    {
      icon: "🔬",
      title: "Laboratory Services",
      description: "Comprehensive diagnostic testing including blood work, urinalysis, pathology, and other medical tests with quick and accurate results.",
    },
    {
      icon: "❤️",
      title: "Specialist Consultations (Cardiologist, Paediatrican, Dermatologist)",
      description: "Access to board-certified specialists in cardiology, pediatrics, dermatology, and more for expert medical opinions and treatments.",
    },
    {
      icon: "💉",
      title: "Immunization",
      description: "Complete vaccination services for children and adults, following recommended immunization schedules to prevent infectious diseases.",
    },
    {
      icon: "📲",
      title: "Telehealth Consultations",
      description: "Virtual medical consultations with healthcare providers from the comfort of your home via secure video conferencing.",
    },
    {
      icon: "👪",
      title: "Family Planning",
      description: "Confidential consultations, contraceptive options, and education to help individuals and couples plan their families.",
    },
    {
      icon: "🏡",
      title: "Home-Care Services",
      description: "Professional medical care brought to your doorstep, including nursing services, rehabilitation, and assistance for those unable to visit the hospital.",
    },
    {
      icon: "🧓",
      title: "Geriatric Care",
      description: "Specialized healthcare services for elderly patients, addressing age-related conditions and ensuring comfort and dignity.",
    },
    {
      icon: "🛡️",
      title: "HMO",
      description: "Health Maintenance Organization services providing comprehensive healthcare coverage with a network of preferred providers for cost-effective care.",
    },
  ];

  return (
    <section id="services" className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            Our Medical Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive healthcare services for you and your family
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="relative group"
            >
              <div className="bg-blue-100 rounded-lg shadow-lg p-8 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

