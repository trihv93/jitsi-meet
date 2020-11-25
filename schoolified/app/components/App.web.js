import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../reducers/stores.web';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const { store } = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
