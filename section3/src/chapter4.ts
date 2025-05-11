/**
 * 대수 타입
 * 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 *
 * 1) 합집합(유니온) 타입
 * 2) 교집합(인터섹션) 타입
 */

// 1) 합집합(유니온) 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 오류 발생 - Dog, Person 그 어디에도 포함되지 않음
// let union4: Union1 = {
//   name: "",
// };

// 2) 교집합(인터섹션) 타입
let variable: number & string;
// never => number와 string의 교집합이 존재하지 때문

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
