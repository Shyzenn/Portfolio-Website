"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

interface ProjectImageModalProps {
  src: string;
  onClose: () => void;
}

const ProjectImageModal = ({ src, onClose }: ProjectImageModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative max-w-5xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-70 right-5 md:-top-4 md:-right-5 text-white text-2xl cursor-pointer"
        >
          <IoMdClose />
        </button>
        <Image width={1500} height={1500} src={src} alt="Project large" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectImageModal;
