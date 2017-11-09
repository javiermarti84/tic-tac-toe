import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { AlertType } from '../shared/enum/alert-type';
import { Alert } from './alert';

@Injectable()
export class AlertService {

  private subject = new BehaviorSubject<Alert>(null);

  success(message: string): void {
    this.subject.next(new Alert({ type: AlertType.SUCCESS, message: message }));
  }

  warning(message: string): void {
    this.subject.next(new Alert({ type: AlertType.WARNING, message: message }));
  }

  error(message: string): void {
    this.subject.next(new Alert({ type: AlertType.DANGER, message: message }));
  }

  clear(): void {
    this.subject.next(null);
  }

  getSubject(): Subject<Alert> {
    return this.subject;
  }
}
