import { Component, OnInit, Input } from '@angular/core';
import { style, state, keyframes, animate, transition, trigger } from '@angular/animations';
import { Result } from './result';
import { Shape } from '../../core/shared/enum/shape';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [
    trigger('bg', [
      state('hide', style({ opacity: 0 })),
      state('intro', style({ opacity: 1 })),
      transition('* => intro', [
        animate('400ms 0ms linear')
      ]),
    ]),
    trigger('draw', [
      state('intro', style({ opacity: 1 })),
      transition('void => intro', [
        animate('500ms 400ms linear')
      ]),
    ]),
    trigger('info', [
      state('hide', style({ opacity: 0 })),
      state('intro', style({ opacity: 1, 'font-size': '200%' })),
      transition('void => intro', [
        animate('2000ms 0ms linear')
      ]),
    ]),
    trigger('shape', [
      state('intro', style({  })),
      state('hide', style({ opacity: 0 })),
      state('center', style({ left: '6.5em', top: '6.5em' })),
      transition('intro => center', [
        animate('500ms 0ms linear')
      ])
    ]),
    trigger('line-h', [
      state('intro', style({ right: 0 })),
      state('center', style({ left: '50%', right: '50%', top: '7.75em' })),
      transition('void => intro', [
        animate('300ms 0ms linear', keyframes([
          style({ right: '100%', offset: 0 }),
          style({ right: 0, offset: 1.0 }),
        ]))
      ]),
      transition('intro => center', [
        animate('500ms 0ms linear')
      ]),
    ]),
    trigger('line-v', [
      state('intro', style({ bottom: 0 })),
      state('center', style({ bottom: '50%', top: '50%', left: '7.75em' })),
      transition('void => intro', [
        animate('300ms 0ms linear', keyframes([
          style({ bottom: '100%', offset: 0 }),
          style({ bottom: 0, offset: 1.0 }),
        ]))
      ]),
      transition('intro => center', [
        animate('500ms 0ms linear')
      ]),
    ]),
    trigger('line-d-1', [
      state('intro', style({ height: '23em' })),
      state('center', style({ height: 0 , top: '50%' , left: '50%' })),
      transition('void => intro', [
        animate('300ms 0ms linear', keyframes([
          style({ height: 0, offset: 0 }),
          style({ height: '23em' , offset: 1.0 }),
        ]))
      ]),
      transition('intro => center', [
        animate('500ms 0ms linear')
      ]),
    ]),
    trigger('line-d-2', [
      state('intro', style({ height: '23em' })),
      state('center', style({ height: 0 , top: '50%' , right: '50%' })),
      transition('void => intro', [
        animate('300ms 0ms linear', keyframes([
          style({ height: 0, offset: 0 }),
          style({ height: '23em', offset: 1.0 }),
        ]))
      ]),
      transition('intro => center', [
        animate('500ms 0ms linear')
      ]),
    ]),
  ]
})
export class ResultComponent implements OnInit {

  bgBoxStatus: string;
  infoStatus: string;
  shapeStatus: string;
  lineStatus: string;

  @Input()
  result: Result;

  constructor() { }

  ngOnInit() {
    this.lineStatus = 'intro';
    this.shapeStatus = 'intro';
    this.infoStatus = 'hide';
    if (this.result.draw) {
      this.bgBoxStatus = 'intro';
    } else {
      this.bgBoxStatus = 'hide';
    }
  }

  lineAnimationStarted(event: AnimationEvent) : void {

  }

  lineAnimationEnded(event: AnimationEvent): void {
    if (this.lineStatus === 'intro') {
      this.lineStatus = 'center';
      this.shapeStatus = 'center';
    } else if (this.lineStatus === 'center') {
      this.bgBoxStatus = 'intro';
      this.shapeStatus = 'hide';
      this.infoStatus = 'intro';
    }
  }

  get Shape() {
    return Shape;
  }
}
