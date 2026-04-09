import Link from "next/link";
import { events } from "@/components/data/events";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event.id} className="bg-slate-800 p-5 rounded-xl">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p>{event.organizer}</p>

          <Link
            href={`/events/${event.id}`}
            className="block mt-4 bg-indigo-600 text-center py-2 rounded"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}