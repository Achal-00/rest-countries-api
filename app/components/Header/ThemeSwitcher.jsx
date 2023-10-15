"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("rest-country-theme")) {
      setTheme(localStorage.getItem("rest-country-theme"));
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.querySelector(".theme-class").classList.add("dark");
      document.querySelector(".theme-icon").src = "icon-sun.svg";
      document.querySelector(".theme-desc").textContent = "Light Mode";
      localStorage.setItem("rest-country-theme", true);
    } else {
      document.querySelector(".theme-class").classList.remove("dark");
      document.querySelector(".theme-icon").src = "icon-moon.svg";
      document.querySelector(".theme-desc").textContent = "Dark Mode";
      localStorage.setItem("rest-country-theme", false);
    }
  }, [theme]);

  return (
    <div
      className="flex items-center gap-2 hover:cursor-pointer"
      onClick={() => {
        setTheme((prev) => !prev);
      }}
    >
      <img src="icon-moon.svg" alt="icon" className="w-3 theme-icon" />
      <p className="font-semibold text-light-mode-text dark:text-white theme-desc">
        Dark Mode
      </p>
    </div>
  );
}
