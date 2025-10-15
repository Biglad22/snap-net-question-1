export type Event = {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;       // You could also use Date if you'll parse it later
  time: string;
  petsAllowed: boolean;
  organizer: string;
};
