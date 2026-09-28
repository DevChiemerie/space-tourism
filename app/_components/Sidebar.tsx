"use client";

import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "../_context/SidebarContext";
import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface SidebarProps {
  links: NavLink[];
}

export default function Sidebar({ links = [] }: SidebarProps) {
  const { isOpen, setIsOpen } = useSidebar();
  const [hamburgerVisible, setIsHamburgerVisible] = useState(true);

  function handleOpen() {
    setIsOpen(true);
    setIsHamburgerVisible(false);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="flex justify-end md:hidden">
      {/* Hamburger button */}
      <button
        onClick={handleOpen}
        aria-label="Open menu"
        className={`cursor-pointer p-2 transition-transform duration-300 ease-in-out ${hamburgerVisible ? "" : "invisible"} ${hamburgerVisible ? "translate-x-0" : "translate-x-full"}`}
      >
        <Image
          className="-mt-13 flex h-auto w-auto justify-end object-contain"
          src="/hamburger.svg"
          alt="A Harmburger Icon"
          width="10"
          height="10"
        />
      </button>

      {/* Overlay */}
      {isOpen && <div onClick={handleClose} className="fixed inset-0 z-40" />}

      {/* Sidebar panel */}
      <aside
        onTransitionEnd={() => {
          if (!isOpen) setIsHamburgerVisible(true);
        }}
        className={`bg-darkblue/95 text-lightblue fixed top-0 right-0 z-50 h-dvh w-3/4 transform transition-transform duration-1000 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleClose}
          aria-label="Close menu"
          className="ml-auto block cursor-pointer self-end p-4"
        >
          <Image
            className="h-auto w-auto object-contain"
            src="/close.svg"
            alt="A Close Icon"
            width="10"
            height="10"
          />
        </button>

        <nav className="mt-8 flex flex-col gap-10 px-6">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={handleClose}
              className="font-subheading text-fluid-subheading tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
