import { useEffect, useState } from "react";

interface MobileRotateOverlayProps {
  videoSrc?: string;
}

export function MobileRotateOverlay({
  videoSrc = "/rotate.mp4",
}: MobileRotateOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
