var express = require('express')
var dotenv = require('dotenv').config()

// Create an app using Express framework
var app = express()

// Character object constructor
function Character(name) {
  this.name = name;
  this.height = randomInt(50)+100;
  this.weight = randomInt(200)+50;
  this.race = races[randomInt(races.length)];
  this.class = classes[randomInt(classes.length)];
  this.level = randomInt(10);
  this.spells = generateSpells();
  this.spells = generateSpells(randomInt(3)+1);
  this.homeland = homelands[randomInt(homelands.length)];

  this.strength = randomInt(10)+8;
  this.dexterity = randomInt(10)+8;
  this.constitution = randomInt(10)+8;
  this.intelligence = randomInt(10)+8;
  this.wisdom = randomInt(10)+8;
  this.charisma = randomInt(10)+8;

}

function Spell() {
  var randomSpellIndex = randomInt(spells.length);
  this.name = spells[randomSpellIndex].name;
  this.cost = spells[randomSpellIndex].cost;
  this.description = spells[randomSpellIndex].description;
}

function generateSpells(numberOfSpells) {
  var spells = [];
  for (var i = 0; i<numberOfSpells; i++) {
    spells.push(new Spell());
  }
  return spells;
}

/*
function DOB() {
  this.month = randomInt(11)+1;
  this.

}
*/

var races = ["Human", "Elf", "Treant", "Giant", "Halfling", "Fairy"];
var classes = ["Ranger", "Warlock", "Wizard", "Warrior", "Bard"];
var spells = [
  {name: "Fireball", cost: 4, description: "Creates a ball of fire that deals 20 magic damage to enemies."},
  {name: "Cure Wounds", cost: 2, description: "Restores 10 health to an ally."},
  {name: "Animal Friendship", cost: 0, description: "Calms an animal."},
  {name: "Ultimate Infestation", cost: 10, description: "OP druid spell that ruins all of hearthstone."},
  {name: "Arcane Missiles", cost: 2, description: "Fires 5 magic missiles that deal 2 damage each."},
  {name: "Dancing Lights", cost: 0, description: "Summons 4 orbs of light that illuminate darkness."},
  {name: "Darkvision", cost: 0, description: "Gain the ability to see in darkness for 100ft."}
];
var homelands = ["Argon", "Davos", "Ludwig", "Tertianas", "Yalloh", "Erkelnomical", "Idonshire"];

// We can give a specific path to the file to serve out to our browser
app.get("/", function (request, response) {
  response.sendFile('index.html', {"root": __dirname})
})

app.get("/style.css", function(request, response) {
  response.sendFile('style.css', {"root": __dirname})
})

app.get("/charSheet.js", function(request, response) {
  response.sendFile('charSheet.js', {"root": __dirname})
})

app.get("/new-player/:name", function(request, response) {
  var player = new Character(request.params.name);

  response.json(player);

})

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

var port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log("Your app is listening for HTTP requests on port " + port + ".")
});
