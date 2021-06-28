# 03. vuepress style 적용하기

😇 vuepress 의 뻔한 레이아웃을 수정하기 위해..

📌 package.json 에 아래 script를  추가해주자.

```bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
	  "docs:build": "vuepress build docs",
    **"docs:eject": "vuepress eject"** // 추가된 script
  },
```

```bash
npm run doc:eject
```

위 명령어 실행 시, `.vuepress/theme` 과 생성된 것을 확인할 수 있을 것이다 !

이 내용을 기반으로 `style` 을 수정해주면 된다.

## index.styl


`.vuepress/theme/styles/index.styl` 파일을 생성해준다.

```css
.content {
  font-size 30px
}
```

## palette.styl

`.vuepress/theme/styles/palette.styl` 파일을 생성해준다.

```bash
// colors
$accentColor = #bb4dff // 강조 색상 변경
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// layout
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// responsive breakpoints
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px
```

### Reference

---

[https://vuepress.vuejs.org/theme/](https://vuepress.vuejs.org/theme/)

[https://vuepress.vuejs.org/theme/writing-a-theme.html#directory-structure](https://vuepress.vuejs.org/theme/writing-a-theme.html#directory-structure)