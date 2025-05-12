/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "윤장호",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name;
  age;
  position;

  // 메서드
  work() {
    console.log("일함");
  }

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
}

const employeeB = new Employee("윤장호", 24, "개발자");
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  name: "윤장호",
  age: 0,
  position: "개발자",

  work: () => {},
};

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const executiveOfficer = new ExecutiveOfficer("윤장호", 24, "이사", 102);
executiveOfficer.work();
