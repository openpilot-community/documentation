---
id: 2018-kia-sorento
title: 2018 Kia Sorento w/ ACC/LKAS
---
# 2018 Kia Sorento w/ ACC/LKAS

The 2018 Kia Sorento is currently in early development and may not be fully supported just yet.
It is not currently available in the official [commaai/openpilot](https://github.com/commaai/openpilot) version of openpilot just yet.

We will continue to update this page as things progress.

## Compatibility

### Longitudinal Control

Openpilot has partial longitudinal control (acceleration and braking) over the 2018 Sorento GT.
Due to ECU limitations, this model can only partially be controlled by Openpilot.

Instead of sending actual acceleration / deceleration commands directly to the CAN, Openpilot will only be able to send factory ACC control messages. 

But is still perfectly sufficient for usage.

### Lateral Control

Openpilot has lateral control (steering) over the 2018 Sorento GT with some factory-limitations.
This model has some factory system limitations which you should be aware of.

#### System Restrictions

* The minimum speed the vehicle must be moving before the system engages is 0 mph.
* The factory ECU automatically cancels LKAS and ACC control when stopped for longer than 3 seconds.

## EON Mounting

It is recommended by the community to use the ~32+ degree GoPro mount.

## Recommended Hardware

If you're confident your vehicle matches the specifications above, these are some things you may need to get started.

* 1 x [EON](/hardware/eon/)
* 1 x [Panda](/hardware/panda/)
* 1 x [Giraffe](/hardware/giraffe/)

## Comma Pedal

This vehicle has not been tested with Comma Pedal as of yet but it could possibly benefit from having one.


## Videos

We have not currently found any videos of the Kia Sorento GT running openpilot.

[Submit a video](/documentation/submit-a-video.html)

## How to contribute

If you would like to contribute to testing and/or development of openpilot on the Sorento GT, checkout the [nullku7/openpilot](https://github.com/nullku7/openpilot) repository for more details.
