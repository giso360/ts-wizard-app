import { Spell, SpellType } from "./Spell";

export class FrostSpell extends Spell {
  private damage: number;

  constructor(frostSpellType: FrostSpellType) {
    super(frostSpellType);
    this.damage = 0.5;
  }

  cast(): void {
    console.log(`A frost spell is cast !!! ${this.damage} slow-down for enemy`);
  }

  castByName(spellName: string): void {
    console.log(
      `A frost spell is cast of type ${spellName} !!! ${this.damage} for enemy`
    );
  }
}

export enum FrostSpellType {
  Frost_Bolt = "Frost Bolt",
  Blizzard = "Blizzard",
}
