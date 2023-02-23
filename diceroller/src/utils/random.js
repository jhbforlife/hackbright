// util/random.js
// Utility functions for randomness.

// Generate a random integer between min and max, inclusive.
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
