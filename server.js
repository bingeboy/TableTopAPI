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

// Method II
app.get('/method2', function(req, res) {
    res.send('boom');
});

// Method I
app.get('/method1', method1.rollMethod1);

// Player Character
app.get('/player', playerCharacter.playerCharacterRequirements);

// Hit this port response
app.listen(port);
console.log('Listening on port ' + port + '...');