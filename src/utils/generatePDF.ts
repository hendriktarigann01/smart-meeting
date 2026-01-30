import { pdf } from "@react-pdf/renderer";
import {
  ConfigurationPDF,
  PDFData,
} from "@/components/export/ConfigurationPDF";
import { useConfigStore } from "@/stores/useConfigStore";
import { ExportFormData } from "@/components/modal/ExportModal";
import React from "react";

interface GeneratePDFOptions {
  formData: ExportFormData;
  previewRef?: React.RefObject<HTMLDivElement>;
}

async function capturePreviewImageManual(
  previewRef: React.RefObject<HTMLDivElement>,
): Promise<string | undefined> {
  if (!previewRef.current) {
    console.warn("Preview ref not available");
    return undefined;
  }

  try {
    const element = previewRef.current;

    // Get all images in the preview
    const images = Array.from(element.querySelectorAll("img"));

    if (images.length === 0) {
      console.warn("No images found in preview");
      return undefined;
    }

    console.log(`Found ${images.length} images in preview`);

    // Create canvas with 2:1 aspect ratio
    const canvas = document.createElement("canvas");
    const targetWidth = 960; // High resolution
    const targetHeight = 480   ; // 2:1 ratio

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Cannot get canvas context");
    }

    // Fill background
    ctx.fillStyle = "#f3f4f6";
    ctx.fillRect(0, 0, targetWidth, targetHeight);

    // Load and draw all images
    const containerRect = element.getBoundingClientRect();

    for (const img of images) {
      if (!img.complete || !img.naturalWidth) {
        console.warn("Image not loaded:", img.src);
        continue;
      }

      const imgRect = img.getBoundingClientRect();

      // Calculate position relative to container
      const relativeX =
        (imgRect.left - containerRect.left) / containerRect.width;
      const relativeY =
        (imgRect.top - containerRect.top) / containerRect.height;
      const relativeWidth = imgRect.width / containerRect.width;
      const relativeHeight = imgRect.height / containerRect.height;

      // Draw on canvas
      const canvasX = relativeX * targetWidth;
      const canvasY = relativeY * targetHeight;
      const canvasWidth = relativeWidth * targetWidth;
      const canvasHeight = relativeHeight * targetHeight;

      try {
        ctx.drawImage(img, canvasX, canvasY, canvasWidth, canvasHeight);
        console.log(
          `Drew image at (${canvasX.toFixed(0)}, ${canvasY.toFixed(0)}) size ${canvasWidth.toFixed(0)}x${canvasHeight.toFixed(0)}`,
        );
      } catch (e) {
        console.warn("Failed to draw image:", img.src, e);
      }
    }

    const base64 = canvas.toDataURL("image/png", 1.0);
    console.log(`Manual capture complete: ${targetWidth}x${targetHeight}`);

    return base64;
  } catch (error) {
    console.error("Error in manual capture:", error);
    return undefined;
  }
}

export async function generateConfigurationPDF({
  formData,
  previewRef,
}: GeneratePDFOptions): Promise<void> {
  const {
    category,
    roomSize,
    roomTitle,
    roomCapacity,
    roomDimensions,
    selectedProduct,
    selectedTableLayout,
    selectedImplementation,
    selectedScreenLayout,
    selectedCamera,
    selectedQuickShare,
    selectedSpeaker,
  } = useConfigStore.getState();

  let capturedPreviewImage: string | undefined;
  if (previewRef) {
    capturedPreviewImage = await capturePreviewImageManual(previewRef);
  }

  const getRoomImagePath = () => {
    if (!roomSize) return undefined;
    if (roomSize === "auditorium") {
      return `/room/auditorium/auditorium.png`;
    }
    const tableShape = selectedTableLayout?.shape || "rectangular";
    return `/room/${roomSize}/room-${tableShape}.png`;
  };

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const pdfData: PDFData = {
    userName: formData.name,
    projectName: formData.projectName,
    exportDate: formatDate(new Date()),
    productName: selectedProduct?.type || selectedProduct?.header,
    displayType:
      category === "interactive-whiteboard"
        ? "Interactive Whiteboard"
        : category === "video-wall"
          ? "Video Wall"
          : "LED Indoor Display",
    pixelPitch:
      category === "led-indoor" ? selectedScreenLayout?.title : undefined,
    roomTitle,
    roomCapacity,
    roomDimensions,
    roomPreviewImage: capturedPreviewImage || getRoomImagePath(),
    tableShape: selectedTableLayout?.title,
    implementation: selectedImplementation?.title,
    screenSize: selectedScreenLayout?.title,
    camera: selectedCamera?.title,
    quickshare: selectedQuickShare?.title,
    speaker: selectedSpeaker?.title,
  };

  try {
    console.log("Generating PDF...");
    const pdfDocument = React.createElement(ConfigurationPDF, {
      data: pdfData,
    });
    const blob = await pdf(pdfDocument).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${formData.projectName || "Configuration"}_${formatDate(new Date())}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log("PDF generated successfully");
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF. Please try again.");
  }
}
