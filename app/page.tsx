import homeBgMobile from "@/public/home/background-home-mobile.jpg";
import homeBgTablet from "@/public/home/background-home-tablet.jpg";
import homeBgDesktop from "@/public/home/background-home-desktop.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Image
          className="object-cover object-center"
          src={homeBgDesktop}
          alt="Moblie Background Image"
          fill
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className="fixed inset-0 z-0 lg:hidden">
        <Image
          className="object-cover object-center"
          src={homeBgTablet}
          alt="Moblie Background Image"
          fill
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className="fixed inset-0 z-0 md:hidden">
        <Image
          className="object-cover object-center"
          src={homeBgMobile}
          alt="Moblie Background Image"
          fill
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="lgwide:flex relative z-10 mt-40 min-h-screen md:mt-60">
        <div className="lgwide:max-w-3/4 lgwide:pr-16">
          <p className="font-subheading lgwide:pl-20 text-lightblue lgwide:text-4xl lgwide:text-left mx-auto mt-10 text-center tracking-wider uppercase md:text-3xl">
            So, you want to travel to
          </p>
          <h1 className="font-heading lgwide:text-9xl lgwide:text-left lgwide:pl-20 mt-10 text-center text-7xl tracking-wide text-white md:text-9xl lg:mt-16 lg:text-[180px]">
            SPACE
          </h1>
          <p className="font-body lgwide:text-left text-lightblue lgwide:text-3xl lgwide:pl-10 mx-6 mt-7 text-center text-base leading-8 text-wrap md:mx-8 md:text-2xl md:leading-11 lg:mx-10 lg:text-4xl lg:leading-16">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>

        <div className="group lgwide:self-start lgwide:mt-40 lgwide:mr-20 relative mx-auto mt-32 flex aspect-square w-[clamp(12rem,25vw,24rem)] shrink-0 items-center justify-center md:mb-12">
          {/* Translucent halo: grows on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-200 group-hover:opacity-100" />

          {/* Original circle: always visible */}
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white hover:opacity-50">
            <Link
              href="/destination"
              className="font-heading text-darkblue text-2xl uppercase hover:opacity-50 md:text-4xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
