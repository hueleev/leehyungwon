---
title: 08. 유니크한 배열, Set ! 
meta:
  - name: description
    content: javascript ES6 Set
  - name: keywords
    content: javascript ES6 
---

#  08. 유니크한 배열, Set !

🙄 **중복없이 유일한 값을 저장하려고 할때 사용한다.**

> 이미 존재하는지 체크할 때 유용함,

## ✨ 중복없이 유일한 값을 저장

```jsx
let mySet = new Set();

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

mySet.forEach(function(v) {
  console.log(v);
})
```

### 🔎 console

---

```basic
"crong"
"hary"
```

## ✨ 이미 존재하는지 확인할 때 유용!

```jsx
let mySet = new Set();

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

if (mySet.has("crong")) { // 이미 있는지 확인!
  console.log("yes, i have crong!");
} else {
  console.log("no .. i don't have crong TT")
}
```

### 🔎 console

---

```basic
"yes, i have crong!"
```

## ✨ 삭제도 가능!

```jsx
let mySet = new Set();

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

mySet.delete("crong"); // 삭제도 가능
console.log(...mySet);
```

### 🔎 console

---

```basic
"hary"
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)