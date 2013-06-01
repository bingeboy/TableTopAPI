exports.playerCharacterRequirements = function(req, res) {

    var fighter, paladin, ranger, illusionist, cleric, druid, thief,

        statContainer = {
            "rolledStats" : {
                "strength" : "10",
                "dexterity" : "12",
                "constitution" : "4",
                "intelligence" : "11",
                "wisdom" : "16",
                "charisma" : "9"
            }
        };

        var stat = [],
            statValue = [];

        for (var key in statContainer) {
            if (statContainer.hasOwnProperty(key)) {
                var obj = statContainer[key];
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        console.log(prop + " = " + obj[prop]);
                        //run the stats to see what classes are available.
                        stat.push(prop);
                        statValue.push(parseInt(obj[prop]));
                    }
                }
                console.log(stat, statValue);
                comparisonCheck(stat, statValue);
            }
        }//end for in
};

function comparisonCheck(stat, statValue){
    console.log(statValue);

    console.log(
        stat[0],
        stat[1],
        stat[2],
        stat[3],
        stat[4],
        stat[5]
    );

//    "strength"        stat[0]  statValue[0]
//    "dexterity"       stat[1]  statValue[1]
//    "constitution"    stat[2]  statValue[2]
//    "intelligence"    stat[3]  statValue[3]
//    "wisdom"          stat[4]  statValue[4]
//    "charisma"        stat[5]  statValue[5]

//todo Devise cleaner method here. - JPM


    console.log("You can be a");

    //fighter
    if(statValue[0] >= 9){
        fighter = true;
        console.log("fighter");
    }

    //paladin
    if(statValue[0] >= 12 && "constitution" >= 9 && statValue[4] >= 13 && statValue[5] >=17) {
        paladin = true;
        console.log("paladin");
    }

    //ranger
    if(statValue[0] >= 13 && statValue[1] >= 13 && statValue[2] >= 14 && statValue[4] >= 14) {
        ranger = true;
        console.log("ranger");
    }

    //illusionist
    if(statValue[1] >= 16) {
        illusionist = true;
        console.log("illusionist");
    }

    //cleric
    if(statValue[4] >= 9) {
        cleric = true;
        console.log("cleric");
    }

    //druid
    if(stat[4] >=  12 && statValue[5] >= 15){
        druid = true;
        console.log("druid");
    }

    //thief
    if(statValue[1] >= 9){
        thief = true;
        console.log("thief");
    }

    console.log("Choose Wisely Adventurer!");
}