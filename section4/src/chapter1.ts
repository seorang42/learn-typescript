/**
 * 함수 타입 표현식 (Function Type Expression)
 *
 * 비슷한 형태의 함수의 타입 재사용 가능
 */

type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name;
