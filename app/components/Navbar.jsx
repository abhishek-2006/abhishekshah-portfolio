"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-400"
        >
          &lt;A.S /&gt;
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-10 text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`relative group transition ${
                  isActive(link.href)
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-400 transition-all ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-200 hover:text-cyan-400 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/5">
          <ul className="flex flex-col px-6 py-6 space-y-6 text-xl text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block transition ${
                    isActive(link.href)
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}