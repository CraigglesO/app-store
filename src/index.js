import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/** Additional Frameworks **/
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/font-awesome-4.7.0/css/font-awesome.min.css';

/** Components **/
import App from './App/App';
import {
  Dapps,
  Home
} from './Components';

/** Stylesheets **/
import './index.css';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/dapps/:appPath" component={Dapps} />
    </App>
  </Router>,
  document.getElementById('root')
);
