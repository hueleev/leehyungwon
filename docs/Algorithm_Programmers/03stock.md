---
title: 03. 주식가격_스택/큐 | 프로그래머스 (JAVA) | STACK | QUEUE
meta:
  - name: description
    content: Java algorithm Programmers Stack Queue 알고리즘 프로그래머스 주식가격 스택 큐 
  - name: keywords
    content: Java algorithm Programmers Stack Queue 알고리즘 프로그래머스 주식가격 스택 큐 
---

# 02. 주식가격_스택/큐 | 프로그래머스 (JAVA) | STACK | QUEUE

## 🔒 [문제](https://programmers.co.kr/learn/courses/30/lessons/42584)

초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

### **📢 제한사항**

* **prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.**

* **prices의 길이는 2 이상 100,000 이하입니다.**

### **📢 입출력 예**

| prices	| return |
| --- | --- |
| [2, 1, 3, 2]	| [4, 3, 1, 1, 0] |

### **📢 입출력 예 설명**

* 1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
* 2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
* 3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
* 4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
* 5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.

## 🔐

이번 문제는 그렇게 어렵지는 않았다.

`Stack` `Queue` 관련 문제라 `Queue`를 사용해서 풀었지만, 그냥 `list`에 담아서 풀어도 되는 문제

::: details 💎
주식 가격을 `Queue`에 담은 후, 하나씩 빼가면서 비교만 해주면 되는 간단한 문제
:::

## 🔑 풀이

```java
public class StackQue_005_Stock {

    private static int[] prices = {1,2,3,2,3};

    public static int[] solution() {
        int[] answer = new int[prices.length];

        Queue<Integer> stockList = new LinkedList<>();
        for(int i : prices) {
            stockList.offer(i);
        }

        int idx = 0;

        while(!stockList.isEmpty()) {
            int target = stockList.poll();

            answer[idx] = 0;

            for (int i : stockList) {
                answer[idx]++;
                if (target > i) {
                    break;
                }
            }

            idx++;
        }

        return answer;
    }
}
```