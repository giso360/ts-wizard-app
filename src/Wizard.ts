import { Spell, SpellType } from "./service/Spell";
import { SpellBook } from "./service/SpellBook";

export class Wizard {
  private _wizardName: string;
  private _spellBook: SpellBook<SpellType>;

  constructor(spellBook: SpellBook<SpellType>, wizardName: string) {
    this._wizardName = wizardName;
    this._spellBook = spellBook;
  }

  public get spellBook(): SpellBook<SpellType> {
    return this._spellBook;
  }

  public set spellBook(value: SpellBook<SpellType>) {
    this._spellBook = value;
  }

  public get wizardName(): string {
    return this._wizardName;
  }
  public set wizardName(value: string) {
    this._wizardName = value;
  }

  castOneSpell(spellName: string): void {
    let isSpellPresent: boolean = false;
    let spell: Spell;
    this._spellBook.spells.forEach((sp) => {
      if (sp.spellName === spellName) {
        sp.castSpellByName(spellName);
        spell = sp;
        isSpellPresent = true;
      }
    });
    this._spellBook.spells = this._spellBook.spells.filter((e) => e !== spell);
    if (!isSpellPresent) {
      throw new Error("Spell NOT present !!!");
    }
  }

  castAllSpells(): void {
    this._spellBook.spells.forEach((sp) => sp.castSpellByName(sp.spellName));
    this._spellBook.spells = [];
  }
}
