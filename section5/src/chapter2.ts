/**
 * 인터페이스 합치기
 * (= 선언 합침, Declaration Merging)
 */

// 동일한 인터페이스 선언 시 인터페이스가 합쳐짐
interface Person {
  name: string;
}

interface Person {
  // name: number; - 충돌!! 동일한 프로퍼티가 타입이 다름
  // name: "hello"; - 충돌!! 확장과 다르게 서브 타입도 불가능
  age: number;
}

interface Develop extends Person {
  name: "hello";
}

const person: Person = {
  name: "윤장호",
  age: 24,
};

/**
 * 모듈 보강
 */

// 라이브러리 내장 타입으로 가정
interface Lib {
  a: number;
  b: number;
}

// 직접 라이브러리 내장 타입을 재정의
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
