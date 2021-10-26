---
title:  01. Sales By Match | 해커랭크 (HackerRank) | JAVA
meta:
  - name: description
    content: Java algorithm HackerRank 알고리즘 해커랭크
  - name: keywords
    content: Java algorithm HackerRank 알고리즘 해커랭크
---

# 01. Sales By Match | 해커랭크 (HackerRank) | JAVA

## 🔑 풀이

```java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'sockMerchant' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. INTEGER_ARRAY ar
     */

    public static int sockMerchant(int n, List<Integer> ar) {
    // Write your code here
        Map<Integer,Integer> testMap = new HashMap<>();
        int pair = 0;
        for (int color : ar) {
            if (testMap.containsKey(color)) { // 짝이 있는 경우
                pair++; // Pair 1 더해주고
                testMap.remove(color); // map에서 지워주기
            } else {
                testMap.put(color, 1); // 짝없는 경우 map에 추가
            }
        }
        return pair;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> ar = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        int result = Result.sockMerchant(n, ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

```

### Reference

---

[HackerRank_Sales By Match](https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting)