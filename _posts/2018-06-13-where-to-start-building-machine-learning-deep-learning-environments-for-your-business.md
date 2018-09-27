---
layout: single
title: "Where to start? Building Machine Learning & Deep Learning Environments for your Business"
date: 2018-06-13 11:01
author: Chukwuka Orefo
comments: true
categories: [AI, Artificial Intelligence, Technology]
---

![](/images/WhereBusiness2.png)

Whether you're a manager setting up machine learning team or new machine learning practitioner getting started, you need to setup a good machine learning and deep learning environment.

![deep_business](/images/WhereBusiness.png "many roads")

There are so many choices out there so it can be a bit confusing at first and you could spend hours if not days trying to figure out the best configuration.

However with the philosophy of ***keeping things powerful, free*** __and__ ***simple*** we can reduce all the confusion and focus in on tools and AI environments that'll work great for most people. Things are changing very fast in this space but nonetheless I believe this is still a good starting point.

### _Basic Programming Language_
The best programming language for getting started with machine learning to date happens to be [*Python*](https://www.python.org/). Some people use [*R programming language*](https://www.r-project.org/) R is more of a statistical package and is a little more complicated compared to Python. Also there’s a lot more work being done on Python so that's your best bet.

On top of Python you would have [*Numpy*](http://www.numpy.org/) which is a numerical package. Numpy  is useful for things like matrix multiplication. On top of Numpy you have [*SciPy*](https://www.scipy.org/) a scientific package again it's also very useful for machine learning. There's also a framework for machine learning that sits on top of SciPy and it's called [*Scikit-learn*](http://scikit-learn.org/). This is the most common machine learning framework.

![deep_business10](/images/WhereBusiness10.png "machine learning stack")

While machine learning can be used for most of the traditional algorithms, there is a framework called [*Tensorflow*](https://www.tensorflow.org/) which is useful for deep learning. There are a couple of other frameworks for deep learning such as [*Caffe*](http://caffe.berkeleyvision.org/), [*Theano*](http://deeplearning.net/software/theano/) and  [*keras*](https://keras.io/)  but for this environment we're not going to consider these as Tensorflow is a good enough substitute. In fact on top of Tensorflow you could have [*keras*](https://keras.io/) which is even easier deep learning framework to use compared to Tensorflow. With Keras you have the power of everything under the stack so from Keras you could use Tensorflow or you could use Scikit-learn or SciPy, Numpy and Python. In addition Python itself has a number of libraries and one of the more useful ones is called [*Matplotlib*](https://matplotlib.org/) which allows you to visualize your data in 3 and 2-dimensional plots. [*Pandas*](https://pandas.pydata.org/) is another useful library for handling data, specifically data frames from which you can load your data and then pass it on to these algorithms.

![deep-learning-environments-for-your-business31](/images/where-to-start-building-machine-learning-deep-learning-environments-for-your-business31.png)

If you want to do any kind of machine vision or computer vision then [*OpenCV*](https://opencv.org)is a good package built just for this purpose. The package is built on the C programming language however it has been integrated with Python with wrappers so you can access OpenCV through Python.

![deep_business4](/images/WhereBusiness4.png "opencv with python")

If you want to start using natural language processing then there are packages such as Correll NLP that's built on top of Java but just like OpenCV it has it can be invoked through Python because it has wrappers for Python.

There's another library for speech recognition which is funnily enough called *speech recognition* and that can also be used if you are interested in that.

So as you can see there are multiple libraries and packages in the ecosystem that one can incorporate into a machine learning or deep learning environment.

### __Data Input__
Because both machine learning and deep learning need to consume a lot of data to be useful and so we must have a way of feeding our algorithms with this data.

#### _So where does this data come?_
Well it can come from several locations such as a CSV file. There are number of tools that can handle a CSV file one of them being a standard text editor. Another of data could be a spreadsheet such as those found in Microsoft Excel file. Another data source could be a relational database such as SQL or Oracle. Another potential source of data could be a binary JSON file. [*MongoDB*](https://www.mongodb.com/) is one such tool that can read and write JSON files. Your data could also be stored on a distributed file system which Hadoop can handle.

![deep_business5](/images/WhereBusiness5.png "machine learning stack")
<h2>Premium Services</h2>
Amazon has conveniently packaged a lot of the systems discussed here into their [*Amazon Web Services*](https://aws.amazon.com/) so it's much more convenient for you want to use it. In fact you could even use one of their databases or data storage service which is a simple storage service to manage the data.

![deep_business6](/images/WhereBusiness6.png "machine learning stack")

There are other machine learning service providers as well such as the [*Google cloud platform*](https://cloud.google.com/)

![deep_business7](/images/WhereBusiness7.png "machine learning with google cloud platform")
So then with all that said and done you might be wondering how you would go about installing all this tech building software conveniently. Well I have you covered on that too!

![deep_business8](/images/WhereBusiness8.png "anaconda programing & package")

If you install [*Anaconda*](https://anaconda.org/) you will get most of these packages. Anaconda includes in its installation as standard Python Numpy and SciPy. If you want to install additional packages it's a pretty simple steps to follow in their instructions manual. To install packages such as Scikit-learn, Tensorflow and Keras all you have to do is a give a simple command like

__pip install:__ *Package name-version*. Anaconda also provides an installation of a simple easy-to-use web-based interface to interact with this whole ecosystem and that's the [*Jupyter notebook*](http://jupyter.org/) which allows you to write code and script keeping all your code and comments and everything else together.

_Hope this helps..._
