import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../reducers/stores.web';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from '../../features/authentication';
import 'antd/dist/antd.css';

export const { store } = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav style={{ display: 'flex', height: '100vh' }}>
              <Login />
            </nav>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
