/*TASK 1: Create a Character Object
- Define an object with default properties: name and health.
- Log the character details.*/
const character = {
    name: "Hero",
    health: 100
};
console.log("Task 1 - Character created:", character);

/* TASK 2: Add a Random Class
- Assign a class randomly chosen from a predefined list.
- Log the assigned class. */
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
character.class = classes[Math.floor(Math.random() * classes.length)];
console.log("Task 2 - Assigned Class:", character.class);

/* TASK 3: Add Randomized Health
- Create a method to assign a random health value between 50 and 150.
- Log the new health value. */
character.randomizeHealth = function() {
    this.health = Math.floor(Math.random() * 101) + 50; // Random between 50 and 150
    console.log("Task 3 - Randomized Health:", this.health);
};
character.randomizeHealth();

/* TASK 4: Assign a Special Ability
- Assign a random special ability from a predefined list.
- Log the assigned special ability. */
const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
character.specialAbility = abilities[Math.floor(Math.random() * abilities.length)];
console.log("Task 4 - Assigned Special Ability:", character.specialAbility);

/* TASK 5: Create generateCharacter() Function
- Generates a new character with random properties or an assigned name.
- Log the generated character details. */
function generateCharacter(name = null) {
    const newCharacter = {
        name: name || ["Thorin", "Elara", "Zane", "Ivy", "Dante"][Math.floor(Math.random() * 5)],
        health: Math.floor(Math.random() * 101) + 50,
        class: classes[Math.floor(Math.random() * classes.length)],
        specialAbility: abilities[Math.floor(Math.random() * abilities.length)],
        battle: function (opponent) {
            let damage = Math.floor(Math.random() * 16) + 5; // Random damage between 5-20
            let oldHealth = opponent.health;
            opponent.health = Math.max(0, opponent.health - damage);
            console.log(`Task 6 - Battle: Character ${this.name} attacked Character ${opponent.name} with ${this.specialAbility}. ${opponent.name}'s health dropped from ${oldHealth} to ${opponent.health}.`);
        }
    };
    console.log("Task 5 - Generated Character:", newCharacter);
    return newCharacter;
}

/*TASK 6: Battle Simulation
- Add a battle method to handle attacks and decrease opponent health. */
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");
character1.battle(character2);

/* TASK 7: Generate Multiple Characters
- Returns an array of x randomly generated characters.
- Log the array of characters. */
function generateMultipleCharacters(x) {
    let characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    console.log("Task 7 - Generated Multiple Characters:", characters);
    return characters;
}

const party = generateMultipleCharacters(5);
console.dir(party);
