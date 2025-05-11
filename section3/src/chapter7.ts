/**
 * 타입 좁히기
 *
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  value; // value : number | string | Date

  // 타입 가드 : 타입을 좁히기 위한 표현
  if (typeof value === "number") {
    console.log(value.toFixed()); // value : number
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value : string
  }
  // 객체 타입 검사
  else if (value instanceof Date) {
    console.log(value.getTime()); // value : Date
  }
  // 타입 별칭 검사
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
