---
title: 🎈 C 프로그래밍 - 입문부터 게임 개발까지 (inflearn)
meta:
  - name: description
    content: mysql inflearn
  - name: keywords
    content: mysql inflearn
---

# 🎈 C 프로그래밍 - 입문부터 게임 개발까지 (inflearn)

## 1. 변수, 상수, 입출력

<h3>🔸 code</h3>

```c
#include <stdio.h>

int main(void)
{
	// - 정수형 변수에 대한 예제
	int age = 12;
	printf("%d\n", age); // %d: 정수값 출력
	age = 13;
	printf("%d\n", age); // %d: 정수값 출력*/

	printf("----------------\n");

	// - 실수형 변수에 대한 예제
	float f = 46.5;
	printf("%f\n", f);
	printf("%.2f\n", f); // .2 소수점 둘째자리까지 출력
	double d = 4.428;
	printf("%.2lf\n", d);

	printf("----------------\n");

	// - 상수 (선언 후, 변경 불가)
	const int YEAR = 2000;
	printf("태어난 년도 : %d\n", YEAR);
	// YEAR = 2001; 주석 지우면 에러 뜸

	printf("----------------\n");

	// - printf
	int add = 3 + 7;
	printf("3 + 7 = %d\n", add);
	printf("%d * %d = %d\n", 30, 79, 30*79);

	printf("----------------\n");

	// - scanf : 키보드 입력을 받아서 저장
	/*
		- scanf를 사용할 때 내부적으로 구동되는 방식은
		  1. 값을 입력받는다.
		  2. 그 값을 레지스터에 임시로 저장하고 *레지스터란 임시의 저장공간이라 생각하면 된다.
		  3. 변수의 주소로 찾아가 그 주소가 가리키는 메모리에 레지스터에 있는 값(입력한 값)을 저장한다.
		  4. 레지스터에 있던 값은 지운다.
		- 즉, 값을 입력하려면 변수의 주소가 필요하기 때문에 &를 써야한다.
	*/
	int input;
	printf("값을 입력하세요 : ");
	scanf_s("%d", &input); // &의 경우 주소값을 저장하는 개념이다.
	printf("입력값: %d:\n", input);

	int one, two, three;
	printf("3개 정수를 입력하세요 : ");
	scanf_s("%d %d %d", &one, &two, &three);
	printf("첫번째 값 : %d\n", one);
	printf("두번째 값 : %d\n", two);
	printf("세번째 값 : %d\n", three);

	printf("----------------\n");

	// - 문자(한 글자)
	char c = 'A';
	printf("문자: %c\n", c);
	// - 문자열(한 글자 이상의 여러 글자)
	char str[256];
	printf("문자열을 입력하세요 : ");
	scanf_s("%s", str, sizeof(str)); //  문자열(%s)을 집어넣을 경우엔 문자열 자체(변수가 포인터거나 배열 일때)는 주소이므로 안써도 된다.
	printf("%s\n", str);

	return 0;
}
```

<h3>🔹 console</h3>

```bash
12
13
----------------
46.500000
46.50
4.43
----------------
태어난 년도 : 2000
----------------
3 + 7 = 10
30 * 79 = 2370
----------------
값을 입력하세요 : 1
입력값: 1:
3개 정수를 입력하세요 : 1 2 3
첫번째 값 : 1
두번째 값 : 2
세번째 값 : 3
----------------
문자: A
문자열을 입력하세요 : TEST
TEST
```

## 1.1 미니 프로젝트

<h3>🔸 code</h3>

```c
#include <stdio.h>

int main(void)
{
	printf("---------미니 프로젝트---------\n");
	// 경찰관이 범죄자의 정보를 입수 (조서 작성)
	// 이름? 나이? 모뭄게? 키? 범죄명?
	char name[256];
	printf("이름이 뭐예요? ");
	scanf_s("%s", name, sizeof(name));

	int age;
	printf("몇 살이에요? ");
	scanf_s("%d", &age);

	float weight;
	printf("몸무게는 몇 kg 이에요? ");
	scanf_s("%f", &weight);

	double height;
	printf("키는 몇 cm이에요? ");
	scanf_s("%lf", &height);

	char what[256];
	printf("무슨 범죄를 저질렀어요? ");
	scanf_s("%s", what, sizeof(what));

	// 조서 내용 출력
	printf("\n\n--- 범죄자 정보 ---\n\n");
	printf(" 이름		: %s\n", name);
	printf(" 나이		: %d\n", age);
	printf(" 몸무게		: %.2f\n", weight);
	printf(" 키		: %.2lf\n", height);
	printf(" 범죄		: %s\n", what);

	return 0;
}
```

<h3>🔹 console</h3>

```bash
---------미니 프로젝트---------
이름이 뭐예요? 나도코딩
몇 살이에요? 12
몸무게는 몇 kg 이에요? 46.5
키는 몇 cm이에요? 190.23
무슨 범죄를 저질렀어요? 지각


--- 범죄자 정보 ---

 이름           : 나도코딩
 나이           : 12
 몸무게         : 46.50
 키             : 190.23
 범죄           : 지각
```

## 2. 반복문



## Reference

[C 프로그래밍 - 입문부터 게임 개발까지](https://www.inflearn.com/course/c-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EA%B2%8C%EC%9E%84/dashboard)
[scanf()함수에서 &(ampersand)를 쓰는 이유](https://security-nanglam.tistory.com/194)