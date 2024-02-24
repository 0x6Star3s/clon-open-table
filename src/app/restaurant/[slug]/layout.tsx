import React from "react";
import Header from "./components/Header";

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: {slug: string}
}) {
  return (
    <>
      <Header name={params.slug}/>
      <div className="md:flex m-auto w-[90%] lg:w-2/3 md:justify-between md:items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}
