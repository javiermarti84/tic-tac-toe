import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Game } from './game';
import { AlertService } from '../core/alert/alert.service';
import { Status } from '../core/shared/enum/status';
import { WINNER_RULES } from './winner-rules';
import { Cell } from './grid/cell/cell';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  processing: boolean;
  game: Game;

  constructor(
    private alertService: AlertService,
    private gameService: GameService) { }

  ngOnInit() {
    this.processing = true;
    this.game = this.gameService.createNewGame();

    // this.game.status.next(Status.LOADED);
    // this.gameService.markCell(this.game.rows[0][0], this.game.player1);
    // this.gameService.markCell(this.game.rows[0][1], this.game.player1);
    // this.gameService.markCell(this.game.rows[0][2], this.game.player1);
    // this.game.setWinner(this.game.player1, WINNER_RULES[0]);
  }

  clickOnCell(cell: Cell): void {
    if (!this.processing && !this.game.isGameOver()) {
      this.processing = true;
      if (!this.gameService.markCell(cell, this.game.getCurrentPlayer())) {
        this.alertService.error(`The cell has already been marked.`);
        return;
      }
    }
  }

  cellAnimationStarted(): void {
  }

  cellAnimationEnded(): void {
    let result = this.gameService.getResult(this.game);
    if (result) {
      this.alertService.clear();
    }
    else {
      if (!this.game.switchTurn()) {
        this.alertService.clear();
        this.game.setDraw();
      }
    }
    this.processing = false;
  }

  gridAnimationEnded(): void {
    console.log('gridAnimationEnded-init');
    let currentStatus = this.game.status.getValue();
    if ( currentStatus == Status.INITIALIZING ||currentStatus == Status.RESTARTING) {
      this.game.status.next(Status.LOADED);
      this.processing = false;
    }
  }

  resetGame(): void {
    console.log('resetGame-init');
    this.processing = true;
    let game = this.gameService.createNewGame();
    game.status.next(Status.RESTARTING);
    this.game = game;
  }

  get Status() {
    return Status;
  }
}
