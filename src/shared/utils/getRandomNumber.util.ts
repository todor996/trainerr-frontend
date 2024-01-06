export function getRandomNumber({ min, max }: { min: number; max: number }): number {
  // Ensure that min and max are numbers
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both arguments must be numbers');
  }

  // Ensure that min is less than max
  if (min >= max) {
    throw new Error('Min must be less than max');
  }

  // Calculate the random number within the specified range
  const randomNumber = Math.random() * (max - min) + min;

  // Return the result
  return randomNumber;
}
