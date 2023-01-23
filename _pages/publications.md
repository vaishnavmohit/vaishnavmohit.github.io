---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2023, 2022, 2014, 2013, 2011]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
