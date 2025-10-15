import type { Event } from '@/types/events';
import { Link } from 'react-router-dom';

type Props = Pick<Event, "id"|"date"|"time"|"organizer"|"location"|"title"> & {className?:string}

export default function EventCard({
    date, id, title, time, organizer, className
}: Props) {
  return (
    <Link to={`/events/${id}`} className={`${className} min-w-fit p-4 rounded-md border bg-gray-800 border-gray-700 hover:border-gray-600 duration-300 transition-all`}>
        <h6 className="text-base sm:text-lg truncate text-gray-300">
            {title}
        </h6>
        <div className='flex items-center gap-4 text-gray-400'>
            <p className="text-sm sm:text-base flex-1">
              <span>{time}</span>
              <span className="mx-2 inline-block">•</span>
              <span>{date}</span>
            </p>

            <p className="text-sm sm:text-base">
                <span>organizer:</span>
                <span>{organizer}</span>
            </p>
        </div>
    </Link>
  )
}

export  function EventCardSkeleton({className =""}:{className?:string}) {
  return (
    <div className={`min-w-fit p-4 rounded-md border bg-gray-800 border-gray-700 shadow-sm ${className}`}>
        <div className="h-4 bg-gray-300 animate-pulse" />
        <div className='flex items-center gap-4 animate-pulse'>
            <span className="bg-gray-300 flex-1 h-4 rounded-sm">
            </span>
            <span className="bg-gray-300 flex-1 h-4 rounded-sm">
            </span>
        </div>
    </div>
  )
}