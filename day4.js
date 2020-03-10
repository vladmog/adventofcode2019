// --- Day 4: Secure Container ---
// You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

// However, they do remember a few key facts about the password:

// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
// Other than the range rule, the following are true:

// 111111 meets these criteria (double 11, never decreases).
// 223450 does not meet these criteria (decreasing pair of digits 50).
// 123789 does not meet these criteria (no double).
// How many different passwords within the range given in your puzzle input meet these criteria?

// Your puzzle input is 147981-691423.

// --- Day 4: Secure Container ---
// You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

// However, they do remember a few key facts about the password:

// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
// Other than the range rule, the following are true:

// 111111 meets these criteria (double 11, never decreases).
// 223450 does not meet these criteria (decreasing pair of digits 50).
// 123789 does not meet these criteria (no double).
// How many different passwords within the range given in your puzzle input meet these criteria?

// Your puzzle input is 147981-691423.


const calculateTotalValidsBetween = (num1, num2) => {
    let totalValid = 0
  
    // Iterate through potential solutions
    for (let i = num1; i <= num2; i++){
      let numString = i.toString()
      let hasSameAdjacent = false
  
      // Iterate through a potential solution's digits
      let prevNum
      for (let j = 0; j <= numString.length; j++){

        // Init 1st digit as prevNum
        if(j === 0){
          prevNum = numString[j]
          continue
        }

        // If digits decrease from left to right, cease check
        if (Number(numString[j]) < Number(prevNum)){
          break
        }
  
        // If current and previous nums match, check adjacent
        if (numString[j] === prevNum) {
          hasSameAdjacent = true
        }
  
        // If number fully scanned and has adjacent, increment valids
        if (j === numString.length - 1 && hasSameAdjacent){
          totalValid ++
        }
  
        // Current num becomes prev num for next iteration
        prevNum = numString[j]
      }
    }
    return totalValid
  }
  
  let totalValid = calculateTotalValidsBetween(147981, 694123)
  console.log(totalValid)  
  //   ANSWER: 1790


// --- Part Two ---
// An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.

// Given this additional criterion, but still ignoring the range rule, the following are now true:

// 112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
// 123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
// 111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).
// How many different passwords within the range given in your puzzle input meet all of the criteria?

// Your puzzle input is still 147981-691423.

const calculateTotalValidsBetween = (num1, num2) => {
  let totalValid = 0

  // Iterate through potential solutions
  for (let i = num1; i <= num2; i++){
    let numString = i.toString()
    let hasSameAdjacent = false

    // Iterate through a potential solution's digits
    let prevNum
    let twoNumsAgo

    for (let j = 0; j <= numString.length; j++){
      let currentNum = numString[j]
      let nextNum
      if(j !== numString.length -1){
        nextNum = numString[j + 1]
      }

      // Init 1st digit as prevNum
      if(j === 0){
        prevNum = currentNum
        continue
      }
      // If digits decrease from left to right, cease check
      if (Number(currentNum) < Number(prevNum)){
        break
      }

      // Confirm adjacency if isolated pair found
      if (currentNum === prevNum && currentNum !== nextNum && currentNum !== twoNumsAgo) {
        hasSameAdjacent = true
      }

      // If number fully scanned and has adjacent, increment valids
      if (j === numString.length - 1 && hasSameAdjacent){
        totalValid ++
      }

      // Increment pointers
      twoNumsAgo = prevNum
      prevNum = currentNum
    }

  }
  return totalValid
}

let totalValid = calculateTotalValidsBetween(147981, 691423)  

console.log(totalValid)