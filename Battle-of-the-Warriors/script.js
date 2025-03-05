/*1. Define Two Warrior Objects */
/**   
 * DOCU: Creates a warrior object with properties and an attack method  
 * @param {string} name - The name of the warrior (warrior1 - Thor) 
 * @param {number} hp - The health points of the warrior  
 * @param {number} strength - The strength value, affecting attack power  
 * @returns {number} - A random attack damage based on the warrior's strength  
 **/
let warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 15,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};
/**  
 * DOCU: Creates another warrior object with properties and an attack method  
 * @param {string} name - The name of the warrior (warrior2 - Zeus)  
 * @param {number} hp - The health points of the warrior  
 * @param {number} strength - The strength value, affecting attack power  
 * @returns {number} - A random attack damage based on the warrior's strength  
 **/
let warrior2 = {
    name: "Zeus",
    hp: 100,
    strength: 12,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

/**  
 * DOCU: Executes a battle turn where the attacker deals damage to the defender  
 * @param {object} attacker - The warrior attacking in this turn  
 * @param {object} defender - The warrior defending in this turn  
 * @returns {void} - Updates the defender's HP and logs the battle outcome  
 **/
function battleTurn(attacker, defender) {
    let damage = attacker.attack();
    defender.hp = Math.max(0, defender.hp - damage);

    console.log(`${attacker.name} attacks ${defender.name} and does ${damage} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}\n`);
}

/*2. Simulate 10 Rounds of Battle */
/**  
 * DOCU: Simulates a battle between two warriors for up to 10 rounds  
 * - Each round consists of both warriors attacking each other  
 * - If a warrior's HP reaches 0, the battle ends early  
 * @returns {void} - Logs the battle progress and results  
 **/
console.log("=====Let The Battle Begins!=====\n");

for (let i = 1; i <= 10; i++) {
    console.log("=== Round " + i + " ===");
    
    battleTurn(warrior1, warrior2); // Thor attacks Zeus
    
    if (warrior2.hp > 0) {
        battleTurn(warrior2, warrior1); // Zeus attacks Thor
    }

    if (warrior1.hp <= 0 || warrior2.hp <= 0) {
        console.log("\nA warrior has fallen! The battle ends early.");
        break;
    }
}

/*3. Determine the Winner */
/**   
 * DOCU: Determines and announces the winner of the battle based on remaining HP  
 * @param {object} warrior1 - The first warrior in the battle  
 * @param {object} warrior2 - The second warrior in the battle  
 * @returns {void} - Logs the winner or declares a draw  
 **/
function determineWinner(warrior1, warrior2) {
    if (warrior1.hp > warrior2.hp) {
        console.log("🏆 " + warrior1.name + " WINS the battle! 🏆");
    } else if (warrior2.hp > warrior1.hp) {
        console.log("🏆 " + warrior2.name + " WINS the battle! 🏆");
    } else {
        console.log("It's a draw!");
    }
}

determineWinner(warrior1, warrior2); // announce the winner after the battle ends.
