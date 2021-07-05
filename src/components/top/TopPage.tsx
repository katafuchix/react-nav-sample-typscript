import React from 'react';
import * as common from '../common/BasePage';
import { Redirect, withRouter } from 'react-router-dom';
import AppDataStore from '../../stores/AppDataStore'
import Sample from './Sample'

interface IProps extends common.IProps<common.IParams> {
  page?: String;
}

//class TopPage extends common.BasePage<common.IProps<common.IParams>, common.IState> {
class TopPage extends common.BasePage<IProps, common.IState> {

    //constructor(props: common.IProps<common.IParams>) {
    constructor(props: IProps) {
      super(props);
      console.log(props);
      this.state = {
      }
    }
  page = "aaa"

  render() {
    return (
      <React.Fragment>
        top
        <Sample page={this.page}/>
      </React.Fragment>
    )
  }
}

export default withRouter(AppDataStore.withStores(TopPage));
