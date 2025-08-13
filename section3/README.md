(ts-node 말고 tsx로 테스트하기!)

# 강의 정리 및 트러블 슈팅

## 1.강의 정리

### chapter1. 타입은 집합이다

<h4>타입은 집합이다.</h4>

<p>타입스크립트의 '타입'은 사실 여러개의 값을 포함하는 '집합'이다.<br>
집합은 동일한 속성을 갖는 여러개의 요소들을 하나의 그룹으로 묶은 단위를 말한다.<br>
그렇다면, 오직 하나의 값만 포함하는 타입인 Number Literal타입은 어떤 집합일까?
</p>

```
let num: 20 = 20;
```

<p>이 타입은 아래의 그림과 같이 딱 하나의 값만 포함하는 아주 작은 집합이라고 볼 수 있다.</br>
그리고 이러한 number Literal타입은 Number 타입이라는 거대한 집합에 포함되는 부분집합이기도 하다.</p>

<p>
타입스크립트의 모든 타입들은 집합으로써 서로 포함되고 또 포함되는 관계를 가진다. <br>
Number 타입처럼 다른 타입을 포함하는 타입은 슈퍼타입 ``(부모타입)`` 이라고 부르며, 그 반대는 ``서브타입(자식타입)`` 이라고 한다.
</p>

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F43589d70-5a34-4900-981f-67be2447c652%2F96054ff9-aac2-4d59-9b98-324328b88028%2FUntitled.png/size/?exp=1755166362&sig=n6n8soOXYGqBEPuxVM_tthXLohw3otkjRfmNlmTCrtg&id=348d5a9f-4b79-4cfd-8eb0-dc04b4783e51&table=block" />

<h4>타입 호환성</h4>

<p>타입 호환이란 A와 B 두 개의 타입이 존재할 때 A 타입의 값을 B 타입으로 취급해도 괜찮은지 판단하는 것을 의미한다.<br>
A타입의 값이 B타입의 값으로 취급되어도 괜찮다면 호환된다고 하며, 그 반대라면 호환되지 않는다고 한다.
</p>

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F43589d70-5a34-4900-981f-67be2447c652%2F50d75351-cab9-4cf5-a6a8-043fcb042ef5%2FUntitled.png/size/?exp=1755166618&sig=8YDPNH-tcgOeMd6mFdKFr871uvAYnYtz85k2ZdYn6e4&id=d3d8f77f-e34b-4f40-82f7-c1494591b09c&table=block"/>
<p>위 그림과 같이 정사각형을 직사각형으로 취급하는 것은 괜찮지만, 반대로 직사각형을 정사각형으로 취급하는 거은 안되는 것 처럼 <br>
서브타입인 Number Literal 타입의 값을 슈퍼타입인 Number 타입의 값으로 취급하는 것은 가능하지만 그 반대는 불가능하다.
</p>

```
let num1: number = 10;
let num1: 10 = 10;

num1 = num2;
```

<p>위 코드와 같이 ``num1`` 의 타입이 ``num2`` 의 타입보다 큰 타입이기 때문에 ``num1`` 에 ``num2`` 를 저장하는 것은 가능하다.</p>

```
let num1: number = 10;
let num1: 10 = 10;

num2 = num1;
```

<p>
하지만 반대의 경우는 불가하다.
</p>

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F43589d70-5a34-4900-981f-67be2447c652%2F42382978-4468-424e-a3ea-95b6747653ca%2FUntitled.png/size/?exp=1755166885&sig=5jD3IccBqzYhL2cPvO-3_WoqXbV31EO26XDf-uP79rA&id=53270154-fdd5-45fd-ad96-579ec8f10c0a&table=block"/>

<p>이때 서브타입의 값을 슈퍼 타입의 값으로 취급하는 것은 ``업 캐스팅``이라고 하고, 반대는 ``다운캐스팅`` 이라고 한다.</p>

<p>정리하자면, 타입스크립트에서 업캐스팅은 모든 상황에 가능하지만 다운 캐스팅은 대부분의 상황에서 불가능하다고 할 수 있다.</p>

### chapter2. 타입 계층도와 함께 기본타입 살펴보기

<h4>unknown 타입 (전체 집합)</h4>

<p>
``unknown`` 타입은 타입 계층도의 최상단에 위치한다.
</p>

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F43589d70-5a34-4900-981f-67be2447c652%2F72176d4a-bd08-4157-9f88-33a0edc9695d%2FUntitled.png/size/?exp=1755168849&sig=-jFy8Ay-IZVCsr0pMdDfSaLi-LiHILZntEy-x_aTf10&id=f951ab9d-dab7-40c4-b8fd-051ab0dd1df3&table=block"/>

<p>
따라서 unkown 타입 변수에는 모든 타입의 값을 할당할 수 있다. 즉 모든 타입은 unknown 타입으로 업캐스트할 수 있다.
</p>

```
  let a: unknown = 1; // number -> unknown
  let b: unknown = 'hello'; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown
```

<p>
반면 다른 타입이 unknown 타입으로 다운 캐스트하는 것은 불가하다.
</p>

```
    let num: number = unknownValue; // ❌
    let str: string = unknownValue; // ❌
    let bool: boolean = unknownValue; // ❌
  // 오류 : unknown 타입은 number 타입에 할당할 수 없습니다. => 다운캐스팅
```

<h4>never 타입 (공집합 타입)</h4>

<p>
never타입은 타입 계층도에서 가장 아래에 위치하며, 공집합을 뜻하는 타입이다.
</p>

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F43589d70-5a34-4900-981f-67be2447c652%2F5bfe7128-7f40-43b4-8e31-01c7907d4693%2FUntitled.png/size/?exp=1755169070&sig=uMY0Mtqe8__qc82l4OX8YmBUp9ZVNNftp4J6m6Ei960&id=3ce09502-1a38-426f-9cb0-cd822883c56b&table=block"/>

<p>
공집합은 모든 집합의 부분집합이다.
그러므로 never타입은 모든 타입의 서브 타입이라고 할 수 있다.
따라서 never타입은 모든 타입으로 ``업캐스팅`` 할 수 있다.
</p>

```

function neverExam() {
  function neverFuc(): never {
    while (true) {}
  }

  // 공집합이기 때문에 업캐스팅 가능
  let num: number = neverFuc();
  let str: string = neverFuc();
  let bool: Boolean = neverFuc();
}

```

<p>
반면 그 어떤 타입도 never 타입으로 다운캐스팅할 수 없다.
</p>

```
   let never1: never = 10; // ❌
   let never2: never = 'string'; // ❌
   let never3: never = true; // ❌
    // 오류: 다운캐스팅 불가!
```

<h4>void 타입</h4>

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F43589d70-5a34-4900-981f-67be2447c652%2F27abac0e-bb9b-4a09-add3-5a59d631e21f%2FUntitled.png/size/?exp=1755169335&sig=HAs7JrVgpOxpHJwMfWOSyGt1yQZF059chhtOYuFGsxw&id=b0233fad-40cb-4eef-b9de-c7ca651ec465&table=block"/>

<p>void타입은 undefined타입의 슈퍼타입이다.<br>
따라서 반환값을 void로 선언한 함수에서 undefined를 반환해도 오류가 발생하지 않는다.</p>

```
function voidExam() {
  function voidFuc(): void {
    console.log('hi');
  }

  let voidVar: void = undefined; // void타입이 undefined의 슈퍼타입이기 때문에 가능
}
```

<h4>any 타입</h4>

<p>any타입은 사실상 타입 계층도를 완전히 무시한다.<br>
모든 타입의 슈퍼타입이 될 수도 있고, 모든 타입의 서브타입이 될 수도 있다.</p>

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F43589d70-5a34-4900-981f-67be2447c652%2F0375b1a5-2cb8-41b4-a381-074bd68b9fbb%2FUntitled.png/size/?exp=1755169423&sig=T9BZwfnTc9wec30hewiIPsJ3TMd2Bm0UtLTWZP-djdI&id=664b8b72-9bac-4f45-a8a3-f4c49b5dac6c&table=block"/>

```

function AnyExam() {
  let unKownvar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  // 다운 캐스팅하는 것도, 업캐스팅도 모두 ok
  anyVar = unKownvar;
  undefinedVar = anyVar;
}

```

<p>그러나 any 타입이 never 타입으로 다운캐스트하는 것은 불가하다.</p>

```
    let neverVar: never; // ❌
    // never 타입은 정말 순수한 공집합이기 때문에 never타입은 어느것도 다운캐스팅할 수 없음
    // neverVar = anyVar; // ❌
    // 오류!
```
