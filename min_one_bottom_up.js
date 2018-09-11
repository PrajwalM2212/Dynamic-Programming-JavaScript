/*
Problem: Given an integer n, find the minimum number of steps to reach integer 1.
At each step, you can:
Subtract 1,
Divide by 2, if it is divisible by 2 
Divide by 3, if it is divisible by 2 
*/


// bottom-up
function minOneBottomUp(n) {

    const cache = [];
    // base condition
    cache[1] = 0;

    for (i = 2; i <= n; i++) {

        // initialize a , b and c to some very large numbers
        let a = 1000, b = 1000, c = 1000;

        // one step from i -> i-1
        a = 1 + cache[i - 1];

        // one step from i -> i/2 if i is divisible by 2
        if (i % 2 === 0) {
            b = 1 + cache[i / 2];
        }

        // one step from i -> i/3 if i is divisible by 3
        if (i % 3 === 0) {
            c = 1 + cache[i / 3];
        }

        // Store the minimum number of steps to reach i
        cache[i] = Math.min(a, b, c);
    }

    // return the number minimum number of steps to reach n
    return cache[n];
}

console.log(minOneBottomUp(1000));