export class Enum<T> {

  public readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  public toString() {
    return this.value.toString();
  }
}
