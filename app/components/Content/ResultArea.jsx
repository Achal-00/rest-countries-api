"use client";

import { useContext, useEffect, useState } from "react";
import Loading from "../misc/Loading";
import { dataContext } from "./Content";
import Card from "./card";

export default function ResultArea() {
  const { data } = useContext(dataContext);
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCoutry = async () => {
    setLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
    setCountry(await response.json());
    setLoading(false);
  };

  useEffect(() => {
    fetchCoutry();
  }, []);

  return loading ? (
    <div className="self-start justify-self-center">
      <Loading />
    </div>
  ) : (
    <div className="grid gap-12 landscape:grid-cols-2 landscape:lg:grid-cols-4">
      {country.map((item, index) => {
        if (data.region === "Filter by Region" && data.country === "") {
          return <Card item={item} key={index} />;
        }
        if (data.region !== "Filter by Region") {
          if (data.country !== "") {
            if (
              item.region === data.region &&
              item.name.common
                .toLowerCase()
                .startsWith(data.country.toLowerCase())
            ) {
              return <Card item={item} key={index} />;
            }
          } else {
            if (item.region === data.region) {
              return <Card item={item} key={index} />;
            }
          }
        } else {
          if (data.country !== "") {
            if (
              item.name.common
                .toLowerCase()
                .startsWith(data.country.toLowerCase())
            ) {
              return <Card item={item} key={index} />;
            }
          }
        }
      })}
    </div>
  );
}
