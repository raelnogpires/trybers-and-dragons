import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  public static _instanceCounter: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instanceCounter;
  }
}