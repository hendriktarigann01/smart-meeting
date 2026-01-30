import { TableLayoutOption } from "@/types";

export const TableLayoutData: TableLayoutOption[] = [
  {
    id: "rectangular",
    shape: "rectangular",
    title: "Rectangular",
    description: "Classic and versatile design suitable for most spaces.",
    image: "/table/rectangular.png",
  },
  {
    id: "tapered",
    shape: "tapered",
    title: "Tapered",
    description: "Modern style with a narrower top or bottom for a sleek look.",
    image: "/table/tapered.png",
  },
  {
    id: "round",
    shape: "round",
    title: "Round",
    description: "Ideal for creating a cozy and social atmosphere.",
    image: "/table/round.png",
  },
  {
    id: "roomshaped",
    shape: "roomshaped",
    title: "U-Shaped",
    description:
      "Provides an open center for accessibility and interaction, ideal for collaborative or presentation settings.",
    image: "/table/u-shaped.png",
  },
];