import React from 'react';
import GlobalStyle from "./global-style";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./page/Home";
import Board from "./page/Board";


function App() {

    return (
        <Router>
            <Switch>
                <Route path="/about">
                </Route>
                <Route path="/board/:id">
                    <Board/>
                </Route>
                <Route path="/">
                    <GlobalStyle/>
                    <Home/>
                </Route>
            </Switch>


        </Router>

    );
}

export default App;
