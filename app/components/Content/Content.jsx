"use client";

import SearchArea from "./SearchArea";
import ResultArea from "./ResultArea";
import { createContext, useState } from "react";

export const dataContext = createContext();

export default function Content() {
  const [data, setData] = useState({
    country: "",
    region: "Filter by Region",
  });

  return (
    <dataContext.Provider value={{ data, setData }}>
      <div className="flex-grow px-4 py-8 landscape:lg:px-20 grid gap-12">
        <SearchArea />
        <ResultArea />
      </div>
    </dataContext.Provider>
  );
}
