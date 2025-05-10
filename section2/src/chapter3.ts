// object
let user: { id?: number; name: string } = {
  id: 1,
  name: "윤장호",
};

let dog: { name: string; color: string } = {
  name: "돌돌이",
  color: "brown",
};

user = {
  name: "홍길동",
};

let config: { readonly apiKey: string } = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; -> 오류 발생
