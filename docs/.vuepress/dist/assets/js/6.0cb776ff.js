(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(s,t,a){s.exports=a.p+"assets/img/1.8d121750.png"},359:function(s,t,a){s.exports=a.p+"assets/img/2.8298478c.png"},368:function(s,t,a){"use strict";a.r(t);var e=a(44),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress를-활용한-개발-블로그-생성기-1편"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress를-활용한-개발-블로그-생성기-1편"}},[s._v("#")]),s._v(" vuepress를 활용한 개발 블로그 생성기 - 1편")]),s._v(" "),e("p",[s._v("뭐 꾸준히는 아니어도 개발 블로그가 필요할 거 같아서 어떻게 운영할까 고민하다가 ..")]),s._v(" "),e("p",[s._v("이번에 vue도 배웠겠다, vuepress 를 활용해서 미루고 미루던 github page를 만들어보기 결심")]),s._v(" "),e("p",[s._v("먼저, git repository를 생성해주자.")]),s._v(" "),e("h3",{attrs:{id:"git-repository-생성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-repository-생성"}},[s._v("#")]),s._v(" git repository 생성")]),s._v(" "),e("hr"),s._v(" "),e("p",[e("img",{attrs:{src:a(358),alt:"vuepress"}})]),s._v(" "),e("p",[s._v("난 이미 있는 만든 블로그라 저렇게 빨간색이 뜨긴 하지만.. 저 이름이 나중에 블로그의 domain에 포함될 것이다.")]),s._v(" "),e("p",[s._v("cmd에서 원하는 디렉토리를 생성한 후에 클론을 해주자. 일단 아무것도 없으니 empty repository라고 뜰테고.. 디렉토리에는 .git 폴더가 생성되어 있을거다.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" 디렉토리 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" 디렉토리\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/hueleev/leehyungwon.git\n")])])]),e("p",[s._v("이제 프로젝트를 vsc에서 열어주자 (cmd에서 디렉토리로 간 후, code . 를 하면 자동으로 vsc가 열린다.) vsc에서 터미널을 연 후, 아래와 같이 입력해준다.")]),s._v(" "),e("ul",[e("li",[s._v("package json 생성")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])])]),e("ul",[e("li",[s._v("vuepress 설치")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D vuepress\n")])])]),e("p",[s._v("자 이제 첫 게시글을 써보자!")]),s._v(" "),e("ul",[e("li",[s._v("docs 폴더를 package.json과 같은 depth에 생성해주고, markdown을 작성해보자.")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Hello VuePress > docs/README.md")]),s._v("\n")])])]),e("ul",[e("li",[s._v("package.json에 script를 아래와 같이 수정해주자.")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),s._v(",\n\t  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuerpress build docs"')]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("ul",[e("li",[s._v("터미널에 아래 스크립트를 입력하여 로컬에 띄워보자.")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:dev\n")])])]),e("ul",[e("li",[e("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080"),e("OutboundLink")],1),s._v(" 접속 시, 아래와 같이 프로젝트가 뜨면 성공!")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(359),alt:"vuepress"}})]),s._v(" "),e("h3",{attrs:{id:"출처"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#출처"}},[s._v("#")]),s._v(" 출처")]),s._v(" "),e("hr"),s._v(" "),e("p",[e("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#manual-installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/guide/getting-started.html#manual-installation"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-start/#%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-start/#설치"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);