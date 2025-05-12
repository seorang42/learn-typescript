/**
 * 첫 번째 사례
 */

function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두 번째 사례
 */

// 첫 번째 값만 사용하기 때문에 튜플로 타입 정의
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

const data1 = returnFirstValue([1, 2, 3]);
const data2 = returnFirstValue([1, "2", "3"]);

/**
 * 세 번째 사례
 */

interface InterfaceA {
  length: number;
}

// length: number를 포함해야만 함
interface InterfaceB extends InterfaceA {}

// 상속을 통해 number라는 속성을 가진 객체로 타입을 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10); 오류 발생 - Number는 length 속성 X
