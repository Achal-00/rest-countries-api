"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.querySelector(".theme-class").classList.add("dark");

      document.querySelector(".theme-desc").textContent = "Light Mode";
    } else {
      document.querySelector(".theme-class").classList.remove("dark");

      document.querySelector(".theme-desc").textContent = "Dark Mode";
    }
  }, [theme]);

  return (
    <div
      className="flex items-center gap-2 hover:cursor-pointer"
      onClick={() => {
        setTheme((prev) => !prev);
      }}
    >
      {/* <i class="fa-regular fa-moon"></i> */}
      <p className="font-semibold text-light-mode-text dark:text-white theme-desc">
        Dark Mode
      </p>
    </div>
  );
}
