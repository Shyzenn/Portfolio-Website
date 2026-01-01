import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { HiSun } from "react-icons/hi";
import { IoMoon } from "react-icons/io5";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative inline-flex h-5 sm:h-7 w-10 sm:w-18 items-center rounded-full cursor-pointer
        transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-blue-400
        ${
          isDark
            ? "bg-slate-800 hover:bg-gray-600"
            : "bg-gray-300 hover:bg-slate-400"
        }
      `}
      aria-label="Toggle Dark Mode"
    >
      <div
        className={`
          flex h-4 w-4 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-white shadow-md
          transition-all duration-500 ease-in-out
          ${
            isDark
              ? "translate-x-5.5 sm:translate-x-12 rotate-360"
              : "translate-x-0.5 rotate-0"
          }
        `}
      >
        {isDark ? (
          <IoMoon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
        ) : (
          <HiSun className="h-3 w-3 sm:h-4 sm:w-5 text-gray-500" />
        )}
      </div>
    </button>
  );
}
