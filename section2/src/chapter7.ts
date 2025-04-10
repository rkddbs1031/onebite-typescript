//void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// undefined과 null 타입을 쓰면 되는데 왜 void 타입을 쓰는가?

// never
// never -> 존재하지 않는 불가능한 타입

function func3(): never {
  while (true) {}
}
