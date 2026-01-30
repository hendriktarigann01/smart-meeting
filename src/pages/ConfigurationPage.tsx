import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Info, User } from "lucide-react";
import { getContainerMode } from "@/constants/layout";
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
import { CameraOverlay } from "@/components/overlay/CameraOverlay";
import { QuickShareOverlay } from "@/components/overlay/QuickShareOverlay";
import { SpeakerOverlay } from "@/components/overlay/SpeakerOverlay";
import { roomData } from "@/models/data";
import { ExportModal, ExportFormData } from "@/components/modal/ExportModal";
import { ProductCategory, RoomSize } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { isMobileDevice } from "@/utils/deviceDetector";
import { MobileRotateOverlay } from "@/components/MobileRotateOverlay";

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
    "home",
  );
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [previewDimensions, setPreviewDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const previewOuterRef = useRef<HTMLDivElement>(null); // Ref untuk capture PDF

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

  // Mobile device detection
  useEffect(() => {
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

      console.log("ConfigurationPage - Device Check:", {
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
          room.dimensions,
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

        // Determine mode for logging
        const mode = getContainerMode(width);

        setPreviewDimensions({ width, height });

        console.log("Preview dimensions:", {
          width,
          height,
          mode, // DESKTOP or MOBILE
        });
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

  // Show mobile overlay if on mobile device
  if (showMobileOverlay) {
    return <MobileRotateOverlay videoSrc="/rotate.mp4" />;
  }

  if (!category || !roomSize) return null;

  const room = roomData.rooms[roomSize];
  const isLastStep = currentStep === totalSteps;

  // Get room image - use rectangular layout for small/medium/large, baseImage for auditorium
  const roomImage =
    selectedTableLayout && "layouts" in room
      ? room.layouts[selectedTableLayout.shape as keyof typeof room.layouts]
      : ("layouts" in room ? room.layouts?.rectangular : undefined) ||
        ("baseImage" in room ? room.baseImage : undefined);
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
        <div
          ref={previewOuterRef}
          className="w-[535px] h-[480px] md:w-[1300px] flex-1 flex items-center justify-center bg-gray-100 rounded-2xl relative"
        >
          <div className="w-full">
            {getStepTitle(currentStep, category) === "screens" && (
              <div className="absolute top-0 left-2 w-60 p-3 z-50">
                <div
                  className="flex items-center justify-center h-7 gap-2 mb-3 relative"
                  ref={infoRef}
                >
                  <p className="text-sm font-medium text-gray-600">
                    Meeting Scene
                  </p>
                  <button
                    onClick={() => setShowInfoTooltip(!showInfoTooltip)}
                    className="text-gray-600 hover:text-gray-700 cursor-pointer transition-colors"
                  >
                    <Info size={16} />
                  </button>

                  {/* Tooltip */}
                  {showInfoTooltip && (
                    <div className="absolute left-4/5 ml-2 top-0 w-80 h-7 bg-black/40 text-white text-xs rounded-sm p-3 z-50 flex items-center justify-center text-center">
                      <p>
                        Display screen previews for various meeting scenarios
                      </p>
                    </div>
                  )}
                </div>

                <Menubar className="w-full h-10 bg-white">
                  <MenubarMenu>
                    <MenubarTrigger
                      className={`flex-1 justify-center font-light ${
                        sceneView === "home"
                          ? "bg-teal-500 text-white data-[state=open]:bg-teal-500 data-[state=open]:text-white"
                          : ""
                      }`}
                      onClick={() => setSceneView("home")}
                    >
                      Home
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger
                      className={`flex-1 justify-center font-light ${
                        sceneView === "incall"
                          ? "bg-teal-500 text-white data-[state=open]:bg-teal-500 data-[state=open]:text-white"
                          : ""
                      }`}
                      onClick={() => setSceneView("incall")}
                    >
                      In Call
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger
                      className={`flex-1 justify-center font-light ${
                        sceneView === "share"
                          ? "bg-teal-500 text-white data-[state=open]:bg-teal-500 data-[state=open]:text-white"
                          : ""
                      }`}
                      onClick={() => setSceneView("share")}
                    >
                      Share
                    </MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
              </div>
            )}

            <div
              ref={previewContainerRef}
              className="w-full mx-auto aspect-[4/2] py-10 flex items-center justify-center relative"
            >
              {/* Room */}
              <img
                src={roomImage}
                alt={room.title}
                className="w-full h-full object-contain"
              />

              {/* Speaker Overlay */}
              {previewDimensions.width > 0 && (
                <SpeakerOverlay
                  containerWidth={previewDimensions.width}
                  containerHeight={previewDimensions.height}
                />
              )}

              {/* Screen Overlay */}
              {previewDimensions.width > 0 && (
                <ScreenOverlay
                  sceneView={sceneView}
                  containerWidth={previewDimensions.width}
                  containerHeight={previewDimensions.height}
                />
              )}

              {/* Camera Overlay */}
              {previewDimensions.width > 0 && (
                <CameraOverlay
                  containerWidth={previewDimensions.width}
                  containerHeight={previewDimensions.height}
                />
              )}

              {/* QuickShare Overlay */}
              {previewDimensions.width > 0 && (
                <QuickShareOverlay
                  containerWidth={previewDimensions.width}
                  containerHeight={previewDimensions.height}
                />
              )}

              {/* Overlay grid */}
              {/* <div className="absolute inset-10 grid grid-cols-24 grid-rows-12 border pointer-events-none">
                {Array.from({ length: 24 * 12 }).map((_, i) => (
                  <div key={i} className="border border-black/5" />
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Right Side - Configuration Steps */}
        <div className="w-[300px] h-[480px] lg:w-full md:max-w-[480px] flex flex-col">
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
        previewRef={previewOuterRef}
      />
    </div>
  );
}
