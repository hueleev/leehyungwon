---
title: 09. Map & WeakMap
meta:
  - name: description
    content: javascript ES6 Map WeakMap
  - name: keywords
    content: javascript ES6 
---

# 09. Map & WeakMap

👉🏻 **이제 `Map`과 `WeakMap`에 대해서 알아보자**

## ✨ WeakMap

`WeakMap`은 이전 게시물의 `WeakSet` 과 같이 참조를 가진 객체만 할당 가능하다.

```jsx
let wm = new WeakMap();
let myfun = function(){};

// 이 함수가 얼마나 실행됐지?
wm.set(myfun, 0);
console.log(wm);

let count = 0;
for(let i=0; i<10; i++) {
  count = wm.get(myfun);
  count++;
  wm.set(myfun, count);
}

console.log(wm.get(myfun));

myfun = null;

console.log(wm.get(myfun));
console.log(wm.has(myfun));
```

### 🔎 console

---

```basic
[object WeakMap] { ... }
10
undefined
false
```

## ✨ WeakMap 클래스 인스턴스 변수 보호

### 🙅🏻‍♀️ 보호하기 전,

---

```jsx
function Area(height, width) {
  this.height=height;
  this.width=width;
}

Area.prototype.getArea = function(){
  return this.height * this.width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea());
console.log(myarea.height);
```

### 🔎 console

---

```basic
200
10
```

### 🙆🏻‍♀️ 보호한 후,

---

`WeakMap`을 활용하였더니, 객체를 보호할 수 있게 됐다!

```jsx
const wm = new WeakMap();

function Area(height, width) {
  wm.set(this, {height, width});
}

Area.prototype.getArea = function(){
  const {height, width} = wm.get(this);
  return height * width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea());
console.log(myarea.height);
```

### 🔎 console

---

```basic
200
undefined
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)