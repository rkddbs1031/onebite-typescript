
## 타입스크립트 실행하기

<p>
```
// src/index.ts
console.log("hello Typescript");
const a:number = 1;
```

파일 생성 후 ``tsc 파일명(src/index.ts)``명령어 실행하면 src 폴더내에 index.js 파일이 컴파일 되어 생성됨 <br>


``node 파일명(src/index.js)`` 명령어를 입력하면 컴파일된 자바스크립트 코드가 node를 이용해 실행함 <br>

</p>

<h2>TSX로 실행하기</h2>
<p>
2번의 명령어 말고 타입스크립트 코드를 바로 실행시켜주는 도구입니다.
```
npm i -g tsx

tsx -v //버전 확인

tsx src/index.ts 
```
</p>

<h2>tsc</h2>
<p>
해당 명령어는 include src 즉 src 폴더 내에 있는 ts 파일을 컴파일 돌려라~ 라는 의미를 나타낸다.
</p>



## 타입스크립트 컴파일러 옵션 설정하기 tsconfig.json
<h3>컴파일 옵션이란</h3>
<p>
타입스크립트의 컴파일은 작성한 코드에 타입 오류가 없는지 검사하고 오류가 없다면 자바스크립트 코드로 변환한다.
</p>

<h3>컴파일러 옵션 자동 생성하기</h3>
<p>컴파일러 옵션 자동 생성 방법은 ``tsc --init`` 명령어를 입력하는 것.</p>

<h3>컴파일러 옵션 직접! 생성하기</h3>
<p>
``tsconfig.json``에 하나의 중괄호만 작성하여 안에 옵션들이 추가하면 됨.
</p>

<h4>include 옵션<h4>
<p>
include는 tsc에게 컴파일 할 타입스크립트 파일의 범위와 위치를 알려주는 옵션이다 <br>
```
{
    "include" : ["src"] //컴파일할 폴더는 src야
}
```

명령어  ``tsc`` 입력하면 ts 파일이 컴파일됨
</p>

<h4>target 옵션<h4>
<p>
생성되는 자바스크립트 코드의 버전을 설정하는 옵션이다.<br>

```
    compilerOptions {
        target: "ESNext" // || ES5 ...
    } 
```
컴파일할 코드가 target값인 ESNext (최신 자바스크립트 버전)으로 설정된다라는 의미를 나타낸다.
</p>
    
<h4>module 옵션<h4>
<p>
자바스크립트 코드의 모듈 시스템을 설정하는 옵션이다.<br>

```
    "compilerOptions" {
        "target": "ESNext",
        "module": "ESNext" // || CommonJS ...

    } 
```
</p>
    
<h4>outDir 옵션<h4>
<p>
컴파일 결과 생성할 자바스크립트 코드의 위치를 결정하는 옵션이다.<br>

```
    "compilerOptions" {
        "target": "ESNext",
        "module": "ESNext",
        "outDir": "dist"
    } 
```
컴파일할 코드가 dist라는 폴더를 생성하여 그 폴더 내에 생성된다 라는 의미를 나타낸다. <br>

작성한 코드와 분리하여 독립적인 폴더로 관리할 때 용이하다.
</p>


<h4>strict 옵션<h4>
<p>
타입스크립트 컴파일러의 타입 검사 엄격함 수준을 정하는 옵션이다.<br>

```
    "compilerOptions" {
        "target": "ESNext",
        "module": "ESNext",
        "outDir": "dist",
        "strict": true // or false
    } 
```
<br>

```
export const hello = (message) => {
    console.log("hello" + message)
}
```

위와 같이 message 매개변수를 추가하여 hello.ts를 수정하게 되었을 때<br>
strict옵션이 false로 되어있다면 아무런 오류가 발생하지 않지만<br>
true로 변경하게 된다면 빨간줄이 뜨며 오류를 알려주곤 합니다.
</p>


<h4>ModuleDetection 옵션<h4>
<p>
타입스크립트의 모든 파일은 기본적으로 전역 파일(모듈)로 취급합니다.<br>

```
// a.ts
const a = 1;

//b.ts
const a = 1;
```
따라서 위와 같이 파일을 생성하여 코드를 입력하면 오류가 발생합니다.<br>

이럴 때 전역 모듈이 아닌 로컬(독립) 모듈로 취급되도록 만들기 위해 ``자동화`` 하는 옵션이 ``moduleDetection`` 옵션입니다.

```
    "compilerOptions" {
        "target": "ESNext",
        "module": "ESNext",
        "outDir": "dist",
        "strict": false,
        "moduleDetection": "force"
    } 
```
</p>


<h4>ts-node 옵션<h4>
<p>


</p>
