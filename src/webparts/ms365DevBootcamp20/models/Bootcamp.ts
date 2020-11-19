export default class Bootcamp {

    //#region Properties
    /**
     * Date of Bootcamp
     */
    private _date: Date;
    
    /**
     * Bootcamp Location
     */
    private _city: string;
    
    //#endregion

    constructor(c: string, d: Date) {
        if (null == c || undefined == c || c.trim().length < 2 ) {
            throw TypeError('The City can not be null or empty.');
        }
        this._date = d;
        this._city = c;
    }

    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
}