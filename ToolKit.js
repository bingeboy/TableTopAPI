/*

  @Description: old code that's was in use and will have potential in the future of the api.

*/

/*
 Description: var setup to spin through the stat api.
 will split the values at the "d" then regex and parseInt();
 Assign the values to the below vars and pass them into the init() function.
 */



//old code to pull roll from url. example 3d6
//        , cleanedData = req.params.sidedDie.split(/[.,\/ d]/);
//        sidedDice = parseInt(cleanedData[0]);
//        numberOfDice = parseInt(cleanedData[1]);


/*
 @Character stuff  for creation:


Fighter
Ability Requirements: Strength 9,
Prime Requisite: Strength,
Allowed Races: Al

Paladin
Ability Requirements: Strength 12, Constitution 9, Wisdom 13, Charisma 17,
Prime Requisite: Strength,
Allowed Races: Human

Ranger
Ability Requirements: Strength 13 Dexterity 13 Constitution 14 Wisdom 14,
Prime Requisite: Strength, Dexterity, Wisdom,
Allowed Races: Human, Elf, Half-elf

Illusionist
Ability Requirements: Dexterity16
Prime Requisite: Intelligence
Races Allowed: Humul, Gnome

Cleric
Ability Requirements: Wisdom 9,
Prime Requisite: Wisdom
Allowed Races: All

Druid
Ability Requirements: Wisdom 12, Charisma 15
Prime Requisites: Wisdom, Charisma
Races Allowed: Human, Half-Elf

Thief
Ability Requirement: Dexterity 9
Prime Requisite: Dexterity
Races Allowed: All

*/


function playerCharacterRequirements(){

    var fighter, paladin, ranger, illusionist, cleric, druid, thief;

    var strength
        , dexterity
        , constitution
        , intelligence
        , wisdom
        , charisma;

    //fighter
    //"strength"
    if("strength" >= 9){
        fighter = true;
        console.log("You can be a fighter, Adventurer!");
    }

    //paladin
    if("strength" >= 12 && "constitution" >= 9 && wisdom >= 13 && charisma >=17) {
        paladin = true;
        console.log("You can be a paladin, Adventurer!");
    }

    //ranger
    if(strength >= 13 && dexterity >= 13 && constitution >= 14 && wisdom >= 14) {
        ranger = true;
        console.log("You can be a ranger, Adventurer!");
    }

    //illusionist
    if(dexterity >= 16) {
        illusionist = true;
        console.log("You can be a illusionist, Adventurer!");
    }

    //cleric
    if(wisdom >= 9) {
        cleric = true;
        console.log("You can be a cleric, Adventurer!");
    }

    //druid
    if(wisdom >=  12 && charisma >= 15){
        druid = true;
        console.log("You can be a druid, Adventurer!");
    }

    //thief
    if(dexterity >= 9){
        thief = true;
        console.log("You can be a thief, Adventurer!");
    }
}
