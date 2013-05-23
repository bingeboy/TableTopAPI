/*
 * Arrays of character creation data.
 */

exports.languages = function(req, res){
    var data = {
        languages: ["goblish", "orcish", "hobgoblish", "gnollish"," common", "elvish", "halflingish", "gnomish", "elvish", "treantish"]
    };

    res.send(data);
};

exports.races = function(req, res){

    var data = {
        race: ["Human", "Elf ", "Half-Elf", "Dwarf", "Gnome", "Halfling"]
    }

    res.send(data);
};

exports.alignment = function(req, res){

    var data = {
        alignment: ["Neutral Good", "Chaotic Good", "True Neutral", "Chaotic Neutral", "Neutral Evil", "Chaotic Evil"],
    }

    res.send(data);
};

exports.playerClasses = function(req, res){

    var data = {
        playerClasses: ["Warrior", "Priest", "Rogue", "Wizard"]
    }

    res.send(data);
};



exports.stats = function(req, res){

    var data = {
        stats: ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
    }

    res.send(data);
};






// users index
exports.index = function(req, res){
    Users.find({}, function(err, docs){
        res.render('user/index', {
            users: docs, //mongo data
            title: "User List"
        });
    });


};

//creates page for new users
exports.new = function(req, res){
    res.render('user/newUser', {
        title: 'Create a New user'
    });
};

// users show
exports.show = function(req, res){
    res.render('users/show', {
        title: 'Show'
    });// { user: req.users });
};