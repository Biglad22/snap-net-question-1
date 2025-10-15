import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Event = {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
};

type EventsContextType = {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  getEventById: (id: number) => Event | undefined;
};

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const getEventById = (id: number) => events.find((event) => event.id === id);

  return (
    <EventsContext.Provider value={{ events, setEvents, getEventById }}>
      {children}
    </EventsContext.Provider>
  );
};

// Custom hook for easier access
export const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) throw new Error("useEvents must be used within EventsProvider");
  return context;
};
