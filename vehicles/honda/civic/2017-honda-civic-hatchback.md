---
id: 2017-honda-civic-hatchback
title: 2017 Honda Civic Hatchback w/ Honda Sensing
description: Information about running Comma.ai Openpilot on the 2017 Honda Civic Hatchback w/ Honda Sensing
---
# 2017 Honda Civic Hatchback w/ Honda Sensing

The 2017 Honda Civic Hatchback was upstreamed to the [commaai/openpilot](https://github.com/commaai/openpilot) repository and generally means it is a compatible / supported vehicle for openpilot.

We recommend you connect to the [Comma Slack](https://slack.comma.ai) and double check to see how well it is supported for your liking.

## Compatibility

### Longitudinal Control

Openpilot has partial longitudinal control (acceleration and braking) over the 2017 Civic Hatchback.
Due to ECU limitations, this model can only partially be controlled by Openpilot.

Instead of sending actual acceleration / deceleration commands directly to the CAN, Openpilot will only be able to send factory ACC control messages. 

But is still perfectly sufficient for usage.

### Lateral Control

Openpilot has full lateral control (steering) over the 2017 Civic Hatchback.

## EON Mounting

It is recommended by the community to use the 22 degree GoPro mount.

## Recommended Hardware

If you're confident your vehicle matches the specifications above, these are some things you may need to get started.

* 1 x [EON](/hardware/eon/)
* 1 x [Panda](/hardware/panda/)
* 1 x [Giraffe](/hardware/giraffe/)

## Comma Pedal

This vehicle supports stop and go by default and does not benefit from Comma Pedal.


## Videos

{{ "https://www.youtube.com/watch?v=62NIAyTxcjk" | noembed }}


{{ "https://www.youtube.com/watch?v=9TDi0BHgXyo" | noembed }}


{{ "https://www.youtube.com/watch?v=XaVs__Bmhms" | noembed }}


{{ "https://www.youtube.com/watch?v=IHjEqAKDqjM" | noembed }}


