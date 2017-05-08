/* @flow */
import React, { Component } from 'react';

/** Components **/
import FullApp from '../FullApp/FullApp';
import DappHeader from './DappHeader/DappHeader';

/** Stylesheets **/
import './Dapps.css';

type Props = {|
  history: Object,
  location: Object,
  match: Object
|}

// type State = {|
//
// |}

class Dapps extends Component {
  props: Props;
  // state: State = {
  // };

  render() {
    const { history, match } = this.props;
    const { appPath } = match.params;

    return (
      <div className="Dapps">

        <DappHeader history={history} />
        <FullApp appId={appPath} />

      </div>
    );
  }
}

export default Dapps;
