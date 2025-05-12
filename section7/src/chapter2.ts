/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((el) => el * 2); // [2, 4, 5]

function map<T, U>(arr: T[], callback: (element: T) => U): U[] {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

const newArr2 = map(arr, (el) => el * 2);
const newArr3 = map(["hi", "hello"], (el) => el.toUpperCase());
const newArr4 = map(["1", "2", "3"], (el) => parseInt(el));
console.log(newArr2, newArr3, newArr4);

/**
 * forEach
 */

function forEach<T>(arr: T[], callback: (el: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr, (el) => console.log(el));
forEach(["123", "456"], (el) => console.log(Number(el)));
