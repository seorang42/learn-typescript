/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

// typeof 연산자를 통해 객체의 타입을 추론 가능
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: "윤장호",
  age: 24,
};

getPropertyKey(person, "name");
