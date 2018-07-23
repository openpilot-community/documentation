---
id: 2017-toyota-prius
title: 2017 Toyota Prius
---
# 2017 Toyota Prius

The 2017 Toyota Prius was upstreamed to the [commaai/openpilot](https://github.com/commaai/openpilot) repository and generally means it is a compatible / supported vehicle for openpilot.

We recommend you connect to the [Comma Slack](https://slack.comma.ai) and double check to see how well it is supported for your liking.

## Compatibility

### Longitudinal Control

Openpilot has full longitudinal control (acceleration and braking) over the 2017 Prius with a minor modification.
To gain full longitudinal control, it is recommended to disconnect the DSU.

### Lateral Control

Openpilot has lateral control (steering) over the 2017 Prius with some factory-limitations.
This model has some factory system limitations which you should be aware of.

#### System Restrictions

* The factory ECU automatically cancels LKAS and ACC control when stopped for longer than 3 seconds.

## EON Mounting

It is recommended by the community to use the 22 (24) degree GoPro mount.

## Recommended Hardware

If you're confident your vehicle matches the specifications above, these are some things you may need to get started.

* 1 x [EON](/hardware/eon/)
* 1 x [Panda](/hardware/panda/)
* 1 x [Giraffe](/hardware/giraffe/)

## Comma Pedal

This vehicle has not been tested with Comma Pedal as of yet but it could possibly benefit from having one.


## Videos

{{ "https://www.youtube.com/watch?v=yJAS-xeoTc0" | noembed }}


