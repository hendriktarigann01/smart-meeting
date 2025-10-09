// Meeting Room Types
export type RoomSize =
  | "small-room"
  | "medium-room"
  | "large-room"
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
  shape: string;
  title: string;
  description: string;
  image?: string;
}

export interface ImplementationOption {
  id: string;
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

export interface CameraOption {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface QuickShareOption {
  id: string;
  title: string;
  title_compare: string;
  description: string;
  image?: string;
  resolution?: string;
  simultaneous_connections?: string;
  os_compatibility?: string;
  wireless_range?: string;
  image_segmentation?: string;
  connection_type?: string;
  split_screen?: string;
}

export interface SpeakerOption {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface SummaryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ConfigurationState {
  category: ProductCategory;
  roomSize: RoomSize;
  currentStep: number;
  totalSteps: number;
  selectedProduct?: LEDProductOption;
  selectedTableLayout?: TableLayoutOption;
  selectedImplementation?: ImplementationOption;
  selectedScreenLayout?: ScreenLayoutOption;
  selectedCamera?: CameraOption;
  selectedQuickShare?: QuickShareOption;
  selectedSpeaker?: SpeakerOption;
}
