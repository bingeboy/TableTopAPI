/*
Default Rolls for making PC's
 */

/*
 @Description handles rolling methods for character creation - Method-2.
 */

exports.rollMethod2 = function(req, res){

    var numberOfDice = 6
        , sidedDice = 6;


    var init = function (numberOfDice, sidedDice) {
        console.log("here you go brother: ", numberOfDice, sidedDice);
        /*
         Create arrays for all the rolls that need to be displayed.
         */
        var statsLength = Object.keys(stats).length
            , diceResults1 = []
            , diceResults2 = []
            , finalStatArray = []
            , statTotal1 = []
            , statTotal2 = [];

        for(var i = 0 ; i < statsLength; i++){
            var roll = diceToRoll(numberOfDice, sidedDice);
            //this is where the issue is, the roll array needs to be split properly
            if(i < (statsLength/2)){
                console.log("This is I", i, roll, roll[i]);
                diceResults1.push(roll);
                statTotal1.push(addDiceRolls(roll));
            }else{
                diceResults2.push(roll);
                statTotal2.push(addDiceRolls(roll));
            }
        }

        console.log("one", statTotal1);
        console.log("two", statTotal2);

//        for(var y = 0; y < statTotal.length; y++){
//            finalStatArray.push(statsMin[y] + " : " + statTotal[y]);
//        }

        /*
         @Description: Send final stat tallies and all the dice rolls.
         */
//        res.send(["Charater Stats: ", [finalStatArray], ["Dice Roll sets: ", diceResults1, diceResults2]]);
    };
    init(numberOfDice, sidedDice); //todo make this into a object literal

};


/*
    @Description handles rolling methods for character creation methods.
      - Method-1.
 */

exports.rollMethod1 = function(req, res){

    var numberOfDice = 3
        , sidedDice = 6;


    var init = function (numberOfDice, sidedDice) {

        /*
         Create arrays for all the rolls that need to be displayed.
         */
        var statsLength = Object.keys(stats).length
        , diceResults = []
        , finalStatArray = []
        , statTotal = [];

        for(var i = 0 ; i < statsLength; i++){
            var roll = diceToRoll(numberOfDice, sidedDice);
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
    init( numberOfDice, sidedDice); //todo make this into a object literal

};

/*
    Description: these are all helper functions for the main method1 extend function.
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