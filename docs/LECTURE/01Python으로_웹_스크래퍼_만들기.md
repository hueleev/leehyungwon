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

# ⚡ 1. THEORY

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

```md
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

```md
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

```md
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

```md
------len------
13
------type------
<class 'str'>
<class 'int'>
```

## 1.4 Creating a Your First Python Function

### py

```py
# 들여쓰기를 해줘야 define됨 !
# python은 {}으로 구분하지 않는다.
def say_hello(): 
  print("hello")
  print("bye")

say_hello()
say_hello()
say_hello()
```

### console

```md
hello
bye
hello
bye
hello
bye
```

## 1.5 Function Arguments

### py

```py
def say_hello(who): 
  print("hello", who)

say_hello("Nico")
say_hello(True)
# say_hello() - error!

print("------")

def plus(a, b):
  print(a + b)
def minus(a, b = 0): # default value
  print(a - b)
  
plus(2, 5)
minus(2)
minus(2, 5)
```

### console

```md
hello Nico
hello True
------
7
2
-3
```

## 1.6 Returns

### py

```py
def p_plus(a, b):
  print(a + b)
  
def r_plus(a, b):
  return a + b
  print("test") # return 이후로 실행되지 않음

p_result = p_plus(2, 3)
r_result = r_plus(2, 3)

print(p_result, r_result)
```

### console

```md
5
None 5
```

## 1.7 Keyworded Arguments

### py

```py
# format
def say_hello(name, age):
  return f"Hello {name} you are {age} years old"

 # 인자가 바뀌어도 괜찮음! 순서가 상관없다!
hello = say_hello(age = "12", name = "Nico")
print(hello)
```

### console

```md
Hello Nico you are 12 years old
```

## 1.8 Code Challenge!

7개 연산 계산기 만들기

### py

```py
# 7개 연산
def plus(a, b):
  return calc(a, b, '+')

def minus(a, b):
  return calc(a, b, '-')

def times(a, b):
  return calc(a, b, '*')

def division(a, b):
  return calc(a, b, '/')

def nega(a, b):
  return calc(a, b, 'nega')

def remain(a, b):
  return calc(a, b, '%')

def power(a, b):
  return calc(a, b, '**')
  
# validate and calcuate
def calc(a, b, func):
  try:
    a = float(a)
    b = float(b)
    try:
      if func == '+':
        return a + b
      elif func == '-':
        return a - b
      elif func == '*':
        return a * b
      elif func == '/':
        return a / b
      elif func == 'nega':
        return -a
      elif func == '**':
        return a ** b
    except:
      return 'Please check a method name.'
  except:
    return 'Please enter a number.'

print("------print(plus(3,'test'))------")
print(plus(3,'test'))
print("------print(minus(3,5))------")
print(minus(3,5))
```

### console

```md
------print(plus(3,'test'))------
Please enter a number.

------print(minus(3,5))------
-2.0
```

## 1.9 Conditionals Part One

### py
```py
def plus(a, b):
  if type(b) is int or type(b) is float:
    return a + b
  else:
    return None

print(plus(12, 1.2))
print(plus(12, "test"))
```

### console

```md
13.2
None
```

## 1.10 if else and of

### py

```py
def age_check(age):
  print(f"------you are {age}------")
  if age < 18:
    print("you cant drink")
  elif age == 18:
    print("you are new to this!")
  elif age > 20 and age < 25:
    print("you are still kind of young")
  else:
    print("enjoy your drink")
  print()

age_check(16)
age_check(18)
age_check(23)
age_check(30)
```

### console

```md
------you are 16------
you cant drink

------you are 18------
you are new to this!

------you are 23------
you are still kind of young

------you are 30------
enjoy your drink
```

## 1.11 for in

### py

```py
days = ("Mon", "Tue", "Wed", "Thur", "Fri")

for d in days:
  if d == 'Wed':
    break
  else:
    print(d)

for n in [1, 2, 3, 4, 5]:
  print(n)

for letter in "nicolas":
  print(letter)
```

### console

```md
Mon
Tue
1
2
3
4
5
n
i
c
o
l
a
s
```

## 1.12 Modules

### main.py

```py
# 항상 사용할 것만 가져오도록 !
from math import ceil, fsum as sexy_sum
from calculator import plus 

print(ceil(1.2))
print(sexy_sum([1, 2, 3, 4, 5, 6, 7]))
print(plus(2, 3))
```

### calcuator.py

```py
def plus(a, b):
  return a + b
```

### console

```md
2
28.0
5
```

## Reference


[Pythone으로 웹 스크래퍼 만들기](https://nomadcoders.co/python-for-beginners/lobby)
[replit](https://replit.com/)
[Python library](https://docs.python.org/3/library/index.html)