import { useConfigStore } from "@/stores/useConfigStore";
import { RoomSize } from "@/types";
import { roomData } from "@/models/data";
import { getContainerMode } from "@/constants/layout";

interface CameraOverlayProps {
  containerWidth: number;
  containerHeight: number;
}

export function CameraOverlay({ containerWidth }: CameraOverlayProps) {
  const {
    category,
    roomSize,
    selectedCamera,
    selectedScreenLayout,
    selectedImplementation,
  } = useConfigStore();

  if (!roomSize || !selectedCamera) {
    return null;
  }

  // Determine mode: DESKTOP or MOBILE
  const mode = getContainerMode(containerWidth);

  const cameraData = roomData.components.cameras[roomSize as RoomSize];
  if (!cameraData) return null;

  const cameraConfig = cameraData[selectedCamera.id as keyof typeof cameraData];
  if (!cameraConfig) return null;

  const { image, mounts, screens } = cameraConfig as any;

  const screenSize = selectedScreenLayout?.id;
  if (!screenSize) return null;

  let config;

  if (category === "interactive-whiteboard" && mounts) {
    const mountType = selectedImplementation?.id || "wall-mount";
    const mountConfig = mounts[mountType];

    if (mountConfig && mountConfig[screenSize]) {
      // Pick config based on mode (desktop or mobile)
      const sizeData = mountConfig[screenSize];
      config = (sizeData as any)[mode.toLowerCase()];

      if (!config) {
        console.warn(
          `No ${mode} config for camera mount: ${mountType}, screen: ${screenSize}`,
        );
        return null;
      }
    } else {
      console.warn(
        `No camera config for mount: ${mountType}, screen: ${screenSize}`,
      );
      return null;
    }
  } else if (screens) {
    const sizeData = screens[screenSize];

    if (!sizeData) {
      console.warn(`No camera config for screen size: ${screenSize}`);
      return null;
    }

    // Pick config based on mode
    config = (sizeData as any)[mode.toLowerCase()];

    if (!config) {
      console.warn(`No ${mode} config for camera screen: ${screenSize}`);
      return null;
    }
  } else {
    console.warn("Invalid camera config structure");
    return null;
  }

  const { position, width, height } = config;

  if (!position || position.x === null || position.y === null) {
    return null;
  }

  if (width === null || height === null) {
    return null;
  }

  console.log("CameraOverlay:", { mode, width, height, position });

  const percentX = (position.x / 24) * 100;
  const percentY = (position.y / 12) * 100;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${percentX}%`,
        top: `${percentY}%`,
        width: `${width}%`,
        height: `${height}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 3,
      }}
    >
      <img
        src={image}
        alt={`Camera ${selectedCamera.title}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
