var express = require('express')
      , url = require('url')
      , common = require('./routes/common')
      , dice = require('./routes/dice')
      , method1 = require('./routes/method-1')
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

   @description: Method II rolls 3d6 twice for each score,
   and assigns the best of the two totals to that score,
   in the same order.

  */
app.get('/method2', method1.rollMethod2);

// Method I
app.get('/method1', method1.rollMethod1);

// Player Character
app.get('/player', playerCharacter.playerCharacterRequirements);

// Hit this port response
app.listen(port);
console.log('Listening on port ' + port + '...');