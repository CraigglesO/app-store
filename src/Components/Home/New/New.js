/* @flow */
import React, { Component } from 'react';

/** Components **/
import MedApp from '../../MedApp/MedApp';

/** Stylesheets **/
import './New.css';

type Props = {|

|}

// type State = {|
//
// |}

class New extends Component {
  props: Props;
  // state: State = {
  // };

  render() {
    return (
      <div className="New">

        <div className="new-text">
          New
        </div>

        <div className="dapp-content">
          <MedApp hash="0x264D14eAbB717Ea34F1540757e364727fdC75eA4" />
          <MedApp hash="0x264D14eAbB717Ea34F1540757e364727fdC75eA4" />
          <MedApp hash="0x264D14eAbB717Ea34F1540757e364727fdC75eA4" />
          <MedApp hash="0x264D14eAbB717Ea34F1540757e364727fdC75eA4" />
          <MedApp hash="0x264D14eAbB717Ea34F1540757e364727fdC75eA4" />
        </div>

      </div>
    );
  }
}

export default New;
