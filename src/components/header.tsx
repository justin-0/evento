"use client";

import { usePathname } from "next/navigation";
import { getPathname } from "@/lib/getPathname";
import { cn } from "@/lib/cn";

type EventsHeadingProps = {
  className?: string;
};

export default function EventsHeading({ className }: EventsHeadingProps) {
  const path = usePathname();
  const destination = getPathname(path);

  return (
    <h1 className={cn("text-xl font-bold lg:text-4xl", className)}>
      {destination === "All"
        ? `${destination} Events`
        : `Events in ${destination}`}
    </h1>
  );
}
