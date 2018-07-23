---
id: 2018-toyota-c-hr-xle
title: 2018 Toyota C-HR XLE
---
# 2018 Toyota C-HR XLE

The 2018 Toyota C-HR XLE is currently in active testing within the community 
and a pull request has been made for it to be merged into the official [commaai/openpilot](https://github.com/commaai/openpilot) repository.

Although a pull request has been made, this does not mean it will be officially supported or upstreamed to the primary code base.
It might become community supported long-term.

## Compatibility

### Longitudinal Control

Openpilot doesn't currently have longitudinal control (acceleration and braking) over the 2018 C-HR XLE.
The community appears to be working on a solution to longitudinal control.

### Lateral Control

Openpilot has lateral control (steering) over the 2018 C-HR XLE with some factory-limitations.
This model has some factory system limitations which you should be aware of.

#### System Restrictions

* The factory ECU automatically cancels LKAS and ACC control when stopped for longer than 5 seconds.

## EON Mounting

It is recommended by the community to use the 22 degree GoPro mount.

## Recommended Hardware

If you're confident your vehicle matches the specifications above, these are some things you may need to get started.

* 1 x [EON](/hardware/eon/)
* 1 x [Panda](/hardware/panda/)
* 1 x [Giraffe](/hardware/giraffe/)

## Comma Pedal

This vehicle has not been tested with Comma Pedal as of yet but it could possibly benefit from having one.


## Videos

We have not currently found any videos of the Toyota C-HR XLE running openpilot.

[Submit a video](/documentation/submit-a-video.html)

## How to contribute

If you would like to contribute to If you would like to contribute to testing and/or development of openpilot on the C-HR XLE checkout one of the following repositories:

- [bthaler1/openpilot](https://github.com/bthaler1/openpilot)
