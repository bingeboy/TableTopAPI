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
exports.rollSet = function (totalRollSets, statsLength, numberOfDice, sidedDice) {

    var rollSets
        , temp = []
        , statTotal = []
        , statTotal1 = []
        , obj = {};
    for (rollSets = 0; rollSets < totalRollSets; rollSets++) {
        //create rolls, roll totals, and push
        for (var i = 0; i < statsLength; i++) {
            var roll = exports.diceToRoll(numberOfDice, sidedDice);
            if (rollSets === 0) {
                temp = parseInt(exports.addDiceRolls(roll));
                statTotal.push(temp);
            } else if (rollSets === 1) {
                temp = parseInt(exports.addDiceRolls(roll));
                statTotal1.push(temp);
            }
        }
    }

    //create an object of with both roll sets
    for (i = 0; i < statTotal.length; i++) {
        if (typeof statTotal1[i] !== 'undefined') {
            obj[i] = [statTotal[i], statTotal1[i]];
        } else {
            obj[i] = [statTotal[i]];
        }

    }

    return obj;
};

// return the largest value in the array
exports.getLargestInArray = function (array) {
    return Math.max.apply(Math, array);
};

/*
 @Description: these are all helper functions for the main method1 extend function.
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
