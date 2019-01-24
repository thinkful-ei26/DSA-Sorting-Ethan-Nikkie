'use strict';

let testArr = [6, 3, 1, 2, 8, 9];
const dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

let ticks = 0;

function bucketSort(arr, min, max){
  let buckets = [];
  let k = max-min;
  for (let i = 0; i < arr.length; i++){
    if (!buckets[Math.floor(arr[i] / max * k)]){
      buckets[Math.floor(arr[i] / max * k)] = [arr[i]];
      ticks++;
    } else {
      buckets[Math.floor(arr[i] / max * k)].push(arr[i]);
      ticks++;
    }
  }
  let newBuckets = buckets.filter(bucket => bucket !== undefined);
  let returnBuckets = [];
  for (let j=0; j < newBuckets.length; j++){
    // console.log('running');
    // console.log(newBuckets[j]);
    returnBuckets = returnBuckets.concat(newBuckets[j]);
    ticks++;
    // console.log(returnBuckets);
  }
  // return buckets;
  // return buckets;
  return returnBuckets;
}

// console.log(bucketSort(testArr, 1, 9));
console.log(bucketSort(dataset, 1, 98).length);
console.log(ticks);