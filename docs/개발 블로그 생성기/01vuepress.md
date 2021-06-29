# 01. vuepress 프로젝트 생성

✍🏻 **뭐 꾸준히는 아니어도 개발 블로그가 필요할 거 같아서 어떻게 운영할까 고민하다가 ..**

**이번에 vue도 배웠겠다, vuepress 를 활용해서 미루고 미루던 github page를 만들어보기 결심**

📌 **먼저, git repository를 생성해주자.**

## git repository 생성

![vuepress](../.vuepress/public/img/vuepress/01/1.png)

난 이미 있는 만든 블로그라 저렇게 빨간색이 뜨긴 하지만.. 저 이름이 나중에 블로그의 domain에 포함될 것이다.

<br/>

📌 **cmd에서 원하는 디렉토리를 생성한 후에 클론을 해주자. 일단 아무것도 없으니 empty repository라고 뜰테고.. 디렉토리에는 `.git` 폴더가 생성되어 있을거다.**

```bash
mkdir 디렉토리 && cd 디렉토리
```

```bash
git clone https://github.com/hueleev/leehyungwon.git
```

<br/>

📌 **이제 프로젝트를 vsc에서 열어주자 (cmd에서 디렉토리로 간 후, `code .` 를 하면 자동으로 vsc가 열린다.) vsc에서 터미널을 연 후, 아래와 같이 입력해준다.**

> **package json 생성**

```bash
npm init
```

> **vuepress 설치**

```bash
npm install -D vuepress
```

<br/>

📌 **자 이제 첫 게시글을 써보자!**

> `docs` 폴더를 `package.json`과 같은 depth에 생성해주고, markdown을 작성해보자.

```bash
mkdir docs
```

```bash
echo # Hello VuePress > docs/README.md
```
<br/>

📌 **package.json에 script를 아래와 같이 수정해주자.**

```bash
{
	"scripts": {
		"docs:dev": "vuepress dev docs",
		"docs:build": "vuepress build docs"
	}
}
```

<br/>

📌 **터미널에 아래 스크립트를 입력하여 로컬에 띄워보자.**

```bash
npm run docs:dev
```

> **[http://localhost:8080](http://localhost:8080) 접속 시, 아래와 같이 프로젝트가 뜨면 성공!**

![vuepress](../.vuepress/public/img/vuepress/01/2.png)

### Reference

---

[https://vuepress.vuejs.org/guide/getting-started.html#manual-installation](https://vuepress.vuejs.org/guide/getting-started.html#manual-installation)

[https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-start/#설치](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-start/#%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5)