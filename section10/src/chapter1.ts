/**
 * Partial<T>
 *
 * -> 부분적인, 일부분의
 * => 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  // 인덱스 시그니처 + 인덱스드 액세스
  [key in keyof T]?: T[key];
};

// 임시 저장용 - Post 사용 시 모든 값이 없어 오류 발생
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/**
 * Required<T>
 *
 * -> 필수적인, 필수의
 * => 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  // 선택적 프로퍼티의 ?를 제거
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...", // 선택적이었지만 필수로 필요
};

/**
 * Readonly<T>
 *
 * -> 읽기 전용, 수정 불가
 * => 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다",
  tags: [],
  content: "",
};

// readonlyPost.content = "123"; 오류 발생
