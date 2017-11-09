import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { style, state, keyframes, animate, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shape-close',
  templateUrl: './shape-close.component.html',
  styleUrls: ['./shape-close.component.css'],
  animations: [
    trigger('step1', [
      state('default', style({})),
      state('animated', style({transform: 'translateX(0)'})),
      transition('void => animated', [
        animate('250ms 0ms linear', keyframes([
          style({transform: 'translateX(-100%)', offset: 0 }),
          style({transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
    ]),
    trigger('step2', [
      state('default', style({})),
      state('animated', style({ transform: 'translateY(0);' })),
      transition('void => animated', [
        animate('500ms 0ms linear', keyframes([
          style({transform: 'translateY(-100%)', offset: 0 }),
          style({transform: 'translateY(-100%)', offset: 0.5 }),
          style({transform: 'translateY(0)', offset: 1.0 })
        ]))
      ]),
    ]),
  ]
})
export class ShapeCloseComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  animated: boolean;

  @Output()
  animationStarted: EventEmitter<any> = new EventEmitter();

  @Output()
  animationEnded: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

  }

  emitAnimationStarted(): void {
    if (this.animated) {
      this.animationStarted.emit(null);
    }
  }

  emitAnimationEnded(): void {
    if (this.animated) {
      this.animationEnded.emit(null);
    }
  }
}
