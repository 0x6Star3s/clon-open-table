import { Location, Cuisine, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({
  location,
  cuisine,
  searchParams,
}: {
  location: Location[];
  cuisine: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border w-full text-reg text-center font-light rounded-l p-2"
    },
    {
      price: PRICE.REGULR,
      label: "$$",
      className: "border w-full text-reg text-center font-light  p-2"
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className: "border w-full text-reg text-center font-light rounded-r p-2"
    },
  ];
  return (
    <div className="w-1/5 pr-2">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {location.map((location, index) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            key={index}
            className="font-light text-reg capitalize"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisine.map((cuisine, index) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            key={index}
            className="font-light text-reg capitalize"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex flex-col md:flex-row">
          {prices.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price: price,
                },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
