/// <reference types="jest" />

import SPListItemsService from './SPListItemsService';
//import sinon from 'sinon';

describe('SPListItemsService', () => {

    let mySPListItemsService: SPListItemsService;
    //let server: any;

    beforeEach(() => {
        //server = sinon.fakeServer.create();
    });

    afterEach(() => {
        //server.restore();
    });

    it('should create a SPListItemsService instance with the SharePoint URL', () => {
        mySPListItemsService = new SPListItemsService('https://contoso.sharepoint.com/sites/project');
        expect(mySPListItemsService).toEqual({
            _siteUrl: 'https://contoso.sharepoint.com/sites/project'
        });
    });

});