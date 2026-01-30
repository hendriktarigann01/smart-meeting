import { useConfigStore } from "@/stores/useConfigStore";
import { RoomSize } from "@/types";
import { roomData } from "@/models/data";
import { getContainerMode } from "@/constants/layout";

interface QuickShareOverlayProps {
  containerWidth: number;
  containerHeight: number;
}

export function QuickShareOverlay({ containerWidth }: QuickShareOverlayProps) {
  const { roomSize, selectedQuickShare } = useConfigStore();

  if (!roomSize || !selectedQuickShare) {
    return null;
  }

  const mode = getContainerMode(containerWidth);

  const quickshareData = roomData.components.quickshares[roomSize as RoomSize];
  if (!quickshareData) return null;

  const quickshareConfig =
    quickshareData[selectedQuickShare.id as keyof typeof quickshareData];
  if (!quickshareConfig) return null;

  // Pick config based on mode
  const config = (quickshareConfig as any)[mode.toLowerCase()];
  if (!config) {
    console.warn(`No ${mode} config for quickshare`);
    return null;
  }

  const { position, width, height } = config;

  if (!position || position.x === null || position.y === null) {
    return null;
  }

  if (width === null || height === null) {
    return null;
  }

  console.log("QuickShareOverlay:", { mode, width, height, position });

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
        zIndex: 4,
      }}
    >
      <img
        src={quickshareConfig.image}
        alt={`QuickShare ${selectedQuickShare.title}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
