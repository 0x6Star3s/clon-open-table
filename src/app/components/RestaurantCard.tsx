import { reverse } from "dns";
import Link from "next/link";
import React from "react";
import { RestaurantCardType } from "../page";
import Price from "./Price";
import Stars from "./Stars";
import NextImage from "./ui/image";

interface Props {
  restaurant: RestaurantCardType

}

export default function RestaurantCard({restaurant}: Props) {
  return (
    <div className="w-full min-h-72 rounded-lg overflow-hidden border cursor-pointer ">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <NextImage
          src={restaurant.main_image}
          imageClassName="object-cover w-full min-h-36"
          alt="image"
          width={300}
          height={150}
          className="w-full h-36"
        />
        <div className="p-3">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-start flex-wrap">
            <Stars review={restaurant.reviews}/>
            <p className="ml-2">{restaurant.reviews.length} review{restaurant.reviews.length > 1 ? "s" : ""}</p>
          </div>
          <div className="flex text-reg font-light capitalize flex-wrap">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price}/>
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
