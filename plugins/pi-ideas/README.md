# @zordok/pi-web-plugin-ideas

Adds a Workspace **Ideas** panel to Pi Web.

Ideas are stored in the selected workspace at `.pi-web/ideas.json`. The panel can:

- add plain-text ideas;
- edit ideas in place;
- delete ideas;
- start a new Pi session for an idea in a fresh idea worktree;
- archive ideas as done;
- warn when `.pi-web/` is not ignored by Git.

This package is exposed to Pi Web via `piWeb.plugins` metadata with plugin id `workspace-ideas`.

Install after publish:

```bash
pi install npm:@zordok/pi-web-plugin-ideas
```
