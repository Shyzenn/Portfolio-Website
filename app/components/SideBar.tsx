"use client";

import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import LinkButton from "./ui/LinkButton";
import DarkModeToggle from "./ui/DarkModeToggle";
import { FiFileText } from "react-icons/fi";

const SideBar = () => {
  return (
    <div
      className={`flex gap-x-3 md:flex-col items-center h-full bg-white dark:bg-black`}
    >
      <div className="w-40 h-40 md:w-53 md:h-53 relative shrink-0">
        <Image
          className="object-cover rounded-lg"
          src="/portfolio-profile-picture.jpg"
          alt="profile-image"
          fill
          sizes="(max-width: 768px) 80px, 150px"
        />
      </div>
      <div className="w-full flex flex-col justify-between h-full md:mt-8">
        <div className="flex flex-col md:items-center gap-2 mb-3.5 md:justify-center">
          <div className="flex items-center justify-between">
            <p className="text-lg md:text-2xl font-bold">Jelmar Rapis</p>
            <div className="md:hidden">
              <DarkModeToggle />
            </div>
          </div>

          <p className="flex text-xs md:text-sm items-center gap-1 font-medium text-gray-800 dark:text-gray-100">
            <CiLocationOn />
            Dasmariñas Cavite, Philippines
          </p>
          <p className="text-sm md:text-lg font-medium text-gray-800 dark:text-gray-100">
            Web Developer
          </p>

          <div className="w-full hidden md:block mt-4">
            <LinkButton
              icon={<FiFileText />}
              href="/resume"
              label="Resume"
              classname="py-1 justify-center"
            />
          </div>
        </div>

        <div className="w-full md:hidden">
          <LinkButton
            icon={<FiFileText />}
            href="/resume"
            label="Resume"
            classname="py-1 justify-center"
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="hidden md:block ">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
