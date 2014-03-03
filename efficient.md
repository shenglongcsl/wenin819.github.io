---
layout: home
title: 高效
category: efficient
description: 高效分类，记录平时生活工作中的一些常用工具和技巧
keywords: 高效
---

<div class="row">
	{% for post in site.categories.efficient %}
		<div class="col-1">
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<p>{{ post.description }}</p>
		</div>
	{% endfor %}
</div>
