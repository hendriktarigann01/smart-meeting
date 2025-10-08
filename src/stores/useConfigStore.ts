import { create } from "zustand";
import {
  ProductCategory,
  RoomSize,
  LEDProductOption,
  TableLayoutOption,
  ScreenLayoutOption,
  CameraOption,
  QuickShareOption,
  SpeakerOption,
  ImplementationOption,
} from "@/types";

interface ConfigState {
  // Room & Category
  category: ProductCategory | null;
  roomSize: RoomSize | null;
  roomTitle: string;
  roomCapacity: string;
  roomDimensions: string;

  // Current Step
  currentStep: number;
  totalSteps: number;

  // Selections
  selectedProduct: LEDProductOption | null;
  selectedTableLayout: TableLayoutOption | null;
  selectedImplementation: ImplementationOption | null;
  selectedScreenLayout: ScreenLayoutOption | null;
  selectedCamera: CameraOption | null;
  selectedQuickShare: QuickShareOption | null;
  selectedSpeaker: SpeakerOption | null;

  // Actions
  setRoomConfig: (
    category: ProductCategory,
    roomSize: RoomSize,
    title: string,
    capacity: string,
    dimensions: string
  ) => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setSelectedProduct: (product: LEDProductOption) => void;
  setSelectedTableLayout: (layout: TableLayoutOption) => void;
  setSelectedImplementation: (implementation: ImplementationOption) => void;
  setSelectedScreenLayout: (layout: ScreenLayoutOption) => void;
  setSelectedCamera: (camera: CameraOption) => void;
  setSelectedQuickShare: (quickshare: QuickShareOption) => void;
  setSelectedSpeaker: (speaker: SpeakerOption) => void;
  resetConfig: () => void;
}

export const useConfigStore = create<ConfigState>((set) => ({
  category: null,
  roomSize: null,
  roomTitle: "",
  roomCapacity: "",
  roomDimensions: "",
  currentStep: 1,
  totalSteps: 8, // ← Update ke 8 (Product, Table, Implementation, Screen, Camera, QuickShare, Speaker, Summary)
  selectedProduct: null,
  selectedTableLayout: null,
  selectedImplementation: null,
  selectedScreenLayout: null,
  selectedCamera: null,
  selectedQuickShare: null,
  selectedSpeaker: null,

  setRoomConfig: (category, roomSize, title, capacity, dimensions) =>
    set({
      category,
      roomSize,
      roomTitle: title,
      roomCapacity: capacity,
      roomDimensions: dimensions,
      currentStep: 1,
    }),

  setCurrentStep: (step) => set({ currentStep: step }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.totalSteps),
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  setSelectedProduct: (product) => set({ selectedProduct: product }),

  setSelectedTableLayout: (layout) => set({ selectedTableLayout: layout }),

  setSelectedImplementation: (implementation) =>
    set({ selectedImplementation: implementation }),

  setSelectedScreenLayout: (layout) => set({ selectedScreenLayout: layout }),

  setSelectedCamera: (camera) => set({ selectedCamera: camera }),

  setSelectedQuickShare: (quickshare) =>
    set({ selectedQuickShare: quickshare }),

  setSelectedSpeaker: (speaker) => set({ selectedSpeaker: speaker }),

  resetConfig: () =>
    set({
      category: null,
      roomSize: null,
      roomTitle: "",
      roomCapacity: "",
      roomDimensions: "",
      currentStep: 1,
      selectedProduct: null,
      selectedTableLayout: null,
      selectedImplementation: null,
      selectedScreenLayout: null,
      selectedCamera: null,
      selectedQuickShare: null,
      selectedSpeaker: null,
    }),
}));
