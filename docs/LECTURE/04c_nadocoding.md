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

<h3>🔸 printfscanf.c</h3>

```c
#include <stdio.h>

int main(void)
{
	// 정수형 변수에 대한 예제
	int age = 12;
	printf("%d\n", age); // %d: 정수값 출력
	age = 13;
	printf("%d\n", age); // %d: 정수값 출력*/

	printf("----------------\n");

	// 실수형 변수에 대한 예제
	float f = 46.5;
	printf("%f\n", f);
	printf("%.2f\n", f); // .2 소수점 둘째자리까지 출력
	double d = 4.428;
	printf("%.2lf\n", d);

	printf("----------------\n");

	// 상수 (선언 후, 변경 불가)
	const int YEAR = 2000;
	printf("태어난 년도 : %d\n", YEAR);
	// YEAR = 2001; 주석 지우면 에러 뜸

	return 0;
}
```

<h3>🔹 console</h3>


## Reference

[C 프로그래밍 - 입문부터 게임 개발까지](https://www.inflearn.com/course/c-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EA%B2%8C%EC%9E%84/dashboard)