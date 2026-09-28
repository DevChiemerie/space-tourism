"use client";
import Image from "next/image";

import techBgMobile from "@/public/technology/background-technology-mobile.jpg";
import launchVehiclePortrait from "@/public/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsulePortrait from "@/public/technology/image-space-capsule-portrait.jpg";
import spaceportPortarit from "@/public/technology/image-spaceport-portrait.jpg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const techSection = [
  {
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rcoket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!",
    image: launchVehiclePortrait,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",

    image: spaceportPortarit,
  },

  {
    title: "The Terminology...",
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere wihtout wings. Our capsules is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: spaceCapsulePortrait,
  },
];

export default function Technology() {
  const [isActive, setIsActive] = useState(0);

  const current = techSection[isActive];
  return (
    <>
      <div className="fixed inset-0">
        <Image
          className="priority object-cover object-center"
          src={techBgMobile}
          fill
          alt="Crew Background Image"
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <p className="font-subheading text-lightblue mx-auto mt-10 text-center tracking-wider uppercase">
          <span className="mr-5 font-bold text-white opacity-25">03</span>Space
          Launch 101
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.name} // triggers exit/enter when this changes
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative mt-10 mb-5 h-70 w-125 justify-self-center overflow-hidden">
              <Image
                className="object-cover"
                src={current.image}
                alt={`${current.name} Image`}
                fill
                quality={80}
              />
            </div>

            <div className="mt-14 flex justify-center gap-10">
              {techSection.map((section, i) => (
                <button
                  className={`text-red h-20 w-20 rounded-full border border-white/50 bg-transparent hover:border-white ${
                    i === isActive && "text-darkblue border-white bg-white"
                  }`}
                  key={section.name}
                  onClick={() => setIsActive(i)}
                >
                  <span
                    className={`font-heading text-4xl ${
                      i === isActive ? "text-darkblue font-bold" : "text-white"
                    }`}
                  >
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>

            <p className="font-heading mt-10 text-center text-xl tracking-wide text-white uppercase opacity-40">
              The Terminology
            </p>

            <h2 className="font-heading text-lightblue mt-2 text-center text-3xl uppercase">
              {current.name}
            </h2>

            <p className="font-body text-lightblue mx-3 mt-7 mb-12 text-center text-base leading-8 text-wrap">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
