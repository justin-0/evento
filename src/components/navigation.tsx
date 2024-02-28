import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex h-12 w-full items-center justify-between border-b border-neutral-500/30 px-5 md:px-24">
      <div className="flex h-full items-center">
        <Link href="/" className="font-bold uppercase">
          evento
        </Link>
      </div>
      <div className="flex h-full items-center gap-x-8 text-sm text-white/60">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>
        <Link href="/events/all" className="transition hover:text-white">
          All Events
        </Link>
      </div>
    </nav>
  );
}
