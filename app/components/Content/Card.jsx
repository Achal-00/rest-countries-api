"use client";

import { useRouter } from "next/navigation";

export default function Card(props) {
  const router = useRouter();

  const detailedHandler = () => {
    router.push(`/detailedview?country=${props.item.name.common}`);
  };

  return (
    <div
      className="w-3/4 mx-auto bg-white dark:bg-dark-mode-elements shadow-md rounded-md landscape:w-full grid hover:cursor-pointer"
      onClick={detailedHandler}
    >
      <div className="w-full landscape:h-40">
        <img
          src={props.item.flags.png}
          alt="country-flag"
          loading="lazy"
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="px-4 py-8 grid gap-4">
        <h1 className="font-extrabold text-light-mode-text dark:text-white text-lg landscape:text-base">
          {props.item.name.common}
        </h1>
        <div className="grid gap-1">
          <p className="text-light-mode-text dark:text-white landscape:text-sm">
            <span className="font-semibold">Population:&nbsp;</span>
            {props.item.population}
          </p>
          <p className="text-light-mode-text dark:text-white landscape:text-sm">
            <span className="font-semibold">Region:&nbsp;</span>
            {props.item.region}
          </p>
          <p className="text-light-mode-text dark:text-white landscape:text-sm">
            <span className="font-semibold">Capital:&nbsp;</span>
            {props.item.capital}
          </p>
        </div>
      </div>
    </div>
  );
}
