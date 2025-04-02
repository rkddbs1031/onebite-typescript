console.log("Hello Typescript");
const a: number = 1;
/*
    1. tsc src/index.ts
    => src 폴더내에 index.js 파일이 컴파일되어 생성됨    
    
    2.node src/index.js
    =>  컴퍼일된 js code는 node를 이용하여 실행 
    => Hello Typescript 출력됨.
    
    3. tsx로 실행하기
    => 2번의 명령어말고 타입스크립트 코드를 바로 실행시켜주는 도구 tsx
    => npm i -g tsx

    4. tsx src/index.ts
    => Hello Typescript 출력됨
*/