// 타입 별칭
// => 중복코드 제거 가능

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// type User = {} => 스코프 동일 타입 불가

function func() {
  type User = {}; // 가능
}

let user: User = {
  id: 1,
  name: "강윤",
  nickname: "yoon",
  birth: "1998.10.31",
  bio: "안녕하세요",
  location: "수원",
};

let user2: User = {
  id: 2,
  name: "윤윤",
  nickname: "yoonyoon",
  birth: "1998.10.31",
  bio: "안녕하세요",
  location: "수원",
};

// 인덱스 시그니처
// key 와 value의 규칙을 기준으로 객체 타입을 정의할 수 있는 것이 인덱스 시그니처

// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
//   ...
// };

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdon: 826,
};

let countryNumberAndStringCodes: CountryNumberCodes = {};
// 아무런 값이 없는데 오류가 나지 않는다!?
// 규칙을 위반하지 않는다면 모든 객체를 허용하는 타입 ! 그러므로 이런 점을 주의해야함
// 또한 두개의 value 타입을 인덱스 시그니처 타입과 동일 혹은 호환되게 작성해야함!
