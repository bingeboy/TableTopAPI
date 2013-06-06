/*
 @Description: Default Rolls for making Player Characters
 */
var helper = require('./helper.js');

/*
  @Globals: setup the character creation dice to roll and stats to roll. Override if needed.
 */
var numberOfDice = 3
    , sidedDice = 6
    , statsMin = [
        "strength",
        "dexterity",
        "constitution",
        "intelligence",
        "wisdom",
        "charisma"
    ];


/*
    @Description handles rolling methods for character creation methods.
      - Method-1.
 */

exports.rollMethod1 = function(req, res){

    var init = function (numberOfDice, sidedDice) {
        // declare vars scoped to init();
        var statsLength = statsMin.length
            , statsFinal = []
            , obj
            , flushedRollResponse
            , rolls = 6  //number of rolls per rollset
            , totalRollSets = 1; //value for the number of sets of dice to roll example : [6,4,3] <= single set.

        //This creates an object with rollset, diceRolls, diceTotal.
        var makeRollSets = helper.rollSet(totalRollSets, statsLength, rolls, numberOfDice, sidedDice); //todo pass in an obj instead of all these params

        console.log("makeRollSets", makeRollSets);

        //get the largest in the dice total array per roll set*.
        for (var i = 0; i < makeRollSets.length; i++) {
            statsFinal.push(helper.getLargestInArray(makeRollSets[i].diceTotal));
        }

        console.log("statsFinal", statsFinal);

        //create object with stats
        obj = helper.merge2array(statsMin, statsFinal);
        flushedRollResponse = { "Method I Character Rolls:": obj };

        res.send(flushedRollResponse);

    };
    init(numberOfDice, sidedDice);

};

/*
@Description handles rolling methods for character creation - Method-2.
*/
exports.rollMethod2 = function (req, res) {

    var init = function (numberOfDice, sidedDice) {
        // declare vars scoped to init();
        var statsLength = statsMin.length
            , statsFinal = []
            , statsFinal2 = []
            , obj
            , flushedRollResponse
            , rolls = 6  //number of rolls per rollset
            , totalRollSets = 2; //value for the number of sets of dice to roll example : [6,4,3] <= single set.

        //This creates an object with rollset, diceRolls, diceTotal.
        var makeRollSets = helper.rollSet(totalRollSets, statsLength, rolls, numberOfDice, sidedDice); //todo pass in an obj instead of all these params

        //get the largest in the dice total array per roll set*.
        for (var i = 0; i < makeRollSets.length; i++) {
            statsFinal.push(helper.getLargestInArray(makeRollSets[i].diceTotal));
        }

        console.log("statsFinal", statsFinal);
        var result = helper.split(statsFinal, 2);
        //make final array with the largest values of the two arrays
        for (var i = 0; i < result[0].length; i++) {
            if (result[0][i] >= result[1][i]) {
                statsFinal2.push(result[0][i])
            } else {
                statsFinal2.push(result[1][i]);
            }
            ;

            console.log(statsFinal2);
        }

        //create object with stats
        obj = helper.merge2array(statsMin, statsFinal2);
        flushedRollResponse = { "Method II Character Rolls": obj };

        res.send(flushedRollResponse);

    };
    init(numberOfDice, sidedDice);

};

/*
@Description handles rolling methods for character creation - Method-3.
Method III: Roll 3d6 six times and jot down the total for each roll. Assign the scores to your character's six
abilities however you want. This gives you the chance to custom-tailor your character.
*/
exports.rollMethod3 = function (req, res) {

    var init = function (numberOfDice, sidedDice) {
        // declare vars scoped to init();
        var statsLength = statsMin.length
            , statsFinal = []
            , statsFinal2 = []
            , obj
            , flushedRollResponse
            , rolls = 6  //number of rolls per rollset
            , totalRollSets = 1; //value for the number of sets of dice to roll example : [6,4,3] <= single set.

        //This creates an object with rollset, diceRolls, diceTotal.
        var makeRollSets = helper.rollSet(totalRollSets, statsLength, rolls, numberOfDice, sidedDice); //todo pass in an obj instead of all these params

        //get the largest in the dice total array per roll set*.
        for (var i = 0; i < makeRollSets.length; i++) {
            statsFinal.push(helper.getLargestInArray(makeRollSets[i].diceTotal));
        }
        console.log("statsFinal", statsFinal);
        //create object with stats
        obj = helper.merge2array(statsMin, statsFinal);
        flushedRollResponse = { "Method III Character Rolls: (note: Assign the scores to your character's six abilities in any order you want)": obj };

        res.send(flushedRollResponse);

    };
    init(numberOfDice, sidedDice);

};

/*
 @Description handles rolling methods for character creation Method-4.
 Method IV:
 */
exports.rollMethod4 = function (req, res) {

    var init = function (numberOfDice, sidedDice) {
        // declare vars scoped to init();
        var statsLength = statsMin.length
            , statsFinal = []
            , statsFinal2 = []
            , obj
            , flushedRollResponse
            , rolls = 6  //number of rolls per rollset
            , totalRollSets = 2; //value for the number of sets of dice to roll example : [6,4,3] <= single set.

        //This creates an object with rollset, diceRolls, diceTotal.
        var makeRollSets = helper.rollSet(totalRollSets, statsLength, rolls, numberOfDice, sidedDice); //todo pass in an obj instead of all these params

        //get the largest in the dice total array per roll set*.
        for (var i = 0; i < makeRollSets.length; i++) {
            statsFinal.push(helper.getLargestInArray(makeRollSets[i].diceTotal));
        }

        console.log("statsFinal", statsFinal);
        var result = helper.split(statsFinal, 2);
        //make final array with the largest values of the two arrays
        for(var i = 0; i < result[0].length; i++){
            if(result[0][i] >= result[1][i]){
                statsFinal2.push(result[0][i])
            }else{
                statsFinal2.push(result[1][i]);
            };

            console.log(statsFinal2);
        }

        //create object with stats
        obj = helper.merge2array(statsMin, statsFinal2);
        flushedRollResponse = { "Method IV Character Rolls" : obj };

        res.send(flushedRollResponse);

    };
    init(numberOfDice, sidedDice);

};