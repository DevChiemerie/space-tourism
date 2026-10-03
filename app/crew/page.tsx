"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import crewBgMobile from "@/public/crew/background-crew-mobile.jpg";
import crewBgTablet from "@/public/crew/background-crew-tablet.jpg";
import crewBgDesktop from "@/public/crew/background-crew-desktop.jpg";
import dogulas from "@/public/crew/image-douglas-hurley.png";
import mark from "@/public/crew/image-mark-shuttleworth.png";
import victor from "@/public/crew/image-victor-glover.png";
import ansari from "@/public/crew/image-anousheh-ansari.png";

const crewMember = [
  {
    title: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as a commander of Cre Dragon Demo-2.",
    image: dogulas,
  },
  {
    title: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: mark,
  },
  {
    title: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the international Space Station. Glover is a commander in the U.S Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight enginneer.",
    image: victor,
  },
  {
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-founded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: ansari,
  },
];

export default function Technology() {
  const [isActive, setIsActive] = useState<number>(0);

  const current = crewMember[isActive];

  return (
    <>
      <div className="fixed inset-0 md:hidden">
        <Image
          className="priority object-cover object-center"
          src={crewBgMobile}
          fill
          alt="Crew Background Image"
          placeholder="blur"
        />
      </div>
      <div className="fixed inset-0 lg:hidden">
        <Image
          className="priority object-cover object-center"
          src={crewBgTablet}
          fill
          alt="Crew Background Image"
          placeholder="blur"
        />
      </div>
      <div className="fixed inset-0">
        <Image
          className="priority object-cover object-center"
          src={crewBgDesktop}
          fill
          alt="Crew Background Image"
          placeholder="blur"
        />
      </div>

      <div className="relative z-10 mt-40 min-h-screen lg:mt-60">
        <p className="lgwide:mbe-24 font-subheading text-lightblue md:text-fluid-subheading mx-auto mt-10 text-center tracking-wider uppercase md:mb-14 md:pl-10 md:text-left lg:text-5xl">
          <span className="mr-5 font-bold text-white opacity-25">02</span>
          Meet Your Crew
        </p>

        <AnimatePresence mode="sync">
          <motion.div
            key={current.name} // triggers exit/enter when this changes
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute min-h-screen"
          >
            <div className="lgwide:flex h-full">
              <div className="min-w-0 flex-1">
                <p className="lgwide:text-start lgwide:pl-10 font-heading mt-10 text-center text-xl tracking-wide text-white uppercase opacity-40 md:mt-12 md:text-3xl lg:mt-16 lg:text-5xl">
                  {current.title}
                </p>

                <h2 className="lgwide:text-start lgwide:pl-10 font-heading text-lightblue mt-2 text-center text-3xl uppercase md:mt-4 md:text-5xl lg:mt-6 lg:text-6xl">
                  {current.name}
                </h2>
                <p className="lgwide:text-start lgwide:pl-10 lgwide:mx-0 font-body text-lightblue mx-6 mt-7 text-center text-base leading-8 text-wrap md:mx-8 md:text-2xl md:leading-11 lg:mx-10 lg:mt-16 lg:text-4xl lg:leading-16">
                  {current.description}
                </p>

                <div className="lgwide:pl-10 lgwide:justify-self-start lgwide:mt-12 lgwide:mb-8 mt-20 mb-36 flex justify-center gap-10 lg:gap-14">
                  {crewMember.map((crew, i) => (
                    <div
                      className={`lgwide:h-7 lgwide:w-7 flex h-5 w-5 cursor-pointer flex-col items-center gap-10 justify-self-center rounded-full bg-white transition-opacity md:h-7 md:w-7 lg:h-10 lg:w-10 ${i === isActive ? "opacity-100" : "opacity-25 hover:opacity-100"}`}
                      onClick={() => setIsActive(i)}
                      key={crew.name}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="lgwide:flex-col lgwide:mb-0 lgwide:mt-48 relative mx-10 mt-10 mb-5 flex shrink-0 justify-center lg:mt-16 lg:mb-2">
                <Image
                  className="lgwide:max-h-[75vh] lgwide:w-[clamp(12rem,35vw,40rem)] lgwide:h-full h-auto w-auto flex-1 object-contain"
                  src={current.image}
                  alt={`${current.name} Image`}

                  placeholder="empty"
                />
                <div className="to-darkblue lgwide:h-24 pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-b from-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
