"use client";

import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "../_context/SidebarContext";

export default function Logo() {
  const { setIsOpen } = useSidebar();
  return (
    <>
      <div className="lgLine:flex fixed top-0 right-0 left-36 hidden items-start">
        <hr className="lgLine:flex mt-14 mr-177 ml-24 hidden w-3/7 flex-1 border-2 border-white/20" />
      </div>

      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className="fixed top-0 mt-7 ml-7 block h-14 w-14 md:h-20 md:w-20"
      >
        <Image
          className="object-cotain"
          src="/logo.svg"
          alt="Company's Logo"
          fill
        />
      </Link>
    </>
  );
}
