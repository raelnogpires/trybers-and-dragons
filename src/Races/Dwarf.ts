import Race from './Race';

export default class Dwarf extends Race {
  // counter starts at 0, not just a numbet type attribute
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number, private _maxLifePoints = 80) {
    super(name, dexterity);

    // everytime the class is instantiated
    // adds to counter
    Dwarf._instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instanceCounter;
  }
}
