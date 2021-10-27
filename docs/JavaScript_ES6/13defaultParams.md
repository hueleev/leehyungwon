---
title: 13. Default parameters, 파라미터 기본값 할당 방법
meta:
  - name: description
    content: javascript ES6 Default parameters
  - name: keywords
    content: javascript ES6 
---

# 13. Default parameters, 파라미터 기본값 할당 방법

😌 **function parameter 의 기본값을 설정해줄 수 있다**

## ✨ size = size || 1

```jsx
function sum(value, size) {
  size = size || 1 ; // default 1
  return value * size;
}

console.log(sum(3));
```

### 🔎 console

---

```basic
3
```

## ✨ {size=3}

```jsx
function sum(value, size=3) {
  return value * size;
}

console.log(sum(3));
```

### 🔎 console

---

```basic
9
```

## ✨ {size={value:1}}

```jsx
function sum(value, size={value:1}) {
  return value * size.value;
}

console.log(sum(3,{value:3}));
console.log(sum(3));
```

### 🔎 console

---

```basic
9
3
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)