import html2canvas from "html2canvas";

/**
 * Capture preview container as base64 image for PDF
 * @param elementRef - React ref to preview container
 * @returns Promise<string | undefined> - Base64 image data URL
 */
export async function capturePreview(
  elementRef: React.RefObject<HTMLDivElement>,
): Promise<string | undefined> {
  if (!elementRef.current) {
    console.warn("Preview element not found");
    return undefined;
  }

  try {
    const canvas = await html2canvas(elementRef.current, {
      backgroundColor: "#FFFFFF",
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error("Error capturing preview:", error);
    return undefined;
  }
}
