/*1. Define Two Warrior Objects */
const warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 15,
    attack: function() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

const warrior2 = {
    name: "Zeus",
    hp: 100,
    strength: 12,
    attack: function () {
        return Math.floor(Math.random() * (this.strength + 1));
    }
}
// Function to handle attacks
function battleTurn(attacker, defender) {
    let damage = attacker.attack();
    defender.hp -= damage;
    console.log(attacker.name + " attacks " + defender.name + " and does " + damage + " damage!");
    console.log("Thor HP: " + warrior1.hp + " | Zeus HP: " + warrior2.hp + "\n");
}

/*2. Simulate 10 Rounds of Battle */
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
console.log("🏆 " + 
    (warrior1.hp > warrior2.hp 
        ? warrior1.name + " WINS the battle!" 
        : (warrior2.hp > warrior1.hp 
            ? warrior2.name + " WINS the battle!" 
            : "It's a draw!")) + " 🏆");
