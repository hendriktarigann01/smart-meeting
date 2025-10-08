import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConfigStore } from "@/stores/useConfigStore";
import { ProductStep } from "@/components/steps/ProductStep";
import { TableStep } from "@/components/steps/TableStep";
import { ImplementationStep } from "@/components/steps/ImplementationStep";
import { ScreenStep } from "@/components/steps/ScreenStep";
import { CameraStep } from "@/components/steps/CameraStep";
import { QuickShareStep } from "@/components/steps/QuickShareStep";
import { SpeakerStep } from "@/components/steps/SpeakerStep";
import { SummaryStep } from "@/components/steps/SummaryStep";
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
    selectedImplementation,
    selectedScreenLayout,
    selectedCamera,
    selectedQuickShare,
    selectedSpeaker,
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
        return <ImplementationStep />;
      case 4:
        return <ScreenStep />;
      case 5:
        return <CameraStep />;
      case 6:
        return <QuickShareStep />;
      case 7:
        return <SpeakerStep />;
      case 8:
        return <SummaryStep />;
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
      case 3:
        return selectedImplementation !== null;
      case 4:
        return selectedScreenLayout !== null;
      case 5:
        return selectedCamera !== null;
      case 6:
        return selectedQuickShare !== null;
      case 7:
        return selectedSpeaker !== null;
      case 8:
        return true; // Summary step
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
      <div className="px-5 ">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-xl font-medium text-gray-800">{room.title}</h1>
          <div className="flex items-center gap-2 px-3 py-1.5 h-8 bg-teal-100 text-teal-700 rounded-md text-sm font-medium">
            <User size={16} />
            <span>{room.capacity}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 h-8 bg-gray-100 text-gray-700 rounded-md text-sm">
            <span>{room.dimensions}</span>
            <img
              src="/icon/icon-ruler.png"
              alt="Ruler Icon"
              className="h-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 gap-6 flex px-5 mt-5">
        {/* Left Side - Room Preview */}
        <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-2xl">
          <div className="w-full">
            {/* Room Illustration */}
            <div className="w-full mx-auto aspect-[4/2] py-10 flex items-center justify-center">
              <img
                src={`/room/${roomSize}.png`}
                alt={room.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Configuration Steps */}
        <div className="w-full max-w-[480px] flex flex-col">
          {/* Step Content */}
          <div className="flex-1 overflow-y-auto">{renderStep()}</div>
          {/* Navigation Buttons */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={currentStep === 8 ? () => navigate("/") : prevStep}
                disabled={currentStep === 1}
                className="flex-1 cursor-pointer"
              >
                {currentStep === 8 ? "Back to Home" : "Previous"}
              </Button>
              <Button
                onClick={
                  currentStep === 8
                    ? () => console.log("Download PDF clicked")
                    : nextStep
                }
                disabled={currentStep !== 8 && !canProceed()}
                className="flex-1 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white"
              >
                {currentStep === 8 ? "Download to PDF" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
