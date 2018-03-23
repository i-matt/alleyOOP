import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';
import axios from 'axios';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = (e)=>{
    let value = e.target.value;
    let name = e.target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  handleRegister = () =>{
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    
    axios.post("/api/account/", data)
      .then(resp=>{
        console.log(resp);
        this.props.history.push("/login");
      })
    }

  render() {
      return (
        <div className="App">
          <Header/>
          <div className="col-md-3"/>
          <form className="form-signin container col-md-6">
            <h2 className="form-signin-heading">Register an Account</h2>
            <hr/>
            <label className="sr-only">Email address</label>
            <input type="email" id="inputREmail" className="form-control" onChange = {this.handleChange} value={this.state.email} placeholder="Email address" name="email" required autoFocus/>
            <br/>
            <label className="sr-only">Password</label>
            <input type="password" id="inputRPassword" className="form-control" onChange = {this.handleChange} value={this.state.password} placeholder="Password" name="password" required/>
            <br/>
            <label className="sr-only">Password</label>
            <input type="password" id="confirmRPassword" className="form-control" onChange = {this.handleChange} value={this.state.confirmPassword} placeholder="Confirm password" name="confirmPassword" match={this.state.password} required/>
            <br/>
            <button className="btn btn-primary btn-block" onClick={this.handleRegister} type="button">Register</button>
            <hr/>
            <Link to ="/terms"><em>Terms and Conditions </em></Link>
              | 
            <Link to="/login"> Login</Link>
          </form>
          <Footer/>
        </div>
      );
    }
}
export default Register;