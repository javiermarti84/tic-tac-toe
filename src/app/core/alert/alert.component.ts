import { Component } from '@angular/core';
import { style, state, keyframes, animate, transition, trigger } from '@angular/animations';
import { Alert } from './alert';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('alert', [
      state('default', style({ opacity: 1 })),
      transition('void => default', [
        animate('500ms 0ms linear', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 1.0 }),
        ]))
      ])
    ])
  ]
})
export class AlertComponent {

  alert: Alert;

  constructor(
    private alertService : AlertService) { }

  ngOnInit (): void {
    this.alertService.getSubject().subscribe((alert: Alert) => {
      this.alert = alert;
    });
  }

  get typeClass() {
    return this.alert ? `alert alert-${this.alert.type}` : null;
  }
}
