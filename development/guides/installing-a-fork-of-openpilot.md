# Comma EON: Installing a Fork of OpenPilot

![img](https://cdn-images-1.medium.com/max/1000/1*-gkJv42ZG6Tkq4TRJTD12A.png)

> **UPDATE 06/27/18**Now includes information about checking out my Comma Pedal branch for testing support of your vehicle, as well as backing up your existing openpilot, and restoring it back if the fork / branch doesn’t work.

If your vehicle is not 100% supported by Comma, Inc. you may find yourself needing to use a slightly different version of OpenPilot rather than the one you initially installed on your EON.

That can be a daunting task for a beginner or someone that is less familiar with SSH and issuing shell commands so my goal with these articles is to help bring light to that and help beginner level tech people do some advanced things.

#### Prerequisites to this article

If you haven’t already done so, please follow along with my Getting Connected article before proceeding. You can find it below:

[**Comma EON: Getting Connected with SSH**
*Recently I’ve noticed loads of requests for a simpler guide to getting connected to EON. The “dashcam” device that is…*medium.com](https://medium.com/@jfrux/comma-eon-getting-connected-with-ssh-3ed6136e4a75)

#### Open Terminal / PowerShell

On **Mac**: `CMD+SPACEBAR` and type `Terminal` and press **Return**.

![img](https://cdn-images-1.medium.com/max/800/1*ZyRv0BkXaGwYjXkR2WdWuQ.gif)

On **Windows**: Press the`WINDOWS KEY` on your keyboard and type `PowerShell` and Right click the result and click `Run as Administrator` or right click the Start Menu icon and go to `Power Shell (Admin)`

![img](https://cdn-images-1.medium.com/max/800/1*xZRlRe01VE-CW9mvj3G5oQ.gif)

On **Ubuntu**: `CTRL+ALT+T`

You will remain in Terminal / PowerShell for the majority of this article series.

#### Get Connected

Ensure your EON is connected to the same wifi network as you and then connect to it via SSH like so:

```
ssh root@<IP_ADDRESS_OF_EON> -p 8022 -i ~/.ssh/openpilot_rsa
```

> For additional information on how to SSH into your EON, checkout my article on [Connecting to EON via SSH](https://medium.com/@jfrux/comma-eon-getting-connected-with-ssh-3ed6136e4a75). It also contains information on determining your EON’s IP address, and its Wifi settings.

![img](https://cdn-images-1.medium.com/max/800/1*V2RwhZQ5GOWHHQ0aSPgXxw.gif)

You will be placed in the `/system/comma/home` directory after connecting.

#### Change to `the data directory`

We’re going to move into the `/data` directory which is the parent directory of `openpilot` which is the folder we will be changing.

`NEOS` the Android-based operating system running on your EON expects `openpilot` to be in `/data/openpilot` so any `openpilot` branch, tag, fork, etc. you place in that directory path will be attempted to load upon boot.

![img](https://cdn-images-1.medium.com/max/800/1*v9D3V42YKxtA3i2GRmGkCA.gif)Change to the data directory

#### Backup OpenPilot Directory

The quickest / cleanest way to back up OpenPilot is to simply rename the folder to something else. You can quickly do this by issuing this command:

```
mv openpilot openpilot.backup
```

This `mv` command is moving the directory openpilot and its contents to the openpilot.backup directory.

To check your work at anytime, you can list the directory on the screen using the command below:

```
ls -lah
```

![img](https://cdn-images-1.medium.com/max/800/1*EfMyOcp4xMQ6mvWPjiE-xQ.gif)Listing the contents of the data directory

#### Clone the OpenPilot Fork

Now it’s time to get the new OpenPilot fork you’re wanting to use.

For this demonstration, we will use my fork of OpenPilot found at:

[**jfrux/openpilot**
*openpilot - open source driving agent*github.com](https://github.com/jfrux/openpilot.git)

On the GitHub repository website there is a **Clone or download** button.

Click that and copy the full address of the repository.

![img](https://cdn-images-1.medium.com/max/800/1*ZdWCRmt5nXqUCxF6VAd-GA.gif)

Now go back to your Terminal / PowerShell window and enter the following command:

```
git clone https://github.com/jfrux/openpilot.git
```

![img](https://cdn-images-1.medium.com/max/800/1*aJSpzZUaL14NVRZ4H7Hd_Q.gif)Cloning the Fork Repository

#### Using a specific branch of the fork

When we use `git clone` like above, it will clone the default branch for the repository. Sometimes this is what we’re wanting, sometimes it’s not.

In the case where it’s not, you’ll need to change to the recommended branch for the code you’re testing.

For my example, I’d like to use my latest pull request for the Comma Pedal modification you can use to achieve stop-and-go in car’s that don’t currently support stop-and-go which allows your vehicle to slow all the way to a stop in traffic and start going again on it’s own without touching the pedals. Most car’s do not allow this, for whatever reason (most likely manufacturer liability) and limit your vehicle to not use ACC / LKAS below 25 mph or so. Some are as high as 40 mph!

Learn more about Comma Pedal on the Wiki or read up on how to build your own in my how to guide.

[**Comma Pedal - comma wiki**
*The Comma Pedal is a gas pedal interceptor. It is a device that is inserted between a car's electronic gas pedal and…*community.comma.ai](https://community.comma.ai/wiki/index.php/Comma_Pedal)

[**Comma Pedal: Building with MacroFab**
*Getting a Comma Pedal is NOT EASY, nor should it be. It’s not exactly a polished and warranted product and it can be…*medium.com](https://medium.com/@jfrux/comma-pedal-building-with-macrofab-6328bea791e8)

Anyway, wow tangent city…

You can checkout any branch by using this the following command within the directory of `openpilot` at `/data/openpilot`

```
git checkout <branch_name>
```

In our case, let’s checkout my Pedal branch if you have a Comma Pedal installed and the PR hasn’t been merged into the primary repo yet.

```
git checkout feature/support-for-comma-pedal
```

Now on to rebooting and trying it out!

#### Reboot EON

This is necessary to have EON use the new code-base. It has a compile process it runs upon boot.

```
reboot
```

![img](https://cdn-images-1.medium.com/max/800/1*mcD4aDZ0rDUUnnqj4L1DMg.png)

#### Restoring From Your Backup

If the fork you tried failed for any reason, or isn’t offering you the correct functionality. You may quickly restore your backup that we created earlier in the article by following theses quick steps.

Repeat the first steps about connecting to SSH if you aren’t already.

Once connected, change into the `/data` directory

```
cd /data
```

Now, as long as you named your backup `openpilot.backup` as stated earlier in the article…

Run the following command to move the fork to a new backup.

```
mv openpilot openpilot-fork.backup
```

And then move your previous backup to it’s new home…

```
mv openpilot.backup openpilot
```

> Always remember, EON looks for openpilot to be in the `/data/openpilot` folder so as long as you place it in there, you’re good.

Now just reboot again and you’ll be running your previous version before the fork.

```
reboot
```

#### Profit.

If you have any questions or issues with this, feel free to leave a comment or hit me up on [Comma Slack](https://comma.slack.com/) @jfrux