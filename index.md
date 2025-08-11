---
layout: default
title: Thoughts
---

# Thoughts

**DEBUG size:** {{ site.posts | size }}

{% assign paths = site.posts | map: "path" %}
**DEBUG paths:** {{ paths | join: ", " }}


{% for post in site.posts %}
<div class="py-5 border-b border-ink-300/40">
  <h2 class="m-0 text-xl font-medium leading-tight">
    <a class="no-underline hover:opacity-70" href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>
  <div class="text-sm text-ink-500 font-mono">{{ post.date | date: "%Y-%m-%d" }}</div>
  {% if post.excerpt %}
    <p class="mt-2 mb-0 text-ink-700/90">{{ post.excerpt | strip_html | truncate: 160 }}</p>
  {% endif %}
</div>
{% endfor %}
