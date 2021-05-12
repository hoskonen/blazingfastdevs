import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import {Menu} from "semantic-ui-react";
import {Home} from "./pages/Home";
import {MyTeam} from "./pages/MyTeam";
import {Developers} from "./pages/Developers";

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Menu>
              <Link to="/">
                <Menu.Item
                    name='home'
                    // active={activeItem === 'home'}
                    // onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>
              </Link>

              <Link to="/developers">
                <Menu.Item
                    name='developers'
                    // active={activeItem === 'developers'}
                    // onClick={this.handleItemClick}
                >
                  Developers
                </Menu.Item>
              </Link>

              <Link to="/myteam">
                <Menu.Item
                    name='myteam'
                    // active={activeItem === 'myteam'}
                    // onClick={this.handleItemClick}
                >
                  My Team
                </Menu.Item>
              </Link>
            </Menu>
            
            <Switch>
              <Route path="/developers">
                <Developers />
              </Route>
              <Route path="/myteam">
                <MyTeam />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
