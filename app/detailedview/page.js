"use client";

import { useSearchParams } from "next/navigation";
import BackButton from "../components/DetailedView/BackButton";
import { useEffect, useState } from "react";
import Card from "../components/DetailedView/Card";

export default function page() {
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const country = searchParams.get("country");
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      setData(await response.json());
    })();
  }, []);

  return (
    <section className="px-4 py-8 landscape:lg:px-20 flex flex-col gap-12">
      <BackButton />
      <Card data={data} />
    </section>
  );
}
