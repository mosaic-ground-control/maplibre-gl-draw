export declare class StringSet {
    private _items;
    private _nums;
    private _length;
    constructor(items?: Array<string | number>);
    add(x: string | number): StringSet;
    delete(x: string | number): StringSet;
    has(x: string | number): boolean;
    values(): (string | number)[];
    clear(): StringSet;
}
