/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 *
 * 1) 반환값의 타입이 호환되는가
 * 2) 매개변수의 타입이 호환되는가
 * => 모두 만족 시 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // B가 A의 서브 타입이기 때문에 업 캐스팅
// b = a; 오류 발생 - A가 B의 슈퍼 타입이기 때문에 다운 캐스팅

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 매개변수일 경우 업 캐스팅 때 호환 불가
d = c; // 다운 캐스팅

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color); // Animal이 Dog의 color를 포함하지 않음
// };

dogFunc = animalFunc;
let testFunc = (dog: Dog) => {
  console.log(dog.name); // Dog는 Animal의 속성을 모두 포함
};

// 2-2. 매개변수의 개수가 다를 때
// 매개변수의 타입은 동일해야 함
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 오류 발생 - func2가 정의되지 않은 func1의 b를 받기 때문
