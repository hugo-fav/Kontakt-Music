"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Artist", path: "/artist" },
    { name: "Music", path: "/music" },
    { name: "Team", path: "/team" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-b-yellow-300 bg-black backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-gray-100">
          <Image
            src="/favicon.jpg"
            alt="Logo"
            width={30}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2 ${
                pathname === link.path ? "text-yellow-300  decoration-2" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-t-yellow-300">
          <nav className="flex flex-col gap-3.5 px-6 py-6 items-center text-lg font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2 ${
                  pathname === link.path ? "text-yellow-300  decoration-2" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
