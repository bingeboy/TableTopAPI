
// @Description: checks what races are playable based on your rolls.

exports.playableRaces = function(stats) {

    var classes = [];
    //fighter
    if(stats.strength >= 9){
        classes.push("fighter");
    }

    //paladin
    if(stats.strength >= 12 && "constitution" >= 9 && wisdom >= 13 && charisma >=17) {
        classes.push("paladin");
    }

    //ranger
    if(stats.strength >= 13 && stats.dexterity >= 13 && stats.constitution >= 14 && stats.wisdom >= 14) {
        classes.push("ranger");
    }

    //illusionist
    if(stats.dexterity >= 16) {
        classes.push("illusionis");
    }

    //cleric
    if(stats.wisdom >= 9) {
        classes.push("cleric");
    }

    //druid
    if(stats.wisdom >=  12 && stats.charisma >= 15){
        classes.push("druid");
    }

    //thief
    if(stats.dexterity >= 9){
        classes.push("thief");
    }

    //return arrray of all possible classes
    return classes;

};