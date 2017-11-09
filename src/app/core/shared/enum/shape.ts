import { Enum } from "./enum";

export class Shape extends Enum<string> {

  public static readonly CIRCLE = new Enum('circle');

  public static readonly CLOSE = new Enum('close');
}
