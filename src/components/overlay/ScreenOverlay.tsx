import { useConfigStore } from "@/stores/useConfigStore";
import { ProductCategory, RoomSize } from "@/types";
import { roomData } from "@/models/data";
import { getContainerMode } from "@/constants/layout";

interface ScreenOverlayProps {
  sceneView: "home" | "incall" | "share";
  containerWidth: number;
  containerHeight: number;
}

function hasMontsStructure(data: any): data is {
  sizes: string[];
  states: Record<string, string>;
  standImages: Record<string, string | null>;
  mounts: any;
} {
  return "mounts" in data && "standImages" in data;
}

export function ScreenOverlay({
  sceneView,
  containerWidth,
}: ScreenOverlayProps) {
  const {
    category,
    roomSize,
    selectedProduct,
    selectedScreenLayout,
    selectedImplementation,
  } = useConfigStore();

  if (!category || !roomSize || !selectedProduct) {
    return null;
  }

  // Determine mode: DESKTOP or MOBILE
  const mode = getContainerMode(containerWidth);

  const screenData = roomData.components.screens[category as ProductCategory];
  if (!screenData) return null;

  const selectedSize = selectedScreenLayout?.id || screenData.sizes[0];

  let screenStateImage: string;
  let screenConfig:
    | { width: number; height: number; x: number; y: number }
    | undefined;
  let standConfig: {
    width: number;
    height: number;
    x: number;
    y: number;
  } | null = null;
  let standImage: string | null = null;

  if (category === "interactive-whiteboard" && hasMontsStructure(screenData)) {
    const mountType =
      selectedImplementation?.id === "floor-stand"
        ? "floor-stand"
        : selectedImplementation?.id === "wheel-stand"
          ? "wheel-stand"
          : "wall-mount";

    // Get state image based on sceneView directly (not mount type)
    const stateKey = sceneView === "incall" ? "incall" : sceneView;
    screenStateImage = screenData.states[stateKey];

    if (!screenStateImage) {
      console.warn(`State image not found for sceneView: ${stateKey}`);
      return null;
    }

    standImage = screenData.standImages[mountType];
    const mountData = screenData.mounts[mountType];
    if (!mountData) return null;

    const roomScreenData = mountData.rooms[roomSize as RoomSize];
    if (!roomScreenData) return null;

    const sizeData =
      roomScreenData[selectedSize as keyof typeof roomScreenData];
    if (!sizeData) return null;

    // Pick config based on mode (desktop or mobile)
    const configData = (sizeData as any)[mode.toLowerCase()];
    if (!configData) {
      console.warn(`No ${mode} config for screen`);
      return null;
    }

    screenConfig = configData.screen;
    standConfig = configData.stand;
  } else {
    const stateKey = sceneView === "incall" ? "incall" : sceneView;
    const data = screenData as {
      sizes: string[];
      states: Record<string, string>;
      rooms: Record<string, any>;
    };

    screenStateImage = data.states[stateKey];
    if (!screenStateImage) return null;

    const roomScreenData = data.rooms[roomSize as RoomSize];
    if (!roomScreenData) return null;

    const sizeData =
      roomScreenData[selectedSize as keyof typeof roomScreenData];
    if (!sizeData) return null;

    // Pick config based on mode
    screenConfig = (sizeData as any)[mode.toLowerCase()];
    if (!screenConfig) {
      console.warn(`No ${mode} config for screen`);
      return null;
    }
  }

  if (!screenConfig) return null;

  const { width, height, x, y } = screenConfig;
  if (x === null || y === null || width === null || height === null)
    return null;

  const percentX = (x / 24) * 100;
  const percentY = (y / 12) * 100;

  console.log("ScreenOverlay:", { mode, width, height, x, y });

  return (
    <>
      {/* Stand Layer */}
      {standImage && standConfig && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${(standConfig.x / 24) * 100}%`,
            top: `${(standConfig.y / 12) * 100}%`,
            width: `${standConfig.width}%`,
            height: `${standConfig.height}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <img
            src={standImage}
            alt="Stand"
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Screen Layer */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${percentX}%`,
          top: `${percentY}%`,
          width: `${width}%`,
          height: `${height}%`,
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <img
          src={screenStateImage}
          alt={`Screen ${sceneView}`}
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}
