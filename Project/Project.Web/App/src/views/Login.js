import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email: "",
      password: ""
    }
  }

  handleChange = (e)=>{
    let value = e.target.value;
    let name = e.target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  handleLogin = () =>{
    // let data = {
    //   email: this.state.email,
    //   password: this.state.password
    // };
    this.props.history.push("/app");
  }

    render() {
        return (
          <div className="App">
            <Header/>
            <div className="col-md-3"/>
            <form className="form-signin container col-md-6">
              <h2 className="form-signin-heading">Please log in</h2>
              <hr/>
              <label className="sr-only">Email address</label>
              <input type="email" id="inputLEmail" className="form-control" onChange = {this.handleChange} value={this.state.email} placeholder="Email address" name="email" required autoFocus/>
              <br/>
              <label className="sr-only">Password</label>
              <input type="password" id="inputLPassword" className="form-control" onChange = {this.handleChange} value={this.state.password} placeholder="Password" name="password" required/>
              <br/>
              <button className="btn btn-primary btn-block" onClick={this.handleLogin} type="button">Login</button>
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