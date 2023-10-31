// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  let low = arr.slice(0, (arr.length / 2));
  let high = arr.slice((arr.length / 2), arr.length);

  // Recursively sort the left half
  let lowSort = mergeSort(low);
  // Recursively sort the right half
  let highSort = mergeSort(high);
  // Merge the halves together and return
  return merge(lowSort, highSort);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let output = [];

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while (output.length !== arrA.length + arrB.length) {
    let valueA = arrA[indexA];
    let valueB = arrB[indexB];

    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (valueA < valueB || valueB === undefined) {
      output.push(valueA);
      indexA++;
    } else if (valueB < valueA || valueA === undefined) {
      output.push(valueB);
      indexB++;
    }
  }
  // Return the return array
  return output;
}

module.exports = [merge, mergeSort];
