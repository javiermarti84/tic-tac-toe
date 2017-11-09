import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { GameService } from './game.service';
import { GameComponent } from './game.component';
import { PlayerComponent } from './player/player.component';
import { ShapeCircleComponent, ShapeCloseComponent } from './shape/index';
import { GridComponent } from './grid/grid.component';
import { ResultComponent } from './result/result.component';
import { MessageComponent } from './message/message.component';
import { CellComponent } from './grid/cell/cell.component';

@NgModule({
  imports: [
    CoreModule,
  ],
  declarations: [
    GameComponent,
    GridComponent,
    PlayerComponent,
    CellComponent,
    ShapeCircleComponent,
    ShapeCloseComponent,
    ResultComponent,
    MessageComponent
  ],
  exports: [
    GameComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }
