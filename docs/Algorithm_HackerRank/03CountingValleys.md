---
title: 03. Counting Valleys | 해커랭크 (HackerRank) | JAVA
meta:
  - name: description
    content: Java algorithm HackerRank 알고리즘 해커랭크
  - name: keywords
    content: Java algorithm HackerRank 알고리즘 해커랭크
---

# 03. Counting Valleys | 해커랭크 (HackerRank) | JAVA

## 🔒 문제

<<<<<<< HEAD
문제가 헷갈렸다 ,, 영어 문제는 역시 어려워 ㅠㅠ <br/>
*sealevel*을 0으로 보고, 0 위로 올라갔다 0으로 돌아오면 mountain, 0 아래에서 올라와 0으로 돌아오면 valley로 본다.<br/>
__valley를 counting 해주면 되는 문제 -__<br/>
=======
문제가 헷갈렸다 ,, 영어 문제는 역시 어려워 ㅠㅠ
sealevel을 0으로 보고, 0 위로 올라갔다 0으로 돌아오면 mountain, 0 아래에서 올라와 0으로 돌아오면 valley로 본다.
valley를 counting 해주면 되는 문제 -
>>>>>>> 7f15de044e06637fb7ed035fe2ac04d4ff20a4dd

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
     * Complete the 'countingValleys' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER steps
     *  2. STRING path
     */

    public static int countingValleys(int steps, String path) {
        // Write your code here
        int footStep = 0;
        int answer = 0;
        
        for (String hill : path.split("")) {
            int preFootStep = footStep;
            if (hill.equals("U")) {
                footStep++;
            } else {
                footStep--;
            }
            
            if (footStep == 0 && preFootStep < 0) {
                answer++;
            }
        }

        return answer;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int steps = Integer.parseInt(bufferedReader.readLine().trim());

        String path = bufferedReader.readLine();

        int result = Result.countingValleys(steps, path);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
```

### Reference

---

<<<<<<< HEAD
[HackerRank_Counting Valleys](https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
=======
[HackerRank_Counting Valleys](https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
>>>>>>> 7f15de044e06637fb7ed035fe2ac04d4ff20a4dd
