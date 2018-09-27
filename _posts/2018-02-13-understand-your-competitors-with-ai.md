---
layout: single
title: "Understanding Your Competitors with AI"
date: 2018-02-13 03:15
author: Chukwuka Orefo
image:  
comments: true
categories: [Artificial Intelligence, Business, Technology]
---
![](https://apragmatic.files.wordpress.com/2018/08/darpa-were-moving-towards-a-merging-of-humans-and-machines-11.jpg "DARPA-Were-Moving-Towards-a-Merging-of-Humans-and-Machines-1")

One of the greatest strengths of machine learning is its ability to infer the underlying structure in the data without having to actually create the models manually. This can come in handy for competitive analysis if you know how. For example in scenario were we have data about our competitor but we don't necessarily know the model behind the data and as such with the power of machine learning we can infer.

Let’s say you run a company that provides auto insurance for your customers. Your premium customers pay is proportional to the risk. The risk is a function of many factors like drivers <b>age</b> drivers <b>accident history</b> parked <b>location</b> of the car etc...

![](/images/compettor.png "proportional to the risk")
*Car insurance proportional to the risk*

How every for this example we'll simplify things to better understand the concepts. Let's assume that risk is only a function of the drivers age.

![](/images/compettor2.png "machine learning process")
*Pushing competitor data though the machine algorithm*

If say for example we had competitor data on their customers specifically the customers *age* and their *premium*. With this we can determine the competitor's underlying risk model. To achieve this all  we need to do is break the data into a training set and a testing set then use a training set to train the machine. There are a number of machine learning algorithms that one could use but you can pick the one that seeks to reduce the error on the testing set.

Let’s say that the machine found the underlying pattern for the competitor data to have a nonlinear relationship between risk and age as seen below: ![somedata](/images/compettor3.png "premium vs age")
*competitor data premium vs age*

We can now run the same experiment with your own company's data. Now let’s say your analysis produces the following results below:

![](/images/compettor4.png "your data in red.png")
*your data in red superimposed on your competitors data in blue*

If your expense ratio is comparable to your competitors then you know that you're capturing the younger and senior segments of the population and your competitor is capturing the middle age group with this information as they are offering a lower premium to the middle-age group compared to you. Note that you will be able to infer what the competitors risk model is without actually knowing what the model is.
![](/images/compettor6.png "compettor6.png")
*From data you can now infer your competitors business model*

Armed with this knowledge you can make some business decisions as to how you may penetrate the middle-age market. Perhaps you can add more risk factors to this segment to get more accuracy or perhaps you want to leave it the way it is because you believe that the risk estimation that you're doing is more accurate than your competitors and if you lower the risk anymore you'll be losing money.

![](/images/compettor5.png "compettor5.png")
*Possible business solutions to lower make your premium price for middle-age drives more attractive?*

While this is the fundamental concept you can include more parameters from the data to the machine learning algorithm to increase its accuracy and understand your competitors in order to make business decisions rooted in data. This is what google is doing when you use google analytics for your digital platform. This give them a huge competitive advantage that no one is talking about!

_Hope this helps..._
