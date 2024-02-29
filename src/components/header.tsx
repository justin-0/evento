"use client";

import { usePathname } from "next/navigation";
import { getPathname } from "@/lib/getPathname";

export default function EventsHeading() {
  const path = usePathname();
  const destination = getPathname(path);

  return (
    <h1 className="mb-5 mt-8 text-xl font-bold lg:text-4xl">
      {destination === "All"
        ? `${destination} Events`
        : `Events in ${destination}`}
    </h1>
  );
}
