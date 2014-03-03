---
layout: home
title: 杂谈
category: blog
description: 杂谈分类，记录平时生活中的一些看法和感悟
keywords: 杂谈
---

<div class="row">
	{% for post in site.categories.blog %}
		<div class="col-1">
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<p>{{ post.description }}</p>
		</div>
	{% endfor %}
</div>
