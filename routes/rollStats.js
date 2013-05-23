var Roll = {};

Roll.api = (function(){
    //private
    var private = {
        _diceToRoll : function( numberOfRolls, sidedDie ) {
            var diceSet = [];
            for (var i = 0; i < numberOfRolls ; i++ ){
                var singleDieRoll = 1 + Math.floor(Math.random() * sidedDie);
                diceSet.push(singleDieRoll);
            }
            return diceSet
        }
    };

    //public
    return {
        init : function(sidedDice,numberOfDice){
            var stats = this.stats()
                , statsLength = Object.keys(stats.obj).length				, newArray = []
            for (var key in stats.obj) {
                var roll = new private._diceToRoll(sidedDice,numberOfDice);
                var rolledTotal = this.rollTotal(roll);
                newArray.push([key, (roll), (rolledTotal)]);
            }

            console.log(newArray);
            return (newArray);

        },
        rollTotal : function(x) {
            var total = 0;
            for (var i = 0; i < x.length; i++) {
                total += parseInt(x[i]);
            }
            return total;
        },
        stats: function(diceRolls, diceTotal){
            return {
                obj : {
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
                }
            };
        }
    }; //return
})();


exports.stats = function(req, res){
    /*
     Description: var setup to spin through the stat api.
     will split the values at the "d" then regex and parseInt();
     Assign the values to the below vars and pass them into the init() function.
     */
    Roll.api.init();
    if(res.statusCode === 200){
        var sidedDice
            , numberOfDice
            , cleanedData = req.params.sidedDie.split(/[.,\/ d]/);

        sidedDice = parseInt(cleanedData[0]);
        numberOfDice = parseInt(cleanedData[1]);

        console.log(sidedDice,numberOfDice);
        res.send(Roll.api.init(sidedDice,numberOfDice));
    } else{
        console.log("error: ", res.statusCode);
    }
    res.send({"Dice Rolled": req.params.sidedDie, "Landed On": singleDieRoll});
};