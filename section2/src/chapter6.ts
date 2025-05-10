// any
// 특정 변수의 타입을 확실히 모를 때

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar; // 모든 타입의 변수에 any 할당 가능

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와는 다르게 다른 타입의 변수에 할당 불가능
// num = unknownVar; - 오류 발생

// 메소드도 사용 불가능
// unknownVar.toUpperCase(); - 오류 발생

// 타입 정제 시에는 사용 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}
