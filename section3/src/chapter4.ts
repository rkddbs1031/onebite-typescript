/**
 * ## 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = 'hello';

a = true;

let arr: (string | number | boolean)[] = [1, 'hello', true];

/**객체 타입 유니온 타입 만들어보기 */
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
};

let union2: Union1 = {
  name: '',
  language: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

/*
오류!
let union4: Union1 = {
  name: '',
};

공통적으로 들어간 name이라는 프로퍼티만 작성한 객체는 허용되지 않는다.

유니온 타입이란 Dog와 Person 합집합 타입에 해당하는 것이기 때문에
union4는 교집합 부분이 아닌, 
(Dog에는 color 없고, Person에는 language기 없기 때문에)합집합 바깥에 있는 외부에 해당된다.
따라서 오류가 뜬다.

 */

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string; // 불가능! 공집합이기 때문에! never

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

/*
오류! 
Dog2와 Person2를 모두 해당하는 프로퍼티를 가지는 객체만 허용될 수 있기때문에!!

let intersection1: Intersection = {
  name: '',
  color: '',
};
*/

let intersection2: Intersection = {
  name: '',
  color: '',
  language: '',
};
