const Footer = () => (
  <footer className="bg-blue-100 text-blue-700 pt-12 pb-6 mt-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

      {/* Brand Info */}
      <div>
        <h2 className="text-xl font-bold mb-3">Fresh Hospital</h2>
        <p className="text-sm text-gray-600">
          Dedicated to delivering personalized, world-class medical care in a safe and welcoming environment. Your health is our priority.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="text-sm space-y-2">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Contact</h3>
        <div className="text-sm space-y-1">
          <div><strong>Phone:</strong> <a href="tel:+2347060508873" className="hover:underline">+234 706 050 8873</a></div>
          <div><strong>Phone:</strong> <a href="tel:+2348083284788" className="hover:underline">0808 328 4788</a></div>
          <div><strong>Email:</strong> <a href="mailto:info@freshspecialisthospital.com" className="hover:underline">info@freshspecialisthospital.com</a></div>
        </div>
      </div>

      {/* Address Info */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Visit Us</h3>
        <p className="text-sm text-gray-600">
          Balogun Estate Road,<br />
          Along Lekki-Epe Expressway,<br />
          Lagos, Nigeria.
        </p>
      </div>
    </div>

    <hr className="my-8 border-gray-300" />

    {/* Bottom Bar */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-2 px-4">
      <div>
        © {new Date().getFullYear()} Fresh Hospital. All rights reserved.
      </div>
      <div className="text-center md:text-right">
        <a href="https://www.qcwix.com" className="hover:underline">Powered by Qcwix</a>
      </div>
    </div>
  
  </footer>
);

export default Footer;
