## EON
The EON is the device you install openpilot on to assist in driving your vehicle.

[Learn more](/docs/hardware/eon)

## panda
Panda is a universal car interface. Panda's allow you to talk to your car over USB and WiFi. It supports 3 CAN buses, 2 LIN buses, and 1 GMLAN. The software is 100% open source and is developed openly. Top contributors will be offered a job, comma.ai has a budget to fund this development, as we win if cars are more open and easier to talk to.

## giraffe
Giraffe connects Panda to vehicle control buses that are not exposed via the standard diagnostics port, usually the LKAS and ACC sensors and commands live on these buses. There are currently 2 versions, one for Honda and one for Toyota. Double check the connector and make sure it is compatible with your LKAS camera.

## openpilot
Openpilot is an open source driving agent. It is capable of controlling the gas, brake, and steering on certain cars, reaching up to 6 minutes with no user action required (besides paying attention!). Currently works with Panda and Giraffe on some Honda and Toyota cars with many more Honda and Toyota ports currently underway. See How it works and Installing OpenPilot on the EON for installation instructions for EON

## NEO
neo is an open source robotics research platform. It is powered by a OnePlus 3(3T) smartphone and an STM32F205-based CAN interface board. EON plus Panda is capable of everything that NEO is capable of.

## pedal
The Comma Pedal is an open-source, community supported gas-pedal interceptor. It is used to enable stop-and-go capability in cars that lack it.

## chffr
Chffr is like a Fitbit for your car. It's a dashcam app that powers comma.ai's self-driving technology. For every minute you record you get comma points. Pair it with panda and view your compatible car's messages in cabana. It is available for Android and iOS

## chffrplus
ChffrPlus is the default NEOS program for the EON. It doesn't allow for self driving but it does allow you to run Spotify, Waze, and Chffr all on the same phone with a great UI.