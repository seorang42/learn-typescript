/**
 * 프로미스
 */

// Promise는 제네릭 클래스로 내장되어 있기 때문에 타입 정의 가능
// resolve()의 매개변수에도 T가 설정되어 있어 반환값 타입 추론
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // number만 전달할 수 있게 변경
    // resolve(20);

    // reject의 매개변수는 reason?: any
    reject("error");
  }, 3000);
});

// resolve의 값을 기본적으로 unknown으로 추론
promise
  .then((response) => {
    console.log(response * 10);
  })
  .catch((error) => {
    if (typeof error === "string") {
      console.log(error);
    }
  });

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 선언부만 봐도 타입 유추 가능 => 협업에 유리
function fetchPost(): Promise<Post> {
  // 외부 API인 경우 Promise 객체에 직접 정의가 어려움
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    });
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
