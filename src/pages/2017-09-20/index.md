---
path: "/blog/pokemon-python"
date: "2017-09-20T09:20:02+00:00"
title: "Return of the Consoles: Recreating Pokémon in Python"
tags: ['pokemon', 'python', 'console', 'web development']
excerpt: 
---

This article first appeared on Medium [__here__](https://hackernoon.com/postgresql-explained-with-basketball-players-f99fb812c065)

There are certain instances in my childhood that stand out above the rest. A good number of these involve some sort of video game, with my face glued to a screen. One of the earliest games I could remember was King’s Quest VI, a choose your own adventure game that ran on probably the first computer I ever touched. A few years later, I remember heading to the Toys ‘R’ Us in Sheepshead Bay, where I would make arguably one of the biggest decision a kid in Brooklyn could make in the mid-1990’s — Red version or Blue.

![Red Blue](https://cdn-images-1.medium.com/max/1600/1*_MdfIi7rGx6Yz8rqXvcbKQ.jpeg)

Fast forward to 2017.

For the majority of my coding journey, I’ve tinkered with mostly JavaScript-related stuff. Node has been my backend of choice and React has been my favorite library. But when there’s so much excitement about a little thing called Python, that is knowledge I couldn’t ignore.

##The Python Experiment 

To be honest, my interest in Python came more from machine learning and data scraping. Beautiful Soup is fantastic, and the ease of the language makes it so much more attractive to use on a backend, despite having more experience in Node.

But while Python has all these more practical features, there will always be room for a short project that tugs at my nostalgia. So I took a couple days to try and make a console application.

Why a console application? The terminal is an oft disregarded program that’s use is either for working with Git (for developers) or for completely ignoring in case you cause your computer to blow up (for the non-techies). Becoming comfortable with the console is what all programmers to strive for, and the lack of a true GUI allows the creator to focus solely on what his or her code is doing, and not how it looks on a particular browser.

As I scoured the Internet for more examples of what other developers have done in the console, I saw plenty of fantasy-driven storylines, where the hero grabs a sword at some point and fights a dragon. This is all well and good. My original idea was to do something The Legend of Zelda-related. This sort of adventure seemed to fit the bill of a choose your own adventure game. However, the memory of that Toys ‘R’ Us trip in ’97 kept coming back to me.

Making decisions is at the heart of the Pokémon formula. While Link deals with adding inventory and fighting enemies, the basis of Pokémon falls on which creature you’ll start with, and how this decision will impact your future as a trainer.

The overall code runs pretty simply. The main() function runs in the bottom of the code, then calls the functions that above it. Each decision is a function that features a future function at the bottom of it. At the moment, it is not the most complicated decision tree, but it manages to currently have over a half-dozen outcomes depending on your choices. The code runs in the terminal with the use of a virtual environment, something that I was unfamiliar with, coming from the JavaScript world.

![Start Screen](https://cdn-images-1.medium.com/max/1200/1*I51KEPyZyOm0AyqOSadG0A.gif)

I had a blast creating this mini-application, but it is, overall, a simple game. There are no classes — this would make a more intricate battle system with hit points and whatnot. Neither am I using Pickle to save progress. The game is currently short enough to finish in one setting. While I could continue with the storyline, travel to gyms, and obtain badges, this would best be served in a future application, where I would create my own characters, implement a true battle system, and make use of the creative writing minor I received while at undergrad.

As a lifelong learner and frequent teacher, I will say that creating a fun application like this serves the purpose of teaching without a struggle. More challenging concepts came more naturally because I was having fun. What’s more — seeing the beauty of what Python can create gave me a greater appreciation for JavaScript, a language I’ve played around with all too well, yet never understood how strange it could be when compared with other languages. I even had the pleasure of adding an Easter egg that allows the user to obtain Pikachu as his starting Pokémon. Not bad for a silly console, application, huh?

![Pokemon Choice](https://cdn-images-1.medium.com/max/1600/1*QtgyiFepJTh9TBjwTsKarg.gif)

