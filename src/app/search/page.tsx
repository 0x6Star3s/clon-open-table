import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";
import { equal } from "assert";

const prisma = new PrismaClient();

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const select = {
  id: true,
  main_image: true,
  name: true,
  price: true,
  cuisine: true,
  location: true,
  slug: true,
  reviews: true
};

const fetchRestaurantsByCity = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-[90%] lg:w-2/3 justify-between items-start">
        <SearchSideBar
          location={location}
          cuisine={cuisine}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map(restaurant => (
                <React.Fragment key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </React.Fragment>
              ))}
            </>
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
}
