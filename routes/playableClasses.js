
// @Description: checks what classes are playable based on your rolls.

exports.playableClasses = function(stats) {

    var classes = [];

    //fighter
    if(stats.strength >= 9){
        classes.push("fighter", {"Allowed Races":["Human", "Elf ", "Half-Elf", "Dwarf", "Gnome", "Halfling"]});
    }

    //paladin
    if(stats.strength >= 12 && "constitution" >= 9 && wisdom >= 13 && charisma >=17) {
        classes.push("paladin", {"Allowed Races":["Human"]});
    }

    //ranger
    if(stats.strength >= 13 && stats.dexterity >= 13 && stats.constitution >= 14 && stats.wisdom >= 14) {
        classes.push("ranger", {"Allowed Races":["Human", "Elf", "Half-elf"]});
    }

    //illusionist
    if(stats.dexterity >= 16) {
        classes.push("illusionist", {"Allowed Races" : ["Human", "Gnome"]});
    }

    //cleric
    if(stats.wisdom >= 9) {
        classes.push("cleric", {"Allowed Races":["Human", "Elf ", "Half-Elf", "Dwarf", "Gnome", "Halfling"]});
    }

    //druid
    if(stats.wisdom >=  12 && stats.charisma >= 15){
        classes.push("druid", {"Allowed Races" : ["Human", "Half-elf"]});
    }

    //thief
    if(stats.dexterity >= 9){
        classes.push("thief",  {"Allowed Races":["Human", "Elf ", "Half-Elf", "Dwarf", "Gnome", "Halfling"]});
    }

    //return arrray of all possible classes
    return classes;

};