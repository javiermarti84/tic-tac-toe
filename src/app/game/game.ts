import { Player } from './player/player';
import { Cell } from './grid/cell/cell';
import { BehaviorSubject } from 'rxjs';
import { CustomBehaviorSubject } from '../util/custom-behavior-subject';
import { Shape } from '../core/shared/enum/shape';
import { Status } from '../core/shared/enum/status';
import { Result } from './result/result';
import { Rule } from './rule';

export class Game {

  private turn: CustomBehaviorSubject<Player>;
  status: BehaviorSubject<Status>;
  player1: Player;
  player2: Player;
  rows: Cell[][];
  result: Result;

  constructor() {
    this.status = new BehaviorSubject<Status>(Status.INITIALIZING);
    this.result = null;
    this.player1 = new Player({ shape: Shape.CLOSE, color: 'red', name: 'X' });
    this.player2 = new Player({ shape: Shape.CIRCLE, color: 'blue', name: 'O' });
    this.turn = new CustomBehaviorSubject<Player>(this.player1);
    this.rows = new Array(3);
    for (let y = 0; y < 3; y++) {
      this.rows[y] = [new Cell(0, y), new Cell(1, y), new Cell(2, y)];
    }
  }

  switchTurn(): boolean {
    if (this.getTurnNumber() < 9) {
      if (this.isPlayer1Turn()) {
        this.turn.next(this.player2);
      } else {
        this.turn.next(this.player1);
      }
      return true;
    }
    return false;
  }

  setDraw(): void {
    this.result = new Result({ draw: true, player1: this.player1, player2: this.player2 });
    this.status.next(Status.FINALIZED);
  }

  setWinner(player: Player, rule: Rule): void {
    this.result = new Result({ draw: false, winner: player, rule: rule });
    this.turn.next(null);
    this.status.next(Status.FINALIZED);
  }

  getTurn(): CustomBehaviorSubject<Player> {
    return this.turn;
  }

  getTurnNumber(): number {
    return this.turn.getTotal();
  }

  getCurrentPlayer(): Player {
    return this.turn.getValue();
  }

  isGameOver() : boolean {
    return this.result !== null || this.getTurnNumber() > 9;
  }

  isPlayer1Turn() : boolean {
    return this.getCurrentPlayer() === this.player1;
  }

  isPlayer2Turn() : boolean {
    return this.getCurrentPlayer() === this.player2;
  }
}
