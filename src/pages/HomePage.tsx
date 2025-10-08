import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductMenu } from "@/components/ProductMenu";
import { RoomCard } from "@/components/RoomCard";
import { MeetingRoom, ProductCategory } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const meetingRooms: MeetingRoom[] = [
  {
    id: "1",
    title: "Small Meeting Room",
    size: "small-room",
    capacity: "2-5 People",
    dimensions: "3m x 3m",
    image: "/room/small-room.png",
  },
  {
    id: "2",
    title: "Medium Meeting Room",
    size: "medium-room",
    capacity: "6-8 People",
    dimensions: "5m x 4m",
    image: "/room/medium-room.png",
  },
  {
    id: "3",
    title: "Large Meeting Room",
    size: "large-room",
    capacity: "10-12 People",
    dimensions: "6m x 5m",
    image: "/room/large-room.png",
  },
  {
    id: "4",
    title: "Auditorium",
    size: "auditorium",
    capacity: "14-20 People",
    dimensions: "8m x 6m",
    image: "/room/auditorium.png",
  },
];

export function HomePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("video-wall");

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
  };

  const handleRoomSelect = (room: MeetingRoom) => {
    // Navigate to configuration page
    navigate(`/${selectedCategory}/${room.size}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <Header />

      {/* Main Content */}
      <main className="flex-1 container h-screen mx-auto px-6 space-y-8 ">
        {/* Hero Section */}
        <div className="text-center">
          <p className="text-2xl md:text-4xl font-medium text-gray-800 mb-4">
            Meeting Rooms to Suit Your Needs
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Create your ideal workspace. Use our interactive configurator to
            shape spaces that inspire performance.
          </p>
        </div>
        {/* Product Category Menu */}
        <div className="flex justify-center">
          <ProductMenu onCategoryChange={handleCategoryChange} />
        </div>
        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {meetingRooms.map((room) => (
            <RoomCard key={room.id} room={room} onSelect={handleRoomSelect} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
