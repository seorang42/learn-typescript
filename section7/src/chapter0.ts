/**
 * 제네릭
 *
 * 여러 타입에 두루두루 쓸 수 있는 범용적인 타입
 * 함수를 호출할 때 상황에 맞게 타입이 결정됨
 *
 * 제네릭 함수
 * => 여러 타입의 값을 인수로 받아 범용적으로 사용할 수 있는 함수
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase(); 오류 발생 - 타입이 유니온 타입
if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

// 제네릭 직접 선언
// number[] -> [number, number, number] 튜플로 설정
let arr = func<[number, number, number]>([1, 2, 3]);
