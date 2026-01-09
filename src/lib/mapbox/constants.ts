export const MAP_CONSTANTS = {
  // ...
  SEARCH: {
    DEBOUNCE_MS: 400,
    DEFAULT_LIMIT: 5,
    DEFAULT_COUNTRY: undefined, // On ne force plus la France ici
    DEFAULT_PROXIMITY: [2.3488, 48.8534] as [number, number], // Mais on garde un point central (Paris) pour "guider" la recherche
  },
} as const;
