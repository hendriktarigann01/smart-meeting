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
  getTotalSteps: () => number;
}

export const useConfigStore = create<ConfigState>((set, get) => ({
  category: null,
  roomSize: null,
  roomTitle: "",
  roomCapacity: "",
  roomDimensions: "",
  currentStep: 1,
  totalSteps: 8,
  selectedProduct: null,
  selectedTableLayout: null,
  selectedImplementation: null,
  selectedScreenLayout: null,
  selectedCamera: null,
  selectedQuickShare: null,
  selectedSpeaker: null,

  getTotalSteps: () => {
    const state = get();
    const { category } = state;

    if (category === "interactive-whiteboard") {
      return 8; // Product, Table, Implementation, Screen, Camera, QuickShare, Speaker, Summary
    } else if (category === "video-wall") {
      return 7; // Product, Table, Screen, Camera, QuickShare, Speaker, Summary
    } else if (category === "led-indoor") {
      return 7; // Product, Table, Screen, Camera, QuickShare, Speaker, Summary
    }

    return 8;
  },

  setRoomConfig: (category, roomSize, title, capacity, dimensions) => {
    const state = get();
    const totalSteps = (() => {
      if (category === "interactive-whiteboard") {
        return 8;
      } else if (category === "video-wall" || category === "led-indoor") {
        return 7;
      }
      return 8;
    })();

    // Only reset if category or roomSize actually changed
    if (state.category !== category || state.roomSize !== roomSize) {
      set({
        category,
        roomSize,
        roomTitle: title,
        roomCapacity: capacity,
        roomDimensions: dimensions,
        currentStep: 1,
        totalSteps,
      });
    } else {
      // Just update room info, keep current step
      set({
        category,
        roomSize,
        roomTitle: title,
        roomCapacity: capacity,
        roomDimensions: dimensions,
        totalSteps,
      });
    }
  },

  setCurrentStep: (step) => {
    console.log("setCurrentStep called with:", step);
    set({ currentStep: step });
  },

  nextStep: () => {
    const state = get();
    const newStep = Math.min(state.currentStep + 1, state.totalSteps);
    console.log(
      "nextStep called, moving from",
      state.currentStep,
      "to",
      newStep
    );
    set({ currentStep: newStep });
  },

  prevStep: () => {
    const state = get();
    const newStep = Math.max(state.currentStep - 1, 1);
    console.log(
      "prevStep called, moving from",
      state.currentStep,
      "to",
      newStep
    );
    set({ currentStep: newStep });
  },

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
