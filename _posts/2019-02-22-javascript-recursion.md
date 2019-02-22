---
title: '재귀호출 몇가지 패턴'
layout: post
date: 2019-02-22 10:36
tag: [recursion, 재귀, javascript]
image: /assets/images/posts/190222/javascript.png
headerImage: true
category: blog
author: AngelKing47
externalLink: false
---

### 시작

예전 자바의 정석책에 재귀호출에 관한 코드가 몇줄 있었다. 그 당시에는 그냥 신기하구나 하고 넘어갔는데...

첫 회사에서는 그런 코드를 사용할 일이 없었지만 두번째 회사에서 Drag & Drop 메뉴를 구현하려고 할때 재귀호출을 사용해야했다.

지금도 뇌정지가 오는건 마찬가지지만 그때는 몇일간 고통스러웠던 기억이 난다.

---

### 데이터

보통 트리구조의 데이터를 다룰때 자주 사용하는것 같다.

parent -> child로 되어있는 전형적인 트리구조이다.

```javascript
const data = [
  {
    name: '감기',
    depth: 1,
    child: [
      {
        name: '코감기',
        depth: 2,
        child: [
          {
            name: '코막힘',
            depth: 3,
            child: [],
          },
          {
            name: '콧물',
            depth: 3,
            child: [],
          },
        ],
      },
      {
        name: '뇌감기',
        depth: 2,
        child: [],
      },
      {
        name: '목감기',
        depth: 2,
        child: [
          {
            name: '목아픔',
            depth: 3,
            child: [],
          },
        ],
      },
      {
        name: '눈감기',
        depth: 2,
        child: [
          {
            name: '눈아퍼',
            depth: 3,
            child: [],
          },
        ],
      },
    ],
  },
  {
    name: '소화불량',
    depth: 1,
    child: [],
  },
  {
    name: '두통',
    depth: 1,
    child: [
      {
        name: '편두통',
        depth: 2,
        child: [],
      },
      {
        name: '뇌두통',
        depth: 2,
        child: [],
      },
    ],
  },
  {
    name: '기타',
    depth: 1,
    child: [],
  },
];
```

> 처음엔 `depth`도 없었지만 직관적으로 보기위해 그냥 넣어봤다

---

### FLAT

깊이가 있는 트리구조에서 1차원 배열로 만들어보자. 결국엔 새로운 javascript api인 `Array.flat()`과 유사하다.

`reduce`를 사용해서 구현하려 했는데 뭔가 잘 되지 않아서 나중에 추가 예정.

```javascript
function flattenDeep(arr) {
  const result = [];

  function recursion(arr) {
    arr.forEach(value => {
      result.push({ ...value, child: [] });
      if (value.child.length !== 0) {
        recursion(value.child);
      }
    });
  }

  recursion(arr);

  return result;
}
```

---

### 다시 트리구조로?

1차원 배열로 만든 뒤 몇가지 작업을하고 다시 트리구조로 바꾸려 했지만 문제가 생겼다.

몇번의 삽질끝에 이걸 다시 원복시키려면 `parentId`와 `id`가 필요하다는걸 깨달았다.

```javascript
function addId(array) {
  let id = 0;

  function recursion(array, parentId) {
    array.forEach((v, i) => {
      v.id = id++;
      v.parentId = parentId;
      if (v.child.length > 0) {
        recursion(v.child, id - 1);
      }
    });
  }

  recursion(array, null);

  return array;
}
```

처음 1차배열로 만들기 전에 해당값을 집어넣는 배열을 새로 만든고, 이후 `parentId`와 `id`를 참고해서 다시 트리구조로 만든다.

```javascript
function makeTree(arr, parentId) {
  let result = [];

  arr.forEach(value => {
    if (value.parentId === parentId) {
      const child = makeTree(arr, value.id);
      if (child.length) {
        value.child = child;
      }

      result.push(value);
    }
  });

  return result;
}

// 처음 parentId가 null이다.
makeTree(arr, null);
```

---

### 팩토리얼

재귀호출에 대해서 검색하면 많이 나오는 팩토리얼이다. 아마 팩토리얼이랑 피보나치가 젤 많이 나오는듯..

> 피보나치 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... => F(n) = F(n-1) + F(n-2)

```javascript
const factorial = number => {
  if (number < 1) {
    return 1;
  }

  return number * factorial(number - 1);
};

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}
```

---

### 메모이즈 패턴

이건 재귀호출과는 관계없는데 팩토리얼 공부할때 많이 나오는거니까 한번 해봄. 팩토리얼을 호출할때마다 하위값을 다시 계산하는데 하위값을 캐시해두고 꺼내서 쓴다. 클로져다.

```javascript
const memoize = fn => {
  let cache = {};

  return number => {
    if (number in cache) {
      return cache[number];
    } else {
      cache[number] = fn(number);
      return fn(number);
    }
  };
};

const memoizeFactorial = memoize(factorial);
memoizeFactorial(5); // 계산
memoizeFactorial(5); // 캐시
```

> { 4: 24, 5: 120, ... } 이렇게 저장되어있는걸 꺼내씀
