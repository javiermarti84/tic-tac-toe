import { Player } from '../../player/player';

export class Cell {

  x: number;
  y: number;
  player: Player;
  visibility: boolean;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.player = null;
    this.visibility = true;
  }
}
