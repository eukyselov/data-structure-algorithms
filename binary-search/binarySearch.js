export default class BinarySearch {
  constructor() {}

  findLinear(arr, value) {
    let index = arr.length - 1;
    while (0 <= index) {
      if (arr[index] == value) return index;
      index--;
    }

    return -1;
  };

  findLoop(arr, value) {
    let min = 0;
    let max = arr.length - 1;

    let mid;
    while (min <= max) {
      mid = Math.round(min + (max - min) / 2);

      if (arr[mid] === value) return mid;

      if (arr[mid] < value) min = mid + 1;
      else max = mid - 1;
    }

    return -1;
  }

  findRecursively(arr, value, min, max) {

    if (min > max) return -1;

    let mid = Math.round(min + (max - min) / 2);
    if (arr[mid] === value) return mid;
    if (value > arr[mid]) min = mid + 1;
    else max = mid - 1;

    return this.findRecursively(arr, value, min, max);
  }
}
