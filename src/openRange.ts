export default class OpenRange {
  public readonly start: number;
  public readonly end: number;

  constructor({ start, end }: { start: number; end: number;}) {
    if ( start >= end ) {
      throw new Error('start < endに違反しています');
    }

    this.start = start;
    this.end = end;
  }

  public toString() {
      return `[${this.start}, ${this.end}]`;
  }

}