import * as React from "react";
import { cn } from "@/lib/utils";
import { ProductCategory, RoomSize } from "@/types/index";

interface HintMessageProps {
  category: ProductCategory;
  roomSize: RoomSize;
  screenId: string;
  className?: string;
  icon?: React.ReactNode;
}

// Helper function to get hint message
function getHintMessage(
  category: ProductCategory,
  roomSize: RoomSize,
  screenId: string
): string | null {
  // Debug log
  console.log("HintMessage - category:", category);
  console.log("HintMessage - roomSize:", roomSize);
  console.log("HintMessage - screenId:", screenId);

  // Video Wall rules
  if (category === "video-wall") {
    if (
      screenId === '55"' &&
      (roomSize === "small-room" || roomSize === "medium-room")
    ) {
      return "Video Wall screen is too large for this room. Use a Large Room or Auditorium for better.";
    }
    if (screenId === '46"' && roomSize === "small-room") {
      return "Video Wall screen is too large for this room. Use a Medium Room or larger for better.";
    }
  }

  // Interactive Whiteboard rules
  if (category === "interactive-whiteboard") {
    if (roomSize === "small-room") {
      if (screenId === '86"' || screenId === '98"') {
        return "Display size too large for this room. Recommended up to 75” for best viewing distance.";
      }
    }
    if (roomSize === "medium-room") {
      if (screenId === '98"') {
        return "98” board may dominate this space. 86” is more suitable for balanced layout.";
      }
    }
    if (roomSize === "auditorium") {
      if (screenId === '65"') {
        return "The screen size is too small for the auditorium, so the display is not optimal for participants at the back.";
      }
    }
  }

  // LED Indoor rules
  if (category === "led-indoor") {
    if (
      (screenId === "p1.25" ||
        screenId === "p1.53" ||
        screenId === "p1.86" ||
        screenId === "p2.5" ||
        screenId === "p3.0" ||
        screenId === "p4.0") &&
      roomSize === "small-room"
    ) {
      return "LED screen is too large for this room. Use a Medium Room, Large Room or Auditorium for better.";
    }
  }

  return null;
}

const HintMessage = React.forwardRef<HTMLDivElement, HintMessageProps>(
  ({ category, roomSize, screenId, className, icon }, ref) => {
    const message = getHintMessage(category, roomSize, screenId);

    // Don't render if no message
    if (!message) {
      return null;
    }
    
    return (
      <div ref={ref} className={cn("flex mt-2 gap-3", className)}>
        <div className="flex items-center justify-center text-[#FFB73C]">
          {icon || (
            <img
              src="/icon/icon-warning.png"
              alt="Warning Icon"
              className="w-6"
            />
          )}
        </div>

        <p className="text-xs text-gray-600">{message}</p>
      </div>
    );
  }
);

HintMessage.displayName = "HintMessage";

export { HintMessage };
export type { HintMessageProps };
