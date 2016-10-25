import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {Root} from "./components/root";
import {Home} from "./components/home";

class App extends React.Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <Route path={"home"} component={Home} />
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(<App />, window.document.getElementById("app"));