import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className=" w-[380px] overflow-hidden rounded-xl  bg-green-800/50 lg:max-w-[25%]">
      <Image
        src={event.imageUrl}
        alt="event image"
        height={280}
        width={500}
        className="object-fit h-4/6"
      />
      <div className="mb-4 mt-4 flex h-auto flex-col items-center justify-center">
        <h2 className="font-bold">{event.name}</h2>
        <p className="text-sm italic text-white/80">By {event.organizerName}</p>
        <p className="text-sm italic text-white/60">{event.location}</p>
      </div>
    </section>
  );
}
