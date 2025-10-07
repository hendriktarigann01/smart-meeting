import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConfigStore } from "@/stores/useConfigStore";
import { ProductStep } from "@/components/steps/ProductStep";
import { TableStep } from "@/components/steps/TableStep";
import { ScreenStep } from "@/components/steps/ScreenStep";
import { ProductCategory, RoomSize } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Room data mapping
const roomData = {
  "small-room": {
    title: "Small Meeting Room",
    capacity: "2-5 People",
    dimensions: "3m x 3m",
  },
  "medium-room": {
    title: "Medium Meeting Room",
    capacity: "6-8 People",
    dimensions: "5m x 4m",
  },
  "large-room": {
    title: "Large Meeting Room",
    capacity: "10-12 People",
    dimensions: "6m x 5m",
  },
  auditorium: {
    title: "Auditorium",
    capacity: "14-20 People",
    dimensions: "8m x 6m",
  },
};

export function ConfigurationPage() {
  const { category, roomSize } = useParams<{
    category: ProductCategory;
    roomSize: RoomSize;
  }>();
  const navigate = useNavigate();

  const {
    currentStep,
    totalSteps,
    setRoomConfig,
    nextStep,
    prevStep,
    selectedProduct,
    selectedTableLayout,
  } = useConfigStore();

  // Initialize configuration
  useEffect(() => {
    if (category && roomSize && roomData[roomSize]) {
      const room = roomData[roomSize];
      setRoomConfig(
        category,
        roomSize,
        room.title,
        room.capacity,
        room.dimensions
      );
    } else {
      navigate("/");
    }
  }, [category, roomSize, setRoomConfig, navigate]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProductStep />;
      case 2:
        return <TableStep />;
      case 3:
        return <ScreenStep />;
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedProduct !== null;
      case 2:
        return selectedTableLayout !== null;
      default:
        return false;
    }
  };

  if (!category || !roomSize) return null;

  const room = roomData[roomSize];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Room Info Header */}
      <div className="px-6 py-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-xl font-medium text-gray-800">{room.title}</h1>
          <div className="flex items-center gap-2 px-3 py-1.5 h-8 bg-teal-100 text-teal-700 rounded-md text-sm font-medium">
            <User size={16} />
            <span>{room.capacity}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 h-8 bg-gray-100 text-gray-700 rounded-md text-sm">
            <img
              src="/icon/icon-ruler.png"
              alt="Ruler Icon"
              className="h-full"
            />
            <span>{room.dimensions}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex px-6">
        {/* Left Side - Room Preview */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full">
            {/* Room Illustration */}
            <div className="w-full mx-auto aspect-[4/2] py-10 bg-gray-100 rounded-2xl flex items-center justify-center">
              <img
                src={`/room/${roomSize}.png`}
                alt={room.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Configuration Steps */}
        <div className="w-full max-w-[480px] flex flex-col pl-6">
          {/* Step Content */}
          <div className="flex-1 overflow-y-auto">{renderStep()}</div>
          {/* Navigation Buttons */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex-1"
              >
                Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
