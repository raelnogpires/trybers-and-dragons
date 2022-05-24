import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  public static _instanceCounter: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._instanceCounter;
  }
}