/* @flow */
import React, { Component } from 'react';

/** Components **/
import Catagories from './Catagories/Catagories';
import Featured   from './Featured/Featured';
import Headlines  from './Headlines/Headlines';
import New        from './New/New';

/** Stylesheets **/
import './Home.css';

type Props = {|
  history: Object
|}

// type State = {|
//
// |}

class Home extends Component {
  props: Props;
  // state: State = {
  // };

  render() {
    return (
      <div className="Home">

        <div className="home-headlines col-md-12">
          <div className="col-md-12">
            <Headlines />
          </div>
        </div>

        <div className="home-main col-md-12">
          <div className="home-catagories col-md-3">
            <Catagories />
          </div>

          <div className="home-featured-new col-md-9">
            <Featured />
            <New />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
