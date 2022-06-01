---
title: Git
updatedAt: 2022-06-01
publish: true
---

#### Going a commit back (destructive or conservative)

Have need to how to move back a commit or few, since you or your colleague messed up pretty good?

- If you want the want changes, but not the commit, use this `git reset --sort HEAD^`.

- If you want to let go of both - commit & changes, use this `git reset --hard HEAD^`.

#### Moving back in time

Did one of your colleagues mess up big time, and left a nasty commit that is breaking everything?

You can use `reflog` & `reset` the commits.

- `git reflog`

Above line shows the history of your repo, just like `git log` does, but more useful.

- `git reset --hard <SHA>`

Using the above git reset line, will take you to that point in time in your git repo.
