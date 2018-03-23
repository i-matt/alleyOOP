import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../common/footer';

class NavBar extends React.Component{

    handleNightMode = () => {
        let clicked = document.getElementById("nightMode").checked;
        if(clicked === true){
            let element = document.getElementById("topDiv");
            element.classList.add("nightMode");
        }
        else{
            let element = document.getElementById("topDiv");
            element.classList.remove("nightMode");
        }
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/app" className="navbar-brand"><font color="#61DAFB">OOP</font></Link>
                        </div>
                        <ul className="nav navbar-nav">
                            {/* <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li> */}
                            <li><Link to="/accounts">Accounts</Link></li>
                        </ul>
                        <form className="navbar-form navbar-left" action="Https://www.google.com">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="search"/>
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul className="nav navbar-nav pull-right">
                            <li><img src="https://cdn-images-1.medium.com/max/1920/1*-4nkXQYN05ljzfJez_azbg.jpeg" className="profileIcon img-circle" alt="profilePic"/></li>
                            <li><Link to="/app"><font color="#61DAFB"> Deadpool <i/></font></Link></li>
                            <li><Link to="/app"><font color="#61DAFB"> Home <i/></font></Link></li>
                            <li><Link to="/donations">Donate</Link></li>
                            <li><Link to="/messages"><i className="fas fa-inbox"/><span className="badge">5</span></Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" ><i className="fas fa-cog"></i>
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                <li>Night Mode
                                    <label htmlFor="nightMode"className="switch">
                                        <input type="checkbox" id="nightMode" onClick={this.handleNightMode}/>
                                        <span className="slider round"></span>
                                    </label>
                                </li>
                                </ul>
                            </li>
                            <li><Link to="/login"><i className="fas fa-sign-out-alt"></i> Logout </Link></li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {this.props.children}
                </div> 
                <Footer/>
            </div>
        );
    }
}
export default NavBar;