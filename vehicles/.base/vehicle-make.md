# {{ page.title }}

{% block preIntroMessage %}
{% endblock %}

{% block introMessage %}
The goal is to always support as many vehicles as possible.

Openpilot is compatible with *some* **{{ page.title }}** model(s) so feel free to browse the support pages for these models below for additional specifics.
{% endblock %}

To chat about {{ page.title }}'s with the community, checkout the [Openpilot {{ page.title }} Chat](https://spectrum.chat/openpilot/{{ page.title | lower}})

## Models

This is the current list of {{page.title}} models being tested and/or actively supported by either community members or Comma.ai.  Varying levels of support / testing are being done on the listed models below so please follow the links below to keep up to date on individual model progress.

{% for article in summary.parts[page.level.split('.')[0]-1].articles[page.level.split('.')[1]-1].articles %}
 - [{{ article.title }}](/{{ article.path }})
{% endfor %}

## Required Hardware

If you have checked your vehicle model page and are confident your vehicle is supported, or you're interested in porting an unsupported vehicle, here are some things you'll need to purchase.

- 1 x [EON](/hardware/eon/)
- 1 x [Panda](/hardware/panda/)
- 1 x [Giraffe](/hardware/giraffe/)

{% if addlRequirements %}

### Addl. Requirements for {{ page.title }}

{% block addlRequirements %}
{% endblock %}
{% endif %}

## How to add support for a vehicle

If you own an unsupported vehicle but are interested in discussing porting it to openpilot, join us in the *NEW* [openpilot community chat support system](https://spectrum.chat/openpilot) and the always popular [Comma.ai Slack](https://slack.comma.ai/) if you prefer it.

There will also be some great info on porting models in [Development Guides](../../development/guides/).

