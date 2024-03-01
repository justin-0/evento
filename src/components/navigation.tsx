"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="flex h-12 w-full items-center justify-between border-b border-neutral-500/30 px-5 md:px-24">
      <div className="flex h-full items-center">
        <Link href="/" className="font-bold uppercase">
          evento
        </Link>
      </div>
      <div className="relative flex h-full items-center gap-x-8 text-sm text-white/60">
        <Link
          href="/"
          className={cn(
            "flex h-full items-center transition hover:text-white",
            {
              "font-medium text-white transition": path === "/",
            },
          )}
        >
          Home
        </Link>
        <Link
          href="/events/all"
          className={cn(
            "flex h-full items-center transition hover:text-white",
            {
              "font-medium text-white transition": path === "/events/all",
            },
          )}
        >
          All Events
        </Link>
      </div>
    </nav>
  );
}
