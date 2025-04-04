# 강의 정리 및 트러블 슈팅

## 1.강의 정리

### chapter1. 원시타입과 리터럴 타입

<h4>원시타입 number</h4>

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

<h4>원시타입 string</h4>

```
// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;
```

<p>string 타입은 문자열을 의미하는 타입</p>
<br>

<h4>원시타입 boolean</h4>

```
// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;
```

<p>boolean 타입은 참과 거짓만을 저장하는 타입입니다.</p>
<br>

<h4>원시타입 null</h4>

```
// null
let null1: numm = null
```

<p>null 타입은 오직 null 값만 포함하는 타입입니다.</p>

<br>

<h4>원시타입 undefined</h4>

```
// undefined 타입
let unde1: undefined = undefined;
```

<p>undefined 타입 역시 오직 undefined 값만 포함하는 타입입니다.</p>
<br>

<h4>리터얼 타입</h4>

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

### chapter2. 배열과 튜플

<h4>배열 타입 정의 방법</h4>

```
let numArr: number[] = [1, 2, 3];

let boolArr: Array<boolean> = [true, false, true];

```

<br>

<h4>다양한 타입 요소를 갖는 배열 타입 정의하기</h4>

```
let multiArr: (number | string)[] = [1, "hello"];
```

<p> ``|`` 를 사용한 즉 유니온(Union) 타입이라 부른다.</p>
<br>

<h4>다차원 배열 타입 정의하기</h4>

```
let doubleArr : number[][] = [
  [1, 2, 3],
  [4, 5],
];
```

<h4>튜플</h4>

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
  ["이강윤", 1],
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
  ["이강윤", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  [5, "조아무개"], // 오류 발생
];
```

<p>투플을 이용하여 위와 같은 오류를 바로 잡을 수 있습니다!</p>
<br>

### chapter3. 객체

<h3>객체 타입을 정의하는 방법</h3>

<h4>1. object로 정의하기</h4>

```
let user: object = {
  id: 1,
  name: "이강윤",
};

user.id; // ❌ 오류 발생 => object 타입에 id 프로퍼티가 없다고 나타남

```

<p>user에 저장된 객체의 구조를 그대로 타입으로 만들고 싶다면 object가 아닌 객체 리터럴 타입을 이용해야함.</p>

<br>

<h4>2. 객체 리터럴 타입</h4>

```
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이강윤",
};

user.id;
```

<p>프로퍼티에 이상 없이 접근할 수 있게 됨</p>

<br>

<h3>특수한 프로퍼티 정의하기</h3>

<h4>선택적 프로퍼티(Optional Property)</h4>

```
let user: {
  id?: number; // 선택적 프로퍼티가 된 id
  name: string;
} = {
  id: 1,
  name: "이강윤",
};

user = {
  name: "홍길동",
};
```

<p>
프로퍼티 뒤에 ``?`` 를 붙어져무녀 선택적 프로퍼티로 설정 가능<br>
따라서 user = { name: '홍길돌' }에 id 값이 없어도 오류가 발생하지 않음
</p>

<br>

<h4>읽기전용 프로퍼티 (Readonly Property)</h4>

```
let user: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이강윤",
};

user.name = "dskfd"; // 오류 발생
```

<p>name 프로퍼티는 readonly로 인해 읽기 전용 프로퍼티가 되었기 때문에 수정하려고 하면 오류 발생! <br>
의도치 않은 프로퍼티의 수정을 방지할 수 있음!
</p>

<br><br><br><br><br>

## 2. 트러블 슈팅

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
