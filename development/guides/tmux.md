# Comma EON: tmux cheatsheet for NEOS

This is more of a reference post rather than a tutorial.
The EON is specifically different with normal tmux documentation.

Although I don’t understand the reasoning just yet, I can tell you the basics of what I’ve learned. I will continue to update this reference as I get more information. I’m also going to give you a cross platform view of different ways to attach tmux in different terminal emulators. From what I’m seeing, they’re all the same.

**TLDR;**
If you’re just looking to detach from tmux on EON, the hot keys are ```+ `d`

## Open Terminal / PowerShell

On **Mac**: `CMD+SPACEBAR` and type `Terminal` and press **Return**.

![img](https://cdn-images-1.medium.com/max/800/1*ZyRv0BkXaGwYjXkR2WdWuQ.gif)

On **Windows**: Press the`WINDOWS KEY` on your keyboard and type `PowerShell` and Right click the result and click `Run as Administrator` or right click the Start Menu icon and go to `Power Shell (Admin)`

![img](https://cdn-images-1.medium.com/max/800/1*xZRlRe01VE-CW9mvj3G5oQ.gif)

> **A NOTE ABOUT WINDOWS**:
> I recommend getting comfortable with PowerShell and using Chocolatey Package Manager + OpenSSH. 
> Learn how to set this up by following my guide below:

[**Comma EON: Installing Tools for Accessing EON via SSH on Windows 10**
*On most unix-based platforms, including MacOS and Ubuntu you will have the tools you need to connect to your Comma EON…*medium.com](https://medium.com/@jfrux/comma-eon-installing-tools-for-accessing-eon-via-ssh-on-windows-d8eb1ba7e7e5)

On **Ubuntu**: `CTRL+ALT+T`

You will remain in Terminal / PowerShell for the majority of this article series.

## Get Connected

Ensure your EON is connected to the same wifi network as you and then connect to it via SSH like so:

```
ssh root@<IP_ADDRESS_OF_EON> -p 8022 -i ~/.ssh/openpilot_rsa
```

> For additional information on how to SSH into your EON, checkout my article on [Connecting to EON via SSH](https://medium.com/@jfrux/comma-eon-getting-connected-with-ssh-3ed6136e4a75). It also contains information on determining your EON’s IP address, and its Wifi settings.

[**Comma EON: Getting Connected with SSH**
*Recently I’ve noticed loads of requests for a simpler guide to getting connected to EON. The “dashcam” device that is…*medium.com](https://medium.com/@jfrux/comma-eon-getting-connected-with-ssh-3ed6136e4a75)

![img](https://cdn-images-1.medium.com/max/800/1*V2RwhZQ5GOWHHQ0aSPgXxw.gif)

### Attaching

You can attach to the tmux session with the standard command:

```
tmux attach
```

### Detaching

Detaching from the EON tmux session is different than normal…

On Mac: ``` + `d`On Linux: ``` + `d`On Windows w/ OpenSSH: ``` + `d`On Windows w/ PuTTY: ``` + `d`