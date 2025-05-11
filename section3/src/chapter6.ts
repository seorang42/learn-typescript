// 타입 단언
type Person = {
  name: string;
  age: number;
};

// 타입 단언(assertion)
let person = {} as Person; // 초기 선언 없이 {}를 Person으로 간주
person.name = "윤장호";
person.age = 24;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", // 타입 단언으로 추가 프로퍼티 검사 회피
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // never가 number의 서브 타입 => 단언 가능
let num2 = 10 as unknown; // unknown이 number의 슈퍼 타입 => 단언 가능
// let num3 = 10 as string; 오류 발생 - 서로 관계 없는 타입 => 단언 불가능

// 다중 단언 (사용 비추천)
// unknown이 number의 슈퍼 타입 -> string이 unknown의 서브 타입 => 단언 가능
let num3 = 10 as unknown as string;

// const 단언
let num4 = 10 as const; // => 리터럴 타입으로 변경

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 속성이 readonly로 변경

// cat.name = ""; 오류 발생

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "윤장호",
};

// Non Null 단언을 통해 값이 null이 아닐 것이라 단언
const len: number = post.author!.length;
