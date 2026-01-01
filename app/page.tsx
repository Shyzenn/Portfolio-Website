"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Education from "./components/Education";
import RecentProjects from "./components/RecentProjects";
import SideBar from "./components/SideBar";
import TechStack from "./components/TechStack";
import Article from "./components/ui/Article";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 py-8"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <aside className="border rounded-lg p-4">
          <SideBar />
        </aside>

        <section className="flex flex-col gap-4">
          <Article>
            <About />
          </Article>
          <Article>
            <RecentProjects />
          </Article>
        </section>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <section className="flex flex-col gap-4">
          <Article>
            <TechStack />
          </Article>
          <Article>
            <CurrentlyBuilding />
          </Article>
        </section>

        <aside className="border rounded-lg p-4 dark:bg-gray-950">
          <Education />
        </aside>
      </motion.div>

      <motion.section
        className="border rounded-lg p-4 dark:bg-gray-950"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Contact />
      </motion.section>

      <motion.footer
        className="border-t mt-18 flex items-center justify-center pt-8 pb-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-sm font-medium flex flex-col items-center gap-2">
          © 2026 Jelmar Rapis. All rights reserved.
          <span className="font-normal">
            This portfolio website is inspired by{" "}
            <Link href="https://bryllim.com/" className="underline">
              Bryl Lim.
            </Link>
          </span>
        </p>
      </motion.footer>
    </main>
  );
}
