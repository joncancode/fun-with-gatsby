webpackJsonp([29104935993208],{397:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This article first appeared on Medium <a href="https://hackernoon.com/postgresql-explained-with-basketball-players-f99fb812c065"><strong>here</strong></a></p>\n<p>There are certain instances in my childhood that stand out above the rest. A good number of these involve some sort of video game, with my face glued to a screen. One of the earliest games I could remember was King’s Quest VI, a choose your own adventure game that ran on probably the first computer I ever touched. A few years later, I remember heading to the Toys ‘R’ Us in Sheepshead Bay, where I would make arguably one of the biggest decision a kid in Brooklyn could make in the mid-1990’s — Red version or Blue.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*_MdfIi7rGx6Yz8rqXvcbKQ.jpeg" alt="Red Blue"></p>\n<p>Fast forward to 2017.</p>\n<p>For the majority of my coding journey, I’ve tinkered with mostly JavaScript-related stuff. Node has been my backend of choice and React has been my favorite library. But when there’s so much excitement about a little thing called Python, that is knowledge I couldn’t ignore.</p>\n<h2>The Python Experiment</h2>\n<p>To be honest, my interest in Python came more from machine learning and data scraping. Beautiful Soup is fantastic, and the ease of the language makes it so much more attractive to use on a backend, despite having more experience in Node.</p>\n<p>But while Python has all these more practical features, there will always be room for a short project that tugs at my nostalgia. So I took a couple days to try and make a console application.</p>\n<p>Why a console application? The terminal is an oft disregarded program that’s use is either for working with Git (for developers) or for completely ignoring in case you cause your computer to blow up (for the non-techies). Becoming comfortable with the console is what all programmers to strive for, and the lack of a true GUI allows the creator to focus solely on what his or her code is doing, and not how it looks on a particular browser.</p>\n<p>As I scoured the Internet for more examples of what other developers have done in the console, I saw plenty of fantasy-driven storylines, where the hero grabs a sword at some point and fights a dragon. This is all well and good. My original idea was to do something The Legend of Zelda-related. This sort of adventure seemed to fit the bill of a choose your own adventure game. However, the memory of that Toys ‘R’ Us trip in ’97 kept coming back to me.</p>\n<p>Making decisions is at the heart of the Pokémon formula. While Link deals with adding inventory and fighting enemies, the basis of Pokémon falls on which creature you’ll start with, and how this decision will impact your future as a trainer.</p>\n<p>The overall code runs pretty simply. The main() function runs in the bottom of the code, then calls the functions that above it. Each decision is a function that features a future function at the bottom of it. At the moment, it is not the most complicated decision tree, but it manages to currently have over a half-dozen outcomes depending on your choices. The code runs in the terminal with the use of a virtual environment, something that I was unfamiliar with, coming from the JavaScript world.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*I51KEPyZyOm0AyqOSadG0A.gif" alt="Start Screen"></p>\n<p>I had a blast creating this mini-application, but it is, overall, a simple game. There are no classes — this would make a more intricate battle system with hit points and whatnot. Neither am I using Pickle to save progress. The game is currently short enough to finish in one setting. While I could continue with the storyline, travel to gyms, and obtain badges, this would best be served in a future application, where I would create my own characters, implement a true battle system, and make use of the creative writing minor I received while at undergrad.</p>\n<p>As a lifelong learner and frequent teacher, I will say that creating a fun application like this serves the purpose of teaching without a struggle. More challenging concepts came more naturally because I was having fun. What’s more — seeing the beauty of what Python can create gave me a greater appreciation for JavaScript, a language I’ve played around with all too well, yet never understood how strange it could be when compared with other languages. I even had the pleasure of adding an Easter egg that allows the user to obtain Pikachu as his starting Pokémon. Not bad for a silly console, application, huh?</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*QtgyiFepJTh9TBjwTsKarg.gif" alt="Pokemon Choice"></p>',frontmatter:{title:"Return of the Consoles: Recreating Pokémon in Python",date:"09.20.2017",path:"/blog/pokemon-python",tags:["pokemon","python","console","web development"],excerpt:null}}},pathContext:{prev:null,next:{html:'<p>This article first appeared on Medium <a href="https://hackernoon.com/postgresql-explained-with-basketball-players-f99fb812c065"><strong>here</strong></a></p>\n<p>Database can be a scary word. It’s often considered large and complicated, but they can work wonders for keeping your application neat and in order. For more on the differences between the two main types of databases, here is a primer that may be of assistance.</p>\n<p>As for what you’re about to read, I’d strongly recommend following along with PSequel, a GUI on Mac that allows you to see the data you are working with. Basketball, like many sports, is filled with data that makes it more interesting. A stat line is essential a chunk of data. Russell Westbrook might as well be a statistician with his triple-double prowess. And what better way to prepare for the upcoming basketball season than to prepare some databases based on player attributes.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*IW1nAu2fLYTDA4P75CDdmA.jpeg" alt="Russell Westbrook"></p>\n<p>One more bit of exposition. PostgreSQL is one of the top programs for relational databases. While there are other good ones such as MySQL and SQLite, I have found PostgreSQL to be most favorable since it’s open-sourced and has a pretty great online community.</p>\n<p>And now, it’s gametime.</p>\n<h2>Create a Database</h2>\n<p>Creating a database is simple. First things first, make sure you’re server is running on the command line by running:</p>\n<p><code>psql</code>\nNow that you’re logged in, creating a database is as easy as:</p>\n<p><code>create database (name of database);</code>\nOnce it’s created, you could see a list of all of your databases with the \\l command. To quit from the command line, you can use \\q.</p>\n<h2>Enter PSequel</h2>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*lUqYbocVY1oP0a2e_Ig5Cw.png" alt="Connect DB"></p>\n<p>PSequel is a GUI that makes viewing your data a little easier. I created a database called basketball. Now let’s connect and create some tables.</p>\n<h2>Table Creation</h2>\n<p>Once you’ve connected, you’re free to create tables that will organize all of your data. With ‘query’ selected, we can create a table like this:</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*dS4iXk4Y-cwCAmLK7wh4XA.png" alt="Table Players"></p>\n<p>From above, we can see that I am creating a table called ‘players.’ Inside this table, there will be four rows: an ID (mostly to keep track of how many people I am adding), a first name, a last name, and a team. You’ll notice there is a datatype listed after these, which lets the database know what kind of data to expect. Integer is a number. Varchar stands for a ‘variable-length character’ string. The number following this in parenthesis is the maximum number of characters. For more on what kind of datatypes you can use in PostgreSQL, check out <a href="https://www.postgresql.org/docs/9.5/static/datatype.html"><strong>this nifty list</strong></a>. So the team listed will only be able to hold three characters. Once this is done, run the query and refresh the page (bottom left).</p>\n<p>The table, although empty, can now be found in the ‘content’ tab. But we can’t work with an empty table. Let’s add to it.</p>\n<h2>All About Insert</h2>\n<p>With your brand new empty table, head back over to query and insert the following:</p>\n<p><code>INSERT INTO players (id, first_name, last_name, team) VALUES (1, \'Steph\', \'Curry\', \'GSW\');</code></p>\n<p>Here, I am inserting records into my ‘players’ table. The first set of parenthesis, while not mandatory, tells the database which columns the data will go into. You can put the columns in whatever order you want here, as long as it corresponds to the second parenthesis group. For example, PSequel would not allow it if I tried to put an integer into the first name field. It’s also important that strings (or varchars) are put into quotes.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*KIUHPBaix7AjKfF2t8eJPw.gif" alt="Curry Dance"></p>\n<p>Easy enough? Alright, let’s add some more data and see how to manipulate it.</p>\n<h2>Selecting Your All Stars</h2>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*BWPN3X2jtd0myX3NoCrpcg.png" alt="All Stars"></p>\n<p>We have some data to work with\nFrom the image provided, now we can select and manipulate the players. Quite a squad we have so far. Head back into query and run the following line:</p>\n<p><code>SELECT * FROM players</code>\nFrom here, you can see everyone. But what if you only wanted to see players from the Golden State Warriors? Next, run the following lines:</p>\n<p><code>SELECT * FROM players WHERE team = \'GSW\'</code></p>\n<p>This ‘where’ keyword is especially important when we want to update or delete items from the database. Other keywords can be concatenated to these lines to show even more data.</p>\n<p>`<code>SELECT * FROM players WHERE team = \'GSW\' OR team = \'NY\'</code></p>\n<p>The statement above will show you anyone from either Golden State or New York. Notice the ‘or’ statement.</p>\n<p><code>SELECT * FROM players WHERE team = \'GSW\' AND first_name = \'Steph\'</code></p>\n<p>This statement would return just Steph Curry, since while Klay Thompson does share the same team (GSW), his first name does not match.</p>\n<p>You may also run greater than, less than, or equal to statements for integers. Take the following example and notice that the first two IDs are not returned.</p>\n<p><code>SELECT * FROM players WHERE id > 3</code></p>\n<h1>Updating and Deleting</h1>\n<p>Let’s now change something in our database. We’ve heard some speculation about Lebron James heading to the Lakers after his contract is up. How can we reflect this in our data:</p>\n<p><code>UPDATE players SET team = \'LAL\' WHERE last_name = \'James\'</code></p>\n<p>The first line specifies the table you are changing. The second line specifies what we are setting. The third line tells us that we only want to change the data that has a last name of James. Like the earlier examples, we could have added more parameters, as well as ‘and’ or ‘or’ statements.</p>\n<p>Notice that Lebron James now plays for the Los Angeles Lakers. By clicking on the ID column header, we could once again order the players by their IDs (or any other header for that matter.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*PYjYWd-1H7KtdGpwLw9vBA.png" alt="Lebron Laker"></p>\n<p>Deleting is done in a similar manner, but by using the word ‘delete’ instead of update. And once again, we can add as many parameters as we want. The command below wipes Lebron James from the list.</p>\n<p><code>DELETE players WHERE last_name = \'James\' AND team = \'LAL\'</code></p>\n<p>But he probably wouldn’t like that.</p>\n<iframe src="https://giphy.com/embed/xTiTnDAP0RiCo9k85W" width="480" height="276" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sbnation-xTiTnDAP0RiCo9k85W"></a></p>',id:"/Users/jonathanhaines/Desktop/Code/gatsby/blog-1/src/pages/2017-09-17/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-09-17T09:20:02+00:00",path:"/blog/postgresql",title:"PostgreSQL, Explained With Basketball Players",excerpt:null,tags:["nba","postgresql","database","web development"]}}}}}});
//# sourceMappingURL=path---blog-pokemon-python-dd0e82bebe24c14df5f9.js.map