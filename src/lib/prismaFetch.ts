import { notFound } from "next/navigation";
import { capitalize } from "./capitalise";
import prisma from "./db";
import "server-only";

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  if (!event) notFound();

  return event;
}

export async function getEvents(city: string, page = 1) {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: [
      {
        date: "asc",
      },
    ],
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: { city: city === "all" ? undefined : capitalize(city) },
  });

  return { events, totalCount };
}
