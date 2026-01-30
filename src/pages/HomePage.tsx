import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductMenu } from "@/components/ProductMenu";
import { RoomCard } from "@/components/RoomCard";
import { MeetingRoom, ProductCategory } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { meetingRooms } from "@/models/home";
import { isMobileDevice } from "@/utils/deviceDetector";
import { MobileRotateOverlay } from "@/components/MobileRotateOverlay";

export function HomePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("video-wall");
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);

  useEffect(() => {
    // Check if accessing from mobile device
    const checkDevice = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const smallerDimension = Math.min(screenWidth, screenHeight);
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUserAgent =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent,
        );
      const hasTouchScreen =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isPortraitOrientation = screenHeight > screenWidth;

      const isMobile = isMobileDevice();

      console.log("Device Check:", {
        width: screenWidth,
        height: screenHeight,
        smallerDimension,
        isPortrait: isPortraitOrientation,
        isMobileUserAgent,
        hasTouchScreen,
        isMobile,
        showOverlay: isMobile,
      });
      setShowMobileOverlay(isMobile);
    };

    // Initial check
    checkDevice();

    // Listen for orientation/resize changes
    window.addEventListener("resize", checkDevice);
    window.addEventListener("orientationchange", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("orientationchange", checkDevice);
    };
  }, []);

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
  };

  const handleRoomSelect = (room: MeetingRoom) => {
    navigate(`/${selectedCategory}/${room.size}`);
  };

  // Show mobile overlay if on mobile device
  if (showMobileOverlay) {
    return <MobileRotateOverlay videoSrc="/rotate.mp4" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <Header />

      {/* Main Content */}
      <main className="flex-1 container h-screen mx-auto px-3 lg:px-6 space-y-8 ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-3 lg:gap-6 max-w-7xl mx-auto">
          {meetingRooms.map((room) => (
            <RoomCard key={room.id} room={room} onSelect={handleRoomSelect} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
