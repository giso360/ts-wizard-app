import { Spell } from "./Spell";

export class SpellBook<T> {
  private _spells: Spell[] = [];

  constructor(spells: Spell[]) {
    this._spells = spells;
  }

  public get spells(): Spell[] {
    return this._spells;
  }
  public set spells(value: Spell[]) {
    this._spells = value;
  }
}
