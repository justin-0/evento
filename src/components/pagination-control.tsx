"use client";

import Link from "next/link";

export default function PaginationControl({
  page,
  city,
}: {
  page: number;
  city: string;
}) {
  return (
    <>
      <Link
        className="mt-4 w-full px-5 text-right md:px-24"
        href={`/events/${city ?? "all"}?page=${page + 1}`}
      >
        Next
      </Link>
    </>
  );
}
