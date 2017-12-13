$(document).ready(function() {

// Global vars
var hp
var ap
var didWin
var chooseChar
var chooseEnemy
var attacks = ["force", "lightsaber", "blaster"]
var userChar
var cpuChar
var characters
var userAction
var userAttackValue
var cpuAction
var cpuAttackValue
var accumUserAttackValue
var charactersHP

characters = {
  "luke": {
    "name": "Luke Skywalker",
    "hp": 120,
    "force": 5,
    "lightsaber": 15,
    "blaster": 10
  },
  "yoda": {
    "name": "Yoda",
    "hp": 150,
    "force": 15,
    "lightsaber": 5,
    "blaster": 10
  },
  "obi": {
    "name": "Obi-Won Kenobi",
    "hp": 110,
    "force": 10,
    "lightsaber": 5,
    "blaster": 15},
  "maul": {
    "name": "Darth Maul",
    "hp": 120,
    "force": 5,
    "lightsaber": 10,
    "blaster": 15
  },
  "vader": {
    "name": "Darth Vader",
    "hp": 130,
    "force": 10,
    "lightsaber": 15,
    "blaster": 5
  },
  "sidious": {
    "name": "Darth Sidious",
    "hp": 140,
    "force": 15,
    "lightsaber": 10,
    "blaster": 5
  },
}

//console.log(characters["luke"]["name"])

function selectChar(x) {
    $(".hero").append($(x))
    userChar = characters[x.id]
    chooseChar = true
    // set userChar to the selected character
}

function selectEnemy(x) {
    $(".enemy").append($(x))
    cpuChar = characters[x.id]
    chooseEnemy = true
    // set cpuChar to the selected enemy
}

function printHP() {
  $("#lukehp").html("HP: " + characters["luke"]["hp"])
  $("#yodahp").html("HP: " + characters["yoda"]["hp"])
  $("#obihp").html("HP: " + characters["obi"]["hp"])
  $("#maulhp").html("HP: " + characters["maul"]["hp"])
  $("#vaderhp").html("HP: " + characters["vader"]["hp"])
  $("#sidioushp").html("HP: " + characters["sidious"]["hp"])
}

// game initilizer and restart
function initializeGame() {
didWin = false
chooseChar = false
chooseEnemy = false
printHP()
$(".card").click(function() {
  if (chooseChar === false) {
    //call the selectChar function to set userChar equal to the character the user selects
    selectChar(this)
  } else if (chooseEnemy === false) {
    //call the selectEnemey function to set cpuChar equal to the opponent the user selects
    selectEnemy(this)
  }
})
$(".btn").click(function() {
  getUserAction(this)
  applyUserAction()
  getCpuAction()
  applyCpuAction()
})
}

function getUserAction(x) {
  userAction = x.id
  userAttackValue = userChar[userAction]
  console.log(userAction)
  console.log(userAttackValue)
    // set cpuChar to the selected enemy
}

function getCpuAction() {
  var randNum = Math.floor(Math.random() * 3)
  cpuAction = attacks[randNum]
  cpuAttackValue = cpuChar[cpuAction]
  console.log(cpuAction)
  console.log(cpuAttackValue)
}

// subtract userAttackValue from cpuChar["hp"]
function applyUserAction() {
  if (cpuChar["hp"] > 0) {
    cpuChar["hp"] = cpuChar["hp"] - userAttackValue
    printHP()
    console.log("subtracting cpu life", cpuChar["hp"])
  } else if (cpuChar["hp"] <= 0) {
    didWin = true
    $(".enemy").detach(cpuChar)
  }
}

function applyCpuAction() {
  if (userChar["hp"] > 0) {
    userChar["hp"] = userChar["hp"] - cpuAttackValue
    printHP()
    console.log("subtracting user life", userChar["hp"])
  } else if (userChar["hp"] <= 0) {
    didWin = false
  }
}



// User clicks a button
  // Determine which button the user clicked using id
  // Store which button the user clicked to userAction
  // userAttackValue = userChar[userAction]







  // Figure out cpuAction (which is going to be random)
    // Pick a random number that is an integer between 0-2 and assign it to randNum
      // cpuAction = attacks[randNum]

//



// User chooses tactic (weapon)


// computer chooses tactic (weapon)

// compare user and computer choices

// adjust user and computer HP accordingly

// check to see win or lose

// report outcome of HP

// solicit next attack

initializeGame()

})
