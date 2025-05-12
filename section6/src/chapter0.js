/**
 * 클래스
 */

let studentA = {
  name: "윤장호",
  grade: "A+",
  age: 24,

  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다`);
  },
};
studentA.introduce();

class Student {
  // 필드
  name;
  grade;
  age;

  // 메서드
  study() {
    console.log("공부를 합니다");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다`);
  }

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
let studentB = new Student("윤장호", "A+", 24);
studentB.introduce();

class StudentDeveloper extends Student {
  stack;

  getStack() {
    console.log(`${this.name}입니다. ${this.stack} 기술을 사용할 수 있어요`);
  }

  constructor(name, grade, age, stack) {
    super(name, grade, age);
    this.stack = stack;
  }
}

let studentC = new StudentDeveloper("윤장호", "A+", 24, "TypeScript");
studentC.getStack();
