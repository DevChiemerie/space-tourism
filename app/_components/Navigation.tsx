"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    number: "00",
    label: "Home",
    href: "/",
  },
  {
    number: "01",
    label: "destination",
    href: "/destination",
  },
  {
    number: "02",
    label: "crew",
    href: "/crew",
  },
  {
    number: "03",
    label: "technology",
    href: "/technology",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="fixed top-0 right-0 ml-32 hidden justify-end gap-7 bg-white/5 px-5 py-10 md:flex">
      {links.map(({ number, label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className={` ${pathname === href && "border-b-4 pb-9.5"} font-subheading text-fluid-navigation tracking-wider text-white/90 uppercase`}
            aria-current={pathname === href ? "page" : undefined}
          >
            <span className="mr-1.5 font-bold text-white">{number}</span>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
