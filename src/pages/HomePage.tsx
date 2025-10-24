import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductMenu } from "@/components/ProductMenu";
import { RoomCard } from "@/components/RoomCard";
import { MeetingRoom, ProductCategory } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { meetingRooms } from "@/models/home";

export function HomePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("video-wall");

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
  };

  const handleRoomSelect = (room: MeetingRoom) => {
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
        {/* Product Category */}
        <div className="flex justify-center">
          <ProductMenu onCategoryChange={handleCategoryChange} />
        </div>
        {/* Room Cards */}
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
