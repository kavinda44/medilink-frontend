"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../icons/Logo";
import { usePathname } from "next/navigation";

import { navlinks } from "@/lib/constants";
import PrimaryButton from "../ui/PrimaryButton";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="px-container container mx-auto pt-[1em] text-[13px] 2xl:text-[16px] relative z-50">
      <nav className="relative flex items-center justify-between rounded-[0.8em] bg-white/70 px-[1.5em] py-[1em] shadow backdrop-blur-xs">
        {/* Logo */}
        <Link href="/">
          <button className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </button>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-[1.5em]">
          {navlinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <p
                  className={
                    pathname === link.href ? "text-[#0062FF] font-medium" : "text-[#626D84] hover:text-[#0062FF] transition-colors"
                  }
                >
                  {link.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="/symptom-assessment">
            <PrimaryButton className="bg-linear-to-br">Get Started</PrimaryButton>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden p-2 text-secondary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[calc(100%+0.5em)] left-0 w-full rounded-[0.8em] bg-white/95 px-[1.5em] py-[1.5em] shadow-lg backdrop-blur-md md:hidden flex flex-col gap-[1.5em] border border-secondary/10 border-t-0">
            <ul className="flex flex-col gap-[1em]">
              {navlinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                    <p
                      className={
                        pathname === link.href ? "text-[#0062FF] font-medium text-[1.1em]" : "text-[#626D84] text-[1.1em]"
                      }
                    >
                      {link.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="border-t-secondary/10" />
            <Link href="/symptom-assessment" onClick={() => setIsMenuOpen(false)} className="w-full text-center">
              <PrimaryButton className="bg-linear-to-br w-full py-[1em]">Get Started</PrimaryButton>
            </Link>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;