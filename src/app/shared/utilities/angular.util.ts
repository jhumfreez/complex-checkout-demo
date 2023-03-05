// Utilities for covering Angular's rough areas or otherwise unnecessary boiler-plate

// Extract the value from an event, because idk how to pass just the value through an event emitter.
export const getValue = (event: Event): string =>
  (event.target as HTMLInputElement).value;
