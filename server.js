var express = require('express')
      , url = require('url')
      , common = require('./routes/common')
      , dice = require('./routes/dice');

var app = express();

app.use(express.bodyParser());


app.get('/languages', common.languages);
app.get('/races', common.races);
app.get('/alignment', common.alignment);
app.get('/stats', common.stats);
app.get('/playerClasses', common.playerClasses);

app.get('/roll-hp/:pcClass', dice.hitpoints)

//test for query.. refer to http://www.hacksparrow.com/express-js-tutorial.html
//app.get('/:race'+'&test2='+':test2', function(req, res){
//    console.log('this is the array being created' ,req.params);
//    var x =  req.params;
//    if(req.params[0] === 'race'){
//        console.log('this is race you heard');
//    }else{
//        console.log('dupmped', req.params);
//    }
//    res.send(x);
////    '/:test'+'&test2='+':test2'
////    '
//});


//function dothing (){
//  //  URL ideas
//        ?rollmethod=1&3d6 //<-- get stats back
//    rollmethod=2
//    rollmethod=3
//    rollmethod=4
//    rollmethod=5
//
//        ?dice=3d20 <- d must have only have digits before it and after in 100 digits. Max of 10 on each side
//        ?race=all
//
//        /*
//         @Decription: All API Calls for Races
//         */
//
//        ?race=all //return full json
//        ?race=specific //return
//
//        /*
//         @Decription: All API Calls for Races
//         */
//
//        ?language=all // return all languages
//
//        /*
//         @Decription: All API Calls for Races
//         */
//
//        /*
//         @Decription: All API Calls for Races
//         */
//        ?language=all // return all languages
//
//        /*
//         @Decription: proficiencies
//         */
//        ?proficiencies=general <- there are like 5 of these.
//
//        /*
//         @Decription: Saving Throws
//         */
////        Saving Throws will act like thest of the requests but may have prereqs on other rolls.
//
//}



app.get('/stats/:sidedDie', function(req, res) {

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
});


//app.get('/stats', function(req, res) {
//    res.send([{name:'wine1'}, {name:'wine2'}]);
//});

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
            var playableClasses
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



//app.get('/wines/:id', function(req, res) {
//    console.log('reg here:', req)
//    //var singleDieRoll = 1 + Math.floor(Math.random() * data.diceType);
//    res.send({id:req.params.id, name: "The Name", description: "description"});
//});

//methodI: function(data) {
//    console.log('data', data)
//    var method1StatLabel = [
//        "strength",
//        "dexterity",
//        "constitution",
//        "intelligence",
//        "wisdom",
//        "charisma"
//    ]
//    var diceRolls =[],
//        diceTotal = 0,
//        diceTotalArray = [],
//        obj = {},
//        roll = (function() {
//            //check to make sure data exists
//            if(data){
//                console.log("data in roll obj", data);
//                /*
//                 Simulate dice rolls.
//                 Get the number of dice type & rolls.
//                 */
//                if(!data.numOfRolls){ //if there isn't a specific number of rolls then default is 1.
//                    data.numOfRolls = 1;
//                };
//                if(!data.diceType){
//                    alert("No data.diceType");
//                };
//
//                //force a dice number of sets to roll
//                if(!data.numOfDiceSet){
//                    data.numOfDiceSet = 1;
//                };
//
//                //roll em dice
//                for (var i=0; i < data.numOfDiceSet; i++) {
//                    console.log("Dice Set", i);
//                    // single set roll. Example 3d6
//                    for (var ii=0; ii < data.numOfRolls; ii++) {
//                        var singleDieRoll = 1 + Math.floor(Math.random() * data.diceType);
//                        console.log("a " + data.diceType + " sided die has been rolled and it landed on: ", singleDieRoll);	//output of each roll
//                        var rollObj = {
//                            rollSet: i,
//                            roll: singleDieRoll
//                        };
//                        diceRolls.push(rollObj);
//                    };//end for
//                    //console.log("roll set", diceRolls[i].rollSet);
//
//                    for(var j=0; j < diceRolls.length; j++) {
//                        diceTotal += diceRolls[j].roll;
//                    };//end for
//
//                    console.log('diceTotal', diceTotal); //log of all dice rolls added together
//                    diceTotalArray.push(diceTotal); //stored in array for loop.
//                    console.log('diceTotalArray', diceTotalArray);
//                    diceTotal = 0; //reset for next loop.
//                    diceRolls = [];  //reset for next loop.
//                };//end for
//
//                //display rolls
//                var displayRoll = document.getElementById("rollResult");
//                for (var i=0; i < diceTotalArray.length; i++) {
//                    console.log(displayRoll);
//                    displayRoll.innerHTML += method1StatLabel[i]+": "+diceTotalArray[i] + " ";
//                };
//
//            }else{
//                throw new Error("data obj not defined. -JPM"); //catch error
//            };
//            /*
//             @description: Display roll result
//             */
////				var displayRoll = doc.getElementById("rollResult");
////				displayRoll.innerHTML = diceTotal;
//
//            var stat = "test";
//            obj = {
//                diceTotal: diceTotal,
//                stat: stat
//            }
//        })(data);
//    return obj;
//},
//getArray: function () {
//    return this.theArray;
//},
//localStorageGetter: function(data) {
//    console.log(data);
//    var getter = localStorage.getItem(data);
//    console.log(getter);
//    return getter;
//},
//localStorageSetter: function(data) {
//    console.log('localStorageSetter', data);
//    localStorage.setItem('key', data);
//}
//};
//
////called from character var aka private
//MakeGamePlayer.prototype._rollStats2 = function(){
//    console.log('stats2');
//};
//
////test data currently in use. see var player1
//var playerParmas = {
//    name:"bibgeboy",
//    sex: "male",
//    rollMethod: "methodI",
//    diceType: 6,
//    numOfRolls: 3,
//    numOfDiceSet: 6,
//    key: "strength"
//};



app.listen(3000);
console.log('Listening on port 3000...');