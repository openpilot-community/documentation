# Development Guides

We're always striving to create great articles for helping you make contributions to openpilot.

Without guides, many people might be intimidated to contribute to the code even when they are perfectly capable of doing so.

So we're compiling a list of guides we think are the most relevant to those looking to make changes to openpilot.

{% for article in summary.parts[3].articles[2].articles %}
- [{{ article.title }}](/{{ article.path }})
{% endfor %}