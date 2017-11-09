import { Component, Input } from '@angular/core';
import { Player } from './player';
import { Shape } from '../../core/shared/enum/shape';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input()
  player: Player;

  @Input()
  active: boolean;

  get Shape() {
    return Shape;
  }
}
