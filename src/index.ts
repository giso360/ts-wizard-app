import { Wizard } from "./Wizard";
import { FireSpell, FireSpellType } from "./service/FireSpell";
import { FrostSpell, FrostSpellType } from "./service/FrostSpell";
import { SpellType } from "./service/Spell";
import { SpellBook } from "./service/SpellBook";

let fireSpellArray: FireSpell[] = [];
let frostSpellArray: FrostSpell[] = [];

let fireWizard: Wizard;
let frostWizard: Wizard;

const step1 = () => {
  console.log("STEP#1");
  console.log("Create FireSpell array with a Fire_Bolt and a Fire_Wall...");
  let fireBolt: FireSpell = new FireSpell(FireSpellType.Fire_Bolt);
  let fireWall: FireSpell = new FireSpell(FireSpellType.Fire_Wall);
  fireSpellArray = [fireBolt, fireWall];
  console.log(`fireSpellArray is: \n ${JSON.stringify(fireSpellArray)}`);
};

const step2 = () => {
  console.log("\nSTEP#2");
  console.log("Create FrostSpell array with a Frost_Bolt and a Blizzard...");
  let frostBolt: FrostSpell = new FrostSpell(FrostSpellType.Frost_Bolt);
  let blizzard: FrostSpell = new FrostSpell(FrostSpellType.Blizzard);
  frostSpellArray = [frostBolt, blizzard];
  console.log(`frostSpellArray is: \n ${JSON.stringify(frostSpellArray)}`);
};

const step3 = () => {
  console.log("\nSTEP#3");
  console.log("Create Fire-Wizard and initialize with fire-spell array...");
  let spellBook: SpellBook<SpellType.Fire> = new SpellBook(fireSpellArray);
  fireWizard = new Wizard(spellBook, "Gandalf");
  console.log(`FireWizard created: \n ${JSON.stringify(fireWizard)}`);
};

const step4 = () => {
  console.log("\nSTEP#4");
  console.log("Create Frost-Wizard and initialize with frost-spell array...");
  let spellBook: SpellBook<SpellType.Frost> = new SpellBook(frostSpellArray);
  frostWizard = new Wizard(spellBook, "Merlin");
  console.log(`FrostWizard created: \n ${JSON.stringify(frostWizard)}`);
};

const step5 = () => {
  console.log("\nSTEP#5");
  console.log(`${fireWizard.wizardName} casts all his spells at once...`);
  fireWizard.castAllSpells();
};

const step6 = () => {
  console.log("\nSTEP#6");
  console.log(`${fireWizard.wizardName} casts a Big-Bang Spell...`);
  try {
    fireWizard.castOneSpell("Big Bang");
  } catch (error) {
    console.log((error as Error).message);
  }
};

const step7 = () => {
  console.log("\nSTEP#7");
  console.log(`${frostWizard.wizardName} casts all his spells at once...`);
  frostWizard.castAllSpells();
};

const step8 = () => {
  console.log("\nSTEP#8");
  console.log(`${frostWizard.wizardName} casts a blizzard spell...`);
  try {
    frostWizard.castOneSpell("Blizzard");
  } catch (error) {
    console.log((error as Error).message);
  }
};

const story = () => {
  console.log("\n\n\n");
  console.log("*** STORY START ***");
  step1();
  step2();
  step3();
  step4();
  step5();
  step6();
  step7();
  step8();
  console.log("*** STORY END ***");
  console.log("\n\n\n");
};

story();
