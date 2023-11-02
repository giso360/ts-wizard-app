export abstract class Spell {
  abstract castSpellByName(spellName: string): void;
  private _spellName: string;

  constructor(spellName: string) {
    this._spellName = spellName;
  }

  public get spellName(): string {
    return this._spellName;
  }
  public set spellName(value: string) {
    this._spellName = value;
  }
}

export enum SpellType {
  Fire = "Fire",
  Frost = "Frost",
}
