import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
//import App from './App';
import LoginView from './views/LoginView/LoginView'
import HomePage from './views/HomePage/HomePage'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/store'

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={LoginView} />
        <Route path="/LoginView" component={LoginView} />
        <Route path="/HomePage" component={HomePage} />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
