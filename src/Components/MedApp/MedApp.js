/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/** Stylesheets **/
import './MedApp.css';

type Props = {|
  hash: string
|}

// type State = {|
//
// |}

class MedApp extends Component {
  props: Props;
  // state: State = {
  // };

  render() {
    const { hash } = this.props;

    return (
      <Link to={`/dapps/${hash}`} push>
        <div className="MedApp">
          MedApp
        </div>
      </Link>
    );
  }
}

export default MedApp;
