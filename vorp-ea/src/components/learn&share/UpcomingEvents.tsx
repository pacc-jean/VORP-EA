import { CalendarDays, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Participatory Research Methods Workshop",
    date: "Jul 18, 2025",
    location: "Nairobi + Zoom",
    link: "#",
    type: "Workshop",
  },
  {
    title: "Community Dialogue: Refugee-Led Initiatives",
    date: "Aug 2, 2025",
    location: "Kakuma Field Hub",
    link: "#",
    type: "Dialogue",
  },
  {
    title: "Webinar: Digital Storytelling for Advocacy",
    date: "Aug 22, 2025",
    location: "Online",
    link: "#",
    type: "Webinar",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Upcoming Events
          </h2>
          <p className="text-gray-600">
            Join us in building skills, sharing knowledge, and co-creating change.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3 text-green-600 font-medium text-sm">
                <CalendarDays size={18} />
                <span>{event.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{event.location}</p>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {event.type}
              </span>
              <span> | </span>
              <a
                href={event.link}
                className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
