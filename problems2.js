function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    arr = [5,12,11,9,8,33,2]

const result = [];//initializing an empty array

    for(let i = 0; i<arr.length; i++){


        if(i % 2 !== 0){

            result.push(arr[i]);

        }

    }return result

};
console.log(oddIndices())


function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    arr = [5,12,11,9,8,33,2]

    const result = [];

        for(let i=arr.length-1;i>=0; i--){ //reverses arrangment of output
            if(i % 2 !== 0){

                result.push(arr[i]);//pushes the odd indices into the empty array

            }

        }return result

    };
console.log(oddReverse())

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    arr = [5,12,11,9,8,33,2]

    const result = [];

        for(let i = 0; i<arr.length; i++){


            if((i&(i-1))===0 && i>0){//checks if i is a power of 2

                result.push(arr[i]);

            }

        }return result
}
console.log(secondPower())

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    arr = [5,12,11,9,8,33,2]
n=3//if n is 3
    const result = [];

        for(let i = 0; i<arr.length; i++){


            if(Math.log(i) / Math.log(n) %1 ===0 && i>0){//checks if i is a power of 2

                result.push(arr[i]);/*arr[i] returns the indices value and not index if I wanted
                to return index the I would have used result.push(i)*/


            }

        }return result
};
console.log(nthPower())

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    arr = [5,12,11,9,8,33,2]
    const mid_index = Math.ceil(arr.length / 2);//find middle ellement including the middle element for odd-length arrays

    return arr.slice(0, mid_index)//returns the first half of the array
}
console.log(firstHalf())

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    arr = [5,12,11,9,8,33,2]
    const mid_index = Math.ceil(arr.length / 2);//find middle element excluding the middle element for odd-length arrays

    return arr.slice(mid_index)//returns the second half of the array
}
console.log(secondHalf())

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}