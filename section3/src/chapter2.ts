// unknown => 전체 집합
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  // 모든 값으로 업 캐스팅 가능

  let unknownVar: unknown;

  // let num: number = unknownVar; 오류 발생 -> 다운 캐스팅
}

// never -> 모든 집합의 부분집합 => 공집합
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let string: string = neverFunc();
  let bool: boolean = neverFunc();
  // 모든 값에 업 캐스팅 가능

  // let never1: never = 10;
  // let never2: never = true;
  // 오류 발생 -> 다운 캐스팅
}

// void => undefined의 슈퍼 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // 업 캐스팅
  }

  let voidVar: void = undefined; // undefined로 업 캐스팅 가능
}

// any
// 모든 타입의 슈퍼 타입으로도, 모든 타입의 서브 타입으로도 작동
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운 캐스팅이 가능
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // neverVar = anyVar; 오류 발생
  // => never에는 다운 캐스팅 불가능
}
