/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// '분산적인' 조건부 타입
let c: StringNumberSwitch<number | string>; // string | number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

/**
 * 실용적인 예제
 */

// 1) 유니온에서 특정 타입만 제거
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean
// never는 공집합이기 때문에 number | boolean

// 2) 유니온에서 특정 타입만 포함
type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>; // string
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// never | string | never
// never는 공집합이기 때문에 string

// 분산적으로 작동하는 것 방지
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;
