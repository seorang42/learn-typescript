/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 *
 * 필수 매개변수 - 생략하면 안되는 매개변수
 * 선택적 매개변수 - 생략해도 되는 매개변수
 * => 필수 매개변수는 선택적 매개변수 뒤에 정의될 수 없음
 */

function introduce(name = "윤장호", age: number, height?: number) {
  console.log(`name : ${name}`);
  if (typeof height === "number") {
    console.log(`height : ${height + 10}`);
  }
}

introduce("윤장호", 24, 172);
introduce("윤장호", 24);

// rest parameter
// 가변적인 길이의 매개변수를 전달받는 기능
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15

function getSumThree(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSumThree(1, 2, 3); // 6
// getSumThree(1, 2, 3, 4, 5); 오류 발생
