import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';

class TConditions extends React.Component{
    render() {
        return (
          <div className="App">
            <Header/>
            <div className="col-md-3"/>
            <form className="form-signin container col-md-6">
                <h2 className="form-signin-heading">Terms and Conditions</h2>
                <hr/>
                <p> These are the terms and conditions. Play nice.
                </p>
                <hr/>
                <p>I. Condition 1
                </p>
                <hr/>
                <p>II. Condition 2
                </p>
                <hr/>
                <p>III. Condition 3
                </p>
                <hr/>
                <p>IV. Condition 4
                </p>
                <hr/>
                <p>V. Condition 5
                </p>
                <hr/>
              <Link to ="/register">Register </Link>
               | 
              <Link to="/login"> Login</Link>
            </form>
            <Footer/>
          </div>
        );
      }
}
export default TConditions;