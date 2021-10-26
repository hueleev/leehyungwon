---
title: 17. Proxy, JS interception 기능 구현!
meta:
  - name: description
    content: javascript ES6 Proxy JS interception
  - name: keywords
    content: javascript ES6 
---

# 17. Proxy, JS interception 기능 구현!

😌 **신기하다... interception 기능이 되다니!**

## ✨ Proxy, Interception

`Reflect.get(target,property)`는 `target[property]` 와 같다.

> `proxy` 내에서는 `Reflect`를 쓰는 걸 추천한다.

```jsx
const proxy = new Proxy({name: 'crong', changedValue: 0}, {
  get: function(target, property, receiver) {
    console.log('get value');
    return (property in target) ? Reflect.get(target,property) : 'anonymous'; 

  },
  set: function(target, property, value) {
    console.log('set value', value);
    target['changedValue']++;
    target[property] = value;
  }
});

proxy.name="codesquad";
console.log(proxy.changedValue);

console.log('-----');

proxy.name="codesquad2";
console.log(proxy.changedValue);
```

### 🔎 console

---

```basic
"set value"
"codesquad"
"get value"
1
"-----"
"set value"
"codesquad2"
"get value"
2
"-----"
"get value"
"anonymous"
```

### Reference

---

[https://www.inflearn.com/course/es6-강좌-자바스크립트/dashboard](https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)

[https://jsbin.com/](https://jsbin.com/)