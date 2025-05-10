// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["Hello", "I'm", "Jangho"];

let boolArr: Array<boolean> /* 제네릭 */ = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: /* 유니온 타입 */ (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// '길이'와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; -> 오류 발생
// tup1 = ["1", "2"]; -> 오류 발생
// 길이가 다르거나 타입이 다르면 오류

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["1", 2, true]; -> 오류 발생
// 순서가 다르면 오류

// 배열 메소드 사용 시 튜플에 오류 발생 X
tup1.push(1);
tup1.pop();
tup1.pop();
// 튜플 사용 시 조심

const users: [string, number][] = [
  ["김가가", 1],
  ["김나나", 2],
  ["김다다", 3],
  ["김라라", 4],
  // [5, "김마마"], -> 오류 발생
];
