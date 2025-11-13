"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-b-yellow-300
      bg-black backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 dark:text-gray-100"
        >
          <Image
            src="/favicon.jpg"
            alt="background"
            width={30}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link
            href="/"
            className="hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2"
          >
            Home
          </Link>
          <Link
            href="/artist"
            className="hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2"
          >
            Artist
          </Link>
          <Link
            href="/music"
            className="hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2"
          >
            Music
          </Link>
          <Link
            href="/team"
            className="hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2"
          >
            Team
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-t-yellow-300">
          <nav className="flex flex-col gap-3.5 px-6 py-6 space-y-4 justify-center items-center text-1xl font-medium ">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2"
            >
              Home
            </Link>
            <Link
              href="/artist"
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2"
            >
              Artist
            </Link>
            <Link
              href="/music"
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2"
            >
              Music
            </Link>
            <Link
              href="/team"
              onClick={() => setIsOpen(false)}
              className="hover:underline hover:decoration-yellow-300 hover:decoration-2 hover:underline-offset-2"
            >
              Team
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
