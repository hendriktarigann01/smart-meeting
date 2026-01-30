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
      <CardContent className="p-3 lg:p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="sm:text-sm lg:text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
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
            className="flex items-center justify-center cursor-pointer rounded-full bg-teal-500 hover:bg-teal-600 text-white w-7 h-7 lg:w-10 lg:h-10"
          >
            <ArrowUpRight className="w-3 h-3 lg:w-5 lg:h-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
