/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// is를 이용한 사용자 정의 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined; // true일 경우 Dog 타입을 보장
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal; // Dog
  } else if (isCat(animal)) {
    // 고양이
    animal; // Cat
  }
}
