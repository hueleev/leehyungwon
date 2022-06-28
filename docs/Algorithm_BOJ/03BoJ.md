---
title: 03. 백준 문제 모음 | Dynamic Programming | JAVA | BOJ
meta:
  - name: description
    content: 백준 동적계획법 Dynamic Programming BOJ JAVA
  - name: keywords
    content: 백준 동적계획법 Dynamic Programming BOJ JAVA
---

# 02. 백준 문제 모음 | Dynamic Programming | JAVA | BOJ

🤠 여러 백준 문제 모음으로 [알고리즘 문제풀이(PS) 시작하기](https://plzrun.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4PS-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0) 글에서 뽑아준 문제들로만 정리해봤다. DP 다음으로 정리된 문제들 모음이다. 람다나 스트림 같은 걸 활용하면 좋은 문제가 많으므로 [모던 자바 인 액션](https://hueleev.github.io/JAVA_%EB%AA%A8%EB%8D%98%20%EC%9E%90%EB%B0%94%20%EC%9D%B8%20%EC%95%A1%EC%85%98/01.html)을 정리해둔 걸 한번 훑어보면 좋을 거 같다.

## [2751. 수 정렬하기 2](http://boj.kr/2751)

<h3>🔒 문제</h3>

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

<h3>📢 출력</h3>
 
* 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5<br/>5<br/>4<br/>3<br/>2<br/>1 | 1<br/>2<br/>3<br/>4<br/>5 |

<h3>🔑 풀이</h3>

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader((new InputStreamReader(System.in)));
        Integer n = Integer.parseInt(br.readLine());

        List<Integer> arr = new ArrayList<>();

        for (int i=1; i<=n; i++) {
            arr.add(Integer.parseInt(br.readLine()));
        }

        Collections.sort(arr);

        StringBuilder ans = new StringBuilder();
        for (int value : arr) {
            ans.append(value).append("\n");
        }
        System.out.println(ans);
    }
}
```

## [11650. 좌표 정렬하기](http://boj.kr/11650)

<h3>🔒 문제</h3>

2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 $x_i$와 $y_i$가 주어진다. ($-100,000 ≤ x_i$, $y_i ≤ 100,000$) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

<h3>📢 출력</h3>
 
* 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5<br/>3 4<br/>1 1<br/>1 -1<br/>2 2<br/>3 3 | 1 -1<br/>1 1<br/>2 2<br/>3 3<br/>3 4 |

<h3>🔐</h3>

람다식을 활용하여 sort 한다.

<h3>🔑 풀이</h3>

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader((new InputStreamReader(System.in)));
        int n = Integer.parseInt(br.readLine());

        int[][] xy = new int[n][2];

        for (int i=0; i<n; i++) {
            String[] line = br.readLine().split(" ");
            xy[i][0] = Integer.parseInt(line[0]);
            xy[i][1] = Integer.parseInt(line[1]);
        }

        Arrays.sort(xy, (el1, el2) -> {
            if (el1[0] == el2[0]) {
                return el1[1] - el2[1];
            }
            else {
                return el1[0] - el2[0];
            }
        });

        for(int i=0; i<n; i++) {
            System.out.println(xy[i][0] + " " + xy[i][1]);
        }
    }
}
```

## [11651. 좌표 정렬하기2](http://boj.kr/11651)

<h3>🔒 문제</h3>

2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 $x_i$와 $y_i$가 주어진다. ($-100,000 ≤ x_i$, $y_i ≤ 100,000$) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

<h3>📢 출력</h3>
 
* 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 5<br/>0 4<br/>1 2<br/>1 -1<br/>2 2<br/>3 3 | 1 -1<br/>1 2<br/>2 2<br/>3 3<br/>0 4 |

<h3>🔐</h3>

람다식을 활용하여 sort 한다.

<h3>🔑 풀이</h3>

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader((new InputStreamReader(System.in)));
        int n = Integer.parseInt(br.readLine());

        int[][] xy = new int[n][2];

        for (int i=0; i<n; i++) {
            String[] line = br.readLine().split(" ");
            xy[i][0] = Integer.parseInt(line[0]);
            xy[i][1] = Integer.parseInt(line[1]);
        }

        Arrays.sort(xy, (el1, el2) -> {
            if (el1[1] == el2[1]) {
                return el1[0] - el2[0];
            }
            else {
                return el1[1] - el2[1];
            }
        });

        for(int i=0; i<n; i++) {
            System.out.println(xy[i][0] + " " + xy[i][1]);
        }
    }
}
```

## [10814. 나이순 정렬](http://boj.kr/10814)

<h3>🔒 문제</h3>

온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.

<h3>📢 입력</h3>

* 첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)

둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 입력은 가입한 순서로 주어진다.

<h3>📢 출력</h3>
 
* 첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 3<br/>21 Junkyu<br/>21 Dohyun<br/>20 Sunyoung | 20 Sunyoung<br/>21 Junkyu<br/>21 Dohyun |

<h3>🔐</h3>

람다식을 활용하여 sort 한다.

<h3>🔑 풀이</h3>

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader((new InputStreamReader(System.in)));
        int n = Integer.parseInt(br.readLine());

        List<String> arr = new ArrayList<>();

        for (int i=0; i<n; i++) {
            arr.add(br.readLine());
        }

        arr.sort((a, b)-> {
            int age = Integer.parseInt(a.split(" ")[0]);
            int age2 = Integer.parseInt(b.split(" ")[0]);

            if (age == age2) {
                return 0;
            } else {
                return age-age2;
            }
        });

        for(int i=0; i<n; i++) {
            System.out.println(arr.get(i));
        }
    }
}
```

## [10825. 국영수](http://boj.kr/10825)

<h3>🔒 문제</h3>

도현이네 반 학생 N명의 이름과 국어, 영어, 수학 점수가 주어진다. 이때, 다음과 같은 조건으로 학생의 성적을 정렬하는 프로그램을 작성하시오.

1. 국어 점수가 감소하는 순서로
2. 국어 점수가 같으면 영어 점수가 증가하는 순서로
3. 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
4. 모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)

<h3>📢 입력</h3>

* 첫째 줄에 도현이네 반의 학생의 수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 한 줄에 하나씩 각 학생의 이름, 국어, 영어, 수학 점수가 공백으로 구분해 주어진다. 점수는 1보다 크거나 같고, 100보다 작거나 같은 자연수이다. 이름은 알파벳 대소문자로 이루어진 문자열이고, 길이는 10자리를 넘지 않는다.

<h3>📢 출력</h3>
 
* 문제에 나와있는 정렬 기준으로 정렬한 후 첫째 줄부터 N개의 줄에 걸쳐 각 학생의 이름을 출력한다.

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 12<br/>Junkyu 50 60 100<br/>Sangkeun 80 60 50<br/>Sunyoung 80 70 100<br/>Soong 50 60 90<br/>Haebin 50 60 100<br/>Kangsoo 60 80 100<br/>Donghyuk 80 60 100<br/>Sei 70 70 70<br/>Wonseob 70 70 90<br/>Sanghyun 70 70 80<br/>nsj 80 80 80<br/>Taewhan 50 60 90 | Donghyuk<br/>Sangkeun<br/>Sunyoung<br/>nsj<br/>Wonseob<br/>Sanghyun<br/>Sei<br/>Kangsoo<br/>Haebin<br/>Junkyu<br/>Soong<br/>Taewhan |

<h3>🔐</h3>

람다식을 활용하여 sort 한다.

<h3>🔑 풀이</h3>

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader((new InputStreamReader(System.in)));
        int n = Integer.parseInt(br.readLine());

        List<Student> arr = new ArrayList<>();

        for (int i=0; i<n; i++) {
            String[] line = br.readLine().split(" ");
            arr.add(new Student(line[0], Integer.parseInt(line[1]), Integer.parseInt(line[2]),Integer.parseInt(line[3])));
        }

        arr.sort((s1, s2)-> {
            if (s1.getEng() == s2.getEng() && s1.getKor() == s2.getKor() && s1.getMath() == s2.getMath()) {
                return s1.getName().compareTo(s2.getName());
            } else if (s1.getEng() == s2.getEng() && s1.getKor() == s2.getKor()) {
                return s2.getMath() - s1.getMath();
            } else if (s1.getKor() == s2.getKor()) {
                return s1.getEng() - s2.getEng();
            } else {
                return s2.getKor() - s1.getKor();
            }
        });

        for(int i=0; i<n; i++) {
            System.out.println(arr.get(i).getName());
        }
    }
}

// 학생 클래스
class Student {
    private String name;
    private int kor;
    private int eng;
    private int math;

    public Student(String name, int kor, int eng, int math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getKor() {
        return kor;
    }

    public void setKor(int kor) {
        this.kor = kor;
    }

    public int getEng() {
        return eng;
    }

    public void setEng(int eng) {
        this.eng = eng;
    }

    public int getMath() {
        return math;
    }

    public void setMath(int math) {
        this.math = math;
    }
}
```
<!--
## [문제번호. 제목](http://boj.kr/문제번호)

<h3>🔒 문제</h3>
수식: $S_k$를 기준으로 $S_1 < S_2 < ... S_{k-1} < S_k > S_{k+1} > ... S_(N-1) > S_N$

<h3>📢 입력</h3>

* 

<h3>📢 출력</h3>
 
* 

<h3>📢 입출력 예</h3>

| 예제 입력 1 | 예제 출력 1 |
| --- | --- |
| 10 | 7 |

<h3>📢 힌트</h3>

힌트

<h3>🔐</h3>

풀이방법

<h3>🔑 풀이</h3>

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); 
    }
}
```
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader((new InputStreamReader(System.in)));
        int N = Integer.parseInt(br.readLine());
    }
}
```
-->