---
layout: page
title: 
tagline: 
---
{% include JB/setup %}

<div>
	<p>
		O Hack Thursday é um encontro de profissionais e entusiastas de tecnologia tendo como objetivo principal o compartilhamento de conhecimento. 
	</p>
	<p>
		Toda semana nos reunimos para debater algum tema (linguagem, framework, algoritmo, etc. ou tudo isso de uma vez só) em forma de palestra (na maioria das vezes até agora), dojo, interações e outros formatos.
	</p>	
	<p>
		Primamos por quebrar a "barreira" entre palestrante e platéia acabando com o conceito de apresentação mais formal!
	</p>
	<p>	
		Apareça para conhecer o evento, não fazemos distinção de nível de conhecimento, experiência, área ou empresa. 
	</p>	
	<p>
		Se você é como nós e quer discutir, ensinar, explicar, perguntar, aprender, defender, criticar, implementar (entre outras coisas) venha fortalecer a comunidade e conhecer quem também gosta de tecnologia na nossa região. Ah, se você gosta de beber (como muitos de nós), é bom lembrar de trazer um dinheiro para a cerveja, ela é parte importante da informalidade do evento.
	</p>
</div>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>