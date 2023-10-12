"use client";

import { useEffect, useState } from "react";

export default function SearchArea() {
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (menu) {
      document.querySelector(".sub-menu").classList.replace("hidden", "grid");
    } else {
      document.querySelector(".sub-menu").classList.replace("grid", "hidden");
    }
  }, [menu]);

  return (
    <div className="flex flex-col gap-12 landscape:lg:flex-row landscape:lg:justify-between">
      <div className="grid h-12 bg-white dark:bg-dark-mode-elements px-4 shadow-md rounded-md landscape:lg:w-1/3">
        <img
          src="search.svg"
          alt=""
          className="w-5 col-start-1 col-end-2 row-start-1 row-end-2 z-10 self-center"
        />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setCountry(e.currentTarget.value)}
          className="col-start-1 col-end-2 row-start-1 row-end-2 h-full pl-8 outline-none bg-white dark:bg-dark-mode-elements text-light-mode-text dark:text-white"
        />
      </div>
      <div
        className="relative w-1/2 landscape:lg:w-1/6 flex items-center justify-between h-12 bg-white dark:bg-dark-mode-elements px-4 shadow-md rounded-md hover:cursor-pointer"
        onClick={() => setMenu((prev) => !prev)}
      >
        <p className="text-[#aaa]">Filter by Region</p>
        <img src="icon-arrow.svg" alt="" />
        <div className="absolute top-full left-0 bg-white dark:bg-dark-mode-elements w-full rounded-md p-4 mt-2 gap-2 shadow-md sub-menu hidden">
          <p className="text-light-mode-text dark:text-white hover:cursor-pointer">
            Africa
          </p>
          <p className="text-light-mode-text dark:text-white hover:cursor-pointer">
            America
          </p>
          <p className="text-light-mode-text dark:text-white hover:cursor-pointer">
            Asia
          </p>
          <p className="text-light-mode-text dark:text-white hover:cursor-pointer">
            Europe
          </p>
          <p className="text-light-mode-text dark:text-white hover:cursor-pointer">
            Oceania
          </p>
        </div>
      </div>
    </div>
  );
}
