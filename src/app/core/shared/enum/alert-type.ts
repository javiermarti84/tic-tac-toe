import { Enum } from './enum';

export class AlertType extends Enum<string> {

  public static readonly PRIMARY = new Enum('primary');

  public static readonly SECONDARY = new Enum('secondary');

  public static readonly SUCCESS = new Enum('success');

  public static readonly DANGER = new Enum('danger');

  public static readonly WARNING = new Enum('warning');

  public static readonly INFO = new Enum('info');

  public static readonly LIGHT = new Enum('light');

  public static readonly DARK = new Enum('dark');

}
