import EventsList from "@/components/events-list";
import EventsHeading from "@/components/header";
import { Suspense } from "react";
import Loading from "./loading";

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Events({ params, searchParams }: EventsPageProps) {
  const page = searchParams.page || 1;

  return (
    <main className="flex flex-col items-center ">
      <EventsHeading className="mb-10 mt-10" />
      <Suspense fallback={<Loading />}>
        <EventsList city={params.city} page={+page} />
      </Suspense>
    </main>
  );
}
