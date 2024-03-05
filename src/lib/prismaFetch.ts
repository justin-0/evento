import { EventoEvent, PrismaClient } from "@prisma/client";
import { capitalize } from "./capitalise";

const prisma = new PrismaClient();

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  return event;
}

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: { city: capitalize(city) },
  });

  return events;
}
