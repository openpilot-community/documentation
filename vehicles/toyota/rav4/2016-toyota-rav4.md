---
id: 2016-toyota-rav4
title: 2016 Toyota RAV4 w/ TSS-P
---
# 2016 Toyota RAV4 w/ TSS-P

The 2016 Toyota RAV4 was upstreamed to the [commaai/openpilot](https://github.com/commaai/openpilot) repository and generally means it is a compatible / supported vehicle for openpilot.

We recommend you connect to the [Comma Slack](https://slack.comma.ai) and double check to see how well it is supported for your liking.

## Compatibility

### Longitudinal Control

Openpilot has full longitudinal control (acceleration and braking) over the 2016 RAV4 with a minor modification.
To gain full longitudinal control, it is recommended to disconnect the DSU.

### Lateral Control

Openpilot has lateral control (steering) over the 2016 RAV4 with some factory-limitations.
This model has some factory system limitations which you should be aware of.

#### System Restrictions

* The minimum speed the vehicle must be moving before the system engages is 20 mph.

## EON Mounting

It is recommended by the community to use the 28 (26) degree GoPro mount.

## Recommended Hardware

If you're confident your vehicle matches the specifications above, these are some things you may need to get started.

* 1 x [EON](/hardware/eon/)
* 1 x [Panda](/hardware/panda/)
* 1 x [Giraffe](/hardware/giraffe/)

## Comma Pedal

This vehicle has not been tested with Comma Pedal as of yet but it could possibly benefit from having one.


## Videos

{{ "https://www.youtube.com/watch?v=jGNMsypQd8Q" | noembed }}


