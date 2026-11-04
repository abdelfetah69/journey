//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let number2 = String(number);
 if (number2.endsWith("1") && !number2.endsWith("11")){
   return name +", you are the " + number + "st customer we serve today. Thank you!"
 }else if ( number2.endsWith("2") && !number2.endsWith("12")) {
   return name +", you are the " + number + "nd customer we serve today. Thank you!"
 }if (number2.endsWith("3") && !number2.endsWith("13")){
   return name +", you are the " + number + "rd customer we serve today. Thank you!"
 }else {
   return name +", you are the " + number + "th customer we serve today. Thank you!"
 }
};
