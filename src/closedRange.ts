export default class ClosedRange {
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

    public contains(num: number): boolean {
        return this.start <= num && num <= this.end;
    }

    public equals(otherRange: ClosedRange): boolean {
        return this.start === otherRange.start && this.end === otherRange.end;
    }

    public isConnectedTo(otherRange: ClosedRange): boolean {
        return this.start === otherRange.end || this.end === otherRange.start;
    }
}
