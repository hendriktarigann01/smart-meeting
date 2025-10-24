import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Info, User } from "lucide-react";
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
import { ScreenOverlay } from "@/components/overlay/ScreenOverlay";
import { roomData } from "@/models/data";
import { ExportModal, ExportFormData } from "@/components/modal/ExportModal";
import { ProductCategory, RoomSize } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

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
  const [sceneView, setSceneView] = useState<"home" | "incall" | "share">(
    "home"
  );
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [previewDimensions, setPreviewDimensions] = useState({
    width: 0,
    height: 0,
  });
  const infoRef = useRef<HTMLDivElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  const params = useParams<{
    category: ProductCategory;
    roomSize: RoomSize;
    step?: string;
  }>();

  const category = params.category;
  const roomSize = params.roomSize;

  const navigate = useNavigate();

  const {
    currentStep,
    totalSteps,
    category: storeCategory,
    roomSize: storeRoomSize,
    setRoomConfig,
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
    if (category && roomSize && roomData.rooms[roomSize]) {
      // Only set if not already set or if different
      if (storeCategory !== category || storeRoomSize !== roomSize) {
        const room = roomData.rooms[roomSize];
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
  }, [
    category,
    roomSize,
    storeCategory,
    storeRoomSize,
    navigate,
    setRoomConfig,
  ]);

  // Monitor step changes
  useEffect(() => {
    console.log("Step changed to:", currentStep);
  }, [currentStep]);

  // Measure preview container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (previewContainerRef.current) {
        const rect = previewContainerRef.current.getBoundingClientRect();
        // Subtract padding (40px each side from inset-10)
        const width = rect.width - 80;
        const height = rect.height - 80;
        setPreviewDimensions({ width, height });
        console.log("Preview dimensions:", { width, height });
      }
    };

    // Initial measurement with delay to ensure render
    setTimeout(updateDimensions, 100);

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
        setShowInfoTooltip(false);
      }
    };

    if (showInfoTooltip) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInfoTooltip]);

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
          return <ProductStep category={category} stepNumber={currentStep} />;
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
          return <ProductStep category={category} stepNumber={currentStep} />;
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
    setIsExportModalOpen(false);
  };

  if (!category || !roomSize) return null;

  const room = roomData.rooms[roomSize];
  const isLastStep = currentStep === totalSteps;

  // Get room image - use rectangular layout for small/medium/large, baseImage for auditorium
  const roomImage = room.layouts?.rectangular || room.baseImage;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Room Info Header */}
      <div className="px-5 ">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-xl font-medium text-gray-800">{room.title}</h1>
          <div className="flex items-center gap-2 px-3 py-1.5 h-8 bg-[#33AAAA]/10 text-teal-600 rounded-md text-sm font-medium">
            <span>{room.capacity}</span>
            <User size={16} />
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
            <div
              ref={previewContainerRef}
              className="w-full mx-auto aspect-[4/2] py-10 flex items-center justify-center relative"
            >
              {/* Room Size */}
              <img
                src={roomImage}
                alt={room.title}
                className="w-full h-full object-contain"
              />
              {/* Screen Overlay */}
              {previewDimensions.width > 0 && (
                <ScreenOverlay
                  sceneView={sceneView}
                  containerWidth={previewDimensions.width}
                  containerHeight={previewDimensions.height}
                />
              )}
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
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white cursor-pointer"
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
