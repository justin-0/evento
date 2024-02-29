import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[85vh] flex-col items-center justify-center px-5 md:px-24">
      <div className="flex h-3/6 flex-col items-center justify-center rounded bg-green-500 p-12">
        <h1 className="text-xl font-bold lg:text-4xl">
          Find entertainment around you
        </h1>
        <p className="mt-2 font-light lg:text-xl">
          Browse more than{" "}
          <span className="text-accent italic underline">10,000 events</span>{" "}
          nationwide
        </p>
        <form action="" className="mt-5 w-5/6 lg:w-3/6">
          <input
            className="ring-accent/75 w-full rounded p-2 text-neutral-900 outline-none focus:bg-white/95 focus:ring-2"
            type="text"
            placeholder="search events in city..."
            spellCheck={false}
          />
        </form>
        <div className="mt-2 flex gap-x-4 text-sm text-white/75">
          <span className="">Popular:</span>
          <div className="flex gap-x-2 font-medium">
            <Link href="/events/london" className="transition hover:text-white">
              London
            </Link>
            <Link
              href="/events/swindon"
              className="transition hover:text-white"
            >
              Swindon
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
