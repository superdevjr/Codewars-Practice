// function likes(names) {
//     if (names.length === 0) {
//         return "no one likes this";
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }
//     else

//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// }


// names = ['Alex', 'Jacob', 'Mark', 'Max']
// console.log(likes(names))


// exercise 2-----------------------------------

// function sum(numbers) {
//     "use strict";
//     let total = 0;
//     if 
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// };

// // best practice way ----

// function sum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }

// exercise 3------------------------------------------


// function countBy(x, n) {
//     let z = [];
//     for (let i = x; i <= x * n; i += x) {
//         z.push(i)
//     }
//     return z
// }

// console.log(countBy(2, 5))

// countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// countBy(2, 5) === [2, 4, 6, 8, 10]


// exercise 4----------------------------