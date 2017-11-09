import { Player } from '../player/player';
import { Rule } from '../rule';

export class Result {

  draw: boolean;
  player1: Player;
  player2: Player;
  winner: Player;
  rule: Rule;

  constructor(options: {
    draw: boolean,
    player1?: Player,
    player2?: Player,
    winner?: Player,
    rule?: Rule
  }) {
    this.draw = options.draw;
    this.player1 = options.player1 || null;
    this.player2 = options.player2 || null;
    this.winner = options.winner || null;
    this.rule = options.rule || null;
  }
}
