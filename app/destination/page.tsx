"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import destinationBgMobile from "@/public/destination/background-destination-mobile.jpg";
import destinationBgTablet from "@/public/destination/background-destination-tablet.jpg";
import destinationBgDesktop from "@/public/destination/background-destination-desktop.jpg";
import moon from "@/public/destination/image-moon.png";
import mars from "@/public/destination/image-mars.png";
import titan from "@/public/destination/image-titan.png";
import europa from "@/public/destination/image-europa.png";
import Image from "next/image";

const destinations = [
  {
    name: "Moon",
    image: moon,
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing site.",
    distance: "38,400 KM",
    travelTime: "3 Days",
  },

  {
    name: "Mars",
    image: mars,
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size the of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 Months",
  },

  {
    name: "Europa",
    image: europa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 Years",
  },

  {
    name: "Titan",
    image: titan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degree colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 Years",
  },
];

export default function Destination() {
  const [isActive, setIsActive] = useState<number>(0);

  const current = destinations[isActive];

  return (
    <>
      <div className="fixed inset-0 z-0 md:hidden">
        <Image
          className="object-cover object-center"
          src={destinationBgMobile}
          fill
          alt="Destination Background Image"
          placeholder="blur"
        />
      </div>
      <div className="fixed inset-0 z-0 lg:hidden">
        <Image
          className="object-cover object-center"
          src={destinationBgTablet}
          fill
          alt="Destination Background Image"
          placeholder="blur"
        />
      </div>
      <div className="fixed inset-0 z-0">
        <Image
          className="object-cover object-center"
          src={destinationBgDesktop}
          fill
          alt="Destination Background Image"
          placeholder="blur"
        />
      </div>
      <div className="relative z-10 mt-40 min-h-screen lg:mt-60">
        <p className="font-subheading text-lightblue md:text-fluid-subheading mx-auto mt-10 text-center tracking-wider uppercase md:pl-10 md:text-left lg:text-5xl">
          <span className="mr-5 font-bold text-white opacity-25">01</span> Pick
          Your destination
        </p>

        <AnimatePresence mode="sync">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 1 }}
            className="absolute min-h-screen"
          >
            <div className="lgwide:flex lg:gap-[clamp(2rem,15vw,5rem)]">
              <div className="lgwide:mx-10 lgwide:self-start lgwide:mt-56 relative mx-auto mt-20 aspect-square w-[clamp(12rem,35vw,35rem)] shrink-0 md:mt-28">
                <Image
                  src={current.image}
                  fill
                  alt={`${current.name} Image`}
                  className="h-full w-full"
                  placeholder="empty"
                />
              </div>
              <div className="lgwide:items-start lgwide:justify-items-start">
                <nav>
                  <ul className="mt-20 flex justify-center gap-12 md:mt-28 lg:mt-32">
                    {destinations.map((dest, i) => (
                      <li
                        key={dest.name}
                        onClick={() => setIsActive(i)}
                        className={`font-subheading cursor-pointer text-xl text-white uppercase transition-opacity md:text-3xl lg:text-5xl ${i === isActive ? "border-b-2 border-white opacity-100" : "border-transparent opacity-50 hover:opacity-100"}`}
                      >
                        {dest.name}
                      </li>
                    ))}
                  </ul>
                </nav>

                <h1 className="font-heading z-0 mt-10 text-center text-6xl tracking-wide text-white uppercase md:mt-28 md:text-8xl lg:mt-32 lg:text-9xl">
                  {current.name}
                </h1>

                <p className="font-body lgwide:text-start lgwide:mx-0 text-lightblue mx-6 mt-7 text-center text-base leading-8 text-wrap md:mx-8 md:text-xl md:leading-11 lg:mx-10 lg:text-4xl lg:leading-16">
                  {current.description}
                </p>

                <hr className="lgwide:mx-0 mx-auto mt-5 w-5/6 border-white/50 md:mt-8 lg:mt-12 lg:border-2" />

                <div className="lgwide:mx-0 md:mt-7 md:flex md:justify-center md:gap-14 lg:mt-10 lg:gap-[clamp(2rem,15vw,35rem)]">
                  <div>
                    <p className="font-subheading text-lightblue mt-5 text-center text-xs tracking-wider uppercase md:text-lg lg:text-2xl">
                      Avg. Distance
                    </p>

                    <p className="font-heading mt-2.5 text-center text-2xl text-white md:mt-3 md:text-4xl lg:text-5xl">
                      {current.distance}
                    </p>
                  </div>

                  <div>
                    <p className="font-subheading text-lightblue mt-5 text-center text-xs tracking-wider uppercase md:text-lg lg:text-2xl">
                      Est. Travel Time
                    </p>

                    <p className="font-heading mt-2.5 mb-20 text-center text-2xl text-white uppercase md:mt-3 md:text-4xl lg:text-5xl">
                      {current.travelTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
