import { Component, Input } from '@angular/core';
import { Player } from '../player/player';
import { Shape } from '../../core/shared/enum/shape';
import { Status } from '../../core/shared/enum/status';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input()
  gameStatus: Status;

  @Input()
  currentPlayer: Player;

  get Shape() {
    return Shape;
  }

  get Status() {
    return Status;
  }
}
