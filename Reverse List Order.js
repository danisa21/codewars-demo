// In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)

// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
    var length = list.length;
    var mid = Math.floor(length / 2);

    for (var i = 0; i < mid; i++) {
        var temp = list[i];
        list[i] = list[length - 1 - i];
        list[length - 1 - i] = temp;
    }

    return list;
}

let list1 = [1, 2, 3, 4]
console.log(reverseList(list1))
// [4, 3, 2, 1]

let list2 = [9, 2, 0, 7]
console.log(reverseList(list2))
//[7, 0, 2, 9]