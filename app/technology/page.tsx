"use client";
import Image from "next/image";

import techBgMobile from "@/public/technology/background-technology-mobile.jpg";
import techBgTablet from "@/public/technology/background-technology-tablet.jpg";
import techBgDesktop from "@/public/technology/background-technology-desktop.jpg";
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
    imagePortrait: launchVehiclePortrait,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",

    image: spaceportLandscape,
    imagePortrait: spaceportPortarit,
  },

  {
    title: "The Terminology...",
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere wihtout wings. Our capsules is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: spaceCapsuleLandscape,
    imagePortrait: spaceCapsulePortrait,
  },
];

export default function Technology() {
  const [isActive, setIsActive] = useState(0);

  const current = techSection[isActive];
  return (
    <>
      <div className="fixed inset-0 md:hidden">
        <Image
          className="priority object-cover object-center"
          src={techBgMobile}
          fill
          alt="Technology Background Image"
          placeholder="blur"
        />
      </div>
      <div className="fixed inset-0 lg:hidden">
        <Image
          className="priority object-cover object-center"
          src={techBgTablet}
          fill
          alt="Technology Background Image"
          placeholder="empty"
        />
      </div>

      <div className="fixed inset-0">
        <Image
          className="priority object-cover object-center"
          src={techBgDesktop}
          fill
          alt="Technology Background Image"
          placeholder="empty"
        />
      </div>

      <div className="min-h-scree relative z-10 mt-40 lg:mt-60">
        <p className="md:text-fluid-subheading font-subheading text-lightblue mx-auto text-center tracking-wider uppercase md:mb-14 md:pl-10 md:text-left lg:text-5xl">
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
            <div className="lgwide:hidden relative h-100 w-full min-w-0 justify-self-center overflow-hidden">
              <Image
                className="object-contain"
                src={current.image}
                alt={`${current.name} Image`}
                fill
                placeholder="blur"
              />
            </div>

            <div className="lgwide:flex">
              <div className="lgwide:pl-12 lgwide:-mt-32 lgwide:flex-col lgwide:gap-[clamp(1.5rem,3vw,4rem)] flex shrink-0 justify-center gap-10 lg:mt-12 lg:gap-16">
                {techSection.map((section, i) => (
                  <button
                    className={`lgwide:size-[clamp(3.5rem,6vw,7rem)] size-10 h-10 w-10 rounded-full border border-white/50 bg-transparent hover:border-white md:h-20 md:w-20 lg:h-25 lg:w-25 ${
                      i === isActive && "text-darkblue border-white bg-white"
                    }`}
                    key={section.name}
                    onClick={() => setIsActive(i)}
                  >
                    <span
                      className={`lgwide:text-[clamp(1.5rem,2.5vw,3rem)] font-heading text-2xl md:text-4xl ${
                        i === isActive
                          ? "text-darkblue font-bold"
                          : "text-white"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </button>
                ))}
              </div>

              <div className="lgwide:flex-1 min-w-0">
                <p className="lgwide:text-[clamp(1.5rem,2.6vw,3rem)] lgwide:mt-14 lgwide:text-left lgwide:pl-24 font-heading mt-10 text-center text-xl tracking-wide text-white uppercase opacity-40 md:text-3xl lg:mt-14 lg:text-5xl">
                  The Terminology
                </p>

                <h2 className="lgwide:text-left lgwide:pl-24 lgwide:text-[clamp(2.25rem,4vw,4.5rem)] lgwide:mt-6 font-heading text-lightblue mt-2 text-center text-3xl uppercase md:text-5xl lg:mt-6 lg:text-7xl">
                  {current.name}
                </h2>

                <p className="lgwide:mt-10 lgwide:text-[clamp(1.125rem,2vw,2.25rem)] lgwide:leading-[1.6] lgwide:text-left lgwide:mx-0 lgwide:pl-14 lgwide:pr-10 font-body text-lightblue mx-6 mt-7 mb-12 text-center text-base leading-8 text-wrap md:mx-8 md:text-2xl md:leading-11 lg:mx-10 lg:mt-10 lg:text-4xl lg:leading-16">
                  {current.description}
                </p>
              </div>

              <div className="lgwide:flex relative hidden aspect-3/4 w-[clamp(14rem,50vw,45rem)] shrink-0 overflow-hidden">
                <Image
                  className="object-contain"
                  src={current.imagePortrait}
                  alt={`${current.name} Image`}
                  fill
                  placeholder="blur"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
