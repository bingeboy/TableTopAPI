exports.Roll = function(req, res){

    var init = function(sidedDice,numberOfDice){
        var stats = this.stats()
            , statsLength = Object.keys(stats.obj).length
            , newArray = [];

        for (var key in stats.obj) {
            var roll = new diceToRoll(sidedDice,numberOfDice);
            var rolledTotal = this.rollTotal(roll);
            newArray.push([key, (roll), (rolledTotal)]);
        }

        console.log(newArray);
        return (newArray);
    };

};


function diceToRoll( numberOfRolls, sidedDie ) {
    var diceSet = [];
    for (var i = 0; i < numberOfRolls ; i++ ){
        var singleDieRoll = 1 + Math.floor(Math.random() * sidedDie);
        diceSet.push(singleDieRoll);
    }

    return diceSet;
}

var rollTotal = function(x) {
    var total = 0
        , playableClasses;

    for (var i = 0; i < x.length; i++) {
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
};

var stats = function(diceRolls, diceTotal){
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
    }; //return
};
