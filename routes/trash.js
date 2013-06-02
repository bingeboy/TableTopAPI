exports.rollMethod2 = function (req, res) {

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

        for (var i = 0; i < statsLength; i++) {
            var roll = diceToRoll(numberOfDice, sidedDice);
            //this is where the issue is, the roll array needs to be split properly
            if (i < (statsLength / 2)) {
                console.log("This is I", i, roll, roll[i]);
                diceResults1.push(roll);
                statTotal1.push(addDiceRolls(roll));
            } else {
                diceResults2.push(roll);
                statTotal2.push(addDiceRolls(roll));
            }
        }

        console.log("one", statTotal1);
        console.log("two", statTotal2);


        /*
         @Description: Send final stat tallies and all the dice rolls.
         */
//        res.send(["Charater Stats: ", [finalStatArray], ["Dice Roll sets: ", diceResults1, diceResults2]]);
    };
    init(numberOfDice, sidedDice); //todo make this into a object literal

};


[2, 1, 2, 4, 4, 1, 4, 3, 1, 6, 4, 2 , 3, 4, 6, 2, 2, 5, 2, 6, 3, 3, 5, 3, 2, 5, 6, 6, 5, 5 , 1, 1, 2, 6, 5, 6]