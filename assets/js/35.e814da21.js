(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{593:function(t,a,s){"use strict";s.r(a);var n=s(31),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_05-완주하지-못한-선수-해시-프로그래머스-javascript-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-완주하지-못한-선수-해시-프로그래머스-javascript-hash"}},[t._v("#")]),t._v(" 05. 완주하지 못한 선수_해시 | 프로그래머스 (JavaScript) | Hash")]),t._v(" "),s("h2",{attrs:{id:"🔒-문제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔒-문제"}},[t._v("#")]),t._v(" 🔒 "),s("a",{attrs:{href:"https://school.programmers.co.kr/learn/courses/30/lessons/42576",target:"_blank",rel:"noopener noreferrer"}},[t._v("문제"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.")]),t._v(" "),s("p",[t._v("마라톤에 "),s("u",[t._v("참여한 선수들의 이름이 담긴 배열 "),s("strong",[t._v("participant")])]),t._v("와 "),s("u",[t._v("완주한 선수들의 이름이 담긴 배열 "),s("strong",[t._v("completion")])]),t._v("이 주어질 때, "),s("u",[t._v("완주하지 못한 선수의 이름을 return")]),t._v(" 하도록 solution 함수를 작성해주세요.")]),t._v(" "),s("h3",{attrs:{id:"📢-제한사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📢-제한사항"}},[t._v("#")]),t._v(" "),s("strong",[t._v("📢 제한사항")])]),t._v(" "),s("ul",[s("li",[t._v("마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.")]),t._v(" "),s("li",[s("strong",[t._v("completion의 길이는 participant의 길이보다 1 작습니다.")])]),t._v(" "),s("li",[t._v("참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.")]),t._v(" "),s("li",[s("strong",[t._v("참가자 중에는 동명이인이 있을 수 있습니다.")])])]),t._v(" "),s("h3",{attrs:{id:"📢-입출력-예"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📢-입출력-예"}},[t._v("#")]),t._v(" "),s("strong",[t._v("📢 입출력 예")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("participant")]),t._v(" "),s("th",[t._v("completion")]),t._v(" "),s("th",[t._v("return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v('["leo", "kiki", "eden"]')]),t._v(" "),s("td",[t._v('["eden", "kiki"]')]),t._v(" "),s("td",[t._v('"leo"')])]),t._v(" "),s("tr",[s("td",[t._v('["marina", "josipa", "nikola", "vinko", "filipa"]')]),t._v(" "),s("td",[t._v('["josipa", "filipa", "marina", "nikola"]')]),t._v(" "),s("td",[t._v('"vinko"')])]),t._v(" "),s("tr",[s("td",[t._v('["mislav", "stanko", "mislav", "ana"]')]),t._v(" "),s("td",[t._v('["stanko", "ana", "mislav"]')]),t._v(" "),s("td",[t._v('"mislav"')])])])]),t._v(" "),s("h3",{attrs:{id:"📢-입출력-예-설명"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📢-입출력-예-설명"}},[t._v("#")]),t._v(" "),s("strong",[t._v("📢 입출력 예 설명")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("예제 #1")]),s("br"),t._v('\n"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.')])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("예제 #2")]),s("br"),t._v('\n"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.')])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("예제 #3")]),s("br"),t._v('\n"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.')])])]),t._v(" "),s("h2",{attrs:{id:"🔑-풀이"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔑-풀이"}},[t._v("#")]),t._v(" 🔑 풀이")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("solution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    completion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" completion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);