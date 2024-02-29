"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!search) return;

    e.preventDefault();
    router.push(`/events/${search}`);
  };
  return (
    <form onSubmit={handleSubmit} action="" className="mt-5 w-5/6 lg:w-3/6">
      <input
        className="w-full rounded p-2 text-neutral-900 outline-none ring-green-800/45 focus:bg-white/95 focus:ring-2"
        type="text"
        placeholder="search events in city..."
        spellCheck={false}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
}
