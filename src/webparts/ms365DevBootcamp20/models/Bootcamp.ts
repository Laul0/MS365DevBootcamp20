export default class Bootcamp {

    //#region Properties
    /**
     * SharePoint Item Id
     */
    private _id: number;

    /**
     * Date of Bootcamp
     */
    private _date: Date;
    
    /**
     * Bootcamp Location
     */
    private _city: string;
    
    //#endregion

    constructor(id: number, c: string, d: Date) {
        if (null == c || undefined == c || c.trim().length < 2 ) {
            throw TypeError('The City can not be null or empty.');
        }
        this._id = id;
        this._date = d;
        this._city = c;
    }

    //#region Getters/Setters
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
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
    //#endregion
}