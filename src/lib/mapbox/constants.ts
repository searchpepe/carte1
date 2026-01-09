export const MAP_CONSTANTS = {
  FLY_TO: {
    ZOOM: 14,
    SPEED: 4,
    DURATION: 1000,
  },
  SEARCH: {
    DEBOUNCE_MS: 400,
    DEFAULT_LIMIT: 5,
    DEFAULT_COUNTRY: undefined, // Permet de chercher partout (Rabat, etc.)
    DEFAULT_PROXIMITY: [2.3488, 48.8534] as [number, number], // Priorise la France
  },
} as const;
