/*
 *  Common Dice Rolls
 */


// @Description: starting hp for character

exports.hitpoints = function(req, res){
    console.log(req.params.pcClass);
    /*
        needs to accept class which will handle modifier and dice roll

     Level 1
      Fighter / Paladin / Ranger d10
      Cleric Druid d8
      Thief / Bard d6
      Mage and other similar types... d4

     */


    var diceToRollHP = function( numberOfRolls, sidedDie ) {
        var diceSet = [];
        for (var i = 0; i < numberOfRolls ; i++ ){
            var singleDieRoll = 1 + Math.floor(Math.random() * sidedDie);
            diceSet.push(singleDieRoll);
        }

        return diceSet
    }
    var pcClass = req.params.pcClass.toLowerCase();

    //rolls
    var dice1d10 = diceToRollHP(1,10)
      , dice1d6  = diceToRollHP(1,6)
      , dice1d4  = diceToRollHP(1,4);

    switch (pcClass) {
        case "fighter":
            res.send(dice1d10);
            break;
        case "fightermax":
            res.send([10]);
            break;
        case "cleric":
            res.send(dice1d10);
            break;
        case "clericmax":
            res.send([10]);
            break;
        case "ranger":
            res.send(dice1d10);
            break;
        case "rangermax":
            res.send([10]);
            break;
        case "thief":
            res.send(dice1d6);
            break;
        case "thiefmax":
            res.send([6]);
            break;
        case "bard":
            res.send(dice1d6);
        case "bardmax":
            res.send([6]);
            break;
        case "mage":
            res.send(dice1d4);
            break;
        case "magemax":
            res.send([4]);
            break;
        default:
            console.log("default fired... lets return error on class defined.")
    }



    var data = {

    };

    res.send(data);
};

