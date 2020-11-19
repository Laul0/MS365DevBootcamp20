/// <reference types="jest" />

import Bootcamp from './Bootcamp';

describe('Bootcamp', () => {

    let myBootcamp: Bootcamp;

    it('should create a SPListItemsService instance with the SharePoint URL', () => {
        const date = new Date();
        myBootcamp = new Bootcamp(1, 'Montréal', date);
        expect(myBootcamp).toEqual({
            _id: 1,
            _date: date,
            _city: 'Montréal'
        });
    });

});