/*
 @Description: Default Rolls for making Player Characters
 */


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

        var makeRollSets = rollSet(totalRollSets, statsLength, numberOfDice, sidedDice); //todo pass in an obj instead of all these params

        var makeRollSize = getObjectSize(makeRollSets);
        console.log("Roll Sets", makeRollSets);

        //Loop through all the roll sets and push the largest to statsFinal
        for(var i = 0; i < makeRollSize; i++){
            statsFinal.push(getLargestInArray(makeRollSets[i]));
        }

        //create object with stats
        obj = merge2array(statsMin, statsFinal);
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

        var makeRollSets = rollSet(totalRollSets, statsLength, numberOfDice, sidedDice); //todo pass in an obj instead of all these params

        var makeRollSize = getObjectSize(makeRollSets);
        console.log("Roll Sets", makeRollSets);

        //Loop through all the roll sets and push the largest to statsFinal
        for (var i = 0; i < makeRollSize; i++) {
            statsFinal.push(getLargestInArray(makeRollSets[i]));
        }

        //create object with stats
        obj = merge2array(statsMin, statsFinal);
        flushedRollResponse = { "Method I Character Rolls": obj };

        res.send(flushedRollResponse);
    };
    init( numberOfDice, sidedDice); //todo make this into a object literal

};

/*
 @Description: these are all helper functions for the main method1 extend function.
*/

function diceToRoll(numberOfRolls, sidedDie) {
    var diceSet = [];
    for (var i = 0; i < numberOfRolls ; i++ ){
        var singleDieRoll = 1 + Math.floor(Math.random() * sidedDie);
        diceSet.push(singleDieRoll);
    }
    return diceSet;
}

/*
  @Description: adds the rolls passed in together and push to new array;
*/
function addDiceRolls(roll){
    var ii
        , max
        , statTotal = [];

    sum=0; max=roll.length; ii=max; while(ii--) sum += roll[ii];
    statTotal.push(sum);
    return statTotal
}

/*
  @Description: Stats obj, consider reducing this and bringing it in a cleaner method.
*/

var statsMin = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
]

/*
    @Description: merges 2 arrays into object literal.
*/
function merge2array(a, b) {
    var obj = {};
    var lengthOfAccociated = a.length;
    var i;

    if(lengthOfAccociated === b.length){
        for (i = 0; i < lengthOfAccociated; i++) {
            obj[a[i]] = b[i];
        }
    }else{
        throw {
          name: "Length Error",
          message: "Lengths of arrays do not match"
        }
    }

    return obj;
}


/*
 @Description: Create roll sets.
 */
function rollSet(totalRollSets, statsLength, numberOfDice, sidedDice){

    var rollSets
        , temp = []
        , statTotal = []
        , statTotal1 = []
        , obj = {};
    for (rollSets = 0; rollSets < totalRollSets; rollSets++) {
        //create rolls, roll totals, and push
        for (var i = 0; i < statsLength; i++) {
              var roll = diceToRoll(numberOfDice, sidedDice);
                if(rollSets === 0){
                    temp = parseInt(addDiceRolls(roll));
                    statTotal.push(temp);
                }else if(rollSets === 1){
                    temp = parseInt(addDiceRolls(roll));
                    statTotal1.push(temp);
                }
        }
    }

    //create an object of with both roll sets
    for (i = 0; i < statTotal.length; i++) {
        if(typeof statTotal1[i] !== 'undefined'){
            obj[i] = [statTotal[i], statTotal1[i]];
        }else{
            obj[i] = [statTotal[i]];
        }

    }

    return obj;
}

// return the largest value in the array
function getLargestInArray(array) {
    return Math.max.apply(Math, array);
};

function getObjectSize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};