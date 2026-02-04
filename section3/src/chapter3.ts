// 조건 타입이 더 적은 타입이 슈퍼 타입이 된다.

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '푸들',
};

animal = dog; // 가능 // 업캐스팅
// dog = animal <- 불가능! // 다운 캐스팅
/**
 * Animal은 슈퍼타입, Dog 타입은 서브타입
 *
 */
