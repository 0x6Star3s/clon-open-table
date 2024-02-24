import React from "react";
import NextImage from "../../../components/ui/image";

export default function Images({ images }: { images: string[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">{images.length} photo{images.length > 1 ? "s" : ""}</h1>
      <div className="flex flex-wrap">
        {images.map(image => (
          <NextImage
            className="w-full md:w-auto h-44 mr-1 mb-1"
            imageClassName="object-cover w-full h-44 rounded-lg"
            width={200}
            height={150}
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
