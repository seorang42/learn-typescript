/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // 추가적인 부분은 private, protected 가능
  ) {}
  // private나 protected 사용 시 오류 발생
  // interface에 정의된 속성들은 전부 public이기 때문에
  // private나 protected를 사용하면 잘못 구현한 것으로 간주

  move() {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
