---
id: 2017-acura-ilx
title: 2017 Acura ILX w/ AcuraWatch Plus
description: Information about running Comma.ai Openpilot on the 2017 Acura ILX w/ AcuraWatch Plus
---
# 2017 Acura ILX w/ AcuraWatch Plus

The 2017 Acura ILX was upstreamed to the [commaai/openpilot](https://github.com/commaai/openpilot) repository and generally means it is a compatible / supported vehicle for openpilot.

We recommend you connect to the [Comma Slack](https://slack.comma.ai) and double check to see how well it is supported for your liking.

## Compatibility

### Longitudinal Control

Openpilot has full longitudinal control (acceleration and braking) over the 2017 ILX.

### Lateral Control

Openpilot has lateral control (steering) over the 2017 ILX with some factory-limitations.
This model has some factory system limitations which you should be aware of.

#### System Restrictions

* The minimum speed the vehicle must be moving before the system engages is 25 mph.

## EON Mounting

We do not have a recommended mount yet, we will update when we find that.

## Recommended Hardware

If you're confident your vehicle matches the specifications above, these are some things you may need to get started.

* 1 x [EON](/hardware/eon/)
* 1 x [Panda](/hardware/panda/)
* 1 x [Giraffe](/hardware/giraffe/)

## Comma Pedal

This vehicle has openpilot compatibility [Comma Pedal](/hardware/pedal).

### Vehicle specific benefits with Pedal

* Adds stop and go capabilities to this model.
* Allows openpilot to be engaged at or above 0 mph while there is a lead car detected.
* Vehicle brakes down to zero in stopped traffic without disengaging.
* Automatically resumes driving when lead car moves forward maintaining proper distance.
* Allows openpilot to steer down to 12 mph.


## Videos

We have not currently found any videos of the Acura ILX running openpilot.

[Submit a video](/documentation/submit-a-video.html)

