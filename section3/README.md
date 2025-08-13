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
