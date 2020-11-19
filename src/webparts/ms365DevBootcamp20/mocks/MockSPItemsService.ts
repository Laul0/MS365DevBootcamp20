import Bootcamp from "../models/Bootcamp";
import ISPListItemsService from "../models/ISPListItemsService";

export default class MockSPListItemsService implements ISPListItemsService {

    public getBootcampEvents(t: String): Promise<Array<Bootcamp>> {
        return new Promise<Array<Bootcamp>>((resolve, reject) => {
            setTimeout(() => {
                let fakeResults: Array<Bootcamp> = new Array;
                fakeResults.push(new Bootcamp('Montréal', new Date('2020-11-19T09:00:00.00-05:00')));
                fakeResults.push(new Bootcamp('Toronto', new Date('2020-11-19T09:00:00.00-05:00')));
                fakeResults.push(new Bootcamp('Paris', new Date('2020-11-19T09:00:00.00+00:00')));
                resolve(fakeResults);
            }, 500);
        });
    }

    public set siteUrl(value: String) {
        if (null == value || undefined == value || value.trim().length < 5) {
            throw TypeError('URL can not be null or empty.');
        }
    }
}