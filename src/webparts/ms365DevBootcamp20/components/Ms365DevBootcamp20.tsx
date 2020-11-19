import * as React from 'react';
import styles from './Ms365DevBootcamp20.module.scss';
import { IMs365DevBootcamp20Props } from './IMs365DevBootcamp20Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Ms365DevBootcamp20 extends React.Component<IMs365DevBootcamp20Props, {}> {
  public render(): React.ReactElement<IMs365DevBootcamp20Props> {
    return (
      <div className={ styles.ms365DevBootcamp20 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
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
