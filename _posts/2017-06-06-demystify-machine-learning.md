---
layout: post
title: Demystify Machine Learning
date: 2017-06-06 21:39
author: By Chukwuka Orefo
comments: true
categories: [AI, Artificial Intelligence, Business, Technology]
---
<b><img title="" src="https://apragmatic.files.wordpress.com/2018/08/null2.png" alt="" width="624"  /></b>

Now a days one hears so much about machine learning so I thought I'd illustrate how machines actually learn using one of the simplest forms of machine learning that's based on a simple data set.
<h2>Buying a Car</h2>
<img title="" src="https://apragmatic.files.wordpress.com/2018/08/image7.png" alt="" width="245" height="162" />

So I'm looking for a used car however buying a used car is a harrowing experience as one can never be too sure if there getting a good deal on or if it’s just pure daylight robbery.

To remedy this I decide to use machine learning to tell me what price I should pay for a car. Let's say there’s some free online data for used cars sold in my neighborhood. The date tells me how old the car was and the price it sold for.

<img class=" size-full wp-image-148 alignleft" src="https://apragmatic.files.wordpress.com/2018/08/what-is-machine-learning.png" alt="what is machine learning.png" width="203" height="278" />

If I plot this with the price against how old the car is I get something like this as you can see there is somewhat of a pattern I can now draw a line to approximate how much we should pay for say a seven-year-old car which turns out to be about $17,000.

<img class=" size-full wp-image-149 alignleft" src="https://apragmatic.files.wordpress.com/2018/08/what-is-machine-learning2.png" alt="what is machine learning2.png" width="417" height="283" />

Using basic algebra I can write down an equation for the line. Looking at the line the y-intercept or the point at which the line cuts the y-axis is 33 also the slope of the line is about -3 so the equation of this line is<b> y = -3x+33</b>; or in other words the price of the car is equal to -3 multiplied by (age of car) plus 33.

If we can program a computer to read these data points and come up with an equation then given any value of x, which is the age of the car the computer can come up with the price.

Essentially the computer would have “learned” from this data.

How does the computer actually come up with the equation based on this data?

Well first it assumes an arbitrary equation, then for that equation it computes an error term which basically tells it how far it is from the data points. If the error is too high then it adjusts the two parameters the slope and the y-intercept in a way that reduces this error. Then it does it <b>again</b> and <b>again</b> and <b>again</b> until it comes up to a close approximation of the data; then it stops.

<img class="alignnone size-full wp-image-150" src="https://apragmatic.files.wordpress.com/2018/08/what-is-machine-learning3.png" alt="what is machine learning3.png" width="427" height="282" />

The equation is the model that's being created. Using this model it can tell the price of the car given the year. And <b>That's it</b>.

Now the same principle can be extended to add more dimensions to the data such as the car mileage, postcode, car model etc.

So to summarize, the things that matter for any machine learning is:
<ul>
	<li><strong>The data:</strong> This has to be sufficient.</li>
</ul>
<ul>
	<li><strong>The model:</strong> This has to be well chosen.</li>
</ul>
<ul>
	<li><strong>The algorithm:</strong> it'll find the parameters of the model.</li>
</ul>
Hope this helps...
