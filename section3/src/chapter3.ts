// 기본 타입 간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅 => 가능

/**
 * 객체 타입 간의 호환성
 * => 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업 캐스팅 => Animal이 Dog를 포함하는 슈퍼 타입
// dog = animal; 오류 발생 => 다운 캐스팅
// => 프로퍼티를 기준으로 관계를 가짐

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // 업 캐스팅 => Book이 ProgrammingBook을 포함하는 슈퍼 타입
// programmingBook = book; 오류 발생 => 다운 캐스팅

// 초과 프로퍼티 검사
type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", 오류 발생 => 초과 프로퍼티
};

let book3: Book = programmingBook; // 초과 프로퍼티 검사 회피

function func(book: Book) {
  func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs", 오류 발생 => 초과 프로퍼티
  });
}
func(programmingBook);
