---
title: '2018 카카오 블라인드채용 1단계'
layout: post
date: 2019-04-08 16:36
tag: [카카오, 알고리즘, javascript, 블라인드채용]
image: /assets/images/posts/190408/kakao.png
headerImage: true
category: blog
author: AngelKing47
externalLink: false
---

### 이게 제일 쉬운거래요 세상에...

- record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다. 다음은 record에 담긴 문자열에 대한 설명이다.
- 모든 유저는 [유저 아이디]로 구분한다.
- [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - Enter [유저 아이디][닉네임] (ex. Enter uid1234 Muzi)
- [유저 아이디] 사용자가 채팅방에서 퇴장 - Leave [유저 아이디] (ex. Leave uid1234)
- [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - Change [유저 아이디][닉네임] (ex. Change uid1234 Muzi)
- 첫 단어는 Enter, Leave, Change 중 하나이다.
- 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
- 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
- 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
- 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.

---

### 입력과 출력 예시

`입력`

["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

`출력`

["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

---

### 풀이

```javascript
function solution(record) {
  const temp = {};
  const results = record.reduce((acc, value) => {
    const [action, id, nickName] = value.split(' ');
    if (action === 'Enter') {
      temp[id] = nickName;
      acc.push(`${id}님이 들어왔습니다.`);
    } else if (action === 'Change') {
      temp[id] = nickName;
    } else if (action === 'Leave') {
      acc.push(`${id}님이 나갔습니다.`);
    }

    return acc;
  }, []);

  return results.map(result => {
    const [id, rest] = result.split('님이');
    return `${temp[id]}`.concat('님이', rest);
  });
}
```

> 출력을위해 배열에 `uid`를 가진 값들을 넣어주고 해당유저가 최종적으로 갖고있는 닉네임을 객체에 담은 후 해당값들을 맵핑시켜주는 방식으로 풀었다.

다음문제들도 어려워도 도전해보겠습니다.
