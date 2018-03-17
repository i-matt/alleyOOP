import React from 'react';
// import {Link} from 'react-router-dom';
// import Footer from '../Components/footer';
// import Header from '../Components/header';

class Register extends React.Component{
    render() {
        return (
          <div className="App">
            {/* <Header/> */}
            <div className="col-md-3"/>
            <form className="form-signin container col-md-6">
              <h2 className="form-signin-heading">Register an Account</h2>
              <hr/>
              <label className="sr-only">Email address</label>
              <input type="email" id="inputREmail" className="form-control" placeholder="Email address" required autoFocus/>
              <br/>
              <label className="sr-only">Password</label>
              <input type="password" id="inputRPassword" className="form-control" placeholder="Password" required/>
              <br/>
              <label className="sr-only">Password</label>
              <input type="password" id="confirmRPassword" className="form-control" placeholder="Confirm password" required/>
              <br/>
              <button className="btn btn-primary btn-block" type="submit">Register</button>
              <hr/>
              {/* <Link to ="/termsAndConditions"><em>Terms and Conditions </em></Link>
               | 
              <Link to="/login"> Login</Link> */}
            </form>
            {/* <Footer/> */}
          </div>
        );
      }
}
export default Register;