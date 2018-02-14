import * as React from 'react';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import AppsMenuContainer from "./components/AppsMenuContainer";
import {IAppsMenuContainerProps} from "./components/IAppsMenuContainerProps";
import * as ReactDom from "react-dom";
import {IAppsMenuWebPartsProps} from "./IAppsMenuWebPartsProps";

class AppsMenuWebPart extends BaseClientSideWebPart<IAppsMenuWebPartsProps> {

  public render(): void {
    const element: React.ReactElement<IAppsMenuContainerProps> = React.createElement(
    AppsMenuContainer,{
        apps:[]
      }
  );
    ReactDom.render(element, this.domElement);
  }
}

export default AppsMenuWebPart;
