import Bootcamp from "../models/Bootcamp";
import ISPListItemsService from "../models/ISPListItemsService";

export default class SPListItemsService implements ISPListItemsService {

    /**
     * Target Site URL to request
     */
    private _siteUrl: String;

    /**
     * Default constructor
     * @param u SharePoint Site URL to request
     */
    constructor(u: String) {
        if (null == u || undefined == u || u.trim().length < 5) {
            throw TypeError('URL can not be null or empty.');
        }
        this._siteUrl = u;
    }

    /**
     * Get All Items from a SharePoint List
     * @param t SharePoint List Title
     */
    public getBootcampEvents(t: String): Promise<Array<Bootcamp>> {
        if (null == this._siteUrl || undefined == this._siteUrl || this._siteUrl.trim().length < 5) {
            throw TypeError('Can not get Bootcamp event because SharePoint site URL is null or empty.');
        }
        if (null == t || undefined == t || t.trim().length < 3) {
            throw TypeError('The SharePoint list title can not be null or empty.');
        }
        const apiUrl = this._siteUrl + "/_api/Web/Lists/GetByTitle('" + t + "')/Items?$select=Id,Title,Date";
        return new Promise((resolve, reject) => {
            this.sendRequest(apiUrl).then((r) => {
                let events: Array<Bootcamp> = new Array;
                for (let e = 0; e < r.results.length; e++) {
                    try {
                        events.push(new Bootcamp(r.results[e].Title, new Date(r.results[e].Date)));
                    } catch {
                        console.log('Item with ID: ' + r.results[e].Id + ' can not be added.');
                    }
                }
                resolve(events);
            }).catch((e) => { reject(e); });
        });
    }

    /**
     * Send SharePoint Resquest
     * @param u SharePoint REST API URL
     */
    private sendRequest(u: string): Promise<any> {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            /* Pass function parameters to control XHR properties */
            xhr.open('GET', u, true);
            xhr.setRequestHeader("Accept", "application/json;odata=verbose");

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) { // `DONE`
                    var status = xhr.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                        resolve(JSON.parse(xhr.responseText).d);
                    } else {
                        reject({ status: xhr.status, statusText: xhr.statusText, responseText: xhr.responseText });
                    }
                }
            };
            xhr.send();
        });
    }
}