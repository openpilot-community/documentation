# Driver Monitoring

Openpilot now comes equipped with Driver Monitoring as of v0.5.
It is not enabled by default and is currently considered beta software.

The prior cutoff limit for engagements was 6 to 6 1/2 minutes without touching the wheel before Openpilot would require you to make contact with the wheel and apply a slight bit of torque.

It still does have these cutoffs if you do not enable Driver Monitoring.
The cut offs have been lowered to 3 minutes in v0.5.

## How does it work

The EON's front facing camera monitors the driver’s head movements.

![](/images/2018-07-14-23-28-27.png)

Whenever you are not watching the road, a warning will appear on the EON's screen immediately.

![](/images/2018-07-14-23-30-26.png)

After **FOUR** seconds of not watching the road and your vehicle will alert you with a loud audible series of beeps.
After **SIX** seconds of not watching the road and the openpilot system will disengage and begin to slow down.