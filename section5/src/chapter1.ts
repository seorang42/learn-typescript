/**
 * 인터페이스의 확장
 */

// type, interface, class 다 가능
class Animal {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface Dog extends Animal {
  name: string;
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 0,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  name: "Chicken"; // 원본 타입의 서브 타입으로 재정의 가능
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};
