"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import destinationBgMobile from "@/public/destination/background-destination-mobile.jpg";
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
      {/* className=" fixed inset-0 z-0 min-h-screen" */}
      <div className="fixed inset-0 z-0">
        <Image
          className="object-cover object-center"
          src={destinationBgMobile}
          fill
          alt="Destination Background Image"
        />
      </div>
      <div className="relative z-10 min-h-screen">
        <p className="font-subheading text-lightblue mx-auto mt-10 text-center tracking-wider uppercase">
          <span className="mr-5 font-bold text-white opacity-25">01</span> Pick
          Your destination
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.name} // triggers exit/enter when this changes
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div>
              <div className="relative mx-auto mt-20 flex h-50 w-50 object-cover">
                <Image
                  src={current.image}
                  fill
                  alt={`${current.name} Image`}
                  className="h-full w-full"
                />
              </div>
              <nav>
                <ul className="mt-20 flex justify-center gap-12">
                  {destinations.map((dest, i) => (
                    <li
                      key={dest.name}
                      onClick={() => setIsActive(i)}
                      className={`font-subheading cursor-pointer text-xl text-white uppercase transition-opacity ${i === isActive ? "border-b-2 border-white opacity-100" : "border-transparent opacity-50 hover:opacity-100"}`}
                    >
                      {dest.name}
                    </li>
                  ))}
                </ul>
              </nav>

              <h1 className="font-heading mt-10 text-center text-6xl tracking-wide text-white uppercase">
                {current.name}
              </h1>

              <p className="font-body text-lightblue mx-3 mt-7 text-center text-base leading-8 text-wrap">
                {current.description}
              </p>

              <hr className="mx-auto mt-5 w-5/6 border-white/50" />

              <p className="font-subheading text-lightblue mt-5 text-center text-xs tracking-wider uppercase">
                Avg. Distance
              </p>

              <p className="font-heading mt-2.5 text-center text-2xl text-white">
                {current.distance}
              </p>

              <p className="font-subheading text-lightblue mt-7 text-center text-xs tracking-wider uppercase">
                Est. Travel Time
              </p>

              <p className="font-heading mt-2.5 mb-20 text-center text-xl text-white uppercase">
                {current.travelTime}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
