// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

function noZeros(num) {
    let numStr = num.toString();
    let tempNum = '';

    for (let i = numStr.length - 1; i >= 0; i--) {
        if (
            numStr[i] !== '0' ||
            (i > 0 && i < numStr.length - 1 && numStr[i - 1] !== '0' && numStr[i + 1] !== '0')
        ) {
            tempNum = numStr[i] + tempNum;
        }
    }

    return Number(tempNum);
}

console.log(noZeros(1450));    // 145
console.log(noZeros(960000));  // 96
console.log(noZeros(1050));    // 105
console.log(noZeros(-1050));   // -105
console.log(noZeros(101010));  // 101010
