import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Environment, EnvironmentType, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'Ms365DevBootcamp20WebPartStrings';
import Ms365DevBootcamp20 from './components/Ms365DevBootcamp20';
import { IMs365DevBootcamp20Props } from './components/IMs365DevBootcamp20Props';
import Bootcamp from './models/Bootcamp';
import SPListItemsService from './services/SPListItemsService';
import MockSPListItemsService from './mocks/MockSPItemsService';
import ISPListItemsService from './models/ISPListItemsService';

export interface IMs365DevBootcamp20WebPartProps {
  description: string;
}

export default class Ms365DevBootcamp20WebPart extends BaseClientSideWebPart<IMs365DevBootcamp20WebPartProps> {

  private _itemsSvc: ISPListItemsService;

  protected onInit(): Promise<void> {
    this._itemsSvc = Environment.type == EnvironmentType.Local ? new MockSPListItemsService() : new SPListItemsService(this.context.pageContext.site.absoluteUrl);

    return super.onInit();
  }

  public render(): void {
    this._itemsSvc.getBootcampEvents('Bootcamps').then((b: Array<Bootcamp>) => {
      const element: React.ReactElement<IMs365DevBootcamp20Props> = React.createElement(
        Ms365DevBootcamp20,
        {
          description: this.properties.description,
          events: b
        }
      );
  
      ReactDom.render(element, this.domElement);
    });
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('listEvents', {
                  label: strings.ListEventsFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
