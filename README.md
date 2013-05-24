TableTopAPI
===========

Rest API for table top gaming, character creation, dice rolls

<img src="http://jpmcgarrity.com/Git/readmeResources/incredible--advanced-dungeons-and-lawyers-d-fantasy-orcs-dungeons-and-dragons-role-playing-picture-image.jpg" height="300px" width="auto">

<h1>Overview</h1>

<p>
 Providing simple REST API for Dice rolls.

<h4>Method I Stat Rolls</h4>

<h5>Method I:</h5>
<p>
Roll three six-sided dice (3d6); the total shown on the dice is your charac- ter’s Strength ability score. Repeat this for Dexterity, Constitution, Intelligence, Wis- dom, and Charisma, in that order. This method gives a range of scoresfrom 3 to 18, with most results in the 9 to 12 range. Only a few characters have high scores (15 and above),soyoushouldtreasurethesecharac-
ters.


<code>
/stats/3d6
</code>

 <h4>Calls For Basic Data Calls Array</h4>

http://localhost:3000/roll-hp/mage 
http://localhost:3000/roll-hp/

Hit point rolls

Array of languages 
<code>
'/languages'
</code>

Array of Races
<code>
'/races'
</code>

Alignment
<code>
'/alignment'
</code>
Stats
<code>
'/stats', common.stats);
</code>

Player Classes
<code>
'/playerClasses'
</code>
<code>
'/roll-hp/:pcClass' Options: fighter | rouge | wizard : max
</code>
Also running list of other that classes based on these 3main classes.

 
<h2>Usage
<p>
Once you have the project running you can hit the server with XHR request to get JSON response

<strong>Example Request
<code>
://Example 
var xhReq = new XMLHttpRequest();
xhReq.open("GET", "http://localhost:3000/stats/3d6", false);
xhReq.send(null);
var serverResponse = xhReq.responseText;
console.log(serverResponse);
</code>
<strong>Example Respondse
<code>
[
  [
    "strength",
    [
      4,
      1,
      6
    ],
    11
  ],
  [
    "dexterity",
    [
      6,
      1,
      5
    ],
    12
  ],
  [
    "constitution",
    [
      4,
      6,
      4
    ],
    14
  ],
  [
    "intelligence",
    [
      4,
      1,
      5
    ],
    10
  ],
  [
    "wisdom",
    [
      4,
      3,
      1
    ],
    8
  ],
  [
    "charisma",
    [
      1,
      3,
      5
    ],
    9
  ]
]
</code>

