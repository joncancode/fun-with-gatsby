---
path: "/blog/postgresql"
date: "2017-09-17T09:20:02+00:00"
title: "PostgreSQL, Explained With Basketball Players"
tags: ['nba', 'postgresql', 'database', 'web development']
excerpt: 
---

This article first appeared on Medium [__here__](https://hackernoon.com/postgresql-explained-with-basketball-players-f99fb812c065)

Database can be a scary word. It’s often considered large and complicated, but they can work wonders for keeping your application neat and in order. For more on the differences between the two main types of databases, here is a primer that may be of assistance.

As for what you’re about to read, I’d strongly recommend following along with PSequel, a GUI on Mac that allows you to see the data you are working with. Basketball, like many sports, is filled with data that makes it more interesting. A stat line is essential a chunk of data. Russell Westbrook might as well be a statistician with his triple-double prowess. And what better way to prepare for the upcoming basketball season than to prepare some databases based on player attributes.

![Russell Westbrook](https://cdn-images-1.medium.com/max/1200/1*IW1nAu2fLYTDA4P75CDdmA.jpeg)

One more bit of exposition. PostgreSQL is one of the top programs for relational databases. While there are other good ones such as MySQL and SQLite, I have found PostgreSQL to be most favorable since it’s open-sourced and has a pretty great online community.

And now, it’s gametime.

##Create a Database
Creating a database is simple. First things first, make sure you’re server is running on the command line by running:

```psql```
Now that you’re logged in, creating a database is as easy as:

```create database (name of database);```
Once it’s created, you could see a list of all of your databases with the \l command. To quit from the command line, you can use \q.

##Enter PSequel

![Connect DB](https://cdn-images-1.medium.com/max/1200/1*lUqYbocVY1oP0a2e_Ig5Cw.png)

PSequel is a GUI that makes viewing your data a little easier. I created a database called basketball. Now let’s connect and create some tables.

##Table Creation
Once you’ve connected, you’re free to create tables that will organize all of your data. With ‘query’ selected, we can create a table like this:

![Table Players](https://cdn-images-1.medium.com/max/2000/1*dS4iXk4Y-cwCAmLK7wh4XA.png)

From above, we can see that I am creating a table called ‘players.’ Inside this table, there will be four rows: an ID (mostly to keep track of how many people I am adding), a first name, a last name, and a team. You’ll notice there is a datatype listed after these, which lets the database know what kind of data to expect. Integer is a number. Varchar stands for a ‘variable-length character’ string. The number following this in parenthesis is the maximum number of characters. For more on what kind of datatypes you can use in PostgreSQL, check out [__this nifty list__](https://www.postgresql.org/docs/9.5/static/datatype.html). So the team listed will only be able to hold three characters. Once this is done, run the query and refresh the page (bottom left).


The table, although empty, can now be found in the ‘content’ tab. But we can’t work with an empty table. Let’s add to it.

##All About Insert
With your brand new empty table, head back over to query and insert the following:

```INSERT INTO players (id, first_name, last_name, team) VALUES (1, 'Steph', 'Curry', 'GSW');```


Here, I am inserting records into my ‘players’ table. The first set of parenthesis, while not mandatory, tells the database which columns the data will go into. You can put the columns in whatever order you want here, as long as it corresponds to the second parenthesis group. For example, PSequel would not allow it if I tried to put an integer into the first name field. It’s also important that strings (or varchars) are put into quotes.

![Curry Dance](https://cdn-images-1.medium.com/max/1200/1*KIUHPBaix7AjKfF2t8eJPw.gif)

Easy enough? Alright, let’s add some more data and see how to manipulate it.

##Selecting Your All Stars

![All Stars](https://cdn-images-1.medium.com/max/1600/1*BWPN3X2jtd0myX3NoCrpcg.png)

We have some data to work with
From the image provided, now we can select and manipulate the players. Quite a squad we have so far. Head back into query and run the following line:

```SELECT * FROM players```
From here, you can see everyone. But what if you only wanted to see players from the Golden State Warriors? Next, run the following lines:

```SELECT * FROM players WHERE team = 'GSW'```

This ‘where’ keyword is especially important when we want to update or delete items from the database. Other keywords can be concatenated to these lines to show even more data.

```SELECT * FROM players WHERE team = 'GSW' OR team = 'NY'``

The statement above will show you anyone from either Golden State or New York. Notice the ‘or’ statement.

```SELECT * FROM players WHERE team = 'GSW' AND first_name = 'Steph'```

This statement would return just Steph Curry, since while Klay Thompson does share the same team (GSW), his first name does not match.

You may also run greater than, less than, or equal to statements for integers. Take the following example and notice that the first two IDs are not returned.

```SELECT * FROM players WHERE id > 3```

#Updating and Deleting
Let’s now change something in our database. We’ve heard some speculation about Lebron James heading to the Lakers after his contract is up. How can we reflect this in our data:

```UPDATE players SET team = 'LAL' WHERE last_name = 'James'```

The first line specifies the table you are changing. The second line specifies what we are setting. The third line tells us that we only want to change the data that has a last name of James. Like the earlier examples, we could have added more parameters, as well as ‘and’ or ‘or’ statements.

Notice that Lebron James now plays for the Los Angeles Lakers. By clicking on the ID column header, we could once again order the players by their IDs (or any other header for that matter.

![Lebron Laker](https://cdn-images-1.medium.com/max/1600/1*PYjYWd-1H7KtdGpwLw9vBA.png)

Deleting is done in a similar manner, but by using the word ‘delete’ instead of update. And once again, we can add as many parameters as we want. The command below wipes Lebron James from the list.

```DELETE players WHERE last_name = 'James' AND team = 'LAL'```

But he probably wouldn’t like that.

<iframe src="https://giphy.com/embed/xTiTnDAP0RiCo9k85W" width="480" height="276" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sbnation-xTiTnDAP0RiCo9k85W"></a></p>