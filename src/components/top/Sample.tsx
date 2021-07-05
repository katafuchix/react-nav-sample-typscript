import React from 'react';
import * as common from '../common/BasePage';
import { Redirect, withRouter } from 'react-router-dom';
import AppDataStore from '../../stores/AppDataStore'

interface IProps extends common.IProps<common.IParams> {
  page?: String;
}

//class TopPage extends common.BasePage<common.IProps<common.IParams>, common.IState> {
class Sample extends common.BasePage<IProps, common.IState> {

    //constructor(props: common.IProps<common.IParams>) {
    constructor(props: IProps) {
      super(props);
      console.log('sample----');
      console.log(props);
      this.state = {
      }
    }

  render() {
    return (
      <React.Fragment>
        top
      </React.Fragment>
    )
  }
}

export default withRouter(AppDataStore.withStores(Sample));
