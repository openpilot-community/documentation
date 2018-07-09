# Connecting to EON with SSH

![img](https://cdn-images-1.medium.com/max/2000/1*rs5o9T4V-YWUT5koMEBUhg.png)

Recently I’ve noticed loads of requests for a simpler guide to getting connected to EON. The “dashcam” device that is capable of running OpenPilot giving supported vehicles the ability to drive semi-autonomously.

Let’s get started.

## Required Tools on Windows

If you’re on Windows, please follow my guide on installing the tools needed.
I use pretty specific tools in the rest of this article that you may not have installed on your system.

Go to guide on [Installing Additional Tools for Connecting to SSH on Windows 10](./installing-additional-tools-ssh-windows10.html)

## Guide

### 01. Open Terminal / PowerShell

On **Mac**: `CMD+SPACEBAR` and type `Terminal` and press **Return**.

![img](https://cdn-images-1.medium.com/max/1600/1*ZyRv0BkXaGwYjXkR2WdWuQ.gif)

On **Windows**: Press the`WINDOWS KEY` on your keyboard and type `PowerShell` and Right click the result and click `Run as Administrator` or right click the Start Menu icon and go to `Power Shell (Admin)`

![img](https://cdn-images-1.medium.com/max/1600/1*xZRlRe01VE-CW9mvj3G5oQ.gif)

On **Ubuntu**: `CTRL+ALT+T`

You will remain in Terminal / PowerShell for the majority of this article series.

### 02. Installing the EON SSH Developer Key

Visit the [Configuring OpenPilot](https://community.comma.ai/wiki/index.php/Configuring_OpenPilot) page on the [Comma Wiki](https://wiki.comma.ai/).

Select and Copy the entire key from the page and return back here. I’ll wait.

![img](https://cdn-images-1.medium.com/max/1600/1*gal8aMlnmQvff65mPcFYZA.gif)

Now that you’ve copied the key, let’s add it to a file on your computer.

Type in the following command to create the `.ssh` directory if it isn’t already created.

```
# Mac / Linux
mkdir -p ~/.ssh/
```

```
# Windows
md ~/.ssh/
```

> **By the way…**
>
>  `~/` is just a shortcut for your user directory.
> On Windows: `C:\Users\<username>\` 
> On Mac: `/Users/<Username>` 
> On Linux: `/home/<Username>`

Now we need to put the key we copied from the Wiki into a new file.

We can use the following command to open a new blank file for us to paste our key into:

```
vim ~/.ssh/openpilot_rsa
```

Paste (CMD+V / CTRL+V) the entire contents of the PRIVATE KEY just like the animation below.

After pasting it, press `ESC` on your keyboard, then type `:wq!` to save.

![img](https://cdn-images-1.medium.com/max/1600/1*0HXvLD0GYUH0CCRjhRu1yQ.gif)

The file should be saved and closed and you should now see the prompt again.

> **Special note:** 
>
> Mac & Linux: you may have to run the following command so the machine knows the key is safe.
> `chmod 600 ~/.ssh/openpilot_rsa`

![img](https://cdn-images-1.medium.com/max/1600/1*qO8z-o1AuWo2NHSwABYtSg.gif)

### 03. Connecting EON to WiFi

To continue on, we must ensure your EON is connected to the same wifi network as your computer. We also need to obtain the EON’s IP address so let’s do this.

With your EON in hand, *(and hopefully within the comfort of your own home or office… no need to be in the car for this one…)* tap the Settings button and scroll down to WiFi Settings.

![img](https://cdn-images-1.medium.com/max/1600/1*CxwDXtBapYQX0IdyyrN-aQ.gif)

If you **aren’t connected** to the same Wifi, now is the time to go through the standard WiFi process. You know the drill… RIGHT?

If you find you **are connected** to the same network, click the ellipsis dots in the top right corner and click Advanced.

Scroll to the bottom of that screen to find the EON’s IP address.



![img](https://cdn-images-1.medium.com/max/1600/1*c6ch0xmIihVNK5B7kvDhCw.gif)

Now, back in the shell window on your computer. (PowerShell on Windows, Terminal on Mac / Linux).

Type the following command to test that you are able to connect to your EON:

```
ping <IP_ADDRESS_OF_EON>
```

![img](https://cdn-images-1.medium.com/max/1600/1*iGwYleitw6_7X8LK2WrlXQ.gif)

If your ping appears successful, hit `CTRL+C` after about 4 pings (if on Mac). I believe Windows only pings 4 times by default.

If the pings were successful, proceed to connect to your EON by typing the following command:

```
ssh root@<IP_ADDRESS_OF_EON> -p 8022 -i ~/.ssh/openpilot_rsa
```

After entering this command for the first time, you will likely receive a prompt for adding the unknown host to the known hosts file. Simply type yes and press enter to proceed. See an example in the animation below.

![img](https://cdn-images-1.medium.com/max/1600/1*V2RwhZQ5GOWHHQ0aSPgXxw.gif)

If you have any troubles with any of the steps above, feel free to leave a comment below or hit me up on the Comma Slack @jfrux

### What’s next?

Now that you’re connected to SSH, you can do many different tasks within your EON.

[Comma EON: Installing a Fork of OpenPilot](./installing-a-fork-of-openpilot.html)