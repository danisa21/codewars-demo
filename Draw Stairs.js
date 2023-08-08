// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:
// "I\n I\n  I"

function Stairs(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += ' '.repeat(i) + 'I\n';
    }
    return result;
}

const n = 7; // Ganti dengan nilai n yang diinginkan
console.log(Stairs(n));
