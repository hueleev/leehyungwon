---
title: 01. 리눅스 Compile (configure/make/MakeFile)
meta:
  - name: description
    content: linux 리눅스 compile 컴파일 configure make makefile 
  - name: keywords
    content: linux 리눅스 compile 컴파일 configure make makefile 
---

# 01. 리눅스 Compile (configure/make/MakeFile)

**🎨 일반적으로 소스 패키지 설치는 `configure` 👉 `make` 👉 `make install` 의 3단계로 이루어진다.**

## configure

**내게 필요한 도구가 다 있는지, 라이브러리는 다 있는지 체크해주고,  소스파일에 대한 환경설정을 해주는 명령어.**

- 서버 환경에 맞춰 `Makefile`을 생성해주는 과정
- 소스를 사용할 컴퓨터와 사용자의 환경에 맞게 컴퓨터가 어떤 기종이고 컴파일에 필요한 시스템 파일들은 어디에 위치해 있으며, 특정한 곳에 설치를 하겟다고 지정을 하는 것.

  ```bash
  ./configure
  ```
<br/>

- 설치할 때 옵션을 주지 않으면 기본적으로 `/usr/local/bin` 이나 `/usr/local/lib` 밑에 설치하는데, 이 디렉토리들은 관리자 권한 없이는 접근할 수 없음. 이 경우에는 `--prefix` 옵션을 주어 설치 디렉토리를 바꿔야함.
    
    ```bash
    # 어떤 파일을 /usr/local/mysql 이라는 곳에 설치하겠다는 의미
    ./configure —prefix=/user/local/mysql
    ```
    
<br/>

- `configure` 단계에서 에러를 내며 멈출 경우, 빌더 환경이 잘 갖추어져 있지 않다는 것을 의미함.
    - 필요한 프로그램이나 라이브러리가 없는 경우가 대부분이므로, 오류 메세지나 빌드 문서를 잘 읽어보고 필요한 프로그램이나 라이브러를 설치하면 됨.
    
    ```bash
    # configure 옵션을 잘못 주어서 다시 시작하고 싶을 때,
    make distclean
    
    # 다음 configure 부터 다시 시작하면 됨.
    ```

## make

**파일 간의 종속 관계를 파악하여 `Makefile`(기술파일)에 적힌대로 컴파일러에 명령하여 shell 명령이 순차적으로 실행될 수 있게 한다.**

- `make` 과정이 끝나고 나면 설치파일이 생성된 상태라고 볼 수 있다.
- `make`에게 어떤 프로그램을 컴파일하고 링크해야 하는 지 방법을 설명한 것이 `Makefile`이다.

  ```bash
  make
  ```

<br/>

:::tip 💡 장점
✔️ 각 파일에 대한 반복적 명령의 자동화로 인한 시간 절약
✔️ 프로그램의 종속 구조를 빠르게 파악할 수 있으며 관리가 용이
✔️ 단순 반복 작업 및 재작성을 최소화
:::

<br/>

- `make`가 실패하는 경우는 보통 컴파일 에러이다. 이때는 컴파일 에러를 해결한 후, 처음부터 다시 컴파일하는 것을 추천.
- `make clean`하면 컴파일이 취소되고, `make`를 치면 다시 컴파일 할 수 있다.
    ```bash
    # 컴파일 취소
    make clean
    ```

## make install

**`make`를 통해 만들어진 설치파일을 설치하는 과정.**

- build된 프로그램을 실행 할 수 있게 파일들을 알맞은 위치에다가 복사한다.

  ```bash
  make install
  ```

<br/>

- 설치 제거를 하려면 `make`를 했던 디렉토리로 돌아와 `make uninstall`을 입력

  ```bash
  # 설치 제거
  make uninstall
  ```

### Reference

---

[https://itdexter.tistory.com/325](https://itdexter.tistory.com/325)

[https://bowbowbow.tistory.com/12](https://bowbowbow.tistory.com/12)

[https://positivemh.tistory.com/462](https://positivemh.tistory.com/462)