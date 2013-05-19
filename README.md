TableTopAPI
===========

Rest API for table top gaming, character creation, dice rolls

<img src="http://jpmcgarrity.com/Git/readmeResources/incredible--advanced-dungeons-and-lawyers-d-fantasy-orcs-dungeons-and-dragons-role-playing-picture-image.jpg" height="300px" width="auto">

<h1>Overview</h1>

<p>
 Providing simple REST API for Dice rolls.
 
 <h4>Currently Supports The Following</h4>
 <ul>
 <li>Ad&D 2.0 Method 1 Character Base Stats
 <li>Basic dice rolls. Example: 1d20, 10d6, 3d6, etc.
 </ul>
 
<h2>Usage
<p>
Once you have the project running you can hit the server with XHR request to get JSON response

<strong>Example Request
<code>
//Example 
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
//TODO clean response code and add more data.

 
//TODO 
Link to Gists of JSON... have prof now.
Create calls for
 - Create Charater Methods
	 - Methods 1-5
 - Alignment
 - Classes (create short decrption)
 - Races
 - Roll init
 - Some of the above files could use links to pull TRS synopsis. 	

 
 Project Goals:
 <ul>
 <li>Provide 
