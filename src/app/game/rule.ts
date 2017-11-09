export class Rule {

  code: string;
  coordinates: { x:number, y:number }[];

  constructor(options: {
    code: string,
    coordinates: { x:number, y:number }[]
  }) {
    this.code = options['code'];
    this.coordinates = options['coordinates'];
  }
}
