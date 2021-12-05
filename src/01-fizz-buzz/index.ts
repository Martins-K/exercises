/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n: number) {
    for (let a = 1; a < n; a++) {
        if (a % 3 == 0 && a != 0) {
            console.log("fizz");
        } else if (a % 5 == 0 && a != 0) {
            console.log("buzz");
        } else if (a % 3*5 == 0 && a != 0) {
            console.log("fizzbuzz");
        } else {
            console.log(a);
        }
    }
}

export { fizzBuzz };
