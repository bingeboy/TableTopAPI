var express = require('express')
      , url = require('url')
      , common = require('./routes/common')
      , dice = require('./routes/dice')
      , rollMethod = require('./routes/rollMethod')
      , playerCharacter = require('./routes/playerCharacter');

var app = express(),
    port = 2001;

app.use(express.bodyParser());

app.get('/add2/languages', common.languages);
app.get('/add2/races', common.races);
app.get('/add2/alignment', common.alignment);
app.get('/add2/stats', common.stats);
app.get('/add2/playerClasses', common.playerClasses);
app.get('/add2/roll-hp/:pcClass', dice.hitpoints);

// Method I
app.get('/add2/method1', rollMethod.rollMethod1);

//Method II
app.get('/add2/method2', rollMethod.rollMethod2);

//Method III
app.get('/add2/method3', rollMethod.rollMethod3);

//Method IV
app.get('/add2/method4', rollMethod.rollMethod4);

// Player Character
app.get('/add2/player', playerCharacter.playerCharacterRequirements);

// Hit this port response
app.listen(port);
console.log('Listening on port ' + port + '...');