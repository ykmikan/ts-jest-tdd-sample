export default class ClosedRange {
    public readonly start: number;
    public readonly end: number;

    constructor({ start, end }: { start: number; end: number;}) {
        this.start = start;
        this.end = end;
    }

    public toString() {
        return `[${this.start}, ${this.end}]`;
    }

    public contains(num: number): boolean {
        return this.start <= num && num <= this.end;
    }
}
