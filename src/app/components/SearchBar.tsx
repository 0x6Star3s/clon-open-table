"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-lg flex justify-center flex-wrap gap-3">
      <Input
        className=" max-w-[450px] w-[90%] rounded"
        classNames={{
          inputWrapper: [
            "h-fit",
          ],
        }}
        radius="sm"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <Button
        className="rounded bg-red-600 px-9 py-2 text-white w-[90%] sm:w-0 max-w-[450px]"
        radius="sm"
        onClick={() => {
          if (location === "") return;
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Let's go
      </Button>
    </div>
  );
}
