---
layout: home
title: 编程
category: program
description: 编程分类，记录编程学习中的所见所得
keywords: 编程
---

<div class="row">
	{% for post in site.categories.program %}
		<div class="col-1">
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<p>{{ post.description }}</p>
		</div>
	{% endfor %}
</div>
