// --- Day 1: The Tyranny of the Rocket Equation ---
// Santa has become stranded at the edge of the Solar System while delivering presents to other planets! 
// To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, 
// he needs you to bring him measurements from fifty stars.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; 
// the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// The Elves quickly load you into a spacecraft and prepare to launch.

// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. 
// They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass. 
// Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your spacecraft?

let puzzleInput = [75592,56081,141375,103651,132375,90584,94148,85029,95082,148499,108192,97739,60599,140308,125171,129160,143118,98762,103907,115389,127835,57917,72980,88747,86595,130407,116862,84652,112817,136922,51900,76677,146244,121897,99310,136486,84665,117344,88992,83929,74820,56651,74001,88636,51232,57878,114559,58879,145519,83727,111774,146256,123479,86955,64027,59812,59211,85835,58084,113676,119161,106368,137358,85290,81131,124857,51759,82977,138957,146216,147807,72265,60332,136741,110215,89293,148703,73152,93080,140220,68511,77397,51934,100243,92442,135254,98873,51105,118755,79155,89249,137430,142807,86334,117266,149484,89284,63361,52269,111666]


const calcFuel = (mass) => 
{
    return Math.floor(mass/3) - 2
}

let totalFuelRequired = puzzleInput.reduce((acc, mass) => 
{
    return acc + calcFuel(mass)
}, 0)

console.log(totalFuelRequired)  // Answer: 3313655