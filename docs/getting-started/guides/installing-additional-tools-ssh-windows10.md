# Installing Tools for Accessing EON via SSH on Windows 10

![img](https://cdn-images-1.medium.com/max/1600/1*LY1kSbP1YVo08x8TNZ4M6A.png)

On most unix-based platforms, including MacOS and Ubuntu you will have the tools you need to connect to your Comma EON such as `openssh` and `vim` already installed and are ready to go.

If you’re on one of these platforms, you may skip to the [Getting Connected with SSH](https://medium.com/@jfrux/comma-eon-getting-connected-with-ssh-3ed6136e4a75) article.

On Windows, it’s not as straight forward. In order for my other articles to make the most sense possible, I recommend you follow my conventions below on what and how to install these things on Windows 10.

*Without further ado…*

## Guide

Open up PowerShell with Administrative Privileges by **right clicking** the Windows Logo or Start Menu generally found in the bottom left.

![img](https://cdn-images-1.medium.com/max/1600/1*xZRlRe01VE-CW9mvj3G5oQ.gif)

> Alternatively, you can Search Windows for `PowerShell` then right click the result and click `Run as Administrator`.

### 01. Disabling Quick Edit on PowerShell

Start by disabling Quick Edit in PowerShell to prevent any confusion while running installs.

> **Why do I need to disable Quick Edit:**
> With Quick Edit enabled, PowerShell can “pause” a running process by simply clicking the shell window. This can cause much confusion and frustration.

Disable it by Right Clicking the icon at top left of the PowerShell window and clicking Properties. Uncheck Quick Edit and press OK.

![img](https://cdn-images-1.medium.com/max/1600/0*i4AzlokHDCMUHdfU.png)A screenshot I ripped from somewhere since I’m not running Windows at the moment.

### 02. Install Chocolatey Package Manager

Install [Chocolatey](https://chocolatey.org/) Package Manager by **pasting / typing the following command** into your freshly opened PowerShell:

> **Why do I need Chocolatey?**Well you don’t NEED anything in life. Some things just make life a little easier.Chocolatey is “the package manager for Windows”.
> Basically, it makes installing ANY application (especially command-line based tools) much easier.

```
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString(‘https://chocolatey.org/install.ps1'))
```

*For more information or troubleshooting this process, visit the* [*Chocolatey guide*](https://chocolatey.org/install#install-with-powershellexe)*.*

**NOTE: For good measure, after installing Chocolatey close PowerShell and re-open it.**

Now, most articles relating to Windows + SSH and even the [Comma Wiki](https://wiki.comma.ai/) itself, recommend using a tool known as PuTTY which is okay in some cases but for the sake of this article and the fact that you’re on a modern Windows operating system (Windows 10) AND for my own personal sanity let’s stick with the open standard known as `openssh`.

### 03. Install OpenSSH with Chocolatey Package Manager

Install [OpenSSH Client with Chocolatey](https://chocolatey.org/packages/openssh) by **pasting / typing the following command** into your newly opened PowerShell:

```
choco install openssh -y
```

This tells Chocolatey to install the `openssh` package. The `-y` parameter just tells it to answer Yes for the standard install prompts to make things smoother.

### 04. Install VIM Editor with Chocolatey Package Manager

Install [vim with Chocolatey](https://chocolatey.org/packages/vim) by **pasting / typing the following command** into PowerShell:

```
choco install vim -y
```

> VIM is a popular text editor for your shell that is used across different operating systems and it’ll help the rest of my articles go smooth for you.

Once both installs have completed successfully, I’d close and reopen PowerShell once more for good measure.

Now with a fresh PowerShell screen up in front of you, let’s move on to the fun stuff.

Your next step is most likely going to be the article below…

Continue to guide on [Connecting to EON with SSH](./connecting-to-eon-with-ssh.html).

Enjoy and thank you for reading.