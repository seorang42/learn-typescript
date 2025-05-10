// void
// void -> 공허, 아무 것도 없다
// void -> 아무 것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1; - 오류 발생
// a = "hello"; - 오류 발생
// a = null; strictNullCheck: false일 경우 가능
a = undefined;

// never
// 존재하지 않는, 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
// b = 1; - 오류 발생
// b = "hello"; - 오류 발생
// b = null; - 오류 발생
// b = undefined; - 오류 발생

let anyVar: any;
// b = anyVar - 오류 발생
