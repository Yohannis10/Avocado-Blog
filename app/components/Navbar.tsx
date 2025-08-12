// components/Navbar.tsx
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => (
  <nav className="bg-blue-600 text-white shadow-md fixed top-0 pb- left-0 w-full right-0">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Zemenay Tech
      </Link>
      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-gray-200 transition-colors">About</Link>
        <Link href="/blog" className="hover:text-gray-200 transition-colors">Blog</Link>
        <Link href="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
