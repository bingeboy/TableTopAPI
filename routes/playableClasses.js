
// @Description: checks what classes are playable based on your rolls.

/*
    HP ROLLS
 */
var diceToRollHP = function( numberOfRolls, sidedDie ) {
    var diceSet = [];
    for (var i = 0; i < numberOfRolls ; i++ ){
        var singleDieRoll = 1 + Math.floor(Math.random() * sidedDie);
        diceSet.push(singleDieRoll);
    }

    return diceSet
}

//rolls
var dice1d10 = diceToRollHP(1,10)
    , dice1d6  = diceToRollHP(1,6)
    , dice1d4  = diceToRollHP(1,4);

function hitpoints(pcClass) {
    switch (pcClass) {
        case "fighter":
            return dice1d10;
            break;
        case "fightermax":
            return([10]);
            break;
        case "cleric":
            return (dice1d10);
            break;
        case "clericmax":
            return ([10]);
            break;
        case "ranger":
            return (dice1d10);
            break;
        case "rangermax":
            return ([10]);
            break;
        case "thief":
            return (dice1d6);
            break;
        case "thiefmax":
            return ([6]);
            break;
        case "bard":
            return (dice1d6);
        case "bardmax":
            return ([6]);
            break;
        case "mage":
            return (dice1d4);
            break;
        case "magemax":
            return ([4]);
            break;
        default:
            console.log("default fired... lets return error on class defined.")
    }
}

exports.playableClasses = function(stats) {

    var classes = []
    , raceModifiers = {
        Dwarf : "Dwarf (+1 Constitution, -1 Charisma)",
        Elf   : "Elf (+1 Dexterity, -1 Constitution)",
        Gnome : "Gnome (+1 Intelligence, -1 Wisdom)",
        Halfling : "Halfling (+1 Dexterity, -1 Strength)"
    }
    , allraces =  {"Allowed Races":["Human", raceModifiers.Elf, "Half-Elf", raceModifiers.Dwarf, raceModifiers.Gnome, "Halfling"]}

    //fighter
    if(stats.strength >= 9){
        classes.push("fighter", allraces);
    }

    //paladin
    if(stats.strength >= 12 && "constitution" >= 9 && wisdom >= 13 && charisma >=17) {
        classes.push("paladin", {
            "Allowed Races":["Human"],
            "Hit Points": hitpoints("paladin")
        });
    }

    //ranger
    if(stats.strength >= 13 && stats.dexterity >= 13 && stats.constitution >= 14 && stats.wisdom >= 14) {
        classes.push("ranger", {
            "Allowed Races":["Human", raceModifiers.Elf, "Half-elf"],
            "Hit Points": hitpoints("ranger"),
            "Max Hit Points": hitpoints("rangermax")
        });
    }

    //illusionist
    if(stats.dexterity >= 16) {
        classes.push("illusionist", {
            "Allowed Races" : ["Human", raceModifiers.Gnome],
            "Hit Points": hitpoints("mage")
        });
    }

    //cleric
    if(stats.wisdom >= 9) {
        classes.push("cleric", allraces);
    }

    //druid
    if(stats.wisdom >=  12 && stats.charisma >= 15){
        classes.push("druid", {
            "Allowed Races" : ["Human", "Half-elf"]
        });
    }

    //thief
    if(stats.dexterity >= 9){
        classes.push("thief", allraces);
    }

    //return arrray of all possible classes
    return classes;

};