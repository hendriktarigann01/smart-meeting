import React from "react";
import { Document } from "@react-pdf/renderer";
import { FirstPage } from "@/components/export/pages/FirstPage";
import { SummaryPage } from "@/components/export/pages/SummaryPage";
import { LastPage } from "@/components/export/pages/LastPage";
import { PDF_METADATA } from "@/components/export/constants/PDFConfig";

export interface PDFData {
  // User info
  userName?: string;
  projectName?: string;
  exportDate?: string;

  // Product info
  productName?: string;
  displayType?: string;
  pixelPitch?: string;

  // Room info
  roomTitle?: string;
  roomCapacity?: string;
  roomDimensions?: string;
  roomPreviewImage?: string;

  // Configuration details
  tableShape?: string;
  implementation?: string;
  screenSize?: string;
  camera?: string;
  quickshare?: string;
  speaker?: string;
}

interface ConfigurationPDFProps {
  data: PDFData;
}

export const ConfigurationPDF: React.FC<ConfigurationPDFProps> = ({ data }) => (
  <Document
    author={PDF_METADATA.author}
    subject={PDF_METADATA.subject}
    keywords={PDF_METADATA.keywords}
    title={`${data?.projectName} - ${data?.productName}`}
  >
    {/* First Page - Cover */}
    <FirstPage data={data} />

    {/* Summary Page - Configuration Details */}
    <SummaryPage data={data} />

    {/* Last Page - Company Info */}
    <LastPage />
  </Document>
);
