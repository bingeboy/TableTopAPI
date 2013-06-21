
// @Description: checks what classes are playable based on your rolls.

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
        classes.push("paladin", {"Allowed Races":["Human"]});
    }

    //ranger
    if(stats.strength >= 13 && stats.dexterity >= 13 && stats.constitution >= 14 && stats.wisdom >= 14) {
        classes.push("ranger", {"Allowed Races":["Human", raceModifiers.Elf, "Half-elf"]});
    }

    //illusionist
    if(stats.dexterity >= 16) {
        classes.push("illusionist", {"Allowed Races" : ["Human", raceModifiers.Gnome]});
    }

    //cleric
    if(stats.wisdom >= 9) {
        classes.push("cleric", allraces);
    }

    //druid
    if(stats.wisdom >=  12 && stats.charisma >= 15){
        classes.push("druid", {"Allowed Races" : ["Human", "Half-elf"]});
    }

    //thief
    if(stats.dexterity >= 9){
        classes.push("thief", allraces);
    }

    //return arrray of all possible classes
    return classes;

};