"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="bg-white shadow-md px-8 py-2 text-sm flex gap-2 items-center dark:bg-dark-mode-elements w-max"
      onClick={() => router.push("/")}
    >
      <img src="icon-arrow.svg" alt="" className="rotate-90" />
      <p className="text-light-mode-text dark:text-white">Back</p>
    </button>
  );
}
