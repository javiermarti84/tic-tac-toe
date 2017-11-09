import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { style, state, keyframes, animate, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shape-circle',
  templateUrl: './shape-circle.component.html',
  styleUrls: ['./shape-circle.component.css'],
  animations: [
    trigger('step1', [
      state('animated', style({opacity: 0, transform: 'rotateZ(-180deg)'})),
      transition('void => animated', [
        animate('250ms 0ms linear', keyframes([
          style({opacity: 1, transform: 'rotateZ(0deg)', offset: 0 }),
          style({opacity: 1, transform: 'rotateZ(-180deg)', offset: 0.9 }),
          style({opacity: 0, offset: 1.0 }),
        ]))
      ]),
    ]),
    trigger('step2', [
      state('animated', style({opacity: 0, transform: 'rotateZ(-180deg)'})),
      transition('void => animated', [
        animate('500ms 0ms linear', keyframes([
          style({opacity: 1, transform: 'rotateZ(0deg)', offset: 0.50 }),
          style({opacity: 1, transform: 'rotateZ(-180deg)', offset: 0.9 }),
          style({opacity: 0, offset: 1.0 }),
        ]))
      ]),
    ]),
  ]
})
export class ShapeCircleComponent implements OnInit {

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
    this.animationStarted.emit(null);
  }

  emitAnimationEnded(): void {
    this.animationEnded.emit(null);
  }
}
