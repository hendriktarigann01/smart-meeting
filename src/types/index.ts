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

// Product
export interface LEDProductOption {
  id: string;
  type: "modul" | "cabinet" | "kmi7000" | "kmi7000pro" | "kmi8000" | string;
  header: string;
  subHeader?: string;
  image?: string;
  description: string;
  detailTitle?: string;
  detailSubTitle?: string;
  detailDescription?: string;
  detailBenefits?: string[];
  detailRecommendation?: string;
  detailImage?: string;
  specifications?: {
    android?: string;
    processor?: string;
    windows?: string;
    camera?: string;
    ram?: string;
    microphone?: string;
    storage?: string;
    aiNoiseReduction?: string;
  };
  linkMoreInfo?: string;
  brochureLink?: string;
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

export interface LEDSpecifications {
  refreshRate: string;
  brightness: string;
  moduleSize: string;
  modulePixels: string;
  moduleResolution: string;
  moduleWeight: string;
  cabinetSize: string;
  maxPower: string;
  cabinetResolution: string;
  cabinetWeight: string;
}

export interface ScreenLayoutOption {
  id: string;
  title: string;
  description: string;
  image?: string;
  detailSubtitle?: string;
  detailDescription?: string;
  specifications?: LEDSpecifications;
  brochureUrl?: string;
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
