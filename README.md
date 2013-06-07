TableTopAPI
===========

Rest API for table top gaming, character creation, dice rolls. Currently Supporting AD&D 2.0 Roll MethodsI-IV, plus many other useful calls. Including a new addition of proficiency JSON files.


<img src="http://jpmcgarrity.com/Git/readmeResources/incredible--advanced-dungeons-and-lawyers-d-fantasy-orcs-dungeons-and-dragons-role-playing-picture-image.jpg" height="300px" width="auto">

<h1>Overview</h1>

<pre>
app.get('/add2/languages', common.languages);
app.get('/add2/races', common.races);
app.get('/add2/alignment', common.alignment);
app.get('/add2/stats', common.stats);
app.get('/add2/playerClasses', common.playerClasses);
app.get('/add2/roll-hp/:pcClass', dice.hitpoints);
</pre>


<p>
 Providing simple REST API for Dice rolls.

<h2>Method I Stat Rolls</h2>

<h4>Method I:</h4>
<p>
Roll three six-sided dice (3d6); the total shown on the dice is your character’s Strength ability score.
Repeat this for Dexterity, Constitution, Intelligence, Wis- dom, and Charisma, in that order.
This method gives a range of scores from 3 to 18, with most results in the 9 to 12 range. Only a few characters
have high scores (15 and above).


<code>
/add2/method1
</code>

<h4>Method II:</h4>
<p>
Roll 3d6 twice, noting the total of each roll. Use whichever result you prefer for your character‘s Strength score. Repeat this for
Dexterity, Constitution, Intelligence, Wisdom, and Charisma. This al- lows you to pick the best score from
each pair, generally ensuring that your character does not have any really low ability scores
(but low ability scores are not all that bad anyway).

<code>
/add2/method2
</code>


 <h4>Calls For Basic Character Info</h4>

Roll for Hit Points.
Options specific for class. Note appending max will automatically return the max HP value for the class in the call.

<code>
/add2/roll-hp/mage
 </code>

/add2/roll-hp/

Max example:

<h4>Other API Calls</h4>

<h6>/player</h6>
Rolls method I then lets you know what classes are playable with the rolls.
<code>
/add2/player
</code>


<h6>Hit point rolls</h6>

Array of languages 
<code>
'/add2/languages'
</code>

Array of Races
<code>
'/add2/races'
</code>

Alignment
<code>
'/add2/alignment'
</code>
Stats
<code>
'/add2/stats', common.stats);
</code>

Player Classes
<code>
'/add2/playerClasses'
</code>
<code>
'/add2/roll-hp/:pcClass' Options: fighter | rouge | wizard : max
</code>
Also running list of other that classes based on these 3main classes.

<h3>Proficiencies</h3>
In the path ./json/proficiency/ are all the AD&D2.0 Proficies, organized by player class.


 
<h2>Usage
<p>
Once you have the project running you can hit the server with XHR request to get JSON response

<strong>Example Request
<code>
://Example 
var xhReq = new XMLHttpRequest();
xhReq.open("GET", "http://localhost:2001/add2/method1", false);
xhReq.send(null);
var serverResponse = xhReq.responseText;
console.log(serverResponse);
</code>

The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
