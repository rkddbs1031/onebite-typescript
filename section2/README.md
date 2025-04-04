# 강의 정리 및 트러블 슈팅

## 강의 정리

### 원시타입과 리터럴 타입

<h3>원시타입 number</h3>

```
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

```

<p>number 타입은 js에서 숫자를 의미하는 모든 값을 포함하는 타입</p>

```
num1 = 'hello'; // ❌

num1.toUpperCase(); // ❌
```

<h3>원시타입 string</h3>

```
// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;
```

<p>string 타입은 문자열을 의미하는 타입</p>
<br>

<h3>원시타입 boolean</h3>

```
// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;
```

<p>boolean 타입은 참과 거짓만을 저장하는 타입입니다.</p>
<br>

<h3>원시타입 null</h3>

```
// null
let null1: numm = null
```

<p>null 타입은 오직 null 값만 포함하는 타입입니다.</p>

<br>

<h3>원시타입 undefined</h3>

```
// undefined 타입
let unde1: undefined = undefined;
```

<p>undefined 타입 역시 오직 undefined 값만 포함하는 타입입니다.</p>
<br>

<h3>리터얼 타입</h3>

```
let numA: 10 = 10;

numA = 20 //  ❌
```

<p>하나의 값만 포함하는 타입이며 10으로 타입을 설정했으면 10 이외의 값을 저장할 수 없게 됩니다.<p>

```
let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;
```

### 배열

<h3>배열 타입 정의 방법</h3>

```
let numArr: number[] = [1, 2, 3];

let boolArr: Array<boolean> = [true, false, true];

```

<br>

<h3>다양한 타입 요소를 갖는 배열 타입 정의하기</h3>

```
let multiArr: (number | string)[] = [1, "hello"];
```

<p> ``|`` 를 사용한 즉 유니온(Union) 타입이라 부른다.</p>
<br>

<h3>다차원 배열 타입 정의하기</h3>

```
let doubleArr : number[][] = [
  [1, 2, 3],
  [4, 5],
];
```

### 튜플

<p>
앞서 배열 타입을 정의하는 방법을 살펴보며 배열의 타입을 고!정! 하는 방법은 살펴보았지만 배열의 길이까지 고정하는 방법 또한 있다. 
</p>

```
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '이강윤', true];
```

<p>
하지만 컴파일하면 튜플 역시 결국은 배열값인것이며, 그러므로 push,pop과 같이 메서드를 사용해 고정된 길이를 무시하고 요소를 추가/삭제할 수 있다. <br>

따라서 이 점에 대해 주의하고 사용해야 함!

</p>

<h4>그렇다면 튜플을 왜 쓰는가?</h4>

```
const users = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  [5, "조아무개"], // <- 새로 추가함
];
```

<p>
이와 같이 새로 추가한 데이터의 순서를 잘 못 배치하여 추가할 경우 문제 발생 ! 🚨
</p>

```
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  [5, "조아무개"], // 오류 발생
];
```

<p>투플을 이용하여 위와 같은 오류를 바로 잡을 수 있습니다!</p>

## 트러블 슈팅

1. 컴파일 실행하기 위해 tsc 명령어 입력시 아래와 같은 오류가 발생

<p>
Typescript 가 특정 모듈(undici-types)을 찾을 수 없다는 메세지며, Node.js의 버전과 관련된 문제를 나타낸다. <br>

TS 컴파일러 설정이 Node.js환경과 호환되지 않을 경우 오류 발생 <br>

</p>
<br>

<h4>해결 방법</h4>

<p>
 라이브러리의 타입 검사 생략 <br>

```
{
    "compilerOptions": {
        "skipLibCheck": true,
        // 다른 설정들
    }
}
```

tsconfig.json에서 skipLibCheck 옵션을 true로 설정하여 모든 타입 검사를 생략할 수 있습니다.

</p>
