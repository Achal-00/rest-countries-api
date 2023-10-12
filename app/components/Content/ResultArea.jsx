"use client";

import { useEffect, useState } from "react";
import Loading from "../misc/Loading";
import Image from "next/image";

export default function ResultArea() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchCoutry = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      setData(await response.json());
      setLoading(false);
    };
    fetchCoutry();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="grid gap-12 landscape:grid-cols-2 landscape:lg:grid-cols-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-3/4 mx-auto bg-white dark:bg-dark-mode-elements shadow-md rounded-md landscape:w-full grid"
        >
          <div className="w-full landscape:h-40">
            <img
              src={item.flags.png}
              alt="country-flag"
              loading="lazy"
              className="w-full h-full rounded-t-md"
            />
          </div>
          <div className="px-4 py-8 grid gap-4">
            <h1 className="font-extrabold text-light-mode-text dark:text-white text-lg landscape:text-base">
              {item.name.common}
            </h1>
            <div className="grid gap-1">
              <p className="text-light-mode-text dark:text-white landscape:text-sm">
                <span className="font-semibold">Population:&nbsp;</span>
                {item.population}
              </p>
              <p className="text-light-mode-text dark:text-white landscape:text-sm">
                <span className="font-semibold">Region:&nbsp;</span>
                {item.region}
              </p>
              <p className="text-light-mode-text dark:text-white landscape:text-sm">
                <span className="font-semibold">Capital:&nbsp;</span>
                {item.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
