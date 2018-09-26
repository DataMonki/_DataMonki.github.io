---
layout: post
title: "Where to start? Building Machine Learning & Deep Learning Environments for your Business"
date: 2018-06-13 11:01
author: Chukwuka Orefo
comments: true
categories: [AI, Artificial Intelligence, Technology]
---
# __Where to start? Building Machine Learning & Deep Learning Environments for your Business__

![](/images/where to start... building machine learning & deep learning environments for your business2.png "where to start")

Whether you're a manager setting up machine learning team or new machine learning practitioner getting started, you need to setup a good machine learning and, or deep learning environment.

![](/images/where to start... building machine learning & deep learning environments for your business.png "many roads")

There are so many choices out there so it can be a bit confusing at first and you could spend hours if not days trying to figure out the best configuration.

However with the philosophy of ***keeping things powerful, free*** __and__ ***simple*** we can reduce all the confusion and focus in on tools and AI environments that'll work great for most people. Things are changing very fast in this space but nonetheless I believe this is still a good starting point.

### _Basic Programming Language_
The best programming language for getting started with machine learning to date happens to be <a href="https://www.python.org/"><span style="color:#1155cc;"><u><b>Python</b></u></span></a>. Some people use <a href="https://www.r-project.org/" target="blank" rel="noopener"><strong>R programming </strong><b>language</b></a> however, <a href="https://www.r-project.org/" target=" blank" rel="noopener"><strong>R </strong></a> is more of a statistical package and is a little more complicated compared to Python. Also there’s a lot more work being done on Python so that's your best bet.

On top of Python you would have <a href="http://www.numpy.org/"><span style="color:#1155cc;"><u><b>Numpy</b></u></span></a> which is a numerical package. Numpy  isuseful for things like matrix multiplication. On top of Numpy you have <a href="https://www.scipy.org/"><span style="color:#1155cc;"><u><b>SciPy</b></u></span></a> a scientific package and it's again is also very useful for machine learning. There's also a framework for machine learning that sits on top of SciPy and it's called <a href="http://scikit-learn.org/"><span style="color:#1155cc;"><u><b>Scikit-learn</b></u></span></a>. This is the most common machine learning framework.

![](/images/where to start... building machine learning & deep learning environments for your business10.png "machine learning stack")

While machine learning can be used for most of the traditional algorithms, there is a framework called <a href="https://www.tensorflow.org/"><span style="color:#1155cc;"><u><b>Tensorflow</b></u></span></a> which is useful for deep learning.  There are a couple of other frameworks for deep learning such as <a href="http://caffe.berkeleyvision.org/"><span style="color:#1155cc;"><u>Caffe</u></span></a> and <a href="http://deeplearning.net/software/theano/"><span style="color:#1155cc;"><u>Theano</u></span></a> but for this environment we're not going to consider these as Tensorflow is a good enough substitute.

On top of Tensorflow you could have <a href="https://keras.io/"><span style="color:#1155cc;"><u><b>Keras</b></u></span></a> which is even easier deep learning framework to use compared to Tensorflow. With Keras you have the power of everything under the stack so in fact from Keras you could use Tensorflow or you could use Scikit-learn or SciPy, Numpy and Python. in addition Python itself has a number of libraries and one of the more useful ones is called <a href="https://matplotlib.org/"><span style="color:#1155cc;"><u><b>Matplotlib</b></u></span></a>, which allows you to visualise your data in 3 and 2-dimensional plots. <a href="https://pandas.pydata.org/"><span style="color:#1155cc;"><u><b>Pandas</b></u></span></a> is another useful library for handling data, specifically data frames from which you can load your data and then pass it on to these algorithms.

![](/images/where-to-start-building-machine-learning-deep-learning-environments-for-your-business31.png)

If you want to do any kind of machine vision or computer vision then <a href="https://opencv.org/"><span style="color:#1155cc;"><u><b>OpenCV</b></u></span></a> is a good package built just for this purpose. The package is built on the C programming language however it has been integrated with Python with wrappers so you can access OpenCV through Python.

![](/images/where to start... building machine learning & deep learning environments for your business4.png "opencv with python")

If you want to start using natural language processing then there are packages such as Correll NLP that's built on top of Java but just like OpenCV it has it can be invoked through Python because it has wrappers for Python.

There's another library for speech recognition which is called speech recognition and that can also be used if you are interested in that.

So as you can see there are multiple libraries and packages in the ecosystem that one can incorporate into a machine learning or deep learning environment.
<h2>Data Input</h2>
Because both machine learning and deep learning consume a lot of data we must have a way of feeding our algorithms with this data.
<h4><strong>So where does this data come?</strong></h4>
Well it can come from several locations such as a CSV file. There are number of tools that can handle a CSV file one of them being a standard text editor. Another of data could be a spreadsheet such as those found in Microsoft Excel file. Another data source could be a relational database such as SQL or Oracle. Another potential source of data could be a binary JSON file. <a href="https://www.mongodb.com/"><span style="color:#1155cc;"><u>MongoDB</u></span></a> is one such tool that can read and write JSON files. Your data could also be stored on a distributed file system which Hadoop can handle.

![](/images/where to start... building machine learning & deep learning environments for your business5.png "machine learning stack")
<h2>Premium Services</h2>
Amazon has conveniently packaged a lot of the systems discussed here into their <a href="https://aws.amazon.com/"><span style="color:#1155cc;"><u>Amazon Web Services</u></span></a> so it's much more convenient for you want to use it. In fact you could even use one of their databases or data storage service which is a simple storage service to manage the data.

![](/images/where to start... building machine learning & deep learning environments for your business6.png "machine learning stack")

There are other machine learning service providers as well such as the <a href="https://cloud.google.com/"><span style="color:#1155cc;"><u>Google </u></span></a>cloud platform.

![](/images/where to start... building machine learning & deep learning environments for your business7.png "machine learning with google cloud platform")
So then with all that said and done you might be wondering how you would go about installing all this tech building software conveniently. Well I have you covered on that too!

![](/images/where to start... building machine learning & deep learning environments for your business8.png "anaconda programing & package")

If you install <a href="https://anaconda.org/"><span style="color:#1155cc;"><u><b>Anaconda</b></u></span></a> you will get most of these packages. Anaconda includes in its installation as standard Python Numpy and SciPy. If you want to install additional packages it's a pretty simple steps to follow in their instructions manual. To install packages such as Scikit-learn, Tensorflow and Keras all you have to do is a give a simple command like

<b>pip install</b> <b>&lt;Package name-version&gt;</b> <b>. </b>Anaconda also provides you is an installation of a simple easy-to-use web-based interface to interact with this whole ecosystem and that's the <a href="http://jupyter.org/"><span style="color:#1155cc;"><u>Jupyter notebook</u></span></a> which allows you to write code and script keeping all your code and comments and everything else together.

_Hope this helps...._
