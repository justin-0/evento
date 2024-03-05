import { capitalize } from "./capitalise";
import prisma from "./db";

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  return event;
}

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: [
      {
        date: "asc",
      },
    ],
  });

  return events;
}
