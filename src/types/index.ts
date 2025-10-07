export interface Meeting {
  id: string;
  title: string;
  date: Date;
  duration: number;
  participants: Participant[];
  agenda: string[];
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Participant {
  id: string;
  name: string;
  email: string;
  role: "organizer" | "attendee";
}
