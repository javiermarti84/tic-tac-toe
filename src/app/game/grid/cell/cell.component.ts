import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cell } from './cell';
import { Shape } from '../../../core/shared/enum/shape';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {

  @Input()
  cell: Cell;

  @Output()
  clickOnCell: EventEmitter<Cell> = new EventEmitter();

  @Output()
  animationStarted: EventEmitter<any> = new EventEmitter();

  @Output()
  animationEnded: EventEmitter<any> = new EventEmitter();

  public onClick(): void {
    this.clickOnCell.emit(this.cell);
  }

  emitAnimationStarted(): void {
    this.animationStarted.emit(null);
  }

  emitAnimationEnded(): void {
    this.animationEnded.emit(null);
  }

  get Shape() {
    return Shape;
  }
}
