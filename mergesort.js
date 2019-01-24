'use strict';
let ticks=0;

const dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left); //9
  right = mergeSort(right); //4
  return merge(left, right, array);
  //What's the array third arg? Dont get  where it's coming from. empty at that point. a new temp arr that will hold the left and right
}

function merge(left, right, array) { //9 is left, 4 is right, arr=[]
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  //while there's items in the array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      ticks++;
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      ticks++;
      array[outputIndex++] = right[rightIndex++];
      //so we get arr[4]
      //post-incremenet
    }
  }

  //adding any remaining values from either left or right to the array
  for (let i=leftIndex; i<left.length; i++) {
    array[outputIndex++] = left[i];
    ticks++;
  }

  for (let i=rightIndex; i<right.length; i++) {
    array[outputIndex++] = right[i];
    ticks++;
  }
  return array;
}

mergeSort(dataset);
console.log(ticks);
//where should we be putting ticks