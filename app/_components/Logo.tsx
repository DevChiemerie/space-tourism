"use client";

import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "../_context/SidebarContext";

export default function Logo() {
  const { setIsOpen } = useSidebar();
  return (
    <Link href="/" onClick={() => setIsOpen(false)}>
      <div className=" relative mt-7 ml-7 h-12 w-12 flex">
        <Image
          className="object-cotain w-full h-full"
          src="/logo.svg"
          alt="Company's Logo"
          fill
        />
      </div>
    </Link>
  );
}
