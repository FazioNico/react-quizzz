/**
 * Function to generate number between 0 and MAX
 * and return value
 * @param {*} max Number
 * @returns Number between 0 and MAX
 */
export const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
}