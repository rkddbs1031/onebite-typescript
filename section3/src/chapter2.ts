/**
 *  Unknown 타입
 */

function UnknownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = 'hello'; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown

  let unknownValue: unknown;

  // let num: number = unknownValue;
  // let str: string = unknownValue;
  // let bool: boolean = unknownValue;
  // 오류 : unknown 타입은 number 타입에 할당할 수 없습니다. => 다운캐스팅
}

/**
 *  Nerver 타입 => 공집합~
 */
function neverExam() {
  function neverFuc(): never {
    while (true) {}
  }

  // 공집합이기 때문에 업캐스팅 가능
  let num: number = neverFuc();
  let str: string = neverFuc();
  let bool: Boolean = neverFuc();

  //   let never1: never = 10;
  //   let never2: never = 'string';
  //   let never3: never = true;
  // 오류: 다운캐스팅 불가!
}

/**
 *  Void 타입
 */
function voidExam() {
  function voidFuc(): void {
    console.log('hi');
  }

  let voidVar: void = undefined; // void타입이 undefined의 슈퍼타입이기 때문에 가능
}

/**
 *  Any 타입
 */

function AnyExam() {
  let unKownvar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  // 다운 캐스팅하는 것도, 업캐스팅도 모두 ok
  anyVar = unKownvar;
  undefinedVar = anyVar;

  let neverVar: never;
  // never 타입은 정말 순수한 공집합이기 때문에 never타입은 어느것도 다운캐스팅할 수 없음
  //   neverVar = anyVar;
  // 오류!
}
