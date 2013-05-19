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
 xhReq.open("GET", "http://localhost:3000/stats/pc3d6", false);
 xhReq.send(null);
 var serverResponse = xhReq.responseText;
 console.log(serverResponse);
 </code>
 
 

 
 Project Goals:
 <ul>
 <li>Provide 
