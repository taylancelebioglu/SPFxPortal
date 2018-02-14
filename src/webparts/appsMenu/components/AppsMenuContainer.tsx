import * as React from 'react';
import { IAppsMenuContainerProps } from './IAppsMenuContainerProps';
import {IAppsMenuProps} from "./IAppsMenuProps";
import MockHttpClient from "../MockHttpClient";
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import AppsMenu from "./AppsMenu"
import * as ReactDom from "react-dom";

class AppsMenuContainer extends React.Component<IAppsMenuContainerProps, {}> {

  state = { apps:[] };

  public render(): React.ReactElement<IAppsMenuContainerProps> {

    return (
      <div>
        <br></br>
        <div>App</div>

        <div>
          {this.state.apps.map(function(item,key){
            return (
              <AppsMenu key={key} Title={item.Title} ItemOrder={item.ItemOrder} ItemStatus={item.ItemStatus}/>
            );
          })}
        </div>
      </div>
    );
  }

  public componentDidMount(){
    if (Environment.type === EnvironmentType.Local) {
      this._getMockListData().then((response) => {
        this.setState(response);
      });
    }
    else if (Environment.type == EnvironmentType.SharePoint || Environment.type == EnvironmentType.ClassicSharePoint) {
      this._getListData()
        .then((response) => {
          this.setState(response);
        });
    }
  }

  private _getListData(): Promise<IAppsMenuContainerProps> {
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/GetList('/Lists/AppsMenu')/items?$select=Title,ItemOrder,ItemStatus", SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  private _getMockListData(): Promise<IAppsMenuContainerProps> {
    return MockHttpClient.get()
      .then((data: IAppsMenuProps[]) => {
        var listData: IAppsMenuContainerProps = { apps: data };
        return listData;
      }) as Promise<IAppsMenuContainerProps>;
  }

}
export default AppsMenuContainer;
