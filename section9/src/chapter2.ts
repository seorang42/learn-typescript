/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

// 함수의 반환값을 반환하는 타입
type ReturnType<T> = T extends () => infer R ? R : never;
// infer R : 조건식을 참으로 만드는 타입을 추론
// T에 () => string이 입력되었을 경우
// infer R은 string으로 추론되어 string을 반환

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // () => R이 number가 될 수 없음 => never

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
