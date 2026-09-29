"use client";

import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "../_context/SidebarContext";

interface NavLink {
  label: string;
  href: string;
}

interface SidebarProps {
  links: NavLink[];
}

export default function Sidebar({ links = [] }: SidebarProps) {
  const { isOpen, setIsOpen } = useSidebar();

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Hamburger button */}

      {!isOpen && (
        <button
          onClick={handleOpen}
          aria-label="Open menu"
          className="fixed top-6 right-6 z-50 cursor-pointer p-3 md:hidden"
        >
          <Image
            src="/hamburger.svg"
            alt="Open menu"
            width={24}
            height={21}
            className="h-6 w-7 object-contain sm:h-8 sm:w-9"
          />
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`text-lightblue bg-sidebar/95 fixed top-0 right-0 z-50 h-dvh w-3/4 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-auto translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close menu"
          className="ml-auto block cursor-pointer p-6"
        >
          <Image
            src="/close.svg"
            alt="Close menu"
            width={24}
            height={24}
            className="h-auto w-auto object-contain"
          />
        </button>

        {/* Navigation */}
        <nav className="mt-8 flex flex-col gap-10 px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleClose}
              className="font-subheading text-fluid-sidebar tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
