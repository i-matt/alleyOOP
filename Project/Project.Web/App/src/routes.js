import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from '../src/views/App';
import Register from '../src/views/Register';
import Login from '../src/views/Login';
import TConditions from '../src/views/TConditions';
import NavBar from '../src/common/navbar';
import Accounts from '../src/views/Accounts';
import Donations from '../src/views/Donations';
import ThankYou from '../src/views/ThankYou';
import Game from '../src/views/Messages';

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
                    <Route path="/accounts" component={Accounts}/>
                    <Route path="/donations" component={Donations}/>
                    <Route path="/thankyou" component={ThankYou}/>
                    <Route path="/messages" component={Game}/>
                </NavBar>
            </Switch>
        </div>
    </Router>
  );

  export default Routes;