import EventsList from "@/components/events-list";
import EventsHeading from "@/components/header";
import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default function Events({ params, searchParams }: EventsPageProps) {
  const page = pageNumberSchema.parse(searchParams.page);

  return (
    <main className="flex flex-col items-center ">
      <EventsHeading className="mb-10 mt-10" />
      <Suspense fallback={<Loading />} key={page + params.city}>
        <EventsList city={params.city} page={page} />
      </Suspense>
    </main>
  );
}
