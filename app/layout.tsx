import type { Metadata } from "next";
import "@/app/globals.css";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import Sidebar from "@/app/_components/Sidebar";
import Navigation from "@/app/_components/Navigation";
import Logo from "./_components/Logo";
import { SidebarProvider } from "./_context/SidebarContext";

const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bellefair",
});

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-barlow-condensed",
});

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "00 Home", href: "/" },
  { label: "01 Destination", href: "/destination" },
  { label: "02 Crew", href: "/crew" },
  { label: "03 Technology", href: "/technology" },
];

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "We make your space traval a memorable one",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`bg-darkblue relative min-h-screen antialiased ${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      >
        <SidebarProvider>
          <main className="isolate z-10">
            <nav className="relative z-20">
              <Navigation />
              <Logo />
              <Sidebar links={navLinks} />
            </nav>

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
