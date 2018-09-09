/*
Problem: Given an integer n, find the minimum number of steps to reach integer 1.
At each step, you can:
Subtract 1,
Divide by 2, if it is divisible by 2 
Divide by 3, if it is divisible by 2 
*/


// top-down
function minOne(n, cache) {

    // if the array value at n is not undefined, return the value at that index
    // This is the heart of dynamic programming 
    if (typeof (cache[n]) !== 'undefined') {
        return cache[n];
    }

    // if n has reached 1 return 0
    // terminating/base condition
    if (n === 1) {
        return 0;
    }

    // initialize a , b and c to some very large numbers
    let a = 1000, b = 1000, c = 1000;

    // one step from n -> n-1
    a = 1 + minOne(n - 1, cache);

    // one step from n -> n/2 if n is divisible by 2
    if (n % 2 === 0) {
        b = 1 + minOne(n / 2, cache);
    }

    // one step from n -> n/3 if n is divisible by 3
    if (n % 3 === 0) {
        c = 1 + minOne(n / 3, cache);
    }

    // Store the minimum number of steps to reach n 
    return cache[n] = Math.min(a, b, c);

}



let cache = [];
console.log(minOne(1000, cache));
