---
layout: single
title: "Adding Machine Learning Technologies to Your Business Model"
date: 2018-07-15 20:38
author: Chukwuka Orefo
comments: true
categories: [Artificial Intelligence, Business, Business Intelligence, Technology]
---

![Adding Machine Learning Technologies to Your Business Modeli7](/images/image7.png)


__Machine learning is useless…__ unless the right AI model is deployed effectively into your business. Machine learning models are cool but harnessing their power in the context of business is the ultimate goal. Why are there so many AI models and how can business find the right AI architecture? Like almost anything else AI models span a wide range of complexity.
We have the basic statistical methods that help us determine the probability and conditional probability of things happening. The Bayes is one such example that can be use to find out say the likelihood of an unsatisfied customer suing you!

![Adding Machine Learning Technologies to Your Business Modeli1](/images/Add Machine Learning to Your Business Model1.png "Machine learning with Bayes")

[Machine learning with Bayes]


__Predictive analytics:__ This is used to make predictions with regression methods. You could use this method to estimate sales that result from the dollar you spend on say a marketing program.

![Adding Machine Learning Technologies to Your Business Modeli2](/images/Add Machine Learning to Your Business Model2.png "Predictive analytics")

[Predictive analytics via machine learning]


__Classifiers:__ These are used to identify classes and categorizations. Simple ones include customer segmentation where clustering techniques can be used.

![Adding Machine Learning Technologies to Your Business Modeli3](/images/Add Machine Learning to Your Business Model3.png "Predictive analytics")

[Clustering technique machine learning]

__Decision trees:__ These are helpful if the elements in the classes are more spread out. By using an ensemble of trees we can get more granularity and therefore more accuracy of the classes.

![Adding Machine Learning Technologies to Your Business Modeli4](/images/Add Machine Learning to Your Business Model4.png "Clustering technique machine learning")

[Decision tree]


__Neural networks:__ These provide the ultimate flexibility of partitioning high dimensional spaces. Since neural networks have so many parameters and hyper parameters it works extremely well. However you also need a lot of data to be able to fill these high dimensional space. Networks with lots of layers are useful for applications like face recognition and language translation.

![Adding Machine Learning Technologies to Your Business Modeli5](/images/Add Machine Learning to Your Business Model5.png "Neural network: deep neural network")

[Neural network: deep neural network used for facial recognition and language translation



Okay, so we have all these models but can your business use these tools and techniques to achieve some useful business outcomes?

Well many companies are helping to democratize machine learning which will help.

So how does this happen? Well think of machine learning as a black box:

You just have to get your data in the right format which is the table format and feed it into the black box which will then spit out an answer.

![Business Model6](/images/Add Machine Learning to Your Business Model6.png "Neural network: deep neural network")

[Machine learning black box: Correctly formatted date goes in and value comes out]

Here's what it's going on when your data Scientist or engineer is building your machine learning black box (this is real over simplifying but hopefully you get the gist)

__0.__ Cleaning your data, removing potential biases and formatting your data to prepare it for processing.

__1.__ Break your data into smaller pieces that can be used for:
````
  * Training
  * Cross-validation and;
  * Testing set
````

__2.__ Pick one of the models mentioned:

	* Basic statistical method: Bayes?
	* Predictive Analytics
	* Classification
	* Decision Tree
	* Neural Network: Convolution, Adversarial?

__3.__ Runs against this model while adjusting the parameters of that model automatically at say increments of 0.5?

__4.__ Test your result against a test set which is part of the original data select the test set that gives the best result!

__5.__ Now repeat from step 2 with another model.

__6.__ After cycling through many models you’ll have an idea of which model works best for your particular data because that would give you the least error you also know the parameters of that model to use!

__8.__ You want to do some unit testing as well as behavioral testing to make sure your algorithm

__7.__ Now you can virtually push a button to deploy this model to production there you go!

Business architects and analysis do not need to know that much about machine learning models leave that to your data scientists and machine learning engineers; however it does help if one can understand the basic concepts and be able to deploy machine learning models.


_Hope this helps.._
