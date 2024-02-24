import { PRICE } from "@prisma/client";
import React from "react";

export default function Price({ price }: { price: PRICE }) {
  const rederPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === PRICE.REGULR) {
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
  };
  return <p className="flex mr-3">{rederPrice()}</p>;
}
