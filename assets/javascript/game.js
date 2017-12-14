$(document).ready(function() {

  // Global vars
  var hp
  var ap
  var didWin
  var chooseChar
  var chooseEnemy
  var attacks = ["force", "lightsaber", "blaster"]
  var origUserAttackValues = {}
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
      "force": 2,
      "lightsaber": 10,
      "blaster": 6
    },
    "yoda": {
      "name": "Yoda",
      "hp": 150,
      "force": 13,
      "lightsaber": 7,
      "blaster": 2
    },
    "obi": {
      "name": "Obi-Wan Kenobi",
      "hp": 110,
      "force": 10,
      "lightsaber": 5,
      "blaster": 13
    },
    "maul": {
      "name": "Darth Maul",
      "hp": 120,
      "force": 2,
      "lightsaber": 8,
      "blaster": 16
    },
    "vader": {
      "name": "Darth Vader",
      "hp": 130,
      "force": 15,
      "lightsaber": 18,
      "blaster": 1
    },
    "sidious": {
      "name": "Darth Sidious",
      "hp": 140,
      "force": 17,
      "lightsaber": 7,
      "blaster": 3
    },
  }

  //console.log(characters["luke"]["name"])

  function selectChar(x) {
    $(".hero").append($(x))
    userChar = characters[x.id]
    for (i = 0; i < attacks.length; i++) {
      console.log(userChar[i])
      origUserAttackValues[attacks[i]] = userChar[attacks[i]]
    }
    console.log(origUserAttackValues)
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

// ASK ABOUT A BETTER WAY TO DO THIS
  function removeCharID() {
    if (cpuChar["name"] === "Luke Skywalker") {
      $("#luke").remove()
    } else if (cpuChar["name"] === "Yoda") {
      $("#yoda").remove()
    } else if (cpuChar["name"] === "Obi-Wan Kenobi") {
      $("#obi").remove()
    } else if (cpuChar["name"] === "Darth Maul") {
      $("#maul").remove()
    } else if (cpuChar["name"] === "Darth Vader") {
      $("#vader").remove()
    } else if (cpuChar["name"] === "Darth Sidious") {
      $("#sidious").remove()
    }
  }

  function removeUserID() {
    if (userChar["name"] === "Luke Skywalker") {
      $("#luke").remove()
    } else if (userChar["name"] === "Yoda") {
      $("#yoda").remove()
    } else if (userChar["name"] === "Obi-Wan Kenobi") {
      $("#obi").remove()
    } else if (userChar["name"] === "Darth Maul") {
      $("#maul").remove()
    } else if (userChar["name"] === "Darth Vader") {
      $("#vader").remove()
    } else if (userChar["name"] === "Darth Sidious") {
      $("#sidious").remove()
    }
  }

  // game initilizer
  function initializeGame() {
    didWin = false
    chooseChar = false
    chooseEnemy = false
    printHP()
    $(".btn-dark").hide();
    $(".card").click(function() {
      if (chooseChar === false) {
        //call the selectChar function to set userChar equal to the character the user selects
        selectChar(this)
      } else if (chooseEnemy === false) {
        //call the selectEnemy function to set cpuChar equal to the opponent the user selects
        selectEnemy(this)
      }
    })
    $(".btn").click(function() {
      getUserAction(this)
      applyUserAction()
    })
  }

  function initializeNextRound() {
    chooseEnemy = false
    console.log(chooseEnemy)
    $(".card").click(function() {
      if (chooseEnemy === false) {
        //call the selectEnemy function to set cpuChar equal to the opponent the user selects
        selectEnemy(this)
      } else {
        if ( $('.enemy').children().length == 0 ) {
	      console.log('enemy dev has no content anymore')
}
      }
    })
    console.log("New Round")
  }

   function gameOver() {
   chooseChar = true
    $(".btn-dark").click(function() {
        location.reload();
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
    cpuChar["hp"] = cpuChar["hp"] - userAttackValue
    userChar[userAction] = userChar[userAction] + origUserAttackValues[userAction]
    printHP()
    if (cpuChar["hp"] > 0) {
      $(".outputHero").html("You attacked " + cpuChar["name"] + " with " + userAction + " for " + userAttackValue)
      console.log("subtracting cpu life", cpuChar["hp"])
      getCpuAction()
      applyCpuAction()
    } else {
      didWin = true
      removeCharID()
      $(".outputHero").html("Congrats! You beat " + cpuChar["name"] + ". Select another character to fight.")
      $(".outputEnemy").html("")
      initializeNextRound()
    }
  }


  function applyCpuAction() {
    if (userChar["hp"] > 0) {
      userChar["hp"] = userChar["hp"] - cpuAttackValue
      printHP()
      $(".outputEnemy").html(cpuChar["name"] + " attacked you with " + cpuAction + " for " + cpuAttackValue)
      console.log("subtracting user life", userChar["hp"])
    } else {
      didWin = false
      removeUserID()
      $(".btn-dark").show();
      $(".btn-warning").hide();
      gameOver()
      $(".outputHero").html("Sorry! " + cpuChar["name"] + " beat you. Click the 'restart' button if you would like to play again.")
      $(".outputEnemy").html("")
    }
  }

  initializeGame()

})
