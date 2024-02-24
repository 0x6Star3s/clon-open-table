import { PRICE, Review } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRangeAverage";
import Price from "../../components/Price";
import Stars from "../../components/Stars";
import NextImage from "../../components/ui/image";

interface Restaurant {
  location: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  };
  cuisine: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  };
  id: number;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  reviews: Review[];
}

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else "";
  };

  return (
    <div className="border-b md:flex py-5 ml-5">
      <NextImage
        src={restaurant.main_image}
        width={380}
        height={300}
        alt="image of restaurant"
        imageClassName="object-cover w-full h-36 rounded-lg"
        className="w-full md:w-44 h-40 rounded md:mt-3"
      />
      <div className="p-3">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars review={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}


{/* <div className="border-b py-5 ml-5 w-fit md:flex">
<NextImage
  src={restaurant.main_image}
  width={380}
  height={300}
  alt=""
  imageClassName="object-cover w-full h-36 rounded-lg"
  className="w-full h-36 pr-5"
/>
<div className="p-3">
  <h2 className="text-3xl">{restaurant.name}</h2>
  <div className="flex items-start">
    <div className="flex mb-2">
      <Stars review={restaurant.reviews} />
    </div>
    <p className="ml-2 text-sm">{renderRatingText()}</p>
  </div>
  <div className="mb-9">
    <div className="font-light flex text-reg">
      <Price price={restaurant.price} />
      <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
      <p className="mr-4 capitalize">{restaurant.location.name}</p>
    </div>
  </div>
  <div className="text-red-600">
    <Link href={`/restaurant/${restaurant.slug}`}>
      View more information
    </Link>
  </div>
</div>
</div> */}