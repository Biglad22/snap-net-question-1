import { useState, useMemo, useCallback, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { Event } from '@/types/events'
import { fetchEvents } from '@/services/fetchEvents'
import { useEvents } from '@/context/eventsContext'

// Simple debounce helper
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export default function useFetchEvents() {
  const [search, setSearch] = useState('')
  const { setEvents } = useEvents()

  // Fetch data using React Query
  const { data = [], isLoading, isError, refetch, isFetching } = useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: fetchEvents
  })

  // Store events in context when data arrives
  useEffect(() => {
    if (data.length) setEvents(data)
  }, [data, setEvents])

  // Debounced search handler
  const handleSearchChange = useCallback(
    debounce((value: string) => {
      setSearch(value.toLowerCase())
    }, 300),
    []
  )

  // Filter events based on search term
  const filteredEvents = useMemo(() => {
    if (!search) return data
    return data.filter(event =>
      event.title.toLowerCase().includes(search)
    )
  }, [search, data])

  return {
    search,
    filteredEvents,
    handleSearchChange,
    isLoading,
    isError,
    refetch,
    isFetching
  }
}
