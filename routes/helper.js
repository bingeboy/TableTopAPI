/*
  @Description: This file stores all shared methods/functions to other routes.
*/


//get the size of an obj
exports.getObjectSize = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

/*
 @Description: merges 2 arrays into object literal.
 */
exports.merge2array = function (a, b) {
    var obj = {};
    var lengthOfAssociated = a.length;
    var i;

    if (lengthOfAssociated === b.length) {
        for (i = 0; i < lengthOfAssociated; i++) {
            obj[a[i]] = b[i];
        }
    } else {
        throw {
            name   : "Length Error",
            message: "Lengths of arrays do not match"
        }
    }

    return obj;
};


/*
 @Description: Create roll sets.
 */
exports.rollSet = function (totalRollSets, statsLength, rolls, numberOfDice, sidedDice) {

    var rollSets
        , statSetTotal = []
        , statTotal = [];

    for (rollSets = 0; rollSets < totalRollSets; rollSets++) {
        makeRollSet(rollSets, rolls, numberOfDice, sidedDice);//call the private function.
    }

    //create an object for the rollsets with the an array of the dice rolled per set
    function makeRollSet(rollSets, rolls, numberOfDice, sidedDice){
        for (var i = 0; i < rolls; i++) {
        //roll returns an array ex. [ 1, 2, 4 ]
        var roll = exports.diceToRoll(numberOfDice, sidedDice);
            statTotal[i] = {
                'rollSets': rollSets,
                'diceRolls': roll,
                'diceTotal': exports.addDiceRolls(roll)
            };
            statSetTotal.push(statTotal[i]);
            console.log(statSetTotal);
        }

    }

    return statSetTotal;
};

//array splitter  params = (arrayName, split Into X arrays)
exports.split = function (a, n) {
    var len = a.length, out = [], i = 0;
    while (i < len) {
        var size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, i + size));
        i += size;
    }
    return out;
};

// return the largest value in the array
exports.getLargestInArray = function (array) {
    return Math.max.apply(Math, array);
};

/*
 @Description: Rolls dice
 */

exports.diceToRoll = function diceToRoll(numberOfRolls, sidedDie) {
    var diceSet = [];
    for (var i = 0; i < numberOfRolls; i++) {
        var singleDieRoll = 1 + Math.floor(Math.random() * sidedDie);
        diceSet.push(singleDieRoll);
    }
    return diceSet;
};

/*
 @Description: adds the rolls passed in together and push to new array;
 */
exports.addDiceRolls = function (roll) {
    var ii
        , max
        , statTotal = [];

    sum = 0;
    max = roll.length;
    ii = max;
    while (ii--) sum += roll[ii];
    statTotal.push(sum);
    return statTotal
};
