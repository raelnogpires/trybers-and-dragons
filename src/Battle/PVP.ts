import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Character | Fighter,
    private _player2: Character | Fighter,
  ) {
    super(_player1);
  }

  fight(): number {
    this._player1.attack(this._player2);
    this._player2.attack(this._player2);
    return super.fight();
  }
}
