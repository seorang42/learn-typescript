/**
 * 접근 제어자
 * access modifier
 *
 * => public / private / protected
 */

class Employee {
  // 필드
  private name; // 기본값 : public
  protected age;
  position;

  // 메서드
  work() {
    console.log(`${this.name} 일함`); // private은 내부에서만 접근 가능
  }

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
}

const employee = new Employee("윤장호", 24, "developer");
// employee.name = "홍길동"; 오류 발생 - private 필드는 외부에서 읽거나 수정할 수 없음
// employee.age = 20; 오류 발생 - protected 필드는 외부에서 읽거나 수정할 수 없음
employee.position = "designer";

class ExecutiveOfficer extends Employee {
  // 필드
  // officeNumber; 오류 발생 - 생성자에서 접근 제어자 설정 시 자동으로 필드 생성

  // 메서드
  func() {
    // console.log(this.name); 자식 클래스에서도 private 접근 불가능
    this.age = 30; // protected는 자식 클래스에서는 접근 가능
  }

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    private officeNumber: number // 생성자에서도 접근 제어자 설정 가능
  ) {
    super(name, age, position);
    // this.officeNumber = officeNumber; 생략 가능 - 생성자에서 접근 제어자 설정 시 자동으로 필드 초기화
  }
}
