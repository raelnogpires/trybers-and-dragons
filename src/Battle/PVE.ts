import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player1: Character | Fighter,
    private _enemies: Monster[] | SimpleFighter[],
  ) {
    super(_player1);
  }

  fight(): number {
    this._enemies.forEach((e) => {
      this._player1.attack(e);
      e.attack(this._player1);
    });

    return super.fight();
  }
}
