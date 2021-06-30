---
title: ES2015 String 새로운 메소드
meta:
  - name: description
    content: javascript ES6 
  - name: keywords
    content: javascript ES6 
---

# 03. ES2015 String 새로운 메소드

🤗 **ES6에 새로 나온 String 메소드에 대해서 살펴 보겠다**

## ✨ startsWith

특정 String으로 시작하는지 확인하는 메소드

```jsx
let str = "hello world ! ^^ -";
let matchStr = "hello";
console.log("startWith " + matchStr, str.startsWith(matchStr));
```

### 🔎 console

---

```basic
"startWith hello"
true 
```

## ✨ endsWith

특정 String으로 끝나는지 확인하는 메소드

```jsx
let str = "hello world ! ^^ -";
let matchStr2 = "^^ ~";
let matchStr3 = "^^ -";
console.log("endsWith " + matchStr2, str.endsWith(matchStr2));
console.log("endsWith " + matchStr3, str.endsWith(matchStr3));
```

### 🔎 console

---

```basic
"endsWith ^^ ~"
false
"endsWith ^^ -"
true
```

## ✨ includes

특정 String을 포함하는지 확인하는 메소드

```jsx
let str = "hello world ! ^^ -";
let matchStr4 = "world";
console.log("includes " + matchStr4, str.includes(matchStr4));
```

### 🔎 console

---

```basic
"includes world"
true
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)