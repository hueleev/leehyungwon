---
title: 🎈 Typescript로 블록체인 만들기 (nomad coders/노마드코더)
meta:
  - name: description
    content: python nomadCoders 노마드코더
  - name: keywords
    content: python nomadCoders 노마드코더
---

# 🎈 Typescript로 블록체인 만들기 (nomad coders/노마드코더)

**TypeScript** 👍 super set of JavaScript

프론트 플젝하면서 공부해보고 싶엇던 타입스크립트 강의를 들어보았다.

내가 들었을 때 2022버전이 없었는데 생겼네..!!! 또 더 들어봐야지

## 1. Setting Typescript up

```
npm install typescript
```

명령어 ```tsc``` 컴파일 시작

index.ts -> index.js/index.js.map 생성

## 2. First steps with Typescript

```ts
const name = "Nicolas",
    age = 24,
    gender = "male";

const sayHi = (name, age, gender) => { // gender뒤에 ? 붙이면 선택적param!
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
}

sayHi(name, age); // param이 2개이므로 컴파일 실패

export {};
```

## 3. Types in Typescript

```ts
const sayHi = (name:string, age:number, gender:string): string => { // param/return type 지정 가능
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("Nicolas", 44, "male"));

export {};
```

* `tsc-watch` 추가 (ts코드가 수정될 때마다 자동으로 컴파일)

* `tsconfig.json` 설정 수정 (`dist`에 컴파일된 파일 저장하도록 변경)

## 4. Interfaces on Typescript

```ts
interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "nicolas",
    age: 22,
    gender: "male"
};

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};
```

## 5. Classes on Typescript part One

`interface`는 js로 컴파일 되지 않는다. 이런 구조가 필요한 경우 `class`를 사용한다.

```ts
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string){ // 생성자
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human('lynn', 18, 'female');

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(lynn));

export {};
```

## 6. Blockchain Creating a Block

```ts
// 블록 생성자
class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
       this.index = index;
       this.hash = hash;
       this.previousHash = previousHash;
       this.data = data;
       this.timestamp = timestamp; 
    }
}

// 블록 선언
const genesisBlock: Block= new Block(0, "202020202020", "", "Hello", 123456);

// array 생성
let blockchain: Block[] = [genesisBlock];

console.log(blockchain);

export {};
```

### - **console**
```
[
  Block {
    index: 0,
    hash: '202020202020',
    previousHash: '',    
    data: 'Hello',       
    timestamp: 123456    
  }
]
```

## 7. Creating a Block part Two

* crypto-js 설치
```
npm install cryto-js
```

```ts
import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // Block 선언해야만 사용 가능
    sayHello = () => {return "HELLO"};

    // Block 선언하지 않아도 사용 가능 (static)
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

console.log(Block.calculateBlockHash(1, "111", 1234556, "heello"));

const genesisBlock: Block = new Block(0, "202020202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(blockchain);

export { };
```

## 8. Creating a Block part Three
```
import * as CryptoJS from "crypto-js";

class Block {
    // Block 선언하지 않아도 사용 가능 (static)
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "202020202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        newTimestamp,
        data
    );
    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimestamp
    );
    return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("byebye"));

export { };
```

## 9~10. Validating BlockStructure

```ts
import * as CryptoJS from "crypto-js";

class Block {
    // Block 선언하지 않아도 사용 가능 (static)
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block): boolean =>
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "202020202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        newTimestamp,
        data
    );
    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimestamp
    );
    addBlock(newBlock); // block 넣어주기
    return newBlock;
};

const getHashforBlock = (aBlock: Block) : string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock: Block, previosBlock: Block): boolean => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    } else if (previosBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (previosBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
};

const addBlock = (candidateBlock: Block) : void => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
}

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export {};
```

### - **console**
```
[
  Block {
    index: 0,
    hash: '202020202020',
    previousHash: '',
오후 2:37:30 - File change detected. Starting incremental compilation...


오후 2:37:30 - Found 0 errors. Watching for file changes.
[
  Block {
    index: 0,
    hash: '202020202020',
    previousHash: '',
    data: 'Hello',
    timestamp: 123456
  },
  Block {
    index: 1,
    hash: 'b5327d42f03b8915e52a4d8ca02c5d44d4c5118b3fc0c060a6e0f0d3684aa727',        
    previousHash: '202020202020',
    data: 'second block',
    timestamp: 1649050652
  },
  Block {
    index: 2,
    hash: 'b011cc0dc01e18934f483c55bb3e7938cfa448a81bd61cd1ed5e5d9b4c7e3d0e',        
    previousHash: 'b5327d42f03b8915e52a4d8ca02c5d44d4c5118b3fc0c060a6e0f0d3684aa727',
    data: 'third block',
    timestamp: 1649050652
  },
  Block {
    index: 3,
    hash: 'cd865384c8c942fdece88daf34b7a73ab65931bd3895e62c002b5dea05c81eab',
    previousHash: 'b011cc0dc01e18934f483c55bb3e7938cfa448a81bd61cd1ed5e5d9b4c7e3d0e',
    data: 'fourth block',
    timestamp: 1649050652
  }
]
```

## Reference

[Typescript로 블록체인 만들기](https://nomadcoders.co/typescript-for-beginners)
[github](https://github.com/hueleev/DONE__typechain)