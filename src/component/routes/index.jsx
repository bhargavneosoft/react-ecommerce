import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import Dashboard from "../dashboard";
import Cart from "../cart";
import {PrivateRoute} from "../privateroute";
import Login from '../login';
import Register from '../register';


const history = createBrowserHistory();

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute
            path="/test"
            user={this.props.user}
            component={Dashboard}
          />
          <Route path="/" exact component={Dashboard}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </Router>
    );
  }
}


export default Routes;
