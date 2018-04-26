# Bit
Bit 프로젝트는 DataView 기반의 바이너리 정보를 해싱하는 기능을 가진 모듈을 개발하는 프로젝트이다.

클라이언트(브라우저)에서 MD5 해싱을 사용할 수 있는 모듈을 검색하다가 구글에서 만든 [CryptJs](https://code.google.com/archive/p/crypto-js/)를 알게 되어, 이 모듈을 가지고 테스트를 진행하였는데, 이 모듈은 입력 값으로 문자열 또는 WordArray 객체를 받기 때문에, 바이너리 데이터를 해싱하기에는 문제가 있었다. 더불어 정확한 이유는 파악하지는 못했지만 CryptJS.MD5의 결과는 Java 또는 .NET에서의 실험 결과와는 다르게 나오기 때문에 이 모듈을 사용할 수 없었다. 그래서 호환이 출력이 동일한 모듈을 만들기 위해서 프로젝트를 진행하였고 일차적으로 동일한 결과를 얻을 수 있었다. 다만 이 해싱 모듈이 정확한 알고리즘을 가지고 동작하는지는 수 차례의 추가 테스트가 필요할 것 같다.

## 설치 방법
특별한 설치 방법은 없으며, 현재 프로젝트의 js 디렉터리에 있는 bit.js 파일을 복사해서 사용하는 것이 전부이다.

## 개발 환경 설정
### Node.js
노드를 잘 몰라서 어떻게 사용해야 하는지 모른다.
### Browser
bit.js 파일을 연결하는 것이 전부이다.
<pre>
&lt;script src="{path}/bit.js"&gt;&lt;/script&gt;
</pre>

## 사용 방법
프로젝트는 HTML 파일과 JS 파일로 구성되어 있는데, example 디렉터리에 있는 index.html을 브라우저로 열면, 각각의 파일을 해싱하는 예제가 링크되어 있을 것이다.

일반적인 사용법은 다음과 같다.
<pre>
// 입력 값이 되는 DataView 객체이다.
var input = new DataView(...);
// Bit.md5는 입력값으로부터 해싱된 결과를 16바이트 길이를 갖는 DataView 객체를 반환한다.
var hashed = Bit.md5(input, 0, input.byteLength);
// DataView 객체 정보를 16진수 문자열로 만들어 반환한다.
var output = Bit.hex(hashed);
</pre>

## 업데이트 내역
### 1.0.0 (2018-04-26)
- 최초 생성

## 라이선스
Apache 2.0

## Credit
- [creationix/md5.c](https://gist.github.com/creationix/4710780)
- [MD5/Implementation](https://rosettacode.org/wiki/MD5/Implementation#C.23)

## 기타
karkata@gmail.com
