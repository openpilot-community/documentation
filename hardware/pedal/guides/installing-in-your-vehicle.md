# Comma Pedal: Installing in Your Vehicle

![img](https://cdn-images-1.medium.com/max/2000/1*DCHTlQK_xUIW_Y6fCo0wQQ.png)

This guide will take you through my experiences installing the Comma Pedal in my 2017 Honda Pilot and some of the article is vehicle specific so please feel free to adapt it to your vehicle.

> **THIS DOCUMENT IS A WORK IN PROGRESS AND IS NOT COMPLETE.**

> DISCLAIMER:
> Before we get started, I’m going to warn you that I’m not an expert on any of this. Sadly I also feel the need to tell you that by doing these types of things, you have the potential to void your vehicle manufacturers warranty and are risking breaking something. I’m not warranting this guide to any level so proceed at your own risk. Much of the information I’m writing about I’ve gathered from other community members and from my experiences with installing this in my own vehicle.

Now we can proceed.

### Prerequisites

- This guide assumes you have properly [Flashed your Comma Pedal](https://medium.com/@joshuairl/flashing-the-comma-pedal-with-ubuntu-a83fb668f6e2).
- This guide assumes you have properly [Wired and Tested Your Comma Pedal](https://medium.com/@joshuairl/comma-pedal-wiring-the-connectors-2a453675de9a) for your specific vehicle.
- This guide also assumes you are brave and are willing to do (what some might consider) unacceptable things to your perfectly nice and already operating motor vehicle.

### Removing the accelerator pedal

This is optional but I highly reocmmend it for your sanity and safety of you and your Comma Pedal.

#### Locate the wire harness connecting to your accelerator pedal.

![img](https://cdn-images-1.medium.com/max/2000/1*FdK6W7A8cWefqV5T5Br5xw.jpeg)

#### **Disconnect the wire harness from your accelerator pedal.**

Start by locating the connector on your accelerator.

![img](https://cdn-images-1.medium.com/max/2000/1*FdK6W7A8cWefqV5T5Br5xw.jpeg)

Now we need to get both hands involved.

Pinch the connector at the top of the tab with 1 finger on the tab-side, and one finger on the back-side. This should cause the bottom of the tab to pop out a bit. See below.

![img](https://cdn-images-1.medium.com/max/2000/1*jh2yaS8TZV7_HqyRL2EtnA.png)Diagram of Pinching the Connector

While pinching the tab in, the bottom of the tab will pop out a bit.
Now place a long-thin flat head screwdriver in under the tab.

![img](https://cdn-images-1.medium.com/max/2000/1*D1ZvBw9t_IukJf3A9xewCQ.png)Diagram of Removing the Connector with Screwdriver

While the screwdriver is under the tab, you can remove your pinching hand and apply force to the bottom of the screwdriver to lift the connector out of your accelerator pedal as shown above.

#### Remove the Pedal

The pedal in my 2017 Honda Pilot has 3 nuts to remove it. See below.

> Most modern vehicles (I’m assuming) are similar to mine in that the pedal is self-contained and only hooked up by a wire harness and nothing else so it’s relatively straight forward to take it in and out.

I used a 12mm socket with extension to remove these.

![img](https://cdn-images-1.medium.com/max/2000/1*_jx5WV7K3qwkxrhsyaXMOg.png)

#### Attaching the Interceptor Device (Comma Pedal)

It’s fairly self explanitory at this point.
Obviously the pedal sticks on top of your physical pedal, then you need to connect the wiring to your stock harness that you disconnected from the physical pedal.

Attach a network cable (RJ-45) from the pedal network port, up to your Giraffe near your mirror.

I recommend running a custom cable length up to giraffe to make it nice and cleaner so you don’t snag or have any wires dangling down. Terminate the cable ends after running your custom cable length through the paneling of your vehicle.

I ran mine up over your feet in the feet well then up the piller of the door opening and up over the ceiling of the car behind the paneling and stick it out where the Giraffe is.

I terminated the cable ends with Keystone Jacks and used 6" patch cables to wire it up.

![img](https://cdn-images-1.medium.com/max/1600/1*LBm04BJ3JfSBaSiqYrWwRQ.png)My terminated keystone jack up by the giraffe.

![img](https://cdn-images-1.medium.com/max/1600/1*mMXPKV18MRHuSjGArCVwIw.png)A short patch cable is connecting the giraffe to the keystone connector.

![img](https://cdn-images-1.medium.com/max/1600/1*LnX6H58MAys1g2tFgnQcJQ.png)A red patch cable connects the interceptor to the Giraffe

#### Next Steps

Now that you have it all wired up, you need to install a version of OpenPilot with support for the Pedal in your vehicle.

As of today, OpenPilot doesn’t support Comma Pedal in all vehicles that it supports so you may have to use a fork.

I currently have a PR in for the Acura RDX, Honda Pilot, Honda Odyssey which should resolve for those vehicles once it’s accepted but that may or may not be soon.

I believe the Acura ILX might already have support for the Pedal so feel free to use the master branch as is.

Currently Toyotas do not support Comma Pedal.

Enjoy!