import { create } from "zustand";
import {
  ProductCategory,
  RoomSize,
  LEDProductOption,
  TableLayoutOption,
  ScreenLayoutOption,
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
  selectedScreenLayout: ScreenLayoutOption | null;
  selectedTableLayout: TableLayoutOption | null;

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
  setSelectedScreenLayout: (layout: ScreenLayoutOption) => void;
  setSelectedTableLayout: (layout: TableLayoutOption) => void;
  resetConfig: () => void;
}

export const useConfigStore = create<ConfigState>((set) => ({
  category: null,
  roomSize: null,
  roomTitle: "",
  roomCapacity: "",
  roomDimensions: "",
  currentStep: 1,
  totalSteps: 5,
  selectedProduct: null,
  selectedScreenLayout: null,
  selectedTableLayout: null,

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

  setSelectedScreenLayout: (layout) => set({ selectedScreenLayout: layout }),

  setSelectedTableLayout: (layout) => set({ selectedTableLayout: layout }),

  resetConfig: () =>
    set({
      category: null,
      roomSize: null,
      roomTitle: "",
      roomCapacity: "",
      roomDimensions: "",
      currentStep: 1,
      selectedProduct: null,
      selectedScreenLayout: null,
      selectedTableLayout: null,
    }),
}));
