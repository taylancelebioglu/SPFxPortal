import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AppsMenuWebPartStrings';
import AppsMenu from './components/AppsMenu';
import { IAppsMenuProps } from './components/IAppsMenuProps';

export interface IAppsMenuWebPartProps {
  description: string;
}

export default class AppsMenuWebPart extends BaseClientSideWebPart<IAppsMenuWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAppsMenuProps > = React.createElement(
      AppsMenu,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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
