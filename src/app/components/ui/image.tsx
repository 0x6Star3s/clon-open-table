"use client";

import Image from "next/image";
import React from "react";
// import { useImagehash } from "@/app/hooks/useImagehash";\
// import { getPlaiceholder } from "plaiceholder";

// import cn from "@/utils/cn";
import cn from "../../../utils/cn";
import axios from "axios";
// import { getStrapiMedia } from "@/utils/api/helpers";

export type ImageProps = {
  imageClassName?: string;
  lazy?: boolean;
} & React.ComponentPropsWithoutRef<typeof Image>;

const NextImage = (props: ImageProps) => {
  const { alt, src, className, imageClassName, lazy = true, ...rest } = props;
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={cn("overflow-hidden", isLoading && "animate-pulse", className)}
      // className={cn('', isLoading && 'animate-pulse', className)}
      // className={cn("overflow-hidden", className)}
      data-testid="image-container"
    >
      <Image
        className={cn(
          "transition-[scale,filter] duration-700 my-0 h-full",
          // isLoading && 'scale-[1.02] blur-xl grayscale',
          isLoading && "scale-[1.02] blur-xl",
          imageClassName
        )}
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : undefined}
        priority={!lazy}
        quality={100}
        onLoad={() => setLoading(false)}
        style={{ objectFit: "cover" }}
        {...rest}
      />
    </div>
  );
};
export default NextImage;
