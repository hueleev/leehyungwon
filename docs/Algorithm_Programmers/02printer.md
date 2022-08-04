---
title: 02. 프린터_스택/큐 | 프로그래머스 (JAVA) | STACK | QUEUE
meta:
  - name: description
    content: Java algorithm Programmers Stack Queue 알고리즘 프로그래머스 베스트앨범 스택 큐 
  - name: keywords
    content: Java algorithm Programmers Stack Queue 알고리즘 프로그래머스 베스트앨범 스택 큐 
---

# 02. 프린터_스택/큐 | 프로그래머스 (JAVA) | STACK | QUEUE

## 🔒 [문제](https://programmers.co.kr/learn/courses/30/lessons/42587)

일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 <u>**중요도가 높은 문서를 먼저 인쇄하는 프린터**</u>를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

**📌 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.**

**📌 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.**

**📌 그렇지 않으면 J를 인쇄합니다.**

예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

### **📢 제한사항**

* **현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.**

* **인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.**

* **location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.**

### **📢 입출력 예**

| priorities	| location	| return |
| --- | --- | --- |
| [2, 1, 3, 2]	| 2	| 1 |
| [1, 1, 9, 1, 1, 1]	| 0 |	5 |

### **📢 입출력 예 설명**

* **예제 #1**

문제에 나온 예와 같습니다.

* **예제 #2**

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.

## 🔐

**먼저, Stack과 Queue에 대해서 자세히 스터디해보자.**

### 스택 (Stack)

---

`Stack`이란 쌓아올린다는 것을 의미하며, **후입선출 (LIFO, Last-In-First-Out)** 개념이라고 보면 된다.

즉, 가장 마지막에 삽입된 자료가 가장 먼저 삭제되며 가장 처음에 삽입된 자료가 가장 나중에 삭제된다.

* **삽입하는 연산 `push`**

* **삭제하는 연산 `pop`**

### 큐 (Queue)

---

`Queue`는 줄을 서서 기다리는 것을 의미하며, **선입선출 (FIFO, First-In-First-Out)** 개념이라고 보면 된다.

즉, 가장 처음에 삽입된 자료가 가장 처음에 삭제되며 가장 처음에 나중에 삽입된 자료가 가장 나중에 삭제 된다.

* **삽입하는 연산 `offer`**

* **삭제하는 연산 `poll`**

---

::: details 💎
해당 문제를 풀기 위해서, 먼저 인덱스와 중요도를 담은 Print 클래스를 만들어주었다.

그리고 Queue에 Print를 전부 넣어준 후,

Queue안에 아무것도 남지 않을 때 까지 중요도를 비교해주었다.

Queue 안에 타겟보다 중요도가 높은 자료가 있을 경우, 다시 Queue안에 집어넣어주었다.
:::

## 🔑 풀이

```java
public class StackQue_004_Printer {
    private static int[] priorities = {1, 1, 9, 1, 1, 1};
    private static int location = 0;

    public static int solution() {
        // 프린트 인덱스 담을 Queue
        Queue<Print> printList = new LinkedList<>();
        for (int i = 0; i < priorities.length; i++) {
            printList.offer(new Print(i, priorities[i]));
        }

        // 프린트될때마다 카운트
        int answer = 0;

        // 프린트할 자료가 더이상 없을때까지
        while(!printList.isEmpty()) {
            Print print = printList.poll();

            boolean printFlag = true; // 프린트했나?

            for (Print p : printList) {
              // 중요도 비교 후,  
              if (print.getPriority() < p.getPriority()) {
                  printList.offer(print);
                  printFlag = false;
                  break; 
              }
            }

            if (printFlag) {
                answer++;
                if (print.getIdx() == location) { // 인덱스 일치할 경우, break
                    break;
                }
            }
        }

        return answer;
    }
}

class Print {
    private int idx;
    private int priority;

    public Print(int idx, int priority) {
        this.idx = idx;
        this.priority = priority;
    }

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
```

### Reference

---

[https://devuna.tistory.com/22](https://devuna.tistory.com/22)