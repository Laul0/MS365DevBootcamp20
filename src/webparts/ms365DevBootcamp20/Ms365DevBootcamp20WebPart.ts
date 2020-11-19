import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'Ms365DevBootcamp20WebPartStrings';
import Ms365DevBootcamp20 from './components/Ms365DevBootcamp20';
import { IMs365DevBootcamp20Props } from './components/IMs365DevBootcamp20Props';

export interface IMs365DevBootcamp20WebPartProps {
  description: string;
}

export default class Ms365DevBootcamp20WebPart extends BaseClientSideWebPart<IMs365DevBootcamp20WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMs365DevBootcamp20Props> = React.createElement(
      Ms365DevBootcamp20,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
