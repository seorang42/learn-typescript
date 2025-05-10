// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User = {};
}

let user1: User = {
  id: 1,
  name: "윤장호",
  nickname: "seorang42",
  birth: "2000.01.01",
  bio: "안녕하세요",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "육장호",
  nickname: "seorang4242",
  birth: "2000.01.01",
  bio: "안녕하세요",
  location: "수원시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
// key -> string, value -> string

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // Korea는 반드시 포함
};

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
