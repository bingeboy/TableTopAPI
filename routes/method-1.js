/*
    @Description handles rolling methods for character creation methods.
      - Method-1.
 */



exports.rollMethod1 = function(req, res){

     var sidedDice = 6
       , numberOfDice = 3

    , init = function (sidedDice, numberOfDice) {

        var statsLength = Object.keys(stats).length
        , diceResults = []
        , finalStatArray = []
        , statTotal = [];

        for(var i = 0 ; i < statsLength; i++){
            var roll = diceToRoll(3, 6); //hardcoded vars above.
            var rolledTotal = rollTotal(roll);
            diceResults.push(roll);

            /*
               @Description: The below will take each die roll from current array and then add the values together and push
               total to a new array.
            */
            statTotal.push(addDiceRolls(roll));
        }

        for(var y = 0; y < statTotal.length; y++){
            finalStatArray.push(statsMin[y] + " : " + statTotal[y]);
        }

        /*
           @Description: Send final stat tallies and all the dice rolls.
        */
        res.send(["Charater Stats: ", [finalStatArray], ["Dice Rolls: ", diceResults]]);
    };
    init(); //todo make this into a object literal

};

/*
    Description: these are all helper functions for the main method1 extend function.
 */

// todo move this to another spot on file or even better a differnt file. maybe something like routes/helperfunc. - JPM
function rollTotal(x) {
    var total = 0
        , playableClasses;

    for (var i = 0; i < x; i++) {
        total += parseInt(x[i]);
    }
    if(total >= 10){
        playableClasses = {
            troll: "troll",
            troll2: "troll2"
        }
    }else{
        playableClasses = {
            human: "troll",
            human2: "troll2"
        }
    }
    return {
        total: total,
        classes: playableClasses
    };
}

function diceToRoll(numberOfRolls, sidedDie) {
    var diceSet = [];
    for (var i = 0; i < numberOfRolls ; i++ ){
        var singleDieRoll = 1 + Math.floor(Math.random() * sidedDie);
        diceSet.push(singleDieRoll);
    }
    return diceSet;
}

/*
  Description: adds the rolls passed in together and push to new array;
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
  Description: Stats obj, consider reducing this and bringing it in a cleaner method.
*/

var stats = {
    "strength"  : {
        "rolls" : "",
        "total" : ""
    },
    "dexterity"  : {
        "rolls" : "",
        "total" : ""
    },
    "constitution": {
        "rolls" : "",
        "total" : ""
    },
    "intelligence"  : {
        "rolls" : "",
        "total" : ""
    },
    "wisdom" : {
        "rolls" : "",
        "total" : ""
    },
    "charisma"  : {
        "rolls" : "",
        "total" : ""

    }
};

var statsMin = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
]