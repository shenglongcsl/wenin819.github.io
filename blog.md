---
layout: home
title: 杂谈
category: blog
---

<div class="row">
	{% for post in site.categories.blog %}
		<div class="col-1">
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<p>{{ post.description }}</p>
		</div>
	{% endfor %}
</div>
