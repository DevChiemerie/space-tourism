"use client";
import Image from "next/image";

import techBgMobile from "@/public/technology/background-technology-mobile.jpg";
import launchVehiclePortrait from "@/public/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsulePortrait from "@/public/technology/image-space-capsule-portrait.jpg";
import spaceportPortarit from "@/public/technology/image-spaceport-portrait.jpg";

import spaceportLandscape from "@/public/technology/image-spaceport-landscape.jpg";
import lanchVehicleLanscape from "@/public/technology/image-launch-vehicle-landscape.jpg";
import spaceCapsuleLandscape from "@/public/technology/image-space-capsule-landscape.jpg";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const techSection = [
  {
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rcoket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!",
    image: lanchVehicleLanscape,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",

    image: spaceportLandscape,
  },

  {
    title: "The Terminology...",
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere wihtout wings. Our capsules is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: spaceCapsuleLandscape,
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
          alt="Technology Background Image"
          placeholder="blur"
        />
      </div>

      <div className="min-h-scree relative z-10 mt-40">
        <p className="md:text-fluid-subheading font-subheading text-lightblue mx-auto text-center tracking-wider uppercase md:mr-48 md:mb-14">
          <span className="mr-5 font-bold text-white opacity-25">03</span>Space
          Launch 101
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
            <div className="relative h-100 w-full min-w-0 justify-self-center overflow-hidden">
              <Image
                className="object-contain"
                src={current.image}
                alt={`${current.name} Image`}
                fill
                quality={80}
                placeholder="blur"
              />
            </div>

            <div className="flex justify-center gap-10">
              {techSection.map((section, i) => (
                <button
                  className={`text-red h-10 w-10 rounded-full border border-white/50 bg-transparent hover:border-white md:h-20 md:w-20 ${
                    i === isActive && "text-darkblue border-white bg-white"
                  }`}
                  key={section.name}
                  onClick={() => setIsActive(i)}
                >
                  <span
                    className={`font-heading text-2xl md:text-4xl ${
                      i === isActive ? "text-darkblue font-bold" : "text-white"
                    }`}
                  >
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>

            <p className="font-heading mt-10 text-center text-xl tracking-wide text-white uppercase opacity-40 md:text-3xl">
              The Terminology
            </p>

            <h2 className="font-heading text-lightblue mt-2 text-center text-3xl uppercase md:text-5xl">
              {current.name}
            </h2>

            <p className="font-body text-lightblue mx-6 mt-7 mb-12 text-center text-base leading-8 text-wrap md:mx-8 md:text-2xl md:leading-11">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
