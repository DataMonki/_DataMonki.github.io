---
layout: single
title: "Understand Your Competitors with AI"
date: 2018-02-13 03:15
author: Chukwuka Orefo
image:  
comments: true
categories: [Artificial Intelligence, Business, Technology]
---
![](https://apragmatic.files.wordpress.com/2018/08/darpa-were-moving-towards-a-merging-of-humans-and-machines-11.jpg "DARPA-Were-Moving-Towards-a-Merging-of-Humans-and-Machines-1")

One of the greatest strengths of machine learning is its ability to infer the underlying structure in the data without having to actually create the models manually this can come in handy for competitive analysis for example when we have data about our competitor but we don't necessarily know the model behind.

Let’s say you run a company that provides auto insurance for your customers. Your premium customers pay is proportional to the risk. The risk is a function of many factors like drivers <b>age</b> drivers <b>accident history</b> parked <b>location</b> of the car etc...

![](https://apragmatic.files.wordpress.com/2018/08/compettor.png "compettor.png")

How every for this example we'll simplify things to better understand the concepts. Let's assume that risk is only a function of the drivers age.

![](https://apragmatic.files.wordpress.com/2018/08/compettor2.png "compettor2.png")

If say for example we had competitor data on their customers specifically the customers <b>age</b> and their <b>premium. With this </b>we can determine the competitor's underlying risk model. What we need to do is break the data into a training set and a testing set then use a training set to train the machine. There are a number of machine learning algorithms that you could use but you can pick the one that seeks to reduce the error on the testing set.

Let’s say that the machine found the underlying pattern for the competitor data to have a nonlinear relationship between risk and age as seen below: ![somedata](https://apragmatic.files.wordpress.com/2018/08/compettor3.png "compettor3.png")

We can now run the same experiment with your own company's data. Now let’s say your analysis produces the following results below:

 ![](https://apragmatic.files.wordpress.com/2018/08/compettor4.png "compettor4.png")

If your expense ratio is comparable to your competitors then you know that you're capturing the younger and senior segments of the population and your competitor is capturing the middle age group with this information. Armed with this knowledge you can make some business decisions on how to penetrate the middle-age market. Perhaps you can add more risk factors to this segment to get more accuracy or perhaps you want to leave it the way it is because you believe that the risk estimation that you're doing is more accurate than your competitors and if you lower the risk anymore you'll be losing money.


<img class="alignnone size-full wp-image-187" src="![](https://apragmatic.files.wordpress.com/2018/08/compettor51.png "compettor5.png" width="920" height="630")


 ![](https://apragmatic.files.wordpress.com/2018/08/compettor6.png "compettor6.png" width="916" height="618")

Note that you will be able to infer what the competitors risk model is without actually knowing what the model is. While this is the fundamental concept you can include more parameters from the data to the machine learning algorithm to increase its accuracy and understand your competitors in order to make business decisions rooted in data.

_Hope this helps..._
