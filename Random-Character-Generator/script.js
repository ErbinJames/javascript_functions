/* Task 1: Create a Character Object*/
/**
 * DOCU: Defines a character object with a name, health, and a randomly assigned class  
 * @param {string} name - The name of the character  
 * @param {number} health - The health value of the character  
 * @param {array} class - The available classes for the character  
 * @returns {void} - Assigns a random class and allows health randomization  
 */
const character = {
    name: "Hero",
    health: 100,
    class: ["Warrior", "Mage", "Archer", "Healer", "Assassin"]
        [Math.floor(Math.random() * 5)], // Task 2: Assign a random class  

    /** 
     * DOCU: Assigns a random health value between 50 and 150  
     * @returns {void} - Updates the character's health property  
     */
    randomizeHealth: function () { 
        this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    }
};
// Test the random health function  
character.randomizeHealth();
console.log(character.health); // Should log a random value between 50 to 150  

/* Task 4:Assign a Special Ability */
/**
 * DOCU: Generates a character with random attributes (or a provided name).
 * @param {string|null} name - The name of the character (random if null).
 * @returns {object} - A character object with randomized attributes and a battle method.
 */
function generateCharacter(name = null) {
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]; // Helper function for random selection  

    const character = {
        name: name || getRandomElement(["Thorin", "Elara", "Zane", "Ivy", "Dante"]),
        class: getRandomElement(["Warrior", "Mage", "Archer", "Healer", "Assassin"]),
        health: Math.floor(Math.random() * 101) + 50, // Random health between 50-150
        specialAbility: getRandomElement(["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"]),

        /**  
         * DOCU: Simulates a battle where the character attacks another, reducing their health.
         * @param {object} otherCharacter - The character being attacked.
         */
        battle(otherCharacter) {
            const damage = Math.floor(Math.random() * 16) + 5; // Random damage between 5-20  
            otherCharacter.health = Math.max(0, otherCharacter.health - damage); // Prevent negative health  

            console.log(
                `${this.name} attacked ${otherCharacter.name} with ${this.specialAbility}, dealing ${damage} damage! ` +
                `${otherCharacter.name} now has ${otherCharacter.health} HP.`
            );
        }
    };

    return character;
}

/* Task 5: Testing Character Generation */

// Generates a fully randomized character  
const randomCharacter = generateCharacter();  
console.dir(randomCharacter);  

// Generates a character with a provided name ("Lastik-man"), but random other attributes  
const namedCharacter = generateCharacter("Lastik-man");  
console.dir(namedCharacter);  

/* Task 6: Battle Simulation */

// Example Battle  
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

character1.battle(character2); // Zane attacks Elara

/* Task 7: Generate Multiple Characters */
/** 
 * DOCU: Generates multiple random characters  
 * - Calls `generateCharacter()` multiple times to create an array of characters  
 * @param {number} x - The number of characters to generate  
 * @returns {Array<object>} - An array of randomly generated character objects  
 */
function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}

// Generates an array of 5 random characters
const party = generateMultipleCharacters(5);
console.dir(party);