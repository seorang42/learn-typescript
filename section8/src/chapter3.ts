/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 수정하는 값만 받기 위한 인터페이스 - 중복!!
interface PartialUser {
  id?: number;
  name?: string;
  age?: number;
}

// 맵드 타입
type MappedUser = {
  // 인덱스 시그니쳐: 인덱스드 액세스
  // ?로 인해 모든 타입들이 선택적 프로퍼티로 정의됨
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능

  return {
    id: 1,
    name: "윤장호",
    age: 24,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: MappedUser) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "윤장호",
  age: 25,
});
