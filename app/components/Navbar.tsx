"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const navLinks: { label: string; href: string }[] = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const path = usePathname();

  return (
    <header className="header">
      <div className="h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <Link href="/">
          <p className="blue-gradient_text p-3">Senpai</p>
        </Link>
      </div>
      <nav className="flex text-lg gap-7 font-medium">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className={link.href === path ? "text-blue-500" : "text-black"}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
