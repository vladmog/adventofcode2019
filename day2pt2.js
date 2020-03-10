// --- Part Two ---
// "Good, the new computer seems to be working correctly! Keep it nearby during this mission - you'll 
// probably use it again. Real Intcode computers support many more features than your new one, but 
// we'll let you know what they are as you need them."

// "However, your current priority should be to complete your gravity assist around the Moon. For 
// this mission to succeed, we should settle on some terminology for the parts you've already built."

// Intcode programs are given as a list of integers; these values are used as the initial state 
// for the computer's memory. When you run an Intcode program, make sure to start by initializing 
// memory to the program's values. A position in memory is called an address (for example, the 
// first value in memory is at "address 0").

// Opcodes (like 1, 2, or 99) mark the beginning of an instruction. The values used immediately 
// after an opcode, if any, are called the instruction's parameters. For example, in the 
// instruction 1,2,3,4, 1 is the opcode; 2, 3, and 4 are the parameters. The instruction 99 contains 
// only an opcode and has no parameters.

// The address of the current instruction is called the instruction pointer; it starts at 0. 
// After an instruction finishes, the instruction pointer increases by the number of values in the 
// instruction; until you add more instructions to the computer, this is always 4 (1 opcode 
// + 3 parameters) for the add and multiply instructions. (The halt instruction would increase the 
// instruction pointer by 1, but it halts the program instead.)

// "With terminology out of the way, we're ready to proceed. To complete the gravity assist, you 
// need to determine what pair of inputs produces the output 19690720."

// The inputs should still be provided to the program by replacing the values at addresses 1 and 2, 
// just like before. In this program, the value placed in address 1 is called the noun, and the 
// value placed in address 2 is called the verb. Each of the two input values will be between 0 
// and 99, inclusive.

// Once the program has halted, its output is available at address 0, also just like before. 
// Each time you try a pair of inputs, make sure you first reset the computer's memory to the 
// values in the program (your puzzle input) - in other words, don't reuse memory from a previous 
// attempt.

// Find the input noun and verb that cause the program to produce the output 19690720. What is 
// 100 * noun + verb? (For example, if noun=12 and verb=2, the answer would be 1202.)

// Although it hasn't changed, you can still get your puzzle input.

let puzzleInput = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,5,19,23,1,6,23,27,1,27,10,31,1,31,5,35,2,10,35,39,1,9,39,43,1,43,5,47,1,47,6,51,2,51,6,55,1,13,55,59,2,6,59,63,1,63,5,67,2,10,67,71,1,9,71,75,1,75,13,79,1,10,79,83,2,83,13,87,1,87,6,91,1,5,91,95,2,95,9,99,1,5,99,103,1,103,6,107,2,107,13,111,1,111,10,115,2,10,115,119,1,9,119,123,1,123,9,127,1,13,127,131,2,10,131,135,1,135,5,139,1,2,139,143,1,143,5,0,99,2,0,14,0]



const compute = (input, noun, verb) =>
{
    input = [...input]
    // List of opcodes and their functions
    let instructions = 
    {
        1: function(num1, num2, destinationIndex)
        {
            input[destinationIndex] = num1 + num2 
        },
        2: function(num1, num2, destinationIndex)
        {
            input[destinationIndex] = num1 * num2
        }
    }

    // Initial setup
    input[1] = noun
    input[2] = verb


    // Iterate over input, 4 elements at a time
    for (let i = 0; i <= input.length; i += 4)
    {
        // Declare vars
        let opCode = input[i]
        let param1 = input[input[i+1]]
        let param2 = input[input[i+2]]
        let destinationIndex = input[i+3]

        // Opcode 99 = halt
        if (opCode === 99){break}
        
        // Execute opcode
        instructions[opCode](param1, param2, destinationIndex)
    }

    // Return element at position 0
    return input[0]
}

for (let noun = 0; noun < 99; noun ++)
{
    for (let verb = 0; verb < 99; verb ++)
    {

        if (compute(puzzleInput, noun, verb) === 19690720)
        {
            console.log(`Noun: ${noun}, Verb: ${verb}, Output: ${compute(puzzleInput, noun, verb)}`)
            console.log(100 * noun + verb)        
        }
    }
}





