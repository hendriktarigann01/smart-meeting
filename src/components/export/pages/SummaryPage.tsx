import React from "react";
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { BasePage } from "@/components/export/pages/BasePage";
import { LOGO_PATHS } from "@/components/export/constants/PDFConfig";

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 24,
    right: 32,
    zIndex: 10,
  },
  logo: {
    width: "auto",
    height: 25,
  },
  content: {
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 300,
    color: "#374151",
    textAlign: "center",
    marginBottom: 30,
  },
  roomPreview: {
    width: 240, // Fixed width untuk 2:1 aspect ratio
    height: 120, // Height = width / 2
    objectFit: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row", 
    marginBottom: 15,
    gap: 40,
  },
  column: {
    flex: 1,
  },
  dimensionRow: {
    flexDirection: "row",
    marginBottom: 8,
    gap: 10,
  },
  label: {
    fontSize: 10,
    color: "#374151",
    marginBottom: 8,
  },
  value: {
    fontSize: 11,
    color: "#374151",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 8,
    color: "#666",
  },
  footerLeft: {
    flex: 1,
  },
  footerText: {
    marginBottom: 3,
  },
  footerContact: {
    flexDirection: "row",
    gap: 8,
  },
});

interface SummaryPageProps {
  data: {
    productName?: string;
    displayType?: string;
    roomDimensions?: string;
    roomCapacity?: string;
    roomPreviewImage?: string;
    tableShape?: string;
    implementation?: string;
    screenSize?: string;
    camera?: string;
    quickshare?: string;
    speaker?: string;
  };
}

export const SummaryPage: React.FC<SummaryPageProps> = ({ data }) => {
  // Extract room dimensions
  const [width, height] = (data?.roomDimensions || "3m x 3m").split(" x ");

  return (
    <BasePage>
      {/* Header Logo */}
      <View style={styles.header}>
        <Image style={styles.logo} src={LOGO_PATHS.icon} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>
          {data?.displayType} {data?.productName}
        </Text>

        {/* Room Preview Image */}
        {data?.roomPreviewImage && (
          <Image
            src={data.roomPreviewImage}
            style={[styles.roomPreview, { alignSelf: "center" }]}
          />
        )}

        {/* Room Dimensions & Table Dimensions */}
        <View style={styles.row}>
          <View style={[styles.section, styles.column]}>
            <Text style={styles.sectionTitle}>Room Dimensions</Text>
            <View style={styles.dimensionRow}>
              <Text style={styles.label}>Width:</Text>
              <Text style={styles.value}>{width || "3m"}</Text>
            </View>
            <View style={styles.dimensionRow}>
              <Text style={styles.label}>lenght:</Text>
              <Text style={styles.value}>{height || "3m"}</Text>
            </View>
          </View>

          {data?.tableShape && (
            <View style={[styles.section, styles.column]}>
              <Text style={styles.sectionTitle}>Table Dimensions</Text>
              <View style={styles.dimensionRow}>
                <Text style={styles.label}>Shape</Text>
                <Text style={styles.value}>{data.tableShape}</Text>
              </View>
              <View style={styles.dimensionRow}>
                <Text style={styles.label}>Seats</Text>
                <Text style={styles.value}>
                  {data.roomCapacity || "2-5 People"}
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* Mounting Option & Screen Size */}
        <View style={styles.row}>
          <View style={[styles.section, styles.column]}>
            <Text style={styles.sectionTitle}>Mounting Option</Text>
            <Text style={styles.value}>
              {data?.implementation || "Wall Mount"}
            </Text>
          </View>
          <View style={[styles.section, styles.column]}>
            <Text style={styles.sectionTitle}>Screen Size</Text>
            <Text style={styles.value}>{data?.screenSize || '65"'}</Text>
          </View>
        </View>

        {/* Camera & QuickShare */}
        <View style={styles.row}>
          <View style={[styles.section, styles.column]}>
            <Text style={styles.sectionTitle}>Camera Configuration</Text>
            <Text style={styles.value}>{data?.camera || "H3-P3M"}</Text>
          </View>
          <View style={[styles.section, styles.column]}>
            <Text style={styles.sectionTitle}>Quick Share Configuration</Text>
            <Text style={styles.value}>
              {data?.quickshare || "Quickshare L2"}
            </Text>
          </View>
        </View>

        {/* Speaker */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Speaker Configuration</Text>
          <Text style={styles.value}>
            {data?.speaker || "Audio Conference System"}
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={styles.footerText}>MJ Solution Indonesia</Text>
          <Text style={styles.footerText}>
            The Mansion Bougenville Kemayoran Tower Fontana Zona I Lantai 50
            Kemayoran Jakarta Utara
          </Text>
          <View style={styles.footerContact}>
            <Text>mjsolution.co.id</Text>
            <Text>(+62) 811-1122-492</Text>
          </View>
        </View>
      </View>
    </BasePage>
  );
};
