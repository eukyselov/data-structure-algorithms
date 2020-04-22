import BinarySearch from './binarySearch';

// Create sorted array
const mockData = (quantity) => {
  let result = [];
  // let value = Math.round((Math.random() * 10) + 1);  // random value from 1 to 10
  let value = 10;
  while(quantity > 0) {
    result.push(value);
    value += Math.round((Math.random() * 10) + 1);
    quantity--;
  }

  return result;
}

const initArray = mockData(10000000);
const binarySearch = new BinarySearch();

console.time('---linear search---');
const index1 = binarySearch.findLinear(initArray, 10);
console.log(index1);
console.timeEnd('---linear search---');

console.time('---binary search loop---');
const index2 = binarySearch.findLoop(initArray, 10);
console.log(index2);
console.timeEnd('---binary search loop---');

