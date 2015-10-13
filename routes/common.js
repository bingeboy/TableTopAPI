/*
 * Arrays of character creation data.
 */

exports.languages = function(req, res){
    var data = {
        languages: ["goblish", "orcish", "hobgoblish", "gnollish", " common", "elvish", "halflingish", "gnomish", "elvish", "treantish"]
    };

    res.send(data);
};

exports.races = function(req, res){

    var data = {
        race: [ "Human", "Elf ", "Half-Elf", "Dwarf", "Gnome", "Halfling"]
    };

    res.send(data);
};

exports.alignment = function(req, res){

    var data = {
        alignment: ["Neutral Good", "Chaotic Good", "True Neutral", "Chaotic Neutral", "Neutral Evil", "Chaotic Evil"]
    };

    res.send(data);
};

exports.playerClasses = function(req, res){

    var data = {
        playerClasses: ["Warrior", "Priest", "Rogue", "Wizard"]
    };

    res.send(data);
};



exports.stats = function(req, res){

    var data = {
        stats: ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
    };

    res.send(data);
};
