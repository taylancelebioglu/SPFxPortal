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
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
