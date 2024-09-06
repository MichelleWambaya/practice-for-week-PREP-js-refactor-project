function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    return num/3;
};
console.log(divideByThree(6));

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    return (num1+num2)/2;
};
console.log(averageOfTwo(4,16))

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    return (num1+num2+num3+num4)/2;
};
console.log(averageOfFour(2,4,6,10))

function doubler(nums) {

    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
   return nums.map(num => num *2);

   //using map method

}
console.log(doubler([2,3,4]));



function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    let originalArray = [];
//using push method
    for (let i=0; i<nums.length; i++){
     originalArray.push(nums[i]*2);
    }
    return originalArray;
}

console.log(doubler([2,4]))

function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
   let twoArrays = arr1.concat(arr2);

   return twoArrays;

};
console.log(combineArrays(([2,4,2]),([6,7,2])))


function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */

   if (arr.indexOf(word)> 0){
    return true;
   }
   return false;


};
console.log(wordWithinArray(("purple"),("she has a purlple dress")))


function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */

    return str.toUpperCase() + " ... " + str +  " ... " + str.toLowerCase()
};
console.log(echo("Mom!"))


function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */

        // Initialize an empty array to hold the results
        const result = [];

        // Loop through numbers from 0 to max (not inclusive)
        for (let i = 0; i < max; i++) {
            // Check if the number is divisible by 3 or 5, but not both
            if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
                // Add the number to the result array
                result.push(i);
            }
        }

        // Return the result array
        return result;
    }

    // Example usage:
    console.log(fizzBuzz(20)); // Output: [3, 5, 6, 9, 10, 12, 18]


function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    return "Hello, " + name
};
console.log(hello("Michelle"))

function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    return "Bye, " + name
};
console.log(goodbye("Valentine"))

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    if(num == 5){
        return true
    }
    return false
};
console.log(isFive(6))

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    if(num % 2 === 1){//also checks if it is odd
        return true
    }
    return false
};
console.log(isOdd(23))

//without 'if statemets'
function isOdd(num){
    return num % 2 !== 0;//checks if it is odd
};
console.log(isOdd(2))





function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    return searchString.toLowerCase().includes(subString.toLowerCase())
};
console.log(isSubString("My boyfriend is handsome", "my"))

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    let count = 0;

for(index = 0; index < word.length; index++){
    let char = word[index];
    if (char === "a" || char === "A") {
        count += 1;

}
}
return count;

};
console.log(aCounter("WAmbaya"))

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}