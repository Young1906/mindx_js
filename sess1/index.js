// let ul = document.getElementById("fibonacy_seq")

// let N = 15;
// fib_seq = fibs(N)

// for (let i = 0; i < 1; i++){
//     console.log(i);
// }

// function fibs(n){
//     if (n == 2){
//         return [0, 1]
//     }

//     prev = fibs(n - 1);
//     last = prev[prev.length - 2] + prev[prev.length - 1]
    
//     // push is a method, return Null
//     prev.push(last)

//     return prev
// }



// // While loop
// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let condition = true
// let i
// while (condition){
//     i = Number(prompt("Input a number"))

//     if (i){
//         condition = false
//     }
// }

// console.log(i)

// let i

// do {
//     i = prompt("Input a number");
//     i = Number(i)
// } while(!i)

let N 

do {
    N = Number(prompt("Input a number:"))
} while (isNaN(N))


console.log(N*(N+1)/2)