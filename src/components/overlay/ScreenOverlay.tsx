import { useConfigStore } from "@/stores/useConfigStore";
import { ProductCategory, RoomSize } from "@/types";
import { roomData } from "@/models/data";

interface ScreenOverlayProps {
  sceneView: "home" | "incall" | "share";
  containerWidth: number;
  containerHeight: number;
}

export function ScreenOverlay({
  sceneView,
  containerWidth,
  containerHeight,
}: ScreenOverlayProps) {
  const { category, roomSize, selectedProduct, selectedScreenLayout } =
    useConfigStore();

  // Don't render if no category, roomSize, or no product selected
  if (!category || !roomSize || !selectedProduct) {
    console.log("ScreenOverlay: No render - missing data", {
      selectedProduct: !!selectedProduct,
      category,
      roomSize,
    });
    return null;
  }

  // Get screen data from roomData
  const screenData = roomData.components.screens[category as ProductCategory];

  if (!screenData) {
    return null;
  }

  // Determine screen size - use selectedScreenLayout if exists, otherwise use first size
  const selectedSize = selectedScreenLayout?.id || screenData.sizes[0];

  // Get screen state image based on category
  let screenStateImage: string;

  if (category === "interactive-whiteboard") {
    // For interactive-whiteboard: always use wall as default
    const stateKey = sceneView === "incall" ? "in-call" : sceneView;
    screenStateImage = screenData.states.wall[stateKey];
  } else {
    // For video-wall and led-indoor: direct access
    const stateKey = sceneView === "incall" ? "in-call" : sceneView;
    screenStateImage = screenData.states[stateKey];
  }

  console.log("ScreenOverlay: Rendering", {
    category,
    sceneView,
    screenStateImage,
    selectedSize,
  });

  // Get dimensions and position for this room and size
  const roomScreenData = screenData.rooms[roomSize as RoomSize];

  if (!roomScreenData) {
    return null;
  }

  // Type-safe access to screen config
  const screenConfig =
    roomScreenData[selectedSize as keyof typeof roomScreenData];

  if (!screenConfig) {
    return null;
  }

  const { width, height, x, y } = screenConfig;

  // If x or y is null, don't render (not configured yet)
  if (x === null || y === null) {
    return null;
  }

  // Convert grid units to percentage
  // Grid: 24 cols (x), 12 rows (y)
  const percentX = (x / 24) * 100;
  const percentY = (y / 12) * 100;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${percentX}%`,
        top: `${percentY}%`,
        width: `${width}px`,
        height: `${height}px`,
        transform: "translate(-50%, -50%)", // Center on grid point
      }}
    >
      <img
        src={screenStateImage}
        alt={`Screen ${sceneView}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
