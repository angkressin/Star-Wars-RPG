//$(document).ready(function() {

// Global vars
var hp
var ap
var didWin
var choosePlayer
var chooseEnemy
var force
var lightsaber
var blaster

// object for player HP and AP
var players = {
  luke = {
    hp = 120,
    ap = {
    force = ,
    lightsaber = ,
    blaster = ,
  }
  },
  yoda = {
    hp = 150,
    ap = {
    force = ,
    lightsaber = ,
    blaster = ,
  }
  },
  obi = {
    hp = 110,
    ap = {
    force = ,
    lightsaber = ,
    blaster = ,
  }
  },
  maul = {
    hp = 120,
    ap = {
    force = ,
    lightsaber = ,
    blaster = ,
  }
  },
  vader = {
    hp = 130,
    ap = {
    force = ,
    lightsaber = ,
    blaster = ,
  }
  },
  sidious = {
    hp = 140,
    ap = {
    force = ,
    lightsaber = ,
    blaster = ,
  }
  }
}

// game initilizer and restart
/*function initializeGame() {
  hp = ""
  didWin = false
  choosePlayer = false
  chooseEnemy = false
}*/

// event listen click on each card
var choosePlayer = $("#character").on('click', function() {
  alert('clicked')
})
  // if choose player, then
//if (choosePlayer) {
    //move to the arena
  //}

// User chooses tactic (weapon)

// computer chooses tactic (weapon)

// compare user and computer choices

// adjust user and computer HP accordingly

// check to see win or lose

// report outcome of HP

// solicit next attack
