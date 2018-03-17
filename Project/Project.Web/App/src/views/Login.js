import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';

class Login extends React.Component{
    render() {
        return (
          <div className="App">
            <Header/>
            <div className="col-md-3"/>
            <form className="form-signin container col-md-6">
              <h2 className="form-signin-heading">Please log in</h2>
              <hr/>
              <label className="sr-only">Email address</label>
              <input type="email" id="inputLEmail" className="form-control" placeholder="Email address" required autoFocus/>
              <br/>
              <label className="sr-only">Password</label>
              <input type="password" id="inputLPassword" className="form-control" placeholder="Password" required/>
              <br/>
              <label className="sr-only">Confirm Password</label>
              <input type="password" id="confirmLPassword" className="form-control" placeholder="Confirm password" required/>
              <br/>
              <button className="btn btn-primary btn-block" type="submit">Log in</button>
              <hr/>
              <Link to ="/terms"><em>Terms and Conditions </em></Link>
               | 
              <Link to="/register"> Register</Link>
            </form>
            <Footer/>
          </div>
        );
      }
}
export default Login;