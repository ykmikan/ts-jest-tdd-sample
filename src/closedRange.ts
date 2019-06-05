export default class ClosedRange {
    public readonly start: number;
    public readonly end: number;

    constructor({ start, end }: { start: number; end: number;}) {
        this.start = start;
        this.end = end;
    }

    toString() {
        return `[${this.start}, ${this.end}]`;
    }
}
