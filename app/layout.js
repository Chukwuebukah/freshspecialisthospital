// app/layout.js

import './globals.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar'; // move navbar into separate client component


export const metadata = {
  title: 'Fresh Specialist Hospital',
  description: 'Your health and well-being are our top priorities',
  icons: {
    icon: '/Logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
