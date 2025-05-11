/**
 * 함수 오버로딩
 *
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러 가지 버전으로 만드는 문법
 *
 * 하나의 함수 func
 * - 모든 매개변수의 타입 : number
 * 1) ver1. 매개변수가 1개 -> 매개변수에 20을 곱한 값 출력
 * 2) ver2. 매개변수가 3개 -> 매개변수를 전부 더한 값 출력
 */

// 버전들 정의 => 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 => 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); 오류 발생
func(1);
// func(1, 2); 오류 발생
func(1, 2, 3);
// => 오버로드 시그니쳐의 버전을 참고
