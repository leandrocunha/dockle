import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Chat from './components/Chat';
import Home from './components/Home';
import Layout from './components/Layout';
import Settings from './components/Settings';
import SettingsReducers from './reducers/settings';

const store = createStore(
  combineReducers({ SettingsReducers }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/settings" component={Settings} />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);
