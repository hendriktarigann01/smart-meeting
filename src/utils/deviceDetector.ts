/**
 * Device Detection Helper
 * Mendeteksi apakah user mengakses dari mobile device DAN dalam portrait mode
 */

export const isMobileDevice = (): boolean => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // User agent check untuk deteksi mobile
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUserAgent =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent,
    );

  // Touch capability check
  const hasTouchScreen =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // CRITICAL: Hanya tampilkan overlay jika PORTRAIT mode
  // Portrait = height > width
  const isPortraitOrientation = screenHeight > screenWidth;

  // Untuk mobile device, cek ukuran yang lebih kecil (minimal dimension)
  // iPhone XR portrait: 414x896
  // iPhone XR landscape: 896x414
  // Some devices: 491x1062 (chrome mobile emulator atau device tertentu)
  const smallerDimension = Math.min(screenWidth, screenHeight);
  const isMobileSize = smallerDimension <= 600; // Max ukuran HP dalam portrait (termasuk zoom, devtools, dll)

  // Hanya return true jika:
  // 1. Device mobile (user agent atau touch)
  // 2. Ukuran mobile
  // 3. PORTRAIT orientation (ini yang paling penting!)
  return (
    isMobileUserAgent && isMobileSize && isPortraitOrientation && hasTouchScreen
  );
};

/**
 * Hook untuk detect orientation change
 */
export const useDeviceOrientation = (callback: () => void) => {
  if (typeof window !== "undefined") {
    window.addEventListener("orientationchange", callback);
    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("orientationchange", callback);
      window.removeEventListener("resize", callback);
    };
  }
};
