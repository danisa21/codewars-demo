// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

function areaAndPerimeter(input1, input2) {
    if (input1 === input2) {
        return input1 * input2;
    } else {
        return (input1 + input2) * 2;
    }
}

let input1 = 6;
let input2 = 10;
console.log(areaAndPerimeter(input1, input2))
//32

let num1 = 3;
let num2 = 3;
console.log(areaAndPerimeter(num1, num2))
//9