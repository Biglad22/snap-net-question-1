import useFetchEvents from '../hooks/usefetchEvents'
import EventCard, { EventCardSkeleton } from '../components/EventCard';

export default function Home() {

    const {filteredEvents: events, isLoading, isFetching} = useFetchEvents();
  return (
    <section className="min-h-screen space-y-6 py-4 sm:py-8">
        <h3 className="text-3xl sm:4xl py-4 font-bold tracking-wide text-gray-100 uppercase">
            Upcoming Events
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
  {(isLoading || isFetching)
    ? events.map((_, i) => <EventCardSkeleton key={i} />)
    : events.length > 0
      ? events.map(({ id, title, time, date, organizer, location }) => (
          <EventCard
            key={id}
            id={id}
            title={title}
            date={date}
            time={time}
            location={location}
            organizer={organizer}
          />
        ))
      : (
        <div className="col-span-full text-center py-8 text-gray-500 text-lg">
          No report found here
        </div>
      )
  }
</div>


    </section>
  )
}