// object

// 객체 리터럴 타입
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이강윤",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
