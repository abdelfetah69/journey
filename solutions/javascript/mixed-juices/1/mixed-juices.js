// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if (name === "Pure Strawberry Joy") {
    return 0.5
  }else if (name === "Energizer" || name === "Green Garden") {
    return 1.5
  }else if (name === "Tropical Island") {
    return 3
  }else if (name === "All or Nothing"){
    return 5
  }else {
    return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let d = 0
  let l = 0
  for ( l = 0; d < wedgesNeeded && l < limes.length; l++ ) {
    if (limes[l] === "small") {
      d = d + 6
    }else if (limes[l] === "medium") {
      d = d + 8
    }else if (limes[l] === "large"){
      d = d + 10
    }
  }
  return l 
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0
  for ( i = 0; timeLeft > 0 && i < orders.length; i++) {
      if (orders[i] === "Pure Strawberry Joy") {
          timeLeft = timeLeft - 0.5
  }else if ((orders[i] === "Energizer" || orders[i] === "Green Garden")) {
          timeLeft = timeLeft - 1.5
  }else if (orders[i] === "Tropical Island") {
          timeLeft = timeLeft - 3
  }else if (orders[i] === "All or Nothing"){
          timeLeft = timeLeft - 5 
      }else if (orders[i] === "Limetime" || orders[i] === "Vitality" || orders[i] === "Ruby Glow" || orders[i] === "Bananas Gone Wild") {
          timeLeft = timeLeft - 2.5 
      }else {
        break;
  }
    
}
  return orders.slice(i)
}