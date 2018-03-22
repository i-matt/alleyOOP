import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from '../src/views/App';
import Register from '../src/views/Register';
import Login from '../src/views/Login';
import TConditions from '../src/views/TConditions';
import NavBar from '../src/common/navbar';
// import Donations from '../src/Views/Donations';

const Routes = () => (
    <Router>
        <div id="topDiv">
            <Switch>           
                <Route exact path="/" component={Register} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register} />
                <Route path="/terms" component={TConditions} />
                <NavBar>
                    <Route path="/app" component={App} />
                    {/* <Route path="/donations" component={Donations}/> */}
                </NavBar>
            </Switch>
        </div>
    </Router>
  );

  export default Routes;