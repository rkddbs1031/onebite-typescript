// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

// const user1 = {
//   name: "강",
//   role: 0, // 0 <- 관리자
// };

// const user2 = {
//   name: "윤",
//   role: 1, // 1 <- 일반 유저
// };

// const user3 = {
//   name: "이",
//   role: 2, // 2 <- 게스트
// };

const user1 = {
  name: "강",
  role: Role.ADMIN, // 0 <- 관리자
};

const user2 = {
  name: "윤",
  role: Role.USER, // 1 <- 일반 유저
};

const user3 = {
  name: "이",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);

enum Language {
  Korean = "ko",
  english = "en",
}

const user4 = {
  name: "강",
  role: Role.ADMIN,
  language: Language.Korean, // 'ko'
};

//컴파일시 enum은 사라지지 않는다~!
