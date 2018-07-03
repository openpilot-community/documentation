# Installation

## **Getting Started**

Before we get started, it’s important to note that some of these steps and screens may change as the software updates change so please bare with me as I keep this up to date as quickly as possible. Use your imagination if some things are different.

## **Plug in the EON**

Using the provided USB power adapter and cable plug in the EON to power.  
This will trigger the EON to boot up.

![](https://cdn-images-1.medium.com/max/800/1*6aT5C-CySd-dUNX1yUj3yA.png)

## **Welcome to EON**

The initial setup just sets up the initial dashcam software.  
We will get to the installation of OpenPilot next.

Tap the `Set up your EON` button to continue.

![](https://cdn-images-1.medium.com/max/800/1*DN19B8_Sjmtpg_NzIk83Xw.png)

## **Review the terms**

Read through the terms & conditions by scrolling down with your finger until you get to the bottom.

Then click **I agree**.Review Terms

![](https://cdn-images-1.medium.com/max/800/1*Ivmdq6yZHEt5tvlRcHlabQ.png)

## **Select your WiFi**

This step may not be available in some versions of OpenPilot.  
I’ve seen it get skipped in some cases but if it shows for you, feel free to select your WiFi and connect.  
If it does automatically skip for some reason, no fear — you can add this later.

![](https://cdn-images-1.medium.com/max/800/1*6qZ3TdJHdD3WtPu2Wg9NTg.png)

## **Adding a SIM Card**

If you have a SIM card with an active data plan, insert it into the slot on the side of the EON. If not, no worries — you can either roll without a SIM card and upload via WiFi \(like I do\) or you can go get one later.

![](https://cdn-images-1.medium.com/max/800/1*BnCJeT6nVnVlNHghs8HVSQ.png)

## **The EON Dashboard**

![](https://cdn-images-1.medium.com/max/800/1*VJZMGXAhbaPdyuegXCRxeA.png)

This is the basic “Home” screen you’ll see whenever EON comes on.

The `New Destination` and `My Drives` buttons are for Chffrplus.  
If you’re seriously just using the EON for Chffrplus, then you can stop now with this guide and enjoy.

If you’re planning to use OpenPilot, you probably won’t ever use the buttons on this screen very often.

## **Uninstall Chffrplus**

In order to install OpenPilot, we must first uninstall the existing Chffrplus software. In the end, Chffrplus is just OpenPilot minus a basic setting… but this is the friendly installer so we must go through this process.

Tap on **Settings** on the home screen.

Scroll down the setting screen and tap on **Uninstall**

![](https://cdn-images-1.medium.com/max/800/1*zXlCqgZngJoslgbSLSpWYA.png)

Confirm your choice by tapping `Uninstall` once more.

![](https://cdn-images-1.medium.com/max/800/1*cdpTM6pdomx2FFXDwiBfjg.png)

Your EON will restart.

![](https://cdn-images-1.medium.com/max/800/1*ILU-HP2sp2rlMeXfx7-aXA.png)

Now you will be taken through a series of prompts.

## **SIM card prompt**

If you did not insert a SIM card earlier, you will probably get prompted again for this. You can just skip it as you could before.

![](https://cdn-images-1.medium.com/max/800/1*70vSS6_qHb5YeEKMgMx-8Q.png)

In some versions of OpenPilot there is a prompt like this that temporarily displays. It’ll go away on its own I believe, or just hit Skip.

![](https://cdn-images-1.medium.com/max/800/1*9nYJzUifdCPtOZogJrBVsA.png)

## **Select Wi-Fi network**

You will be definitely need to connect to Wi-Fi at this point since the next step requires a download from Comma.

Enter that now.

![](https://cdn-images-1.medium.com/max/800/1*1H6mOtwDqg7NJ6J4TK7ZLQ.png)

## **Install NEOS Program**

A NEOS Program as of right now is just OpenPilot.  
Enter the following address in the box:

```text
https://openpilot.comma.ai
```

Press `Done` to continue.

![](https://cdn-images-1.medium.com/max/800/1*eQPNvE-vhsz9PAvaVpz6pA.png)

Review the Terms & Conditions and press `Accept`.

![](https://cdn-images-1.medium.com/max/800/1*6f6hmxHbrmltrcV-7cBJrw.png)

Now you will be taken back to the Dashboard screen where you will press Sign In, which will load a prompt to Google Login.

You will need a Google Login to continue as of today. This may change later I’m sure as Comma’s system matures.

![](https://cdn-images-1.medium.com/max/800/1*_ZcKLv8APq_vfWtzi9_FqQ.png)

Once logged in, that’s it! You should now be running OpenPilot.

It looks a lot like Chffrplus, the only difference is — when plugged into a Giraffe / Panda, you will enable LKAS / ACC features of OpenPilot when you start your car and it’s plugged in correctly.

A special thanks to the original author of this write up found here:

{% embed data="{\"url\":\"https://medium.com/@jfrux/comma-eon-initial-setup-with-openpilot-2b5ea58354a\",\"type\":\"link\",\"title\":\"Comma EON: Initial Setup with OpenPilot\",\"description\":\"As you may or may not know, the EON is NOT sold with OpenPilot pre-installed. Comma, Inc. does not currently sell a product to drive your…\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn-images-1.medium.com/fit/c/304/304/1\*8I-HPL0bfoIzGied-dzOvA.png\",\"width\":152,\"height\":152,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn-images-1.medium.com/max/2000/1\*jRVL3ynl9hZF\_3S3wEAOXg.jpeg\",\"width\":2000,\"height\":1500,\"aspectRatio\":0.75}}" %}

