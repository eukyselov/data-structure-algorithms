import BinarySearchTree from './binaryTreeSearch';
import util from 'util';

// Create sorted array
const mockData = (quantity) => {
  let result = [];
  while(quantity > 0) {
    result.push(Math.round((Math.random() * 1000) + 1));
    quantity--;
  }

  return result;
}

// const initArray = mockData(5);
const initArray = [ 5, 3, 8, 7, 10 ];

// console.log(initArray);

const bTreeSearch = new BinarySearchTree();
for(let i = 0; i < initArray.length; i++) {
  bTreeSearch.insert(initArray[i]);
}

const test = bTreeSearch.getFullTree();
const rotate = bTreeSearch.rotateLeft(111);

console.log(util.inspect(test, {showHidden: false, depth: null}));
console.log(util.inspect(rotate, {showHidden: false, depth: null}));



// console.time('---linear search---');
// const index1 = binarySearch.findLinear(initArray, 10);
// console.log(index1);
// console.timeEnd('---linear search---');

// console.time('---binary tree search---');
// const index2 = bTreeSearch.findBTree(initArray, 10);
// console.log(index2);
// console.timeEnd('---binary tree search---');

