"use client";

import { usePathname } from "next/navigation";
import { getPathname } from "@/lib/getPathname";

export default function Heading() {
  const path = usePathname();
  const destination = getPathname(path);

  return (
    <h1 className="text-xl font-bold lg:text-4xl">
      {destination === "All"
        ? `${destination} Events`
        : `Events in ${destination}`}
    </h1>
  );
}
