# Pedal Guides

{% for article in summary.parts[3].articles[2].articles %}
- [{{ article.title }}](/{{ article.path }})
{% endfor %}