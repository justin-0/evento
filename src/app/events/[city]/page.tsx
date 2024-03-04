import EventsList from "@/components/events-list";
import EventsHeading from "@/components/header";
import { Suspense } from "react";
import Loading from "./loading";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function Events({ params }: EventsPageProps) {
  return (
    <main className="flex flex-col items-center px-5 md:px-24">
      <EventsHeading className="mb-10 mt-10" />
      <Suspense fallback={<Loading />}>
        <EventsList city={params.city} />
      </Suspense>
    </main>
  );
}
