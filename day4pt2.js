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