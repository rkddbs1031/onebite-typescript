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

<br>

### chapter4. 타입 별칭과 인덱스 시그니처

<h4>타입 별칭(Type Alias)</h4>

```
// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User = {};
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
```

<p>type 타입_이름 = 타입 형태로 타입을 정의합니다 </br>
동일한 스코프에 동일한 이름의 타입 별칭 선언은 불가합니다. </br>
타입 별칭으로 중복된 타입 코드를 선언을 제거할 수 있습니다. </br>
타입 관련 문접은 컴파일과 함께 모두 사라지는 것 확인 가능합니다. (tsc)
</p>

<h4>인덱스 시그니처(Index Signature)</h4>

```
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
  ... ( 약 100개의 국가 )
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  ...
};
```

<p> 다양한 국가들의 영어 코드를 저장하는 객체가 있다고 가정 </br>
만약 100개 이상의 프로퍼티가 추가된다면 타입 정의에도 모두 정의를 해줘야하기 때문에 매우 불편!! </br>
이럴 때 ``인덱스 시그니쳐``를 이용하면 됨.
</p>

```
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil : 'bz'
};
```

<p>key 와 value의 규칙을 기준으로 객체 타입을 정의할 수 있는 것이 인덱스 시그니처!</p>

</br></br>

<p></p>

```
type CountryCodes = {
  [key: string]: string;
  Korea: number; // !!!
};
```

<p>민약 반드시 포함해야하는  프로퍼티가 있다면 위와 같이 작성하면 된다!</p>

```
let countryCodes: CountryCodes = {}
```

<p>주의해야할 점으로는 위와 같이 빈 값이어도 오류가 나타나지 않는다!</br>
그 이유는 인덱스 프로퍼티는 규칙을 위반하지 않는다면 모든 객체를 허용하는 타입이므로 위반할 프로퍼티 자체가 없으므로 문제가 되지 않는다!</br>
따라서 이 점은 주의해야할 것!
</p>

```
type CountryCodes = {
  [key: string]: string;
  Korea: string; // 오류!
};
```

<p>또한 추가적인 프로퍼티를 위와 같이 정의할 때는 인덱스 시그니쳐의 value 타입과 직접 추가한 value 타입이 ``호환``되거나 ``일치``해야되므로 이 점도 주의해아한다!</p>

### chapter5. enum(열거형)타입

<h4>열거형(Enum) 타입</h4>

```
const user1 = {
  name: "강",
  role: 0, // 0 <- 관리자
};

const user2 = {
  name: "윤",
  role: 1, // 1 <- 일반 유저
};

const user3 = {
  name: "이",
  role: 2, // 2 <- 게스트
};
```

<p>위와 같이 숫자로 지정해두다가 나중에 '어? 관리자가 0번이었나,, 1번이었나..?'라고 헷갈릴 수 있음!! </br>
따라서 효율적으로 실수를 막을 수 있는데 enum을 활용하면된다!</p>

```
// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST =2,
}

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

```

<p>위와 같이 enum작성후 확인해보면 Role.ADMIN부터 값인 0이 할당되는 것을 확인할 수 있다.</p>

```
enum Role {
  ADMIN, // 0 할당(자동)
  USER,  // 1 할당(자동)
  GUEST, // 2 할당(자동)
}

const user1 = {
  name: "강",
  role: Role.ADMIN, // 0
};

const user2 = {
  name: "윤",
  role: Role.USER, // 1
};

const user3 = {
  name: "이",
  role: Role.GUEST, // 2
};
```

<p>또한 enum타입은 숫자를 직접 할당하지 않아도 0부터 1씩 늘어나는 값으로 ``자동`` 할당된다.</p>

```
enum Role {
  ADMIN = 10, // 10 할당
  USER,       // 11 할당(자동)
  GUEST,      // 12 할당(자동)
}

enum Role {
  ADMIN, // 0 할당 (자동)
  USER = 10,       // 10 할당
  GUEST,      // 11 할당(자동)
}
```

<p>더불어 특정 값부터 숫자를 할당하면 그 다음 값 또한 1씩 증가하며 할당된다</p>
``숫자형 enum``이라고 부른다.

<h4>문자열 열거형</h4>

```
enum Language {
  korean = "ko",
  english = "en",
}


const user1 = {
  name: "강",
  role: Role.ADMIN, //0
  language: Language.korean // 'ko'
};
```

<h4>enum은 컴파일 결과 객체가 된다</h4>

```
// 컴파일
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
    Language["japanese"] = "jp";
})(Language || (Language = {}));
```

<p>enum은 컴파일될 때 다른 타입들 처럼 사라지지 않고 자바스크립트 객체로 변환된다!!!</p>

### chapter6. any와 unknown

<h4>any 타입</h4>

```
let anyVar = 10; // 자동 추론하여 number 타입을 가짐
anyVar = "hello"; //오류 발생!
```

<p>이럴 때 any라는 치트키 타입 이용하면 됨</p>

```
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;
```

<p>하지만 컴파일하게 되면 런타임 오류가 발생합니다. </br>
이렇듯 any타입은 타입 검사를 받지 않는 타입으로 모든 타입스크립트의 문법과 규칙으로부터 자유롭지만 그만큼 위험한 타입! </br>
따라서 지양해야한다.</p>

<h4>unknown 타입</h4>

```
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar; // 오류 ! // any는 오류는 안남!
```

<p>unkown타입은 any 타입과 비슷해보이지만 보다 안전한 타입.</br>
any 와 unknown은 모든 타입의 변수를 할당받을 수 있지만, any타입은 반대로도 모두 ok, unknown은 반대로 no!</p>

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
```
