---
layout: home
---

<div class="index-content blog">
    <div class="section">
        <ul class="artical-cate">
            <li><a href="/"><span>编程</span></a></li>
            <li><a href="/efficient.html"><span>高效</span></a></li>
            <li class="on"><a href="/blog.html"><span>杂谈</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
		<li>
			<h2><a href="/README.html">说明</a></h2>
			<div class="title-desc">关于本博客的说明</div>
		</li>
        {% for post in site.categories.blog %}
            <li>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
    </div>
    <div class="aside">
    </div>
</div>
