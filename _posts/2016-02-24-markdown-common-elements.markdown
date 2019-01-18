---
title: 'Markdown Common Elements'
layout: post
date: 2016-02-24 22:44
image: /assets/images/markdown.jpg
headerImage: false
tag:
  - markdown
  - elements
star: true
category: blog
author: johndoe
description: Markdown summary with different options
---

## Basic formatting

> this is blockquote

```javascript
const githubOptions = {
  clientID: process.env.GIT_ID,
  clientSecret: process.env.GIT_SECRET,
  callbackURL: '/auth/github/callback',
};

const githubStrategy = new GithubStragegy(
  githubOptions,
  async (accessToken, refreshToken, profile, done) => {
    try {
      const { email, name } = profile._json;
      const user = await User.findOne({ email, provider: 'github' });

      if (user) {
        return done(null, user);
      } else {
        const newUser = await User.create({
          email,
          nickName: name,
          provider: 'github',
        });

        return done(null, newUser);
      }
    } catch (error) {
      return done(error, false);
    }
  }
);
```

And that's how to do it.

```html
This note **demonstrates** some of what [Markdown][some/link] is _capable of doing_.
```
