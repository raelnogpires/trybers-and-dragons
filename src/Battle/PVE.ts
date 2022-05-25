import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Character | Fighter,
    private _enemies: Monster[] | SimpleFighter[],
  ) {
    super(_player);
  }

  fight(): number {
    this._enemies.forEach((e) => {
      while (this._player.lifePoints > 0 && e.lifePoints > 0) {
        this._player.attack(e);
        e.attack(this._player);
      }
    });

    return super.fight();
  }
}
