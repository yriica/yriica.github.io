---
layout: default
title: Home
---

# yriica notes

最小構成のブログです。Markdown を書いて push すると自動で公開されます。

- 新規記事は `_posts/` に `YYYY-MM-DD-title.md` 形式で追加
- テーマは GitHub Pages 公式の **Cayman**（remote\_theme）
- 見た目はあとからでも変えられます

最新記事は下に一覧表示されます。

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
