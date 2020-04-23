import BinaryTreeSearch from './binaryTreeSearch';

// Create sorted array
const mockData = (quantity) => {
  let result = [];
  while(quantity > 0) {
    result.push(Math.round((Math.random() * 1000) + 1));
    quantity--;
  }

  return result;
}

const initArray = mockData(10);
const bTreeSearch = new BinaryTreeSearch();

console.log(initArray);

// console.time('---linear search---');
// const index1 = binarySearch.findLinear(initArray, 10);
// console.log(index1);
// console.timeEnd('---linear search---');

console.time('---binary tree search---');
const index2 = bTreeSearch.findBTree(initArray, 10);
console.log(index2);
console.timeEnd('---binary tree search---');

