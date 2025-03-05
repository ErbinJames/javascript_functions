/* Random Character Generator */

/* Task 1: Create a Character Object*/
const character = {
    name: "Hero",
    health: 100,
    class: ["Warrior", "Mage", "Archer", "Healer", "Assassin"] /*Task 2: Adding a Random Class*/
    [Math.floor(Math.random() * 5 )],
    randomizeHealth: function () { /* Task 3: Add Randomized Health */
        this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    }
};
// now, we will test the random health function 
character.randomizeHealth();
console.log(character); // should log a random value between 50 to 150 
/* example output: 
{
  name: 'Hero',
  health: 115,
  class: 'Assassin',
  randomizeHealth: [Function: randomizeHealth]
}
*/

/* Task 4:Assign a Special Ability */
// we will add a specialAbility property
// also, assign it a random value from ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"].

/*Task 5: Create a generateCharacter() Function */
// this will create and return a new character object.
// if no name is proviced, we will randomly choose one from ["Thorin", "Elara", "Zane", "Ivy", "Dante"].
// will also assign a random class, health, and special ability.

function generateCharacter(name = null) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
    const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];

    const character = {
        name: name || names[Math.floor(Math.random() * names.length)],
        class: classes[Math.floor(Math.random() * classes.length)],
        health: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
        specialAbility: abilities[Math.floor(Math.random() * abilities.length)],
    };

    return character;
}

// Testing character generation
const randomCharacter = generateCharacter(); // this one is a randomCharacter from the function generate names.
console.dir(randomCharacter);

const namedCharacter = generateCharacter("Lastik-man"); // we assigned name to this one to see and compare the difference
console.dir(namedCharacter);
/*Sample output: 
{ 
  name: 'Ivy',
  class: 'Warrior',
  health: 145,
  specialAbility: 'Healing Touch'
}

{
  name: 'Lastik-man',
  class: 'Archer',
  health: 99,
  specialAbility: 'Healing Touch'
}
*/

/*Task 6: Battle Simulation */
// we will add a battle(otherCharacter) methos inside each generated character
// if a character attacks another, their health decreases by a random amount (between 5 and 20)
// and we will log a message showing the attack details, that includes health reduction.

function generateCharacter(name = null) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
    const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];

    const character = {
        name: name || names[Math.floor(Math.random() * names.length)],
        class: classes[Math.floor(Math.random() * classes.length)],
        health: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
        specialAbility: abilities[Math.floor(Math.random() * abilities.length)],

        // Battle method 
        battle: function (otherCharacter) {
            const damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            const oldHealth = otherCharacter.health;
            otherCharacter.health -= damage;

            console.log(
                `Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ` +
                `${otherCharacter.name}'s health dropped from ${oldHealth} to ${otherCharacter.health}.`
            );
        }
    };

    return character;
}

// Example Battle 
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

character1.battle(character2);
// Each character now has a .battle(otherCharacter) method.
// attacker deals a random damage between 5 and 20 to the opponent.
// logs a battle message showing the attack and health reduction.

/* example output: 
    {
  name: 'Hero',
  health: 95,
  class: 'Archer',
  randomizeHealth: [Function: randomizeHealth]
}
{
  name: 'Thorin',
  class: 'Assassin',
  health: 100,
  specialAbility: 'Healing Touch',
  battle: [Function: battle]
}
{
  name: 'Lastik-man',
  class: 'Healer',
  health: 69,
  specialAbility: 'Lightning Strike',
  battle: [Function: battle]
}
Character Zane attacked Character Elara with Power Slash. Elara's health dropped from 146 to 132.
*/

/* Task 7: Generate Multiple Characters */
// we created a function generateMultipleCharacters(x)
// it should return an array containing randomly generated characters (x)

function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}
// will generate random characters (in my case i want 5 random characters.)
const party = generateMultipleCharacters(5);
console.dir(party);

/*sample output: 
[
  {
    name: 'Thorin',
    class: 'Assassin',
    health: 131,
    specialAbility: 'Healing Touch',
    battle: [Function: battle]
  },
  {
    name: 'Dante',
    class: 'Assassin',
    health: 126,
    specialAbility: 'Fireball',
    battle: [Function: battle]
  },
  {
    name: 'Dante',
    class: 'Assassin',
    health: 118,
    specialAbility: 'Fireball',
    battle: [Function: battle]
  },
  {
    name: 'Elara',
    class: 'Archer',
    health: 106,
    specialAbility: 'Healing Touch',
    battle: [Function: battle]
  },
  {
    name: 'Ivy',
    class: 'Mage',
    health: 144,
    specialAbility: 'Stealth',
    battle: [Function: battle]
  }
]
*/ 
// i created a final script that contains task 1-7 in well mannered structure.







