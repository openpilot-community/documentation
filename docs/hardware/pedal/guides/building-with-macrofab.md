# Comma Pedal: Building with MacroFab

![img](https://cdn-images-1.medium.com/max/2000/1*yhPLHqTtrE-ISlgxx9LQQA.png)

Getting a Comma Pedal is NOT EASY, nor should it be. It’s not exactly a polished and warranted product and it can be dangerous or even deadly to alter the way your car was manufactured. In fact, it doesn’t really even work… that is, unless you build it, flash firmware, and wire it inline with your car’s Accelerator pedal (of which has to be already fitted with some sort of ACC modules) and ensure [OpenPilot](https://github.com/commaai/openpilot) code exists to run it. But for those of us who love this stuff (and want to punish ourselves)… we forge on.

## MacroFab

My first experience with MacroFab (and ordering PCB’s in general) was when I went to order my [Comma Pedal](https://wiki.comma.ai/comma-pedal). I had sent things to MacroFab before, but I didn’t do it myself — someone more inclined always had. My background for the past 20 years is in computer science (mainly software development), but that’s where most of my focus ended. I never really got into electrical engineering, soldering PCB’s, or the physical side of computing all that much. I built a computer from NewEgg but that’s hardly the same.

So when I heard I could order my own Comma Pedal from a company like MacroFab I thought, wow that sounds easy… well its not. And that isn’t MacroFab’s fault, it’s just difficult if you don’t know what you’re doing. So that’s why I’m writing this article.

The rest of this guide will have to do with the latest version of MacroFab’s website so feel free to CMD+CLICK / CTRL+CLICK to open it in a new tab so you can keep the guide open below:
[MacroFab.com](http://bit.ly/make-a-comma-pedal)

## Guide

### 01. Getting Started

You should already have a tab opened since you so obviously read my preface above… you did right? You better have, that’s just rude to scroll down to the words “Getting Started” and miss all of my fluff.

Log in or Sign up first, might as well get that out of the way.

Once you’re logged in for the first time, you will be taken to your dashboard and be greeted with a friendly Welcome message.

![img](https://cdn-images-1.medium.com/max/2000/1*5kw9G2roZJdafCTAQBeYtQ.png)Welcome to MacroFab

Now, the first thing you should notice is that the arrow of the popover does not line up with the Create New PCB button. Oh you didn’t notice? Sorry, inner UX voice is speaking aloud again. Ignore this.

After clicking Okay, instead of Thank you… because we’re rude like that… we will need to start creating our PCB. This ought to be interesting considering I don’t even know what PCB stands for.

![img](https://cdn-images-1.medium.com/max/2000/1*YnykqImYis0QxFY2rKjjcg.png)

Drop my PCB files? I was not told there would be files involved in this guide… awkward. Okay, I’m out.

Alright so, we got our order started and it’s already going to be $17.09 and take 10 days to build even though I haven’t really given them anything yet… Well, like your favorite tax software, these numbers can and will change as you move through the steps.

### 02. Find the build files

So I lied, we won’t ONLY be on MacroFab’s website for the remainder of the article. Quick detour…

Head on over to `commaai/neo` repo on GitHub, or follow the link below:
[https://github.com/commaai/neo/tree/master/pedal](http://bit.ly/comma-pedal-files)

This is the link for the HARDWARE side of your Comma Pedal. It has all of the files needed to build your PCB.

![img](https://cdn-images-1.medium.com/max/1600/1*CwyNNGG_s6NvPjM-CZnQlQ.png)Finding the Board Files

Click on the `board` link and then click the `interceptor.brd` then click on the **Raw** button.

![img](https://cdn-images-1.medium.com/max/2000/1*jUPrzZDLmHWCFpSqyOJyHA.png)GitHub File Preview of interceptor.brd

Go to File > Save As or (CMD+S or CTRL+S).

![img](https://cdn-images-1.medium.com/max/2000/1*YZo0ZJhA4KKfmbT3yX_8aQ.png)Diagram of File > Save As

I had to do it this way, right clicking and going to **Save Link As** did not bode well on MacroFab, it didn’t like the file type or something. Make sure you remove .txt file extension from the Save As: box, and change Format to All Files so it saves as an actual `**.brd** `instead of `.brd.txt`

Now do the same for the `BOM.csv` file. No worries, it’s not an actual bom, I’ve already verified it won’t blow anything up by using spelling.

Now, flip back over to that dropity MacroFab tab and drag that freshly downloaded `interceptor.brd` file onto the website to upload.

After you see some processing of the file happening (aka hamsters), we’re finally getting somewhere exciting!

![img](https://cdn-images-1.medium.com/max/1600/1*FLTtZsIdykUBXrlO4ids5Q.png)

Wow, believe it or not, that was the easy part.

Now on to the next tab, which is **Bill of Materials**

### 03. Sourcing the materials

On the Bill of Materials tab, you’ll be responsible for selecting the parts needed to produce this PCB.

![img](https://cdn-images-1.medium.com/max/2000/1*h2_UZqVeL2STXiHXjiN03g.png)

Damn, you mean it didn’t automatically search and locate all the parts I need? Unfortunately not.

Luckily for you, that’s what the BOM.csv file was we downloaded earlier. Ahhh datz what da bom stands for.

Open up BOM.csv and reference each line to each part.

I found it was easiest to click the Magnifying glass next to the N/A No part selected. In the search box, copy / paste the MPN number from the BOM.csv file into the search box as seen below.

![img](https://cdn-images-1.medium.com/max/2000/1*25FXCUNI0bubyKvcU3tMuA.png)

Then click the Select button on the matched item.

Repeat this for all parts in the list, except for the J1, J2, and HONDA-6PIN.

Check the DNP box next to the J1-J2.

![img](https://cdn-images-1.medium.com/max/2000/1*-m0rRjs0NvHCWxyOPifVkA.png)

If you find that any of the parts are not available or require too large of a minimum order, there are alternatives. For instance, for I had to substitute `GCM188R71C104KA37D` with `GRM188R71C104JA01D` which is slightly different but should work fine for this application. You may have to replace the same part if it ends up applying to you.

Just try to check in the Slack channel or leave a comment below if you have a question on whether a part will work as a replacement or not. I ended up finding the alternative on DigiKey, and then searching for the new part on MacroFab.

Now we’re moving on to Part Placement.

### 04. Part Placement

On my attempt, I didn’t have to adjust the part placement, the MacroFab system did a fairly good job of overlaying the orange boxes over the parts.

You will probably have to confirm each part’s position before you can submit your order. Follow the prompts in the Part Placement tab to approve each part’s placement. If you see something isn’t aligned properly, ensure you nudge it over a little to line up.

Continue doing so until all your parts are approved.

### 05. Quote & Order

This is where you may find that certain parts are Unavailable for `Prototype Class Service` which you will want to use unless you’re ordering a zillion of them.

![img](https://cdn-images-1.medium.com/max/1600/1*lBN3zrGiGeRvsPJzffL7xw.png)

As suspected, some of the parts are not available.

For the first one in the list, the capacitors are a bit trickier sometimes. I find they aren’t in stock most of the time or are unavailable. I had to get creative by searching for the specs of the capacitor such as `0603 0.1 uF 16 V ±5% Tolerance X7R SMT` until I found an acceptible part. The original was +-10% and the one I ended up going with was +-5%.

For the 2nd one, I did a quick Google search for the part number `**RC0402JR-0710KL**` which lead me to this DigiKey link:

![img](https://cdn-images-1.medium.com/max/1600/1*fX879tMQPbRmZU347oTgPQ.png)

Which I then began using the Direct Substitute list to search within MacroFab Bill of Materials area for the ones marked with lowest quantities — Immediate availability. Use the Manufacturer Part Number to search.

Now check back on the Quote & Order tab to see if your Unavailable went away. For me, it went away after the first try.

Repeat those steps for each of the Unavailable items on your list until they all go away.

It can take a little bit of finesse to source all of the parts so don’t feel bad if you’re unsure and need to leave a comment below or hop in the #pedal channel of the [Comma Slack](http://comma.slack.com/).

I think you understand the next steps…
Simply checkout and submit your order / pay for your PCB.

### 06. Additional parts needed

You’ll also need to order the HONDA connectors, or the connectors needed for your respective vehicle. Please seek advice from others in the #pedal slack channel at [comma.slack.com](https://comma.slack.com/).

For Honda’s, you can find them on AliExpress via the link below:
<https://www.aliexpress.com/item/Female-Male-6-Pin-Electrical-Accelerator-Pedal-Sensor-Connector-Auto-Plug-For-Honda-Acura-Nissan-7287/32829238822.html?spm=a2g0s.9042311.0.0.bhl0rv>

### 07. Board & parts arrive

My board took a couple of weeks to manufacturer and finally arrive to my doorstep, but it was well worth it. My board was built with the best of quality and I can’t complain. It looks and works great!

Here is a photo of my finished board.

![img](https://cdn-images-1.medium.com/max/1600/1*5n7jNzAEoiTfzsZBXaoI2Q.jpeg)Photo of My Comma Pedal from MacroFab

Now let’s wire it up!

Follow my guide at [here](https://medium.com/@joshuairl/comma-pedal-wiring-the-connectors-2a453675de9a) to learn about [Wiring the Connectors](https://medium.com/@joshuairl/comma-pedal-wiring-the-connectors-2a453675de9a).

And you’ll need to Flash the Firmware.

I hope you enjoyed this and have your very own Comma Pedal now on order.

Pricing can range from $65 — $130 USD depending on how parts are sourced but I find you’ll be happy you did. Building your own is not easy and I don’t recommend it.

Enjoy!