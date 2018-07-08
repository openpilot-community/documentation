# How to Mount the EON

This page contains tips and suggestions originally from [medium/@jfrux](https://medium.com/@jfrux/comma-eon-mounting-calibration-82806162a51).  
Feel free to PR your suggestions.

![](https://cdn-images-1.medium.com/max/2000/1*D7VvwLKID5AvOZuU-iWj5g@2x.jpeg)

I know there is a _wealth_ of information available on the [Comma Wiki](http://wiki.comma.ai) but there are just some things that seem to be overlooked or misunderstood by some users and I want to hopefully help remedy this by getting this article out there.

#### The Problem \(but not really\)

If you’re like me, you probably didn’t put much initial thought into mounting your EON. You probably mounted it initially without thought or question and then you startup EON and OP and start driving, and for one reason or another the EON is not tracking or is pulling to one side, even after “calibration”.

_By the way, the calibration step is mainly a safety feature to keep you from engaging openpilot while the car is not tracking lane lines and cars yet. If you ever move your EON it will need some time to realign and calibrate \(without hitting Reset Calibration\)_

After realizing this, they stop driving and end up in the [Comma Slack](https://slack.comma.ai) channel. And other user’s responses have always been _“Well it’s probably the yaw, or pitch or your face … “_.

And the truth is, more often than not it’s mounted just fine.   
Stop worrying, breathe.

It’s fairly common sense and most people understand that it should be as visually straight as possible… that’s kind of the general idea, but the responses in Slack about “Yaw” and “Pitch” cause people to spend days doubting their purchase, as well as doubting themselves and how straight their EON is.

#### The Solution

Eyeball it and make it as straight on and as perpendicular as you can under your mirror.

Your vehicle’s stock camera is generally centered but not always, so don’t think that’s the best placement or that you should concern yourself with that.

**Things you should NOT to try:**

* **Do NOT** get all technical about it. It’s just not necessary. One way to find out if you’re overthinking it is ask yourself: “Do I have a ruler, measuring tape, or some other modern sophisticated measuring device in the palm of my hand?”  If you answer yes to any of those, you’re overthinking it.
* **Do NOT** try to park your car in a street somewhere to use the lane lines as a guide. The EON will not always track the lane lines when you first get your openpilot running and you can’t friggin’ mount it and watch the lane lines at the same time. _This may have been useful at one point, but it’s just a waste and not safe._
* **Do NOT** SSH into your device and turn on GRIDDED UI. The grid is so dense that you won’t be able to see anything or make any real judgements on things still. _This may also have been useful at one point but it’s just not that important now. It’s clear as mud. See below._

![](https://cdn-images-1.medium.com/max/1600/1*LQYX9sqCM1cBIpVBRlV8Ew@2x.jpeg)

**Things you SHOULD try:**

* **Do** mount the EON on the correct angled bracket for your windshield. I believe Comma provides a 22deg and a 28deg. The correct mount is the one that makes the EON as vertically level to the ground as possible. As perpendicular to the ground as possible. If you were to put a bubble level on it \(if you could fit it on top, as center bubbled as possible\).

![](https://cdn-images-1.medium.com/max/1600/1*ukc6lh_1JDX46uDt7fpc9g.png)

* **Do** try to get the EON as perpendicular \(or square\) with the front of your car as much as possible \(eyeball it\). You’ll just have to use your best judgement and if things look fairly square then you’re good.

![](https://cdn-images-1.medium.com/max/2000/1*D7VvwLKID5AvOZuU-iWj5g@2x.jpeg)

* **Do** get a small roll of 3M VHB double-sided gray tape with red backing. Or comparable. It’s a foam core based double-sided tape that is very strong and heat resistance and doesn’t gunk up like clear alternatives and doesn’t move or jar when you bump it. It’s also easy to remove later with a metal putty knife. [http://a.co/gaQx2rM](http://a.co/gaQx2rM)

![](https://cdn-images-1.medium.com/max/1600/1*D_FmbXRT0SIc-Pfuijqz7A.png)

* **Do** try to get the EON as parallel with the Earth as possible. You can even carefully use a small bubble level on the top of the EON to get assurance that it’s level. The perpendicular with the car part, \(eyeball it\) and as center to the window as possible \(maybe even slightly left for the inward facing camera to see you.

> You should try to get your EON as perpendicular \(or square\) with the front of your car as much as possible and as parallel with the Earth as possible. You can even carefully use a small bubble level on the top of the EON to get assurance that it’s level. The perpendicular with the car part, you’ll just have to use your best judgement.

My recommendation for mounting tape for the EON is this stuff, or something extremely similar. The reason I say this is that this stuff doesn’t budge and jar the EON when you hit rough road ways. It holds very strong and doesn’t fall off at all or melt in high temps.[**3M Scotch 5952 VHB Tape: 1 in. x 15 ft. \(Black\)**  
_3M 5952 Heavy Duty Mounting VHB Tape is black, double-coated VHB adhesive tape with an acrylic foam core. A modified…_a.co](http://a.co/gaQx2rM)

#### Calibration

Initial calibration most likely will ever only need to be done one time.  
After that, as long as your mount position stays the same — OP should be able to see the lane lines and cars just fine.

**Go on a long-ish drive**

Sometimes it can take awhile for OP to get good at what it does.  
It must run your roadways through its machine learning model to get really good and that usually takes like 20–40 miles of express way driving I’ve found. The more you drive, the better it should get in the end.

I highly recommend express way driving for getting openpilot properly calibrated. Don’t try to run OP on backroads and expect it to stay put upon initial calibration.

After mounting EON, give it a few days of commuting / long driving before considering moving it again. Chances are you probably have it right the first time.

**After repositioning EON mount**

If you move your mount, you shouldn’t need to recalibrate or reset calibration. Just take a nice drive on an express way and ensure openpilot is seeing lane lines and seeing the cars properly before engaging openpilot.

Keep it up and it’ll get better!

