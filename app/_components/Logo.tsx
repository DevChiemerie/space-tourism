"use client";

import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "../_context/SidebarContext";

export default function Logo() {
  const { setIsOpen } = useSidebar();
  return (
    <Link
      href="/"
      onClick={() => setIsOpen(false)}
      className="fixed top-0 mt-7 ml-7 block h-14 w-14"
    >
      <Image
        className="object-cotain"
        src="/logo.svg"
        alt="Company's Logo"
        fill
      />
    </Link>
  );
}
