import { Spell, SpellType } from "./Spell";

export class FireSpell extends Spell {
  private damage: number;

  constructor(fireSpellName: FireSpellType) {
    super(fireSpellName);
    this.damage = 20;
  }

  cast(): void {
    console.log(`A fire spell is cast !!! ${this.damage} for enemy`);
  }

  castByName(spellName: string): void {
    console.log(
      `A fire spell is cast of type ${spellName} !!! ${this.damage} for enemy`
    );
  }
}

export enum FireSpellType {
  Fire_Bolt = "Fire Bolt",
  Fire_Wall = "Fire Wall",
  Big_Bang = "Big Bang",
}
