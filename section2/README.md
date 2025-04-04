# 강의 정리 및 트러블 슈팅

## 강의 정리

### 원시타입과 리터럴 타입

#### 원시타입 number

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


#### 원시타입 string


```
// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;
```

<p>string 타입은 문자열을 의미하는 타입</p>


#### 원시타입 boolean

```
// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;
```

<p>boolean 타입은 참과 거짓만을 저장하는 타입입니다.</p>


#### 원시타입 null

```
// null
let null1: numm = null
```

<p>null 타입은 오직 null 값만 포함하는 타입입니다.</p>


#### 원시타입 undefined

```
// undefined 타입
let unde1: undefined = undefined;
```

<p>undefined 타입 역시 오직 undefined 값만 포함하는 타입입니다.</p>



### 리터얼 타입

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
