import { BehaviorSubject } from "rxjs";

export class CustomBehaviorSubject<T> extends BehaviorSubject<T> {

  private total: number;

  constructor(value: T) {
    super(value);
    if (value) {
      this.total = 1;
    } else {
      this.total = 0;
    }
  }

  next(value: T) {
    super.next(value);
    this.total++;
  }

  getTotal() {
    return this.total;
  }
}
