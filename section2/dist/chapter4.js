// 타입 별칭
// => 중복코드 제거 가능
// type User = {} => 스코프 동일 타입 불가
function func() {
}
let user = {
    id: 1,
    name: "강윤",
    nickname: "yoon",
    birth: "1998.10.31",
    bio: "안녕하세요",
    location: "수원",
};
let user2 = {
    id: 2,
    name: "윤윤",
    nickname: "yoonyoon",
    birth: "1998.10.31",
    bio: "안녕하세요",
    location: "수원",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdon: 826,
};
let countryNumberAndStringCodes = {};
export {};
// 아무런 값이 없는데 오류가 나지 않는다!?
// 규칙을 위반하지 않는다면 모든 객체를 허용하는 타입 ! 그러므로 이런 점을 주의해야함
// 또한 두개의 value 타입을 인덱스 시그니처 타입과 동일 혹은 호환되게 작성해야함!
