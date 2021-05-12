import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import {Menu} from "semantic-ui-react";
import {Home} from "../pages/Home";
import {MyTeam} from "../pages/MyTeam";
import {Developers} from "../pages/Developers";

export const Navigation = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Menu>
                        <Link to="/">
                            <Menu.Item
                                name='home'
                            >
                                Home
                            </Menu.Item>
                        </Link>

                        <Link to="/developers">
                            <Menu.Item
                                name='developers'
                            >
                                Developers
                            </Menu.Item>
                        </Link>

                        <Link to="/myteam">
                            <Menu.Item
                                name='myteam'
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
