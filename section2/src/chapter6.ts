// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용 가능

// let anyVar = 10; // 자동 추론하여 number 타입을 가짐
// anyVar = "hello"; //오류 발생!

// 2.
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// 런타임에 오류 발생~

//unknown

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 오류 !

// any 와 unknown은 모든 타입의 변수를 할당받을 수 있지만, any타입은 반대로도 모두 ok, unknwo은 반대로 no!
