'use strict';
//Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).

// 4, 5, 1, 9, 2
//Two indexes: beg and randIndex
//swap beg and randIndex
//increment beg and decremend end
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function shuffle(arr){
  let randIndex = Math.floor(Math.random() * arr.length);

  for(let i = 0; i < arr.length; i++){
    if(arr[i]!==arr[randIndex]){
      swap(arr, i, randIndex);
    }
    randIndex = Math.floor(Math.random() * arr.length);
  }

  return arr;
}

let dataset= [1,4,2,8,5,6,3];
console.log(shuffle(dataset));
