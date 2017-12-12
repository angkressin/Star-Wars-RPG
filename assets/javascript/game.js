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
var  luke = {
    hp: 120,
    force: 5,
    lightsaber: 15,
    blaster: 10,
}

var yoda = {
    hp: 150,
    force: 15,
    lightsaber: 5,
    blaster: 10,
  }

var obi = {
    hp: 110,
    force: 10,
    lightsaber: 5,
    blaster: 15,
  }

var maul = {
    hp: 120,
    force: 5,
    lightsaber: 10,
    blaster: 15,
  }

var vader = {
    hp: 130,
    force: 10,
    lightsaber: 15,
    blaster: 5,
  }

var sidious = {
    hp: 140,
    force: 15,
    lightsaber: 10,
    blaster: 5,
  }

// game initilizer and restart
//function initializeGame() {
  //hp = ""
  //didWin = false
  //choosePlayer = false
  //chooseEnemy = false
$("#lukehp").html("HP: " + luke.hp)
$("#yodahp").html("HP: " + yoda.hp)
$("#obihp").html("HP: " + obi.hp)
$("#maulhp").html("HP: " + maul.hp)
$("#vaderhp").html("HP: " + vader.hp)
$("#sidioushp").html("HP: " + sidious.hp)
//}

// event listen click on each card
var choosePlayer = $("#character").on('click', function() {
  alert('clicked')
})

//initializeGame()
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
