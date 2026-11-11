// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let baara = 0
  for (let number = 0; number < birdsPerDay.length ; number++){
    baara = baara + birdsPerDay[number] 
  } 
  return baara
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let baara = 0
  for (i = (week - 1) * 7; i < (week * 7); i++){
    baara = baara + birdsPerDay[i] 
  }
  return baara
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (i = 0; i < birdsPerDay.length; i++) {
    if ( i % 2 === 0 ){
      birdsPerDay[i]++ 
    }else {
      birdsPerDay = birdsPerDay
    }
  }
  return birdsPerDay
}
