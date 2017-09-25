var createCharacterSheet = function(data) {

  console.log(data);

  var sheet = document.createElement("div");
  sheet.setAttribute("id", "sheet");

  var name = document.createElement("div");
  name.setAttribute("id", "name");
  name.appendChild(document.createTextNode("Name: "));

  var name_prompt = document.createElement("span");
  // name_prompt.setAttribute("class", "font-effect-outline");
  name_prompt.appendChild(document.createTextNode(data.name));

  name.appendChild(name_prompt);


  var attributes = document.createElement("div");
  attributes.setAttribute("id", "attributes");

  var race_class = document.createElement("div");
  race_class.setAttribute("id", "race-class");
  // race_class.setAttribute("class", "font-effect-3d")
  var race_classText = document.createTextNode(data.race + " " + data.class);
  race_class.appendChild(race_classText);
  var height = document.createElement("div");
  height.setAttribute("id", "height");
  var heightText = document.createTextNode("Height: " + data.height);
  height.appendChild(heightText);
  var weight = document.createElement("div");
  weight.setAttribute("id", "weight");
  var weightText = document.createTextNode("Weight: " + data.weight);
  weight.appendChild(weightText);
  var homeland = document.createElement("div");
  homeland.setAttribute("id", "homeland");
  var homelandText = document.createTextNode("Homeland: " + data.homeland);
  homeland.appendChild(homelandText);

  attributes.appendChild(race_class);
  attributes.appendChild(height);
  attributes.appendChild(weight);
  attributes.appendChild(homeland);

  var str = document.createElement("div");
  str.setAttribute("class", "stat str");
  var strText = document.createTextNode("Strength: " + data.strength);
  str.appendChild(strText);
  var dex = document.createElement("div");
  dex.setAttribute("class", "stat dex");
  var dexText = document.createTextNode("Dexterity: " + data.dexterity);
  dex.appendChild(dexText);
  var con = document.createElement("div");
  con.setAttribute("class", "stat con");
  var conText = document.createTextNode("Constitution: " + data.constitution);
  con.appendChild(conText);
  var int = document.createElement("div");
  int.setAttribute("class", "stat int");
  var intText = document.createTextNode("Intelligence: " + data.intelligence);
  int.appendChild(intText);
  var wis = document.createElement("div");
  wis.setAttribute("class", "stat wis");
  var wisText = document.createTextNode("Wisdom: " + data.wisdom);
  wis.appendChild(wisText);
  var cha = document.createElement("div");
  cha.setAttribute("class", "stat cha");
  var chaText = document.createTextNode("Charisma: " + data.charisma);
  cha.appendChild(chaText);

  var level = document.createElement("div");
  level.setAttribute("id", "level");
  level.appendChild(document.createTextNode("Level:"));

  var level_badge = document.createElement("h3");
  level_badge.setAttribute("class", "font-effect-");
  level_badge.appendChild(document.createTextNode(data.level));
  level.appendChild(level_badge);


  var spells = document.createElement("div");
  spells.setAttribute("id", "spells");
  for (var i=0; i<data.spells.length; i++) {
    spells.appendChild(createSpell(data.spells[i]));
  }

  var image = document.createElement("img");
  image.setAttribute("id", "image");
  image.src = data.image_src;


  sheet.appendChild(name);
  sheet.appendChild(attributes);
  sheet.appendChild(str);
  sheet.appendChild(dex);
  sheet.appendChild(con);
  sheet.appendChild(int);
  sheet.appendChild(wis);
  sheet.appendChild(cha);
  sheet.appendChild(level);
  sheet.appendChild(spells);
  sheet.appendChild(image);

  return sheet;
}

var createSpell = function(spellToCreate) {
  var spell = document.createElement("div");
  spell.setAttribute("class", "spell");

  var spellName = document.createElement("h3");
  var spellNameText = document.createTextNode(spellToCreate.name);
  spellName.appendChild(spellNameText);
  var spellCost = document.createElement("div");
  var spellCostText = document.createTextNode("(" + spellToCreate.cost + ")");
  spellCost.appendChild(spellCostText);
  var spellDescription = document.createElement("div");
  var spellDescriptionText = document.createTextNode("Description: " + spellToCreate.description);
  spellDescription.appendChild(spellDescriptionText);

  spell.appendChild(spellName);
  spell.appendChild(spellCost);
  spell.appendChild(spellDescription);

  return spell;
}
