/**
 * 타입 추론
 *
 * 변수 선언 후 초기값 할당 시
 * 초기값을 기준으로 타입을 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이름",
  profile: {
    nickname: "닉네임",
  },
  urls: ["https://hello.world"],
};

// 구조 분해 할당도 추론 가능
let { id, name, profile, urls } = c;
let [one, two, three] = [1, "hello", true];

// 매개변수에 기본값 존재 시 추론 가능
function func(message = "hello") {
  return "hello"; // return의 반환값을 기준으로 추론
}

// any 타입의 진화
let d; // any로 추론
d = 10;
d.toFixed(); // number로 변경

d = "hello";
d.toUpperCase(); // string으로 변경
// d.toFixed(); 오류 발생 - string이기 때문

// const로 변수 선언 시 리터럴 타입으로 추론
const num = 10;
const str = "hello";

let arr = [1, "string"];
