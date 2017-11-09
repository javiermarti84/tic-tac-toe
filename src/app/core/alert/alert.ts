import { AlertType } from '../shared/enum/alert-type';

export class Alert {

  type: AlertType;
  message: string;

  constructor(options: {
    type: AlertType,
    message: string
  }) {
    this.type = options['type'];
    this.message = options['message'];
  }
}
