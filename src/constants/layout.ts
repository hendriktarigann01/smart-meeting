/**
 * Base container sizes - Reference sizes untuk setting data overlay
 *
 * DESKTOP: 1376x688 (laptop/desktop development size)
 * MOBILE: 688x344 (mobile landscape, half of desktop)
 */
export const BASE_CONTAINER = {
  DESKTOP: {
    width: 1376,
    height: 688,
  },
  MOBILE: {
    width: 688,
    height: 344,
  },
} as const;

/**
 * Breakpoint untuk switch antara desktop & mobile data
 * Jika container width <= MOBILE_BREAKPOINT, gunakan mobile data
 */
export const MOBILE_BREAKPOINT = 900; // pixels

/**
 * Detect apakah menggunakan mobile atau desktop base
 * @param containerWidth - Current container width
 * @returns 'DESKTOP' | 'MOBILE'
 */
export function getContainerMode(containerWidth: number): "DESKTOP" | "MOBILE" {
  return containerWidth <= MOBILE_BREAKPOINT ? "MOBILE" : "DESKTOP";
}

/**
 * Get base container size based on current width
 * @param containerWidth - Current container width
 * @returns Base container size object
 */
export function getBaseContainer(containerWidth: number) {
  const mode = getContainerMode(containerWidth);
  return BASE_CONTAINER[mode];
}

/**
 * Calculate scale factor based on mode
 * @param currentWidth - Current container width
 * @param mode - 'DESKTOP' | 'MOBILE'
 * @returns Scale factor
 */
export function getScaleFactor(
  currentWidth: number,
  mode: "DESKTOP" | "MOBILE",
): number {
  const base = BASE_CONTAINER[mode];
  return currentWidth / base.width;
}
