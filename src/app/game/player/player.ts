import { Shape } from '../../core/shared/enum/shape';

export class Player {

  shape: Shape;
  color: string;
  name: string;

  constructor(options: {
    shape: Shape,
    color: string,
    name?: string
  }) {
    this.shape = options['shape'];
    this.color = options['color'];
    this.name = options['name'] || null;
  }
}
