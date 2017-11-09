import {Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { style, state, keyframes, animate, transition, trigger } from '@angular/animations';
import { Status } from '../../core/shared/enum/status';
import { Cell } from './cell/cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [
    trigger('overlay', [
      state('block', style({ opacity: 1, 'border-width' : '8em', 'display': 'block' })),
      state('hidden', style({ opacity: 1, 'border-width' : 0, 'display': 'none' })),
      state('end', style({ opacity : 0 })),
      transition('* => hidden', [
        animate('500ms 0ms linear', keyframes([
          style({'border-width': '8em', offset: 0 }),
          style({'border-width': 0, offset: 0.9 }),
          style({'display': 'none', offset: 1.0 }),
        ]))
      ]),
      transition('* => end', [
        animate('5s 2s linear', keyframes([
          style({ opacity : 1, offset: 0 }),
          style({ opacity : 0, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class GridComponent implements OnInit {

  @Input()
  gameStatus: Status;

  @Input()
  rows: Cell[][];

  @Output()
  clickOnCell: EventEmitter<Cell> = new EventEmitter();

  @Output()
  cellAnimationStarted: EventEmitter<any> = new EventEmitter();

  @Output()
  cellAnimationEnded: EventEmitter<any> = new EventEmitter();

  @Output()
  gridAnimationEnded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get overlayState() {
    console.log(this.gameStatus);
    if (this.gameStatus == Status.INITIALIZING || this.gameStatus == Status.LOADED) {
      return 'hidden';
    } else if (this.gameStatus == Status.FINALIZED) {
      return 'end';
    } else {
      return 'block';
    }
  }

  public emitCellOnClick(cell: Cell): void {
    this.clickOnCell.emit(cell);
  }

  emitCellAnimationStarted(): void {
    this.cellAnimationStarted.emit(null);
  }

  emitCellAnimationEnded(): void {
    this.cellAnimationEnded.emit(null);
  }

  emitGridAnimationEnded(): void {
    this.gridAnimationEnded.emit(null);
  }
}
