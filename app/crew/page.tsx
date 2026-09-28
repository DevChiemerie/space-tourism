"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";

import crewBgMobile from "@/public/crew/background-crew-mobile.jpg";
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
      <div className="fixed inset-0">
        <Image
          className="priority object-cover object-center"
          src={crewBgMobile}
          fill
          alt="Crew Background Image"
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <p className="font-subheading text-lightblue mx-auto mt-10 text-center tracking-wider uppercase">
          <span className="mr-5 font-bold text-white opacity-25">02</span> Pick
          Meet Your Crew
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.name} // triggers exit/enter when this changes
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-heading mt-10 text-center text-xl tracking-wide text-white uppercase opacity-40">
              {current.title}
            </p>

            <h2 className="font-heading text-lightblue mt-2 text-center text-3xl uppercase">
              {current.name}
            </h2>
            <p className="font-body text-lightblue mx-3 mt-7 text-center text-base leading-8 text-wrap">
              {current.description}
            </p>

            <div className="mt-20 mb-36 flex justify-center gap-10">
              {crewMember.map((crew, i) => (
                <div
                  className={`flex h-5 w-5 cursor-pointer flex-col items-center gap-10 justify-self-center rounded-full bg-white transition-opacity ${i === isActive ? "opacity-100" : "opacity-25 hover:opacity-100"}`}
                  onClick={() => setIsActive(i)}
                  key={crew.name}
                ></div>
              ))}
            </div>

            <div className="relative mx-10 mt-10 mb-5 flex justify-center">
              <Image
                className="h-auto w-auto flex-1 object-cover"
                src={current.image}
                alt={`${current.name} Image`}
                width="100"
                height="100"
                quality={80}
              />
              <div className="to-darkblue pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-b from-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
