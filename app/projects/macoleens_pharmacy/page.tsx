"use client";

import { fadeUp } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectImageModal from "@/app/components/ProjectImageModal";

const imagesSource = [
  "/project_images/audit_log.png",
  "/project_images/batches.png",
  "/project_images/cashier_dashboard.png",
  "/project_images/cashier_payment.png",
  "/project_images/inventory.png",
  "/project_images/manager_dashboard.png",
  "/project_images/nurse_dashboard.png",
  "/project_images/order.png",
  "/project_images/pos.png",
  "/project_images/request_order.png",
  "/project_images/transaction.png",
];

const MacoleensPharmacy = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenModal = (src: string) => {
    setSelectedImage(src);
    setOpenModal(true);
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-8"
      >
        <header className="flex gap-4 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <BsArrowLeft className="text-xs" />
            Back to Home
          </Link>
          <h3 className="text-2xl font-semibold">Macoleen&#39;s Pharmacy</h3>
        </header>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {imagesSource.map((src, index) => (
            <button
              key={index}
              className="border rounded-lg p-3 dark:border-white shadow-md bg-gray-950 cursor-pointer hover:shadow-white"
              onClick={() => handleOpenModal(src)}
            >
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                width={500}
                height={300}
                className="rounded-md h-full w-full"
              />
            </button>
          ))}
        </motion.section>
      </motion.div>

      {openModal && selectedImage && (
        <ProjectImageModal
          src={selectedImage}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default MacoleensPharmacy;
