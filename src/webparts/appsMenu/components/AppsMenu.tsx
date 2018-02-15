import * as React from 'react';
import styles from './AppsMenu.module.scss';
import { IAppsMenuProps } from './IAppsMenuProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AppsMenu extends React.Component<IAppsMenuProps, {}> {
  public render(): React.ReactElement<IAppsMenuProps> {
    return (
      <div className={ styles.appsMenu }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            {escape(this.props.Title)} - {this.props.ItemOrder} - {this.props.ItemStatus.toString()}
          </div>
        </div>
      </div>
    );
  }
}
