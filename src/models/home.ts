import { MeetingRoom } from "@/types";

export const meetingRooms: MeetingRoom[] = [
  {
    id: "1",
    title: "Small Meeting Room",
    size: "small-room",
    capacity: "2-5 People",
    dimensions: "3m x 3m",
    image: "/room/homepage/small-room.png",
  },
  {
    id: "2",
    title: "Medium Meeting Room",
    size: "medium-room",
    capacity: "6-8 People",
    dimensions: "5m x 4m",
    image: "/room/homepage/medium-room.png",
  },
  {
    id: "3",
    title: "Large Meeting Room",
    size: "large-room",
    capacity: "10-12 People",
    dimensions: "6m x 5m",
    image: "/room/homepage/large-room.png",
  },
  {
    id: "4",
    title: "Auditorium",
    size: "auditorium",
    capacity: "14-20 People",
    dimensions: "8m x 6m",
    image: "/room/homepage/auditorium.png",
  },
];
