import homeBgMobile from "@/public/home/background-home-mobile.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* className="fixed inset-0 z-0 */}
      <div className="fixed inset-0 z-0">
        <Image
          className="object-cover object-center"
          src={homeBgMobile}
          alt="Moblie Background Image"
          fill
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className="relative z-10 min-h-screen">
        <p className="font-subheading text-lightblue mx-auto mt-10 text-center tracking-wider uppercase">
          So, you want to travel to
        </p>
        <h1 className="font-heading mt-10 text-center text-7xl tracking-wide text-white">
          SPACE
        </h1>
        <p className="font-body text-lightblue mx-3 mt-7 text-center text-base leading-8 text-wrap">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>

        <div className="group relative mx-auto mt-32 flex h-50 w-50 items-center justify-center">
          {/* Translucent halo: grows on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-200 group-hover:opacity-100" />

          {/* Original circle: always visible */}
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white hover:opacity-50">
            <Link
              href="/destination"
              className="font-heading text-darkblue text-2xl uppercase hover:opacity-50"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
