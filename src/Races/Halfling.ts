import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  public static _instanceCounter: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._instanceCounter;
  }
}
