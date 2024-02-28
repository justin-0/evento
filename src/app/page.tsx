import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-4/6 flex-col items-center justify-center px-5 md:px-24">
      <div className="flex flex-col items-center rounded bg-green-500 p-8">
        <h1 className="text-2xl font-bold lg:text-4xl">
          Find entertainment around you
        </h1>
        <p className="mt-2 font-light lg:text-xl">
          Browse more than <span className="text-yellow-300/90">10,000</span>{" "}
          events nationwide
        </p>
        <form action="" className="mt-5 w-5/6">
          <input
            className="w-full rounded p-2 text-neutral-900 outline-none focus:outline-2 focus:outline-blue-600"
            type="text"
            placeholder="search events in city..."
            spellCheck={false}
          />
        </form>
        <div className="mt-2 flex gap-x-4">
          <span className="font-medium">Popular:</span>
          <div className="flex gap-x-4">
            <Link href="/events/london">London</Link>
            <Link href="/events/swindon">Swindon</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
