import BinarySearch from './binarySearch';

const binarySearch = new BinarySearch();
const dataSearchAlgorithms = {
  linear: {
    name: 'linear',
    func: binarySearch.findLinear.bind(binarySearch),
  },
  bloop: {
    name: 'binary, loop',
    func: binarySearch.findLoop.bind(binarySearch),
  },
  brecursion: {
    name: 'binary, recursion',
    func: binarySearch.findRecursively.bind(binarySearch),
  }
}

// Create sorted array
const mockData = (quantity) => {
  let result = [];
  let value = 0;
  while(quantity > 0) {
    result.push(value);
    value += Math.round((Math.random() * 10) + 1);
    quantity--;
  }

  return result;
}

const run = (quantity = 1, algorithm, arr, value) => {
  while(quantity > 0) {
    console.time(`---${algorithm.name}---`);
    console.log(algorithm.func(arr, value, 0, arr.length - 1));
    console.timeEnd(`---${algorithm.name}---`);
    quantity--;
  }
}

const initArray = mockData(10000000);
const find = 999999;

// Be careful with JIT compilation if you're going measure any metrics
run(10, dataSearchAlgorithms.linear, initArray, find);
run(10, dataSearchAlgorithms.bloop, initArray, find);
run(10, dataSearchAlgorithms.brecursion, initArray, find);
