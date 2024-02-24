import React from "react";
import Header from "./components/Header";

export default function Loading() {
  return (
    <main>
      <Header />
      <div className="p-3 mt-10 mx-auto gap-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:w-max md:px-20">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
          <div
            key={num}
            className="animate-pulse bg-slate-200 w-full lg:w-[288px] h-72 rounded-lg overflow-hidden border"
          ></div>
        ))}
      </div>
    </main>
  );
}
