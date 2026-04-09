import { events } from "@/components/data/events";

export const dynamic = "force-static";

// ✅ MUST for static export
export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default function EventDetails({
  params,
}: {
  params: { id: string };
}) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return <div className="p-10 text-red-500">Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="mt-2">Organizer: {event.organizer}</p>
      <p className="mt-2">Type: {event.type}</p>
      <p className="mt-2">Fee: {event.fee}</p>
      {/* <p className="mt-2">Date: {event.date}</p> */}
    </div>
  );
}