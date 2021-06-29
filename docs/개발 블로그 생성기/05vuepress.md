# 05. 검색엔진 SEO 최적화

💖 **키워드를 검색하면 내 블로그가 뜰 수 있게 얼른 SEO랑 댓글 기능을 적용해야겠다!**

## Sitemap

`Sitemap.xml` 은 검색 엔진 크롤링 로봇에게 크롤링해야 할 URL을 전달한다.

이 파일이 해당 사이트의 URL 전부를 xml 파일 형식으로 포함한다. 사이트맵은 검색 엔진에 URL을 추가 혹은 배제함으로서 `robots.txt` 파일을 보완하는 역할을 한다.

:::warning

**사이트맵 제출이 색인을 보장하는 것은 아니다.**

검색엔진이 크롤링하여 페이지 URL을 발견하는 메커니즘을 보완하는 의미일 뿐, 사이트맵이 크롤링을 완전히 대체하는 것은 아니다. 모두 색인해준다는 보증이 있는 것은 아니라는 것을 꼭 기억하자.

:::

📌 **설치, vsc 터미널에 아래 코드를 입력**

```bash
npm install -D vuepress-plugin-sitemap
```

📌 **사용, hostname 에 블로그 url을 넣어준다.**

```bash
// .vuepress/config.js
module.export = {
  plugins: [["sitemap", { hostname: "https://hueleev.github.io/leehyungwon/" }]]
};
```

📌 **배포 이후, 구글 서치 콘솔에 가서 sitemap 제출란에 `[https://hueleev.github.io/leehyungwon/sitemap.xml](https://hueleev.github.io/leehyungwon/sitemap.xml)` 로 등록하면 된다.**

## Robots.txt

`Robots.txt`는 크롤링 로봇이 웹에 접글할 때, 로봇이 지켜야하는 규칙과 사이트맵 파일의 위치를 알려주는 역할을 하는 파일이다. 

파일의 위치가 매우 중요하다. 꼭, **`vuepress/public/robots.txt`** 에 위치하도록 한다.

```jsx
User-agent: *
Allow: /
Sitemap: https://kyounghwan01.github.io/blog/sitemap.xml
```

## Google Analytics (구글 애널리틱스)

📌 [https://analytics.google.com/](https://analytics.google.com/) 

**속성을 생성해준 후, 데이터 스트림을 클릭한다.**

![vuepress](../.vuepress/public/img/vuepress/05/0.png)

📌 **하단에 태그 사용을 참조하여,  `config.js` 에 아래와 같이 입력해주면 끝!**

```jsx
// config.js
head: [
      ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXX' }],
      [
        'script',
        {},
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XXXXXXX');
      `],
    ],
```

### tip, 구글 서치 콘솔

---

📌 **구글 서치 콘솔에 들어간다.** 

[https://search.google.com/search-console](https://search.google.com/search-console)

📌 **속성을 추가 해준다.  본인의 github 블로그 url을 입력해준다.**

![vuepress](../.vuepress/public/img/vuepress/05/1.png)

📌 **서치콘솔에서 HTML 태그를 선택하여 meta태그를 블로그 첫 화면 `[README.md](http://readme.md)` 에 넣어주었다**

![vuepress](../.vuepress/public/img/vuepress/05/2.png)

```markdown
// README.md 파일
---
meta:
    - name: google-site-verification
      content: 컨텐트 value
---
```

📌 **배포 후, 사이트 메인에서 개발자도구를 열어 확인해주면,**

![vuepress](../.vuepress/public/img/vuepress/05/3.png)

**위와 같이 메타 태그가 들어간 것을 확인할 수 있다 !**

📌 **확인해주면, 아래와 같이 소유권이 확인된다.**

![vuepress](../.vuepress/public/img/vuepress/05/4.png)

나는 혹시 몰라서, `@vuepress/plugin-pwa` 를 사용하여 전체 페이지에 meta 태그를 걸어주었다.

[https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install](https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install)

### Reference

---

[https://www.ascentkorea.com/what-is-robots-txt-sitemap-xml/](https://www.ascentkorea.com/what-is-robots-txt-sitemap-xml/)

[https://kyounghwan01.github.io/blog/Vue/vuepress/seo/#시작하기](https://kyounghwan01.github.io/blog/Vue/vuepress/seo/#%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)