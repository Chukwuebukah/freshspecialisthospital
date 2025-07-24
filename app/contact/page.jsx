'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="flex items-center justify-center bg-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl p-10 my-12 bg-blue-50"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-700 text-4xl font-bold mb-4 text-center"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 mb-10 text-center"
        >
          Get in touch with our hospital for appointments or inquiries.
        </motion.p>

        {/* Flex Container for Contact Info & Form */}
        <div className="flex flex-col  gap-10 justify-center items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1 space-y-6 "
          >
            <div className="bg-blue-100 rounded-lg px-6 py-4 text-left">
              <span className="font-semibold text-blue-700">📞 Phone:</span>
              <a href="tel:+2347060508873" className="text-blue-700 hover:underline ml-2 block">
                +234 706 050 8873
              </a>
              <a href="tel:+2348083284788" className="text-blue-700 hover:underline ml-2 block">
                +234 808 328 4788
              </a>
            </div>

            <div className="bg-blue-100 rounded-lg px-6 py-4 text-left">
              <span className="font-semibold text-blue-700">📧 Email:</span>
              <a href="mailto:Freshspecialisthospital@gmail.com" className="text-blue-700 hover:underline ml-2 block">
                Freshspecialisthospital@gmail.com
              </a>
              <a href="mailto:Tametop2014@gmail.com" className="text-blue-700 hover:underline ml-2 block">
                Tametop2014@gmail.com
              </a>
            </div>

            <div className="bg-blue-100 rounded-lg px-6 py-4 text-left">
              <span className="font-semibold text-blue-700">📍 Address:</span>
              <span className="ml-2 block">
                Balogun estate road along Lekki-Epe expressway
              </span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex-1"
          >
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
