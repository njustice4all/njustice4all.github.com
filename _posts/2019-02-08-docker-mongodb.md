---
title: 'Docker - MongoDB 연결'
layout: post
date: 2019-02-08 13:36
tag: [docker, mongodb]
image: /assets/images/posts/190208/docker.png
headerImage: true
category: blog
author: AngelKing47
externalLink: false
---

### Docker

이전에 작성했던 node-express-mongodb에서 데이터베이스 부분만 따로 떼어내서 Docker에서 구동시켜보자... 로컬에 설치되어있던 MongoDB는 삭제하자

![설치](../assets/images/posts/190208/header.png)

> 도커가 설치가 되고 적절한 로그인 후 구동된 모습이다.

---

### RUN

CLI창에서 도커로 mongodb를 구동하자

```javascript
docker run --name mongo -p 27017:27017 -v /Users/youngjoohan/db:/data/db -d mongo
```

- 도커 `실행`
- `--이름`은 mongo
- `-포트`는 27017로 mapping
- `-사용할 디비`위치는 로컬의 `/Users/youngjoohan/db`폴더
- `-실행모드` 백그라운드
- `뭘실행?` mongo

실행하면 도커는 mongo이미지를 찾고 없으면 `docker pull`필요없이 docker-hub에서 바로 다운받는다. 갓갓...

---

### 실행확인

`docker ps`명령어로 현재 구동중인 컨테이너를 살펴보자

![실행확인](../assets/images/posts/190208/result.png)

잘된다. 이제 앱을 실행하면 해당컨테이너의 디비를 사용하는걸 볼 수 있다. (내 로컬의 디비로)

![실행확인1](../assets/images/posts/190208/result1.png)

하지만 컨테이너를 올리고 내리고 할때마다 매번 `docker stop $(docker ps -aq)`이나 `docker rm $(docker ps -aq)`같은 명령을 할순 없다. `docker-compose`를 작성하자

---

### docker-compose 작성

프로젝트 루트에서 `docker-compose.yml`파일을 만들자

```yml
version: '3.7'
services:
  mongodb:
    # 버전을 명시해주는게 좋다 mongo:version
    # 이건 latest
    image: mongo
    container_name: mongo
    ports:
      - '27017:27017'
    volumes:
      - /Users/youngjoohan/db/mongodb:/data/db
    networks:
      - backend

networks:
  backend:
    driver: bridge
```

위에서 실행한거 기반으로 살펴보면 이건 거저먹기다.

> compose파일 작성할땐 사용하는 이미지는 버전을 명시해주는게 좋다

해당 파일이 있는곳에서 `docker-compose up`을 실행하면 foreground로 mongo가 돌아간다. 반대는 `docker-compose down`
