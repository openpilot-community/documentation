---
id: vehicles
title: Vehicles
description: Information about running Comma.ai Openpilot on many existing auto makers including but not limited to Acura and Cadillac and Chevrolet and Honda and Hyundai and Kia and Lexus and Tesla and Toyota and  and many more.
---
# Vehicles

The goal is to always support as many vehicles as possible.

Openpilot is compatible with several vehicle makes and models already so these are very exciting times.

## Makes

This is the current list of makes being tested and/or actively supported by either community members or Comma.ai.
Varying levels of support and testing are being done on them so please follow the links to determine how far along they are.

* [Acura](/vehicles/acura)
* [Cadillac](/vehicles/cadillac)
* [Chevrolet](/vehicles/chevrolet)
* [Honda](/vehicles/honda)
* [Hyundai](/vehicles/hyundai)
* [Kia](/vehicles/kia)
* [Lexus](/vehicles/lexus)
* [Tesla](/vehicles/tesla)
* [Toyota](/vehicles/toyota)

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
