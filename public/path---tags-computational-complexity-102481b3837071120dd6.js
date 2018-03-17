webpackJsonp([2251151659523],{408:function(e,t){e.exports={pathContext:{posts:[{html:'<p>This article first appeared on Medium <a href="https://hackernoon.com/postgresql-explained-with-basketball-players-f99fb812c065"><strong>here</strong></a></p>\n<p>Computational complexity is a tricky subject to wrap one’s head around. Understanding runtime allows one to see how well a particular algorithm or data structure could scale within a computer. Unfortunately, it may be a bit abstract to try and think like a computer — for example, what does it mean to say that accessing a node in a linked list is O(n) while inserting a node is the more preferred O(1)? To truly get these concepts, let’s use real life (err.. Super Nintendo) examples to figure out what these terms mean. </p>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*BuW10tGA1gyCnUTYP3YeFQ.png" alt="Big O Cheat Sheet"></p>\n<p>Here is a graph (from bigocheatsheet.com) that depicts the scalability of different runtime complexities. While all runtimes begin at the same point at the bottom lefthand corner, adding more elements changes how efficient each is. While it might not make a difference whether or not you use an array to store some data in your mini-side project, perhaps that same project might not scale as well once you finally successfully gain the attention of some wealthy investors.</p>\n<h2>O(1)</h2>\n<p>O(1), pronounced “oh of one” is simply the best. If it were personified, it would be Michael Jordan. Unless you had access to a time machine, there is no way to have a better runtime.</p>\n<p>How does it work? Imagine the year is 1991 and you are getting your first experience playing a brand new game called Street Fighter II. Your friend tells you that you should try Guile, because his Sonic Boom is pretty awesome. Unfortunately, the only information you have is the name Guile. You have no idea what he or she looks like and it’s another seven years before Google is founded. You could do a bit of deducing, sure, but you decide there is a quicker way. All you have to do is ask your friend, “Which one of these characters is Guile?”</p>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*M2xEJSZfHjgwugvVsARuIA.jpeg" alt="Street Fighter Original Select Screen"></p>\n<p>Your friend responds by pointing to Guile after just one question. O(1) means just that — your problem is solved in constant time. It doesn’t matter whether or not there are 8 characters or 800, this is always completed instantaneously.</p>\n<h2>O(log n)</h2>\n<p>As effective as the previous method was, the real world is usually not as smooth. The next best thing may be O(log n).</p>\n<p>O(log n) algorithms are best described as never having to look at the entirety of an input. As in a binary search, O(log n) is basically taking data, splitting it in half, then taking the data you are left with, and splitting that in half. This is done until you reach your answer.</p>\n<p>To use the Street Fighter example, imagine you ask your friend “Is Guile in the top row?” This drops the original eight fighters to four. By constantly cutting the total number of choices in half, you can eventually reach Guile.</p>\n<h2>O(n)</h2>\n<p>O(n) is perhaps the easiest of runtimes to comprehend. The bigger the input, the more time this will take, and they increase at the same rate. In the O(1) section, we discovered the most effective way of figuring out which character is Guile by asking one question. To use O(n), we would ask our friend about each character individually. Starting with the first character, we would ask “is this Guile?” If he says yes, we are done (this is the best-cased scenario). If not, we move onto the next character. With just eight characters to consider, it would take just eight questions (at worst). However, if the input becomes larger, such as if we add eight MORE characters, the runtime becomes slower.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*N1-PCyTMbY2qMBJMfzi53Q.png" alt="Street Fighter Newer Select Screen"> </p>\n<h2>O(n²)</h2>\n<p>The complexity of O(n²) is where things get a bit trickier. If you take a look at the Big O graph at the top of this article, you’ll notice that the line that depicts this particular runtime is curved, due to it being polynomial time.</p>\n<p>Quadratic or polynomial runtimes usually contain nested for-loops. One nested for-loop implies O(n²) while a second nested for-loop would mean O(n³) and so on (with possibly but unlikely exceptions).</p>\n<p><img src="https://cdn-images-1.medium.com/max/1200/1*glyhac4CbLz25CyUj-ERHA.png" alt="Street Fighter Cast"></p>\n<p>How does this work in our Street Fighter example? Imagine you are able to ask the actual characters themselves questions. You approach the first character and ask if his name is Guile. If he responds “yes, I am” (the best-cased scenario), then you are done. However, if his response is “no,” this begins a nested for-loop. This character (let’s say Ryu) then becomes the question master and approaches a second character to do the asking for you. Similarly, he asks this second character (let’s say Ken) one at a time whether or not he is Guile. The process continues until the original question’s response is “yes.” As the graph implies, the larger data makes things last a tad longer.</p>\n<h2>O(2^n) and O(n!)</h2>\n<p>Two less common runtime are the exponential O(2^n) and the seemingly forever factorial O(n!). If a program is running in either of these, it would be advised to consider a new approach.</p>\n<p>O(2^n) is usually seen during a recursive function where you call a function twice within itself such as the Fibonacci example here:</p>\n<p><code>fib(n) = { return fib(n-1) + fib(n-2) }</code></p>\n<p>Big O is a lot more complex than a Street Fighter selection screen, but understanding the basics is a good start. Like with Super Nintendo, understanding the more complex aspects of Big O requires plenty of practice and perhaps a bit of reading the instructional booklet.</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*wuby9nnyYE9eo5zgk0H9xw.gif" alt="Street Fighter Ken Dragon Punch"></p>',id:"/Users/jonathanhaines/Desktop/Code/gatsby/blog-1/src/pages/2017-09-11/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-09-11T09:20:02+00:00",path:"/blog/big-o",title:"The Simplicity of Computational Complexity: Street Fighter II VS. the Big O",excerpt:null,tags:["big o notation","computational complexity","runtime","code","algorithms","data structures","web development","street fighter"]}}],tagName:"computational complexity"}}}});
//# sourceMappingURL=path---tags-computational-complexity-102481b3837071120dd6.js.map