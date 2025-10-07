// Meeting Room Types
export type RoomSize =
  | "small"
  | "medium"
  | "large"
  | "auditorium";

export type ProductCategory =
  | "interactive-whiteboard"
  | "video-wall"
  | "led-indoor";

export interface MeetingRoom {
  id: string;
  title: string;
  size: RoomSize;
  capacity: string;
  dimensions: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description?: string;
}

// Configuration Step Types
export type ConfigStep =
  | "product-selection"
  | "table-layout"
  | "seating"
  | "accessories"
  | "summary";

export interface LEDProductOption {
  id: string;
  type: "modul" | "cabinet";
  title: string;
  description: string;
  image?: string;
  detailTitle?: string;
  detailDescription?: string;
  detailBenefits?: string[];
  detailRecommendation?: string;
  detailImage?: string;
}

export interface TableLayoutOption {
  id: string;
  shape: "rectangular" | "tapered" | "round";
  title: string;
  description: string;
  image?: string;
}

export interface ScreenLayoutOption {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface ConfigurationState {
  category: ProductCategory;
  roomSize: RoomSize;
  currentStep: number;
  totalSteps: number;
  selectedProduct?: LEDProductOption;
  selectedTableLayout?: TableLayoutOption;
  // Add more as needed
}
