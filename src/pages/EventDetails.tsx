import { useEvents } from '@/context/EventsContext';
import { useParams, Navigate } from 'react-router-dom'

export default function EventDetails() {
    const { id } = useParams<{ id: string }>()
    const eventId = Number(id)

    const { getEventById } = useEvents();
    const event = getEventById(eventId);

  if (!event) return Navigate({to:"/error"});

  // Normally, you'd fetch event data using React Query
  return (
   <article className="min-h-screen space-y-6 py-4 sm:py-8">
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-bold mt-4">{event.title}</h1>

      {/* Organizer, Date & Time */}
      <div className="text-sm sm:text-base text-gray-200 flex flex-wrap gap-2">
        <span>Organized by {event.organizer}</span>
        <span>•</span>
        <span>{event.date} • {event.time}</span>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-300">{event.description}</p>

      {/* Additional Event Info */}
      <div className="space-y-2 mt-4 text-gray-200">
        <p><strong>Category:</strong> {event.category}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Pets Allowed:</strong> {event.petsAllowed ? "Yes" : "No"}</p>
      </div>
    </article>
  )
}
