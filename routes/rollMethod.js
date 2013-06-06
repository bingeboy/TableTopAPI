/*
 @Description: Default Rolls for making Player Characters
 */
var helper = require('./helper.js');

/*
  @Globals: setup the character creation dice to roll. Override if needed.
 */
var numberOfDice = 3
    , sidedDice = 6;


/*
 @Description handles rolling methods for character creation - Method-2.
 */
exports.rollMethod2 = function(req, res){

    var init = function (numberOfDice, sidedDice) {
        // declare vars scoped to init();
        var statsLength = statsMin.length
            , statsFinal = []
            , obj
            , flushedRollResponse
            , totalRollSets = 2; //value for the number of sets of dice to roll example : [6,4,3] <= single set.

        var makeRollSets = helper.rollSet(totalRollSets, statsLength, numberOfDice, sidedDice); //todo pass in an obj instead of all these params

        var makeRollSize = helper.getObjectSize(makeRollSets);
        console.log("Roll Sets", makeRollSets);

        //Loop through all the roll sets and push the largest to statsFinal
        for(var i = 0; i < makeRollSize; i++){
            statsFinal.push(helper.getLargestInArray(makeRollSets[i]));
        }

        //create object with stats
        obj = helper.merge2array(statsMin, statsFinal);
        flushedRollResponse = { "Method II Character Rolls" : obj };

        res.send(flushedRollResponse);

    };
    init(numberOfDice, sidedDice);

};


/*
    @Description handles rolling methods for character creation methods.
      - Method-1.
 */

exports.rollMethod1 = function(req, res){

    var init = function (numberOfDice, sidedDice) {
        var statsLength = statsMin.length
            , statsFinal = []
            , obj
            , flushedRollResponse
            , totalRollSets = 1; //value for the number of sets of dice to roll example : [6,4,3] <= single set.

        var makeRollSets = helper.rollSet(totalRollSets, statsLength, numberOfDice, sidedDice); //todo pass in an obj instead of all these params

        var makeRollSize = helper.getObjectSize(makeRollSets);
        console.log("Roll Sets", makeRollSets);

        //Loop through all the roll sets and push the largest to statsFinal
        for (var i = 0; i < makeRollSize; i++) {
            statsFinal.push(helper.getLargestInArray(makeRollSets[i]));
        }

        //create object with stats
        obj = helper.merge2array(statsMin, statsFinal);
        flushedRollResponse = { "Method I Character Rolls": obj };

        res.send(flushedRollResponse);
    };
    init( numberOfDice, sidedDice); //todo make this into a object literal

};

/*
  @Description: Stats array
*/

var statsMin = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
]

