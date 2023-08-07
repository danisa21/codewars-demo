function removeEverySecondElement(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}

const originalArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"];
const modifiedArray = removeEverySecondElement(originalArray);

console.log(modifiedArray); // Output: ["Keep", "Keep", "Keep", "Keep"]
