TableTopAPI
===========

Rest API for table top gaming, character creation, dice rolls. Currently Supporting AD&D 2.0 Roll MethodsI-IV, plus many other useful calls. Including a new addition of proficiency JSON files.


<img src="http://jpmcgarrity.com/Git/readmeResources/incredible--advanced-dungeons-and-lawyers-d-fantasy-orcs-dungeons-and-dragons-role-playing-picture-image.jpg" height="300px" width="auto">

#Overview

```
app.get('/languages', common.languages);
app.get('/races', common.races);
app.get('/alignment', common.alignment);
app.get('/stats', common.stats);
app.get('/playerClasses', common.playerClasses);
app.get('/roll-hp/:pcClass', dice.hitpoints);
```

Providing simple REST API for Dice rolls.

##Installation
```
$ npm install tabletop-api
```


<h2>Method I Stat Rolls</h2>

<h4>Method I:</h4>
<p>
Roll three six-sided dice (3d6); the total shown on the dice is your character’s Strength ability score.
Repeat this for Dexterity, Constitution, Intelligence, Wis- dom, and Charisma, in that order.
This method gives a range of scores from 3 to 18, with most results in the 9 to 12 range. Only a few characters
have high scores (15 and above).

```
/method1
```

<h4>Method II:</h4>
<p>
Roll 3d6 twice, noting the total of each roll. Use whichever result you prefer for your character‘s Strength score. Repeat this for
Dexterity, Constitution, Intelligence, Wisdom, and Charisma. This al- lows you to pick the best score from
each pair, generally ensuring that your character does not have any really low ability scores
(but low ability scores are not all that bad anyway).

```
/method2
```

 <h4>Calls For Basic Character Info</h4>

Roll for Hit Points.
Options specific for class. Note appending max will automatically return the max HP value for the class in the call.

```
/roll-hp/mage
``` 
```
/roll-hp/
```

Max example:
```
/roll-hp/magemax
```

<h4>Other API Calls</h4>

<h6>/player</h6>
Rolls method I then lets you know what classes are playable with the rolls.

/player
</code>


<h6>Hit point rolls</h6>

Array of languages 
```
/languages
```
Array of Races
```
/races
```
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

<h3>Proficiencies</h3>
In the path ./json/proficiency/ are all the AD&D2.0 Proficies, organized by player class.


 
##Usage
Once you have the project running you can hit the server with XHR request to get JSON response


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


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/bingeboy/tabletopapi/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

