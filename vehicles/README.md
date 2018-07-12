# Vehicles

The goal is to always support as many vehicles as possible.

Openpilot is compatible with several vehicle makes already so feel free to browse the pages below for more info.

## Makes

This is the current list of makes being tested and/or actively supported by either community members or Comma.ai.
Varying levels of support and/or testing are being done on these makes so please follow the links below to keep up to date on individual progress.

A data source we rely on heavily for this data is maintained on a [Google Sheet](https://docs.google.com/spreadsheets/d/1yDj2PqF-q9vcqpuMI9mnEmXTo-c056MQEaZUHmqGFnc/edit?usp=sharing).

{% for article in summary.parts[page.level.split('.')[0]-1].articles %}
{% if (article.title !== "Overview") %}
 - [{{ article.title }}](/{{ article.path }})
{% endif %}
{% endfor %}

### Notes on Ford Vehicles

There is a port of openpilot for Ford, but the steering has a 10 second
cutout limitation that makes it virtually unusable.

Unless there is some real interest in hacking on Ford there won't be solid support
for awhile.

### Notes on Flexray Vehicles

Unfortunately, vehicle makes that use [FlexRay](https://en.wikipedia.org/wiki/FlexRay) are
unlikely to be supported any time soon.

These makes include (but are not limited to):

- Audi
- BMW
- Mercedes
- Volvo

## How to add support for a vehicle

If you own an vehicle not currently listed
but are interested in discussing porting it to openpilot,
join us in the *NEW* [openpilot community chat support system](https://spectrum.chat/openpilot) and the
always popular [Comma.ai Slack](https://slack.comma.ai/) if you prefer it.

There *will* be some great info on porting vehicles in [Development Guides](../development/guides/).

If your car has adaptive cruise control and lane keep assist, you are in luck.
Using a [panda](https://comma.ai/shop/products/panda-obd-ii-dongle/) and
[cabana](https://community.comma.ai/cabana/), you can understand how to
make your car drive by wire.

Comma.ai, Inc. wrote a [porting guide](https://medium.com/@comma_ai/openpilot-port-guide-for-toyota-models-e5467f4b5fe6) for
Toyota that might help you after you have the basics figured out.
