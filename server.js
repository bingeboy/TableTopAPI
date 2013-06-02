var express = require('express')
      , url = require('url')
      , common = require('./routes/common')
      , dice = require('./routes/dice')
      , rollMethod = require('./routes/rollMethod')
      , playerCharacter = require('./routes/playerCharacter');

var app = express(),
    port = 2001;

app.use(express.bodyParser());

app.get('/languages', common.languages);
app.get('/races', common.races);
app.get('/alignment', common.alignment);
app.get('/stats', common.stats);
app.get('/playerClasses', common.playerClasses);
app.get('/roll-hp/:pcClass', dice.hitpoints);

/*
   Method II
  */
app.get('/method2', rollMethod.rollMethod2);

// Method I
app.get('/method1', rollMethod.rollMethod1);

// Player Character
app.get('/player', playerCharacter.playerCharacterRequirements);

// Hit this port response
app.listen(port);
console.log('Listening on port ' + port + '...');