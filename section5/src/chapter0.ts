/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;

  // 호출 시그니쳐를 통해 함수 오버로딩 가능 (함수 타입 표현식 X)
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "윤장호",
  age: 24,

  // method
  sayHi: () => {
    console.log("hi");
  },
};
// person.name = "홍길동"; 오류 발생

person.sayHi();
person.sayHi(1, 2);
