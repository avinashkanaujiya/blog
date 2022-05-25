---
title: Object Oriented Programming - A Primer
updatedAt: 2022-05-15
---

OOP is one of the most essential concepts to know for any programmer. Remarkably accurate for Entry Level or Junior Level programmer. And I bet every programmer in their greener 20s must have been asked or grilled about OOP. But it is also the most easily overlooked concept in programming if you are only starting out.

OOP has been used since the 90s, as a problem-solving paradigm and is one most used ones. Although there are many paradigms like Functional Programming, Logical Programming, Imperative Programming etc.

But OOP has emerged the winner over the years, although functional programming is catching up.

Hence it is imperative to study this Paradigm of Programming. OOP has four main Principles:

1.  [Encapsulation](#root/root/7roToV98lR1I/INlwylMkpDic/5D2I9nmSCAXR/DjBnisvOjQW8)
2.  [Abstraction](#root/7roToV98lR1I/INlwylMkpDic/5D2I9nmSCAXR/yi3nVEXT5a4b)
3.  [Inheritance](#root/7roToV98lR1I/INlwylMkpDic/5D2I9nmSCAXR/6RnNrgfG0Jo4)
4.  [Polymorphism](#root/root/7roToV98lR1I/INlwylMkpDic/5D2I9nmSCAXR/HbnbI9K9O3AH)

We will deal with each of them in the order above.

Encapsulation
-------------

Encapsulation is a concept where data and methods are encapsulated so that other objects cannot access the data and some methods directly, while some public methods are provided for interacting with the said data.

Say we have a program, where peoples object can interact with a cat object (people can be anything). People can access any data of cat and make it do whatever it wants. That could create a problem. Because people could interact with the cat in a way that a developer may or may not have intended. So basically it will stop being a cat program and will become a crazy cat program. Why? Read below.

Here data field inside cat is energy, hunger, tiredness and a meow() function. I won't define people object's fields, because it doesn't matter at the moment. Now people can make it's every data field maximum. Does it make sense for a cat to be energetic and tired at the same moment and also be so much hungry even though it has so much energy already stored in its virtual/cyber body? No. No, it doesn't. (also making it to meow() whenever we feel is also not normal)

Hence we use encapsulation in our program, whenever we are about to implement said functionality in the program. Now if we had made all data fields and meow() method private and created few public methods, namely sleep(), eat(), play(), defining how to interact with the cat. Then the above mentioned non-sense would cease to exist.

Encapsulation helps in developing hugely complicated codebases.

Abstraction
-----------

Basically, abstraction can be thought of as a natural extension of encapsulation.

Abstraction aims to only expose the high-level working mechanism of objects, leaving the complicated and colossal implementation under the hood. Which makes objects more comfortable to be used by the user.

Take, for example, a car, it has many complicated features and its complex implementation, but user/driver himself is oblivious to the fact that he is running such a complicated machine. For him, its only a machine take needs a key and fuel to run. Here abstraction is at work to make the complicated machine into something simple that a driver/user could use.

In programming, large codebases over a long time get so much complicated, with hundreds of objects communicating with each other, that they get challenging to maintain. Abstraction helps in easing this problem by hiding the complex mechanism of each object and showing the relevant details.

Abstraction helps in maintaining the vast codebases.

API is also an example where abstraction is implemented.

Inheritance
-----------

As development and maintenance of codebases are taken care of, there is another problem.

A lot of time, many objects in the program are the same in many ways and unique in few. So writing these objects over and overtakes a lot of the time of the programmer. Inheritance comes to the rescue.

What Inheritance does is, it creates a subclass (child) from a class (parent) with all the common code and logic and allows you to add your own unique logic to it. Saving both efforts and time.

For example, you need to write a program where their persons with different kinds of job and professions. Here you will have to rewrite the human size for each and every person over and over again. But with Inheritance, you can write the human side once and inherit it to all the different persons and only write their various jobs and professions code. This way programmer can save a lot of their valuable time and then use for making the program even better.

Inheritance provides the code reuse-ability perks in a large codebase.

Polymorphism
------------

Polymorphism means "many shapes" in Greek. It is also the most complicated concept of the four main principles in OOPs.

After codebases grow to a specific size, the naming of new methods and functions become increasingly tricky as most proper names are already taken. And also methods & functions need to have appropriate names to make sense of what they do in the programs.

To address this problem, Polymorphism is introduced. It means that same-named methods can be implemented in different classes with unique code logic of their own. This is made possible by keeping class definition in its own [namespace](#root/root/7roToV98lR1I/INlwylMkpDic/5D2I9nmSCAXR/HbnbI9K9O3AH/RJzHIvRJ4xWS) and due to which names assigned within the class definition aren't in conflict with the other names outside it. It is valid for both data and methods of an object's instance.

It simplifies the programming interface. It also empowers programmers with the ability to use the same name over and over for different classes with a different implementation. The programming interface can be described as a set of abstract behaviours, quite apart from classes that implement them.

Virtual Methods is how Polymorphism is implemented in many languages.

#### Note

You might want to keep this article bookmarked because I will be updating this as when I find new things while studying. And it will grow in depth as time passes. 

Do comment below to let me know if you have any problem or suggestion or request.
