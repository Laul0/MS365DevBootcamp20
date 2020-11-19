/// <reference types="jest" />

import * as React from 'react';
import { expect } from 'chai';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Ms365DevBootcamp20 from './Ms365DevBootcamp20';
import Bootcamp from '../models/Bootcamp';
import { IMs365DevBootcamp20Props } from './IMs365DevBootcamp20Props';

import MockSPListItemsService from '../mocks/MockSPItemsService';
import ISPListItemsService from '../models/ISPListItemsService';

describe('Ms365DevBootcamp20 Render', () => {
    let reactComponent: ReactWrapper<IMs365DevBootcamp20Props, {}>;

    afterEach(() => {
        reactComponent.unmount();
    });

    it('should root web part element exists', () => {
        reactComponent = mount(React.createElement(
            Ms365DevBootcamp20,
            {
                description: 'SharePoint Group Title',
                events: new Array
            }
        ));
        let cssSelector: string = '.ms365DevBootcamp20';

        const element = reactComponent.find(cssSelector);
        expect(element.length).to.be.greaterThan(0);
    });

    it('should display three Bootcamps events', (done) => {
        let itemsSvc: ISPListItemsService = new MockSPListItemsService();
        let cssSelector: string = '.listEvents>p';
        itemsSvc.getBootcampEvents('Bootcamps').then((be: Array<Bootcamp>) => {
            reactComponent = mount(React.createElement(
                Ms365DevBootcamp20,
                {
                    description: 'SharePoint Group Title',
                    events: be
                }
            ));
            const element = reactComponent.find(cssSelector);
            expect(element.length).to.be.equals(3);
            done();
        }).catch(ex => {
            done(ex);
        });
    });

});