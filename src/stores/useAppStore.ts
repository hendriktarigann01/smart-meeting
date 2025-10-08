import { create } from "zustand";

interface AppState {
  currentStep: number;
  totalSteps: number;

  // Actions
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetSteps: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentStep: 1,
  totalSteps: 7,

  setCurrentStep: (step) => set({ currentStep: step }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.totalSteps),
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  resetSteps: () => set({ currentStep: 1 }),
}));
