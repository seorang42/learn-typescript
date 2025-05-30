# learn-typescript

"한 입 크기로 잘라먹는 타입스크립트(TypeScript)" 강의를 수강하며 배운 내용을 정리한 공간입니다.

강의 링크 : https://inf.run/EvrS5


- 타입스크립트
    
    자바스크립트를 더 안전하게 사용할 수 있도록 타입 관련 기능을 추가한 언어
    
    ⇒ 자바스크립트의 확장판
    
    자바스크립트의 유연함이 복잡하고 대규모의 프로그램을 개발하는 과정에서는 버그 발생의 가능성을 높임
    
    ⇒ 자바스크립트에 타입을 추가하여 안정성을 높임
    
- 자바스크립트의 한계점과 타입스크립트
    
    모든 프로그래밍 언어는 타입 시스템이 존재
    
    타입 시스템
    
    - 정적 타입 시스템 : 코드 실행 이전 모든 변수의 타입을 고정적으로 결정. 예) C, Java ⇒ 엄격하고 고정적
    - 동적 타입 시스템 : 코드를 실행하고 나서 그때 그때마다 유동적으로 변수의 타입을 결정하고 동적으로 변화함. 예) Python, JavaScript ⇒ 자유롭고 유연
    
    타입스크립트 : 동적 타입 시스템 + 정적 타입 시스템 = 점진적 타입 시스템
    
    ⇒ 코드 실행 전에 오류를 표시해 예상치 못 한 타입 에러를 방지(정적 타입 시스템의 장점). 타입 추론을 통해 일일히 모든 변수의 타입을 명시하지 않아도 됨(동적 타입 시스템의 장점). 
    
- 타입스크립트의 동작 원리
    
    프로그래밍 언어 —(컴파일)→ 기계어
    
    자바스크립트 —(컴파일러)→ 바이트 코드
    
    자바스크립트 코드 → AST(추상 문법 트리) → 바이트 코드로 변환
    
    타입스크립트 코드 → AST → 타입 검사(검사 실패 시 컴파일 종료) → 안전한 자바스크립트로 변환(타입과 관련된 코드들은 컴파일 결과 모두 사라짐)
    
- 타입스크립트 컴파일러 옵션 설정하기
    
    CommonJS : require로 불러오기, module.exports로 내보내기
    
    ES Module System : import로 불러오기, export로 내보내기
    
    마이그레이션의 경우 strict를 false로 설정하기도 함
    
    타입스크립트는 모든 파일을 전역 모듈로 봄 → 다른 파일에서 같은 변수명을 사용하면 재선언 오류가 발생
    
    해결 방법
    
    1. 파일 내에 import/export 등 모듈 시스템 코드 사용 ⇒ 독립된 공간으로 간주
    2. moduleDetection 옵션 설정 ⇒ 컴파일 결과 모든 js에 export {}; 추가
    
    질문
    
    - target과 module 등을 이전 버전으로 하는 것이 무조건 좋지 않나?
        
        ⇒ 적은 변환으로 인해 작은 번들 사이즈, 빠른 속도. CJS보다 ESM이 트리셰이킹에 유리
        

- 원시타입과 리터럴타입
    
    원시타입 : 하나의 값만 저장하는 타입
    
    타입 주석(어노테이션) : 변수의 타입을 정의하는 것
    
    리터럴 타입 : 값 자체를 타입으로 정의
    
- 배열과 튜플
    
    튜플 : 길이와 타입이 고정된 타입
    
    ⇒ 배열 메소드(push, pop 등) 사용 시 오류가 발생하지 않기 때문에 주의 필요
    
- 객체
    
    객체의 타입을 정의할 때 object와 같이 단순한 이름으로 정의하는 것이 아닌, 객체의 구조를 기준으로 정의
    
    ⇒ 구조적 타입 시스템 = Property Based Type System
    
    ↔ 명목적 타입 시스템(이름으로만 타입을 정의)
    
    선택적(Optional) Property : 객체 내에 없어도 되는 속성. ?로 명시
    
    타입 앞에 readonly 추가 시 해당 속성은 변경이 불가능
    
- 타입 별칭과 인덱스 시그니처
    
    타입을 변수처럼 재사용하기 위해 타입 별칭을 사용 (type 키워드)
    
    type은 동일한 스코프에서 재선언시 오류 발생
    
    인덱스 시그니처 : key와 value의 규칙을 기준으로 type을 정의할 수 있는 문법
    
    - 주의점 : 인덱스 시그니처 내에서 추가적인 프로퍼티를 직접 지정할 때는, 해당 타입의 value가 기존의 규칙의 value와 일치하거나 호환해야 함
- Enum 타입
    
    enum : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
    
    enum에는 별도로 값을 지정해주지 않아도 0부터 1씩 증가시켜가며 각각의 이름에 값을 부여 (초기값을 10으로 하면 10, 11, 12…)
    
    각각의 enum에 숫자가 할당되는 경우 → 숫자형 enum
    
    각각의 enum에 문자가 할당되는 경우 → 문자형 enum
    
    enum은 컴파일 결과 사라지지 않고 객체로 변환
    
- Any와 Unknown 타입
    
    any : 특정 변수의 타입을 확실히 알지 못 할 때 사용
    
    ⇒ 타입스크립트의 이점을 포기하게 됨
    
    unknown : any와 유사하게 모든 타입의 변수를 전부 할당받을 수 있지만, 반대로 다른 변수에 unknown 타입을 할당할 수는 없음. 또한 다른 타입의 메소드도 사용할 수 없음. 타입 정제 시에만 해당 타입으로써 작동할 수 있음
    
- Void와 Never
    
    void : 아무 것도 없는 것. 주로 함수의 반환을 나타낼 때 사용
    
    never : 존재하지 않는, 불가능한 타입. 정상적으로 값이 존재하는 것이 모순일 경우 사용. 예) 무한루프 함수의 반환값, throw new Error 사용 함수의 반환값
    

- 타입은 집합이다
    
    타입 : 동일한 속성과 특징들을 갖는 값을 가지는 집합
    
    리터럴 타입 → 상위 집합의 부분집합
    
    ⇒ 부모 타입 → 자식 타입
    
    타입 호환성 : 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
    
    Number ← Number 리터럴 (O)
    
    Number → Number 리터럴 (X)
    
    업 캐스팅 : 서브 타입의 값을 슈퍼 타입으로 취급하는 것 ⇒ 모든 상황에 가능
    
    다운 캐스팅 : 슈퍼 타입의 값을 서브 타입의 값으로 취급하는 것 ⇒ 대부분의 상황에 X
    
- 객체 타입의 호환성
    
    초과 프로퍼티 검사 : 객체를 초기화할 때 실제 타입에 정의해둔 프로퍼티 이상의 프로퍼티를 입력할 때를 검사
    
- 대수 타입
    
    대수 타입 : 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
    
    - 합집합(유니온) 타입
    - 교집합 타입
- 타입 추론
    
    변수 선언 후 초기값 할당 시 초기값을 기준으로 타입을 추론
    
    변수 선언 시 초기값을 할당하지 않으면 암묵적 any 타입으로 추론 → 값이 입력되는 순간 해당 타입으로 진화 → 다른 타입의 값이 입력되면 해당 타입으로 변경
    
    ↔ 명시적 any 타입은 진화가 없음
    
- 타입 단언
    
    타입 추론으로 인해 개발자가 원하는 작업을 할 수 없는 경우, 특정 값의 타입을 특정 타입으로 간주하게 단언하는 기능
    
    타입 단언의 규칙 : 단언식을 사용할 때(값 as 단언), 값 A가 단언 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함
    
    옵셔널 체이닝 : 프로퍼티가 null이거나 undefined인 경우 ?로 오류 없이 접근할 수 있게 해주는 기능
    
    const 단언 : 값을 리터럴 형태로 변경, 객체의 속성을 전부 readonly로 변경
    
    Non Null 단언 : 값이 Null이 아닐 것이라고 단언
    
- 타입 좁히기
    
    타입 좁히기 : 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법. 조건문 등으로 타입을 보장하게 되면 더 좁은 타입으로 자동으로 추론
    
    타입 가드 : 타입을 좁히기 위한 표현
    
- 서로소 유니온 타입
    
    서로소 유니온 타입 : 교집합이 없는 타입들로만 만든 유니온 타입
    
    태그 프로퍼티에 리터럴 타입을 지정하고 유니온을 통해 묶으면 서로소 관계를 가짐
    

- 함수 타입
    
    필수 매개변수는 선택적 매개변수 뒤에 올 수 없다
    
- 함수 타입 표현식과 호출 시그니쳐
    
    함수 타입 표현식 : 함수의 형태와 반환값을 별칭으로 정의
    
- 함수 타입의 호환성
    
    함수의 매개변수로 함수의 호환을 판단하는 경우, 다운 캐스팅일 경우에만 호환이 가능
    
- 함수 오버로딩
    
    함수 오버로딩 : 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법. JS가 아닌 TS에서만 사용 가능
    
    질문
    
    - 선택적 프로퍼티 방식이 아닌 함수 오버로딩을 사용하는 이유 : 선택적 프로퍼티를 사용하면 다른 형태의 함수 호출에 오류를 표시할 방법이 없기 때문. 1개 또는 3개의 매개변수를 받고 싶을 때 선택적 프로퍼티를 사용하면 2개의 매개변수가 주어졌을 때 오류를 발생시키지 않음.
- 사용자 정의 타입 가드(Custom Type Guard)
    
    함수의 반환값에 (매개변수 is 타입)을 반환하면, 반환값이 true일 경우 해당 함수를 호출한 스코프 내에서 매개변수의 타입을 좁힘
    

- 인터페이스
    
    인터페이스 : 상호 간에 약속된 규칙 → 타입에 이름을 지어주는 또 다른 문법. 객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능을 제공)
    
    인터페이스는 유니온, 인터섹션 타입 불가능
    
    헝가리안 표기법(interface명 앞에 I)은 사용하지 않는 것을 추천 (팀 컨벤션에 따라 결정)
    
- 인터페이스 확장
    
    extends를 통해 상위 인터페이스를 상속받을 수 있음
    
    다중 확장 가능
    
- 인터페이스 합치기
    
    인터페이스는 타입과 다르게 재정의가 가능하고, 동일한 이름의 인터페이스는 합쳐짐. 하지만 확장과는 다르게 재정의 시 프로퍼티를 재정의할 수 없음. 라이브러리 등의 타입을 보강하는 모듈 보강 작업에 사용됨
    

- 타입스크립트의 클래스
    
    자바스크립트에서의 클래스 사용보다 더 많은 안전장치를 제공
    
- 접근 제어자
    
    클래스의 필드는 기본적으로 public ⇒ 값을 자유롭게 변경할 수 있음
    
    필드를 private로 설정 시 필드에 접근을 제한함 ⇒ 값을 읽거나 수정할 수 없음 (클래스 내부에서는 가능)
    
    필드를 protected로 설정 시 외부에서는 필드에 접근할 수 없지만, 상속받는 자식 클래스에서는 값에 접근이 가능
    
    생성자에서 접근 제어자 사용 시 자동으로 필드를 정의하고 초기화하기 때문에 필드 선언 및 초기화 생략 가능
    
- 인터페이스와 클래스
    
    class + implements를 통해 인터페이스에 맞게 클래스를 생성할 수 있게 할 수 있음
    

- 제네릭 소개
    
    제네릭 타입 : 상황에 맞게 범용적으로 사용할 수 있게 하는 타입
    
    제네릭 함수 : 여러 타입의 값을 인수로 받고, 제네릭 타입을 통해 함수 호출 시점에 타입을 정해 범용적으로 사용할 수 있는 함수
    
    타입 변수 : 제네릭 타입으로 정의한 유동적인 타입. 타입 파라미터 / 제네릭 타입 변수 / 제네릭 타입 파라미터라고도 부름
    
- 타입 변수 응용하기
    
    제네릭 타입은 오류를 최소화하기 위해 함수 내부에서는 unknown으로 추론 → 인덱스 값 접근 등 불가
    
- 제네릭 인터페이스 & 제네릭 타입 별칭
    
    제네릭을 사용해 인터페이스 및 타입을 정의하여 여러 타입을 위한 타입을 정의할 수 있음
    
    ⇒ 사용 시 직접 타입을 정의해야 함
    
- 제네릭 클래스
    
    제네릭 클래스의 경우 인터페이스와 타입과는 다르게 인스턴스 생성 시 타입 정의가 필수는 아님
    
- 프로미스와 제네릭
    
    프로미스는 resolve의 반환값을 기본적으로 unknown으로 반환
    
    Promise 객체는 제네릭 클래스로 내장되어 있기 때문에 Promise<number>와 같이 반환값의 타입을 정의할 수 있음
    
    reject는 any를 반환하기 때문에 별도의 타입 좁히기 필요
    

- 타입 조작하기
    
    상황과 필요에 따른 타입을 정의해 사용하는 것
    
    - 인덱스드 엑세스 타입 : 객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
    - keyof 연산자 : 특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴 유니온 타입으로 추출하는 연산자
    - Mapped 타입 : 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
    - 템플릿 리터럴 타입 : 스트링 리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입
- 인덱스드 액세스 타입
    
    index를 이용해 다른 타입 내의 특정 프로퍼티의 타입을 추출한 것
    
    원본을 참조해 사용하기 때문에, 직접 동일하게 선언해 사용하는 것보다 유지보수에 유용함
    
    Post[”author”] ← “author” : 인덱스
    
    ⇒ 인덱스드 액세스 타입
    
    인덱스에는 값이 아닌 타입만 들어갈 수 있기 때문에 값을 가진 변수를 사용할 수 없음
    
    배열 타입인 경우 인덱스로 number(또는 숫자)를 지정하면 해당 배열 타입의 단일 요소를 타입으로 정의할 수 있음
    
    복잡하고 큰 타입에서 필요한 부분만 추출해서 사용할 수 있기에 유용
    
- keyof 연산자
    
    특정 객체의 key 값을 추출해 타입으로 정의하는 연산자
    
    typeof 연산자는 객체 전체의 타입을 자동으로 추출할 수 있음
    
- Mapped 타입
    
    기존의 객체 타입을 통해 새로운 객체 타입을 생성할 수 있는 기능
    
    인덱스 시그니쳐의 기능을 통해 특정 객체의 key를 key로 설정([key in keyof Type])하고 value의 타입을 정의해 새로운 타입을 생성
    
    interface에서 사용할 수 없음, 타입 별칭 사용
    
    ⇒ 실무에서 많이 사용됨
    
- 템플릿 리터럴 타입
    
    여러 문자열 리터럴 타입 또는 유니온 타입을 조합하여 특정 패턴을 가지는 문자열 타입의 유니온을 자동으로 만들어주는 타입
    
    모든 경우의 수를 유니온 타입으로 포함
    

- 조건부 타입 소개
    
    삼항 연산자를 이용해서 조건에 따라 타입을 만드는 타입
    
    제네릭과 함께 사용하면 유용함
    
- 분산적인 조건부 타입
    
    조건부 타입에 유니온 타입을 전달할 경우, 유니온 타입 자체로 조건을 검사하는 것이 아닌, 하나하나 따로 조건을 검사하여 타입을 결정
    
- infer
    
    조건부 타입 내에서 특정 타입을 추론할 수 있는 기능
    

- 유틸리티 타입
    
    제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것
    
    예) Readoly<T>, Partial<T>
    
- 맵드 타입 기반의 유틸리티 타입
    - Partial<T> : 특정 객체의 모든 프로퍼티를 선택적 프로퍼티로 변경
    - Required<T> : 특정 객체의 모든 프로퍼티를 필수 프로퍼티로 변경
    - Readonly<T> : 특정 객체의 모든 프로퍼티를 읽기 전용 프로퍼티로 변경
    - Pick<T, K> : 특정 객체 T에서 T의 key의 유니온 타입인 K만을 포함하는 객체 타입을 반환
    - Omit<T, K> : 특정 객체 T에서 T의 key의 유니온 타입인 K만 제거한 객체 타입을 반환
    - Record<K, V> : 키 값의 이름이 될 유니온 타입 K에 각각 V라는 타입을 정의한 객체 타입을 반환
- 조건부 타입 기반의 유틸리티 타입
    - Exclude<T, U> : T에서 U를 제거
    - Extract<T, U> : T에서 U만을 추출
    - ReturnType<T> : 함수 타입 T에서 반환값 타입을 추출
