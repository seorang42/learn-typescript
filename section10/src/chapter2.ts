/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * => 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 객체 T 중에서 필요한 타입 K만 포함하는 객체 타입 반환
type Pick<T, K extends keyof T> = {
  // K extends "title" | "tags" | "content" | "thumbnailURL"
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 *
 * -> 생략하다, 빼다
 * => 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// Exclude를 통해 T의 key에서 K의 값을 제거
// 이후 T에서 제거된 후 남은 key를 포함한 객체 타입을 반환
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">>
// Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">>
// Pick<Post, "content" | "tags" | "thumbnailURL">

const noTitlePost: Omit<Post, "title"> = {
  // title : "",
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 *
 * -> 인덱스 시그니쳐와 유사한 기능을 하지만 조금 더 제한적
 * => 객체 타입을 만들어주는 유틸리티 타입
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};
// 코드가 중복됨!!

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;
// 각각 { url: string, ... }을 가지고 있는
// large, medium, small이라는 타입을 정의한
// 객체 타입을 반환
