---
layout: home
title: 高效
category: efficient
---

<div class="row">
	{% for post in site.categories.efficient %}
		<div class="col-1">
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<p>{{ post.description }}</p>
		</div>
	{% endfor %}
</div>
