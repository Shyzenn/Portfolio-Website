"use client";

import { fadeUp } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectImageModal from "@/app/components/ProjectImageModal";

const imagesSource = [
  {
    pages: {
      sources: [
        "/Project_Images/Login_Page.png",
        "/Project_Images/Inventory.png",
        "/Project_Images/Add_Product.png",
        "/Project_Images/Batches.png",
        "/Project_Images/Profile.png",
        "/Project_Images/Transaction.png",
      ],
    },
    Manager: {
      sources: [
        "/Project_Images/Manager/Add_User.png",
        "/Project_Images/Manager/User_Management.png",
        "/Project_Images/Manager/Dashboard.png",
        "/Project_Images/Manager/Audit_Log.png",
      ],
    },
    Nurse: {
      sources: [
        "/Project_Images/Nurse/Dashboard.png",
        "/Project_Images/Nurse/Request_Form.png",
      ],
    },
    Pharmacist: {
      sources: [
        "/Project_Images/Pharmacist/Dashboard.png",
        "/Project_Images/Pharmacist/POS.png",
        "/Project_Images/Pharmacist/Printing_Order.png",
      ],
    },
    Cashier: {
      sources: [
        "/Project_Images/Cashier/Dashboard.png",
        "/Project_Images/Cashier/Payment.png",
      ],
    },
  },
];

const MacoleensPharmacy = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ImageButton = ({ index, src }: { index: number; src: string }) => {
    return (
      <button
        className="cursor-pointer w-70 h-50 relative"
        onClick={() => handleOpenModal(src)}
      >
        <Image
          src={src}
          alt={`Project image ${index + 1}`}
          fill
          className="object-cover rounded-md hover:transition-transform duration-300 hover:-translate-y-1 border p-4 shadow-md"
        />
      </button>
    );
  };
  const handleOpenModal = (src: string) => {
    setSelectedImage(src);
    setOpenModal(true);
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-8"
      >
        <header className="flex gap-4 items-center mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <BsArrowLeft className="text-xs" />
            Back to Home
          </Link>
          <h3 className="text-2xl font-semibold">Macoleen&#39;s Pharmacy</h3>
        </header>
      </motion.header>

      <main className="flex flex-col gap-y-8">
        {/* Pages */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-b pb-12"
        >
          <h3 className="text-xl font-semibold mb-4">Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {imagesSource[0].pages.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>
        {/* Manager */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-b pb-12"
        >
          <h3 className="text-xl font-semibold mb-4">Manager</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {imagesSource[0].Manager.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>
        {/* Nurse */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-b pb-12"
        >
          <h3 className="text-xl font-semibold mb-4">Nurse</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {imagesSource[0].Nurse.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Pharmacist */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-b pb-12"
        >
          <h3 className="text-xl font-semibold mb-4">Pharmacist</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {imagesSource[0].Pharmacist.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Cashier */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <h3 className="text-xl font-semibold mb-4">Cashier</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {imagesSource[0].Cashier.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>
      </main>

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
