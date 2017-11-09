import { Injectable } from '@angular/core';
import { Game } from './game';
import { Cell } from './grid/cell/cell';
import { Rule } from './rule';
import { Result } from './result/result';
import { Player } from './player/player';
import { WINNER_RULES } from './winner-rules';

@Injectable()
export class GameService {

  winnerRules: Rule[] = WINNER_RULES;

  createNewGame(): Game {
    return new Game();
  }

  markCell(cell: Cell, player: Player): boolean {
    if (cell.player) {
      return false;
    }
    cell.player = player;
    return true;
  }

  getResult(game: Game): Result {
    if (game.getTurnNumber() > 4) {
      for (let rule of this.winnerRules) {
        let coordinates = rule.coordinates;
        let cell1 = game.rows[coordinates[0].y][coordinates[0].x];
        let player = cell1.player;
        if (player) {
          let cell2 = game.rows[coordinates[1].y][coordinates[1].x];
          let cell3 = game.rows[coordinates[2].y][coordinates[2].x];
          if (player === cell2.player && player === cell3.player) {
            game.setWinner(player, rule);
            cell1.visibility = false;
            cell2.visibility = false;
            cell3.visibility = false;
            break;
          }
        }
      }
    }
    return game.result;
  }
}
