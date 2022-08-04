---
title: 04. 더 맵게_힙 | 프로그래머스 (JAVA) | HEAP | QUEUE
meta:
  - name: description
    content: Java algorithm Programmers Heap Queue 알고리즘 프로그래머스 더맵게 힙 큐
  - name: keywords
    content: Java algorithm Programmers Heap Queue 알고리즘 프로그래머스 더맵게 힙 큐
---

# 04. 더 맵게_힙 | 프로그래머스 (JAVA) | HEAP | QUEUE

## 🔒 [문제](https://programmers.co.kr/learn/courses/30/lessons/42626?language=java)

매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

섞은 음식의 **스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)**
Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

### **📢 제한사항**

* **scoville의 길이는 2 이상 1,000,000 이하입니다.**

* **K는 0 이상 1,000,000,000 이하입니다.**

* **scoville의 원소는 각각 0 이상 1,000,000 이하입니다.**

* **모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.**

### **📢 입출력 예**

| scoville	| K | return |
| --- | --- | --- |
| [1, 2, 3, 9, 10, 12]	| 7 | 2 |

### **📢 입출력 예 설명**

* 스코빌 지수가 1인 음식과 2인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.

> 새로운 음식의 스코빌 지수 = 1 + (2 * 2) = 5

> 가진 음식의 스코빌 지수 = [5, 3, 9, 10, 12]
* 스코빌 지수가 3인 음식과 5인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.

> 새로운 음식의 스코빌 지수 = 3 + (5 * 2) = 13 

> 가진 음식의 스코빌 지수 = [13, 9, 10, 12]

모든 음식의 스코빌 지수가 7 이상이 되었고 이때 섞은 횟수는 2회입니다.

## 🔐

`Collections`를 사용해서 `sort`하려고 했는데, `Priority Queue` 라는게 있었다.

```java
import java.util.PriorityQueue; //import

//int형 priorityQueue 선언 (우선순위가 낮은 숫자 순)
PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();

//int형 priorityQueue 선언 (우선순위가 높은 숫자 순)
PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(Collections.reverseOrder());

//String형 priorityQueue 선언 (우선순위가 낮은 숫자 순)
PriorityQueue<String> priorityQueue = new PriorityQueue<>(); 

//String형 priorityQueue 선언 (우선순위가 높은 숫자 순)
PriorityQueue<String> priorityQueue = new PriorityQueue<>(Collections.reverseOrder());
```

::: details 💎
`Queue`에 스코빌 지수를 담은 후, 담긴 값이 K보다 낮을 경우 계속 섞어주면 된다. 

**이 때, 아무리 섞어도 모든 음식이 K이상으로 지수가 나오지 않는다면 -1을 리턴해주라고 문제에 명시돼있는 걸 놓쳐서 헤맸다.**

문제를 제대로 읽자!
:::

## 🔑 풀이

```java
public class Heap_001_Scoville {

    private static int[] scoville = {1,2,3,9,10,12};
    private static int K = 7;

    public static int[] solution() {
        List<Integer> scovList = new ArrayList<>();
        for (int i : scoville) {
            scovList.add(i);
        }

        PriorityQueue<Integer> heap = new PriorityQueue<>();
        scovList.forEach(heap::offer);

        int answer = 0;

        while (heap.peek() < K) {
            if (heap.size() < 2) {
                return -1;
            }
            int a = heap.poll();
            int b = heap.poll();

            heap.offer(a + (b * 2));
            answer++;
        }

        return answer;
    }
}
```

### Reference

---

[Priority Queue](https://coding-factory.tistory.com/603)
