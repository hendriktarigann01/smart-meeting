import { useConfigStore } from "@/stores/useConfigStore";
import { RoomSize } from "@/types";
import { roomData } from "@/models/data";
import { getContainerMode } from "@/constants/layout";

interface SpeakerOverlayProps {
  containerWidth: number;
  containerHeight: number;
}

export function SpeakerOverlay({ containerWidth }: SpeakerOverlayProps) {
  const {
    roomSize,
    selectedSpeaker,
    selectedTableLayout,
    currentStep,
    category,
  } = useConfigStore();

  if (!roomSize) {
    return null;
  }

  // Only show speaker overlay when at speaker step or later
  const speakerStep = category === "interactive-whiteboard" ? 7 : 6;
  if (currentStep < speakerStep) {
    return null;
  }

  const mode = getContainerMode(containerWidth);
  const modeKey = mode.toLowerCase() as "desktop" | "mobile";

  let speakerConfig;
  let speakerId;

  if (roomSize === "auditorium") {
    // For auditorium, always use ceiling-speaker
    speakerId = "ceiling-speaker";
    const speakerData = roomData.components.speakers.auditorium;
    speakerConfig = (speakerData as any)[speakerId];
  } else {
    if (!selectedSpeaker) return null;
    speakerId = selectedSpeaker.id;
    const speakerData = roomData.components.speakers[roomSize as RoomSize];
    if (!speakerData) return null;
    speakerConfig = speakerData[speakerId as keyof typeof speakerData];
  }

  if (!speakerConfig) return null;

  const { image, positions, desktop, mobile } = speakerConfig as any;

  // Get position and size
  let position;
  let width, height;

  // CASE 1: Has "positions" (table-aware, like large-room audio-conference-system)
  if (positions) {
    // Check if has default position
    if (positions.default) {
      const posData = positions.default[modeKey];
      position = posData;
    } else {
      // Use table shape specific position
      const tableShape = selectedTableLayout?.shape || "rectangular";
      const posData = positions[tableShape] || positions.rectangular;
      position = posData[modeKey];
    }

    // Width/height stored separately at root level
    const sizeData = mode === "DESKTOP" ? desktop : mobile;
    if (!sizeData) {
      console.warn(`No ${mode} size data for speaker with positions`);
      return null;
    }
    width = sizeData.width;
    height = sizeData.height;
  }
  // CASE 2: Simple structure (position + width/height in same object)
  else {
    const config = mode === "DESKTOP" ? desktop : mobile;
    if (!config) {
      console.warn(`No ${mode} config for speaker`);
      return null;
    }
    position = config.position;
    width = config.width;
    height = config.height;
  }

  if (!position || position.x === null || position.y === null) {
    console.warn(`No position for speaker in ${mode} mode`);
    return null;
  }

  if (width === null || height === null) {
    console.warn(`No size for speaker in ${mode} mode`);
    return null;
  }

  console.log("SpeakerOverlay:", {
    mode,
    speakerId,
    tableShape: selectedTableLayout?.shape,
    position,
    width,
    height,
  });

  const percentX = (position.x / 24) * 100;
  const percentY = (position.y / 12) * 100;

  // Determine z-index based on speaker type and room
  const zIndex =
    speakerId === "ceiling-speaker" && roomSize === "auditorium" ? 5 : 4.5;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${percentX}%`,
        top: `${percentY}%`,
        width: `${width}%`,
        height: `${height}%`,
        transform: "translate(-50%, -50%)",
        zIndex: zIndex,
      }}
    >
      <img
        src={image}
        alt={`Speaker ${speakerId}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
