/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 *
 * T가 string일 경우 -> number
 * T가 number일 경우 -> string
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// T의 값을 함수 내부에서는 추론할 수 없음
// => 함수 오버로딩으로 해결
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", ""); // 유니온 타입일 경우 오류 발생
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im jangho yoon");
result.toUpperCase(); // 오류 발생 - 단순 타입 좁히기를 사용할 경우 반환값의 타입이 유니온 타입

let result2 = removeSpaces(undefined);
