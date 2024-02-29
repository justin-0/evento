"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log(path);

  return (
    <nav className="flex h-12 w-full items-center justify-between border-b border-neutral-500/30 px-5 md:px-24">
      <div className="flex h-full items-center">
        <Link href="/" className="font-bold uppercase">
          evento
        </Link>
      </div>
      <div className="flex h-full items-center gap-x-8 text-sm text-white/60">
        <Link
          href="/"
          className={clsx("transition hover:text-white", {
            "font-medium text-white": path === "/",
          })}
        >
          Home
        </Link>
        <Link
          href="/events/all"
          className={clsx("transition hover:text-white", {
            "font-medium text-white": path === "/events/all",
          })}
        >
          All Events
        </Link>
      </div>
    </nav>
  );
}
