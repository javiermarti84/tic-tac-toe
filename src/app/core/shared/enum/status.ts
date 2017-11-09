import { Enum } from './enum';

export class Status extends Enum<string> {

  public static readonly INITIALIZING = new Enum('initializing');

  public static readonly LOADED = new Enum('loaded');

  public static readonly RESTARTING = new Enum('restarting');

  public static readonly FINALIZED = new Enum('finalized');
}
