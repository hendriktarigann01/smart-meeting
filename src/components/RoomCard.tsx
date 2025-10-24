import { ArrowUpRight, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MeetingRoom } from "@/types";

interface RoomCardProps {
  room: MeetingRoom;
  onSelect?: (room: MeetingRoom) => void;
}

export function RoomCard({ room, onSelect }: RoomCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800 border-0">
      <CardContent className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {room.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <User size={14} />
            <span>{room.capacity}</span>
          </div>
        </div>

        {/* Room Illustration */}
        <div className="relative aspect-[3/2] mb-4 rounded-lg overflow-hidden">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center h-5 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <img
              src="/icon/icon-ruler.png"
              alt="Ruler Icon"
              className="h-full"
            />
            <span>{room.dimensions}</span>
          </div>

          <button
            onClick={() => onSelect?.(room)}
            className="w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 text-white cursor-pointer flex items-center justify-center"
          >
            <ArrowUpRight size={20} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
