/**
 * Grid Helper Utilities
 * Untuk membantu konversi dan kalkulasi positioning grid
 */

export const GRID_CONFIG = {
  COLS: 24,
  ROWS: 12,
} as const;

/**
 * Convert grid unit to pixel position
 * @param gridUnit - Grid coordinate (0-24 untuk x, 0-12 untuk y)
 * @param maxPixels - Container size (width atau height)
 * @param maxGridUnits - Maximum grid units (24 atau 12)
 * @returns Pixel position
 */
export function gridToPixel(
  gridUnit: number,
  maxPixels: number,
  maxGridUnits: number
): number {
  return (gridUnit / maxGridUnits) * maxPixels;
}

/**
 * Convert pixel to grid unit (untuk debugging/testing)
 * @param pixel - Pixel position
 * @param maxPixels - Container size
 * @param maxGridUnits - Maximum grid units
 * @returns Grid unit
 */
export function pixelToGrid(
  pixel: number,
  maxPixels: number,
  maxGridUnits: number
): number {
  return (pixel / maxPixels) * maxGridUnits;
}

/**
 * Get center position in grid units
 */
export const CENTER = {
  x: GRID_CONFIG.COLS / 2, // 12
  y: GRID_CONFIG.ROWS / 2, // 6
} as const;

/**
 * Common positions presets
 */
export const POSITION_PRESETS = {
  CENTER: { x: 12, y: 6 },
  CENTER_TOP: { x: 12, y: 4 },
  CENTER_BOTTOM: { x: 12, y: 8 },
  TOP_LEFT: { x: 6, y: 3 },
  TOP_RIGHT: { x: 18, y: 3 },
  BOTTOM_LEFT: { x: 6, y: 9 },
  BOTTOM_RIGHT: { x: 18, y: 9 },
} as const;

/**
 * Validate grid coordinates
 * @param x - X coordinate
 * @param y - Y coordinate
 * @returns true if valid
 */
export function isValidGridCoordinate(x: number, y: number): boolean {
  return x >= 0 && x <= GRID_CONFIG.COLS && y >= 0 && y <= GRID_CONFIG.ROWS;
}

/**
 * Calculate optimal screen position based on room size
 * Helper function untuk determine default positioning
 */
export function getOptimalScreenPosition(roomSize: string): {
  x: number;
  y: number;
} {
  switch (roomSize) {
    case "small-room":
      return { x: 12, y: 5 }; // Slightly above center
    case "medium-room":
      return { x: 12, y: 6 }; // Perfect center
    case "large-room":
      return { x: 12, y: 6 }; // Perfect center
    case "auditorium":
      return { x: 12, y: 6 }; // Perfect center
    default:
      return CENTER;
  }
}
