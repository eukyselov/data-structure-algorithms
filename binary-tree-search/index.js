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
const initArray = [ 5, 13, 8, 7, 10 ];

// console.log(initArray);

const bTreeSearch = new BinarySearchTree();
for(let i = 0; i < initArray.length; i++) {
  bTreeSearch.insert(initArray[i]);
}

// const test = bTreeSearch.getFullTree();
// bTreeSearch.rotateLeft(5);
// const rotateLeft = bTreeSearch.getFullTree();
// console.log(util.inspect(rotateLeft, {showHidden: false, depth: null}));

// bTreeSearch.rotateRight(13);
// const rotateRight = bTreeSearch.getFullTree();
// console.log(util.inspect(rotateRight, {showHidden: false, depth: null}));


const minNode = bTreeSearch.findMinNode();
console.log('Min node:', minNode);
const maxNode = bTreeSearch.findMaxNode();
console.log('Max node:', maxNode);

// console.log(maxNode);
// console.log(util.inspect(test, {showHidden: false, depth: null}));
// console.log(util.inspect(rotateLeft, {showHidden: false, depth: null}));
// console.log(util.inspect(rotateRight, {showHidden: false, depth: null}));



// console.time('---linear search---');
// const index1 = binarySearch.findLinear(initArray, 10);
// console.log(index1);
// console.timeEnd('---linear search---');

// console.time('---binary tree search---');
// const index2 = bTreeSearch.findBTree(initArray, 10);
// console.log(index2);
// console.timeEnd('---binary tree search---');

