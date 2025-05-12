/**
 * 인덱스드 액세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

function getAuthorId(id: Post["author"]["id"]) {
  console.log(id);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "윤장호",
    age: 24,
  },
};

printAuthorInfo(post.author);
getAuthorId(post.author.id);

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 배열 내 특정 값의 타입 추출
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 내용",
  author: {
    id: 1,
    name: "윤장호",
    age: 24,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 튜플 내 특정 값의 타입 추출
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string

type Tup2 = Tup[2]; // boolean

// type Tup3 = Tup[3]; 오류 발생

type TupNum = Tup[number]; // 최적의 공통 타입 정의 => number | string | boolean
