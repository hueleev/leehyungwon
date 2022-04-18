---
title: 🎈 Python으로 웹 스크래퍼 만들기 (nomad coders/노마드코더)
meta:
  - name: description
    content: python nomadCoders 노마드코더
  - name: keywords
    content: python nomadCoders 노마드코더
---

# 🎈 Python으로 웹 스크래퍼 만들기 (nomad coders/노마드코더)

심심해서 들어보는 Python 강의 .. 👓

# ⚡ THEORY

## 1.0 Data Types of Python

### py

```py
# python 변수명은  snakeCase로 써준다.
a_string = 'like this'
a_number = 3
a_float = 3.12
a_boolean = False # python에서는 첫글자를 대문자로 써야한다.
a_none = None # empty 존재하지 않는다.

# 출력
print(type(a_number))
print(type(a_string))
print(type(a_none))
```

### console

```sh
<class 'int'>
<class 'str'>
<class 'NoneType'>
```

## 1.1 Lists in Python

### py

```py
# mutable sequence (변경 가능한 시퀀스)
days = ["Mon", "tue", "Wed", "Thur", "Fri"]

print("------list------")
print(days)
print("Mon" in days)
print("Man" in days)
print(days[3])
print(type(days))

print("------append------")
days.append("Sat")
print(days)

print("------reverse------")
days.reverse()
print(days)
```

### console

```sh
------list------
['Mon', 'tue', 'Wed', 'Thur', 'Fri']
True
False
Thur
<class 'list'>
------append------
['Mon', 'tue', 'Wed', 'Thur', 'Fri', 'Sat']
------reverse------
['Sat', 'Fri', 'Thur', 'Wed', 'tue', 'Mon']
```

## 1.2 Tuples and Dicts

### py

```py
# immutable sequence (변경 불가능한 시퀀스)
days = ("Mon", "tue", "Wed", "Thur", "Fri")

print("------tuple------")
print(days)
print(type(days))

print("------dictionary------")
nico = {
  "name": "Nico",
  "age": 29,
  "korean": True,
  "fav_food": ["Kimchi", "Sashimi"]
}

print(type(nico))
print(nico)
nico["handsome"] = True
print(nico)
```

### console

```sh
------tuple------
('Mon', 'tue', 'Wed', 'Thur', 'Fri')
<class 'tuple'>
------dictionary------
<class 'dict'>
{'name': 'Nico', 'age': 29, 'korean': True, 'fav_food': ['Kimchi', 'Sashimi']}
{'name': 'Nico', 'age': 29, 'korean': True, 'fav_food': ['Kimchi', 'Sashimi'], 'handsome': True}
```

## 1.3 Built in Functions

[다양한 Functions](https://docs.python.org/3/library/functions.html)

### py

```py
print("------len------")
print(len("fjsiodjfoisjf"))

print("------type------")
age = "18"
print(type(age))
n_age = int(age)
print(type(n_age))
```

### console

```sh
------len------
13
------type------
<class 'str'>
<class 'int'>
```

### Reference

---

[Pythone으로 웹 스크래퍼 만들기](https://nomadcoders.co/python-for-beginners/lobby)
[replit](https://replit.com/)
[Python library](https://docs.python.org/3/library/index.html)