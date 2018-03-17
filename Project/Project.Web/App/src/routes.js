import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from '../src/views/App';
import Register from '../src/views/Register';
// import Login from '../src/views/Login';
// import TermsAndConditions from '../src/Views/TermsAndConditions';
// import NavBar from './NavBar';
// import Donations from '../src/Views/Donations';

const Routes = () => (
    <Router>
        <div id="topDiv">
            {/* <Switch> */}
                {/* <Route path="/login" component={Login}/> */}
                <Route path="/register" component={Register} />
                {/* <Route path="/termsandconditions" component={TermsAndConditions} /> */}
                {/* <NavBar> */}
                    <Route exact path="/" component={App} />
                    <Route path="/app" component={App} />
                    {/* <Route path="/donations" component={Donations}/> */}
                {/* </NavBar> */}
            {/* </Switch> */}
        </div>
    </Router>
  );

  export default Routes;