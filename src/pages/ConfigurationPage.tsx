import { useEffect, useState } from "react";
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
import { ExportModal, ExportFormData } from "@/components/modal/ExportModal";
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

// Step title mapping
const getStepTitle = (step: number, category: ProductCategory | null) => {
  if (!category) return "";

  if (category === "interactive-whiteboard") {
    const titles = [
      "install-option",
      "table-layout",
      "implementation",
      "screens",
      "camera-configuration",
      "quickshare-configuration",
      "speaker-configuration",
      "summary",
    ];
    return titles[step - 1] || "";
  } else if (category === "video-wall" || category === "led-indoor") {
    const titles = [
      "install-option",
      "table-layout",
      "screens",
      "camera-configuration",
      "quickshare-configuration",
      "speaker-configuration",
      "summary",
    ];
    return titles[step - 1] || "";
  }

  return "";
};

export function ConfigurationPage() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const params = useParams<{
    category: ProductCategory;
    roomSize: RoomSize;
    step?: string;
  }>();

  const category = params.category;
  const roomSize = params.roomSize;
  const stepParam = params.step;

  const navigate = useNavigate();

  const {
    currentStep,
    totalSteps,
    category: storeCategory,
    roomSize: storeRoomSize,
    setRoomConfig,
    setCurrentStep,
    nextStep: storeNextStep,
    prevStep: storePrevStep,
    selectedProduct,
    selectedTableLayout,
    selectedImplementation,
    selectedScreenLayout,
    selectedCamera,
    selectedQuickShare,
    selectedSpeaker,
  } = useConfigStore();

  // Initialize configuration ONCE
  useEffect(() => {
    if (category && roomSize && roomData[roomSize]) {
      // Only set if not already set or if different
      if (storeCategory !== category || storeRoomSize !== roomSize) {
        const room = roomData[roomSize];
        console.log("Initializing room config:", category, roomSize);
        setRoomConfig(
          category,
          roomSize,
          room.title,
          room.capacity,
          room.dimensions
        );
      }
    } else if (!category || !roomSize) {
      navigate("/");
    }
  }, [category, roomSize, storeCategory, storeRoomSize]);

  // Monitor step changes
  useEffect(() => {
    console.log("Step changed to:", currentStep);
  }, [currentStep]);

  // Update URL when step changes
  useEffect(() => {
    if (category && roomSize && currentStep > 0) {
      const stepTitle = getStepTitle(currentStep, category);
      if (stepTitle) {
        const newPath = `/${category}/${roomSize}/${stepTitle}`;
        // Only navigate if path actually changed
        if (window.location.pathname !== newPath) {
          navigate(newPath, { replace: true });
        }
      }
    }
  }, [currentStep, category, roomSize, navigate]);

  const renderStep = () => {
    if (category === "interactive-whiteboard") {
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
    } else if (category === "video-wall" || category === "led-indoor") {
      switch (currentStep) {
        case 1:
          return <ProductStep />;
        case 2:
          return <TableStep />;
        case 3:
          return <ScreenStep />;
        case 4:
          return <CameraStep />;
        case 5:
          return <QuickShareStep />;
        case 6:
          return <SpeakerStep />;
        case 7:
          return <SummaryStep />;
        default:
          return null;
      }
    }

    return null;
  };

  const canProceed = () => {
    if (category === "interactive-whiteboard") {
      switch (currentStep) {
        case 1:
          return selectedProduct !== null;
        case 2:
          // Auditorium can skip, others need selection
          return roomSize === "auditorium" || selectedTableLayout !== null;
        case 3:
          return selectedImplementation !== null;
        case 4:
          return selectedScreenLayout !== null;
        case 5:
          return selectedCamera !== null;
        case 6:
          return selectedQuickShare !== null;
        case 7:
          // Auditorium can skip, others need selection
          return roomSize === "auditorium" || selectedSpeaker !== null;
        case 8:
          return true; // Summary step
        default:
          return false;
      }
    } else if (category === "video-wall" || category === "led-indoor") {
      switch (currentStep) {
        case 1:
          return selectedProduct !== null;
        case 2:
          // Auditorium can skip, others need selection
          return roomSize === "auditorium" || selectedTableLayout !== null;
        case 3:
          return selectedScreenLayout !== null;
        case 4:
          return selectedCamera !== null;
        case 5:
          return selectedQuickShare !== null;
        case 6:
          // Auditorium can skip, others need selection
          return roomSize === "auditorium" || selectedSpeaker !== null;
        case 7:
          return true; // Summary step
        default:
          return false;
      }
    }

    return false;
  };

  const nextStep = () => {
    console.log("Next clicked");
    console.log("Current step before:", currentStep);
    console.log("Total steps:", totalSteps);
    console.log("Can proceed:", canProceed());
    storeNextStep();
    console.log("Store nextStep called");
  };

  const prevStep = () => {
    console.log("Prev clicked, current step:", currentStep);
    storePrevStep();
  };

  const handleExportPDF = (data: ExportFormData) => {
    console.log("Exporting PDF with data:", data);
    // TODO: Implement PDF generation logic here
    // You can access all configuration data from useConfigStore here
    setIsExportModalOpen(false);
  };

  if (!category || !roomSize) return null;

  const room = roomData[roomSize];
  const isLastStep = currentStep === totalSteps;

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
        <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-2xl relative">
          <div className="w-full">
            <div className="w-full mx-auto aspect-[4/2] py-10 flex items-center justify-center relative">
              <img
                src={`/room/${roomSize}.png`}
                alt={room.title}
                className="w-full h-full object-contain"
              />

              {/* Overlay grid */}
              <div className="absolute inset-10 grid grid-cols-24 grid-rows-12 border pointer-events-none">
                {Array.from({ length: 24 * 12 }).map((_, i) => (
                  <div key={i} className="border border-black/5" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Configuration Steps */}
        <div className="w-full max-w-[480px] flex flex-col">
          {/* Step Content */}
          <div className="flex-1 overflow-y-auto">{renderStep()}</div>
          {/* Navigation Buttons */}
          <div className="pt-2.5 border-t-2 border-gray-200">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={isLastStep ? () => navigate("/") : prevStep}
                disabled={currentStep === 1}
                className="flex-1 cursor-pointer"
              >
                {isLastStep ? "Back to Home" : "Previous"}
              </Button>
              <Button
                onClick={
                  isLastStep ? () => setIsExportModalOpen(true) : nextStep
                }
                disabled={!isLastStep && !canProceed()}
                className="flex-1 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white"
              >
                {isLastStep ? "Download to PDF" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        onExport={handleExportPDF}
      />
    </div>
  );
}
