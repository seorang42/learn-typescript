/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스
// 제네릭 인터페이스 사용 시에는 직접 타입 정의를 해주어야 함
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2"],
};
// => 하나의 인터페이스로 여러 개의 타입 대응 가능

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let numbarMap1: NumberMap = {
  key1: -123,
  key2: 123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: false,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

// 제네릭 인터페이스와 동일하게 사용 시 타입 정의 필요
let stringMap2: Map2<string> = {
  key: "value",
};

/**
 * 제네릭 인터페이스의 활용 예시
 *
 * - 유저 관리 프로그램
 * 유저 구분 : 학생 / 개발자
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

// profile 정의를 통해 이후 특정 사용자를 위한 메서드 구분 가능
interface User<T> {
  name: string;
  profile: T;
}

// 학생인 경우에만
function goToSchool(user: User<Student>) {
  // 제네릭을 통해 대체
  // if (user.profile.type !== "student") {
  //   console.log("잘못 오셨습니다.");
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "윤장호",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "한국대학교",
  },
};
