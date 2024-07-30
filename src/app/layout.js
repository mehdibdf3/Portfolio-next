
"use client";

import { UserProvider } from '../UserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../style.css'; 
import '../index.css'; 
import '../App.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </UserProvider>
  );
}
